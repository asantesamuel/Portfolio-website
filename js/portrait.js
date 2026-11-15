/* A restrained pointer response on the About portrait; no continuous animation. */
(() => {
  const portrait = document.querySelector('[data-portrait]');
  if (!portrait) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let x = 0, y = 0;
  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    portrait.style.removeProperty('--portrait-x');
    portrait.style.removeProperty('--portrait-y');
  };
  portrait.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches || event.pointerType !== 'mouse') return;
    const bounds = portrait.getBoundingClientRect();
    x = ((event.clientX - bounds.left) / bounds.width - .5) * 3;
    y = ((event.clientY - bounds.top) / bounds.height - .5) * -3;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      portrait.style.setProperty('--portrait-x', `${x}deg`);
      portrait.style.setProperty('--portrait-y', `${y}deg`);
      frame = 0;
    });
  }, { passive: true });
  portrait.addEventListener('pointerleave', reset);
  if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', reset);
})();
