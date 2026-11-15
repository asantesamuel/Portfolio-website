/* Assembly / 01 — a small, original software-built sculpture. No model or video download. */
(() => {
  "use strict";

  const root = document.querySelector("[data-builder-scene]");
  const canvas = document.querySelector("#builder-canvas");
  if (!root || !canvas) return;

  const range = document.querySelector("#assembly-range");
  const motionButton = document.querySelector("#motion-toggle");
  const resetButton = document.querySelector("#view-reset");
  const value = document.querySelector("#assembly-value");
  let context;
  try {
    context = canvas.getContext("2d", { alpha: true });
  } catch {
    context = null;
  }
  if (!context) {
    root.dataset.sceneState = "unavailable";
    canvas.hidden = true;
    const fallback = document.createElement("p");
    fallback.className = "scene-fallback";
    fallback.textContent = "A system, assembled one component at a time.";
    canvas.after(fallback);
    if (range) range.disabled = true;
    if (motionButton) motionButton.hidden = true;
    if (resetButton) resetButton.hidden = true;
    return;
  }

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const clamp = (number, min = 0, max = 1) => Math.min(max, Math.max(min, number));
  const normalize = (vector) => {
    const length = Math.hypot(...vector);
    return vector.map((component) => component / length);
  };
  const dot = (a, b) => a.reduce((sum, component, index) => sum + component * b[index], 0);
  const light = normalize([-0.6, 0.85, 1.25]);
  const halfLight = normalize([light[0], light[1], light[2] + 1]);

  let width = 1;
  let height = 1;
  let frameId = 0;
  let manualFrameId = 0;
  let lastFrame = 0;
  let elapsed = 0;
  let visible = true;
  let paused = false;
  let reduced = motionPreference.matches;
  let dark = document.documentElement.dataset.theme === "dark";
  let scrollSpread = 0;
  let manualSpread = clamp(Number(range?.value || 0) / 100);
  let spread = manualSpread;
  const defaultView = { yaw: 0.56, pitch: 0.42, roll: -0.025 };
  let angles = { ...defaultView };
  let orbit = { ...defaultView };
  let ambientAnchor = { yaw: 0, pitch: 0, roll: 0 };
  let drag = null;
  const wrapAngle = (angle) => Math.atan2(Math.sin(angle), Math.cos(angle));
  const ambientAt = (time) => ({
    yaw: Math.sin(time * 0.19) * 0.22,
    pitch: Math.sin(time * 0.13) * 0.055,
    roll: Math.sin(time * 0.14) * 0.018,
  });

  // Ambient motion stays relative to the chosen orientation, so releasing a drag,
  // resuming playback, or changing motion preferences never resets the user's view.
  function anchorView() {
    orbit = { ...angles };
    ambientAnchor = ambientAt(elapsed);
  }

  /* Twenty edge/corner modules make a porous cubic assembly; the orange core is visible
     through its six open faces. The mesh is beveled geometry, rather than drawn outlines. */
  const modules = [];
  for (let x = -1; x <= 1; x += 1) {
    for (let y = -1; y <= 1; y += 1) {
      for (let z = -1; z <= 1; z += 1) {
        if (Math.abs(x) + Math.abs(y) + Math.abs(z) < 2) continue;
        modules.push({ center: [x, y, z], material: x === 1 && z === -1 ? "graphite" : "silver" });
      }
    }
  }
  modules.push({ center: [0, 0, 0], material: "core" });

  function beveledBox(half = 0.455, bevel = 0.055) {
    const inner = half - bevel;
    const faces = [];
    // Six broad planes.
    for (let axis = 0; axis < 3; axis += 1) {
      const a = (axis + 1) % 3;
      const b = (axis + 2) % 3;
      for (const sign of [-1, 1]) {
        const normal = [0, 0, 0];
        normal[axis] = sign;
        const vertices = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([sa, sb]) => {
          const point = [0, 0, 0];
          point[axis] = sign * half;
          point[a] = sa * inner;
          point[b] = sb * inner;
          return point;
        });
        faces.push({ vertices, normal, broad: true });
      }
    }
    // Twelve chamfer planes connect the broad faces.
    for (let a = 0; a < 3; a += 1) {
      for (let b = a + 1; b < 3; b += 1) {
        const c = 3 - a - b;
        for (const sa of [-1, 1]) {
          for (const sb of [-1, 1]) {
            const make = (outerA, direction) => {
              const point = [0, 0, 0];
              point[a] = sa * (outerA ? half : inner);
              point[b] = sb * (outerA ? inner : half);
              point[c] = direction * inner;
              return point;
            };
            const normal = [0, 0, 0];
            normal[a] = sa;
            normal[b] = sb;
            faces.push({ vertices: [make(true, -1), make(true, 1), make(false, 1), make(false, -1)], normal: normalize(normal), broad: false });
          }
        }
      }
    }
    // Eight corner facets complete the solid.
    for (const x of [-1, 1]) {
      for (const y of [-1, 1]) {
        for (const z of [-1, 1]) {
          faces.push({
            vertices: [[x * half, y * inner, z * inner], [x * inner, y * half, z * inner], [x * inner, y * inner, z * half]],
            normal: normalize([x, y, z]), broad: false,
          });
        }
      }
    }
    return faces;
  }

  const block = beveledBox();
  const core = beveledBox(0.52, 0.07);

  function rotation(point) {
    const [x, y, z] = point;
    const cy = Math.cos(angles.yaw);
    const sy = Math.sin(angles.yaw);
    const cp = Math.cos(angles.pitch);
    const sp = Math.sin(angles.pitch);
    const cr = Math.cos(angles.roll);
    const sr = Math.sin(angles.roll);
    const rx = x * cy + z * sy;
    const rz = -x * sy + z * cy;
    const ry = y * cp - rz * sp;
    const depth = y * sp + rz * cp;
    return [rx * cr - ry * sr, rx * sr + ry * cr, depth];
  }

  function color(material, normal, offset = 0) {
    const palettes = dark
      ? { silver: [192, 201, 211], graphite: [92, 108, 128], core: [239, 113, 63] }
      : { silver: [196, 201, 207], graphite: [78, 89, 102], core: [223, 88, 43] };
    const brightness = 0.42 + Math.max(0, dot(normal, light)) * 0.65;
    const shine = Math.pow(Math.max(0, dot(normal, halfLight)), material === "core" ? 18 : 36) * 38;
    const rgb = palettes[material].map((channel) => Math.round(clamp(channel * brightness + shine + offset, 0, 255)));
    return `rgb(${rgb.join(",")})`;
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    const size = Math.min(width, height);
    // Reserve the sculpture's full bounding sphere: every yaw/pitch remains in frame.
    const scale = size * 0.174 / (1 + spread * 0.54);
    const cx = width / 2;
    const cy = height * 0.455;

    // A soft floor shadow anchors the sculpture without an image asset.
    context.save();
    context.translate(cx, height * 0.84);
    context.scale(1, 0.21);
    const shadow = context.createRadialGradient(0, 0, size * 0.025, 0, 0, size * 0.32);
    shadow.addColorStop(0, dark ? "rgba(0,0,0,.42)" : "rgba(39,46,57,.18)");
    shadow.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = shadow;
    context.fillRect(-size * 0.4, -size * 0.4, size * 0.8, size * 0.8);
    context.restore();

    const polygons = [];
    for (const module of modules) {
      const mesh = module.material === "core" ? core : block;
      const center = module.center.map((component) => component * (1 + spread * 0.7));
      for (const face of mesh) {
        const normal = rotation(face.normal);
        if (normal[2] <= 0.001) continue;
        const world = face.vertices.map((point) => rotation(point.map((component, i) => component + center[i])));
        polygons.push({
          points: world.map((point) => [cx + point[0] * scale, cy - point[1] * scale]),
          depth: world.reduce((sum, point) => sum + point[2], 0) / world.length,
          normal, material: module.material, broad: face.broad,
        });
      }
    }
    // Painter ordering is sufficient for these disjoint convex modules.
    polygons.sort((a, b) => a.depth - b.depth);
    for (const polygon of polygons) {
      const points = polygon.points;
      context.beginPath();
      points.forEach(([x, y], index) => index ? context.lineTo(x, y) : context.moveTo(x, y));
      context.closePath();
      if (polygon.broad) {
        const xs = points.map((point) => point[0]);
        const ys = points.map((point) => point[1]);
        const finish = context.createLinearGradient(Math.min(...xs), Math.min(...ys), Math.max(...xs) + 1, Math.max(...ys) + 1);
        finish.addColorStop(0, color(polygon.material, polygon.normal, 13));
        finish.addColorStop(0.42, color(polygon.material, polygon.normal, 1));
        finish.addColorStop(1, color(polygon.material, polygon.normal, -10));
        context.fillStyle = finish;
      } else {
        context.fillStyle = color(polygon.material, polygon.normal, 8);
      }
      context.fill();
      context.strokeStyle = dark ? "rgba(237,243,255,.10)" : "rgba(47,56,69,.10)";
      context.lineWidth = 0.6;
      context.stroke();
    }
    root.dataset.sceneState = "ready";
  }

  const canAnimate = () => visible && !document.hidden && !paused && !reduced && !drag;
  function stop() {
    if (frameId) cancelAnimationFrame(frameId);
    frameId = 0;
    lastFrame = 0;
  }
  function frame(time) {
    frameId = 0;
    if (!canAnimate()) return;
    // Cap rendering at roughly 30 fps; elapsed time keeps motion independent of refresh rate.
    if (!lastFrame || time - lastFrame >= 1000 / 30) {
      elapsed += lastFrame ? Math.min((time - lastFrame) / 1000, 0.08) : 0;
      lastFrame = time;
      spread += (clamp(manualSpread + scrollSpread) - spread) * 0.095;
      const ambient = ambientAt(elapsed);
      angles = {
        yaw: orbit.yaw + ambient.yaw - ambientAnchor.yaw,
        pitch: orbit.pitch + ambient.pitch - ambientAnchor.pitch,
        roll: orbit.roll + ambient.roll - ambientAnchor.roll,
      };
      draw();
    }
    frameId = requestAnimationFrame(frame);
  }
  function start() {
    if (canAnimate() && !frameId) frameId = requestAnimationFrame(frame);
  }
  function syncMotion() {
    stop();
    anchorView();
    if (motionButton) {
      motionButton.disabled = reduced;
      motionButton.setAttribute("aria-pressed", String(paused || reduced));
      motionButton.setAttribute("aria-label", reduced ? "Motion disabled by your reduced-motion preference" : paused ? "Resume sculpture motion" : "Pause sculpture motion");
      motionButton.textContent = reduced ? "Motion off" : paused ? "Play motion" : "Pause motion";
    }
    if (reduced) {
      spread = manualSpread;
    }
    draw();
    start();
  }

  // Input-driven redraws are coalesced to the display refresh rate, including while
  // paused or in reduced-motion mode. There is no inertia after the user lets go.
  function requestManualDraw() {
    if (!manualFrameId) {
      manualFrameId = requestAnimationFrame(() => {
        manualFrameId = 0;
        draw();
      });
    }
  }

  function finishDrag(event) {
    if (!drag || (event && event.pointerId !== drag.id)) return;
    const pointerId = drag.id;
    drag = null;
    canvas.dataset.dragging = "false";
    anchorView();
    if (canvas.hasPointerCapture(pointerId)) canvas.releasePointerCapture(pointerId);
    requestManualDraw();
    start();
  }

  function resetView() {
    stop();
    if (drag) finishDrag();
    // finishDrag may schedule ambient motion; reset its clock before it executes.
    stop();
    elapsed = 0;
    angles = { ...defaultView };
    anchorView();
    requestManualDraw();
    start();
  }

  function resize() {
    const bounds = canvas.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  range?.addEventListener("input", () => {
    manualSpread = clamp(Number(range.value) / 100);
    if (value) value.textContent = `${Math.round(manualSpread * 100)}%`;
    if (!canAnimate()) {
      spread = manualSpread;
      draw();
    }
  });
  if (value) value.textContent = `${Math.round(manualSpread * 100)}%`;
  motionButton?.addEventListener("click", () => {
    paused = !paused;
    syncMotion();
  });
  // Capture only gestures beginning on the canvas. Range controls and page scrolling
  // outside the canvas retain their native behavior; a second touch is ignored.
  canvas.addEventListener("pointerdown", (event) => {
    if (drag || !event.isPrimary || (event.pointerType === "mouse" && event.button !== 0)) return;
    event.preventDefault();
    stop();
    anchorView();
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
    canvas.dataset.dragging = "true";
    canvas.focus({ preventScroll: true });
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    event.preventDefault();
    const sensitivity = Math.PI * 2 / Math.max(240, Math.min(width, height));
    angles.yaw = wrapAngle(angles.yaw + (event.clientX - drag.x) * sensitivity);
    angles.pitch = wrapAngle(angles.pitch + (event.clientY - drag.y) * sensitivity);
    drag.x = event.clientX;
    drag.y = event.clientY;
    requestManualDraw();
  });
  canvas.addEventListener("pointerup", finishDrag);
  canvas.addEventListener("pointercancel", finishDrag);
  canvas.addEventListener("lostpointercapture", finishDrag);
  canvas.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "Home") {
      event.preventDefault();
      resetView();
      return;
    }
    const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
    if (!direction) return;
    event.preventDefault();
    stop();
    if (drag) finishDrag();
    stop();
    const step = Math.PI / (event.shiftKey ? 36 : 12);
    angles.yaw = wrapAngle(angles.yaw + direction[0] * step);
    angles.pitch = wrapAngle(angles.pitch + direction[1] * step);
    anchorView();
    requestManualDraw();
    start();
  });
  resetButton?.addEventListener("click", resetView);
  window.addEventListener("scroll", () => {
    if (!canAnimate()) return;
    scrollSpread = clamp(-root.getBoundingClientRect().top / Math.max(1, window.innerHeight)) * 0.22;
  }, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (drag) finishDrag();
      stop();
      if (manualFrameId) cancelAnimationFrame(manualFrameId);
      manualFrameId = 0;
    } else {
      draw();
      start();
    }
  });
  const preferenceChanged = (event) => {
    reduced = event.matches;
    syncMotion();
  };
  if (motionPreference.addEventListener) motionPreference.addEventListener("change", preferenceChanged);
  else motionPreference.addListener(preferenceChanged);

  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(canvas);
  else window.addEventListener("resize", resize);
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    }, { threshold: 0 }).observe(root);
  }
  new MutationObserver(() => {
    dark = document.documentElement.dataset.theme === "dark";
    draw();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  resize();
  syncMotion();
})();
