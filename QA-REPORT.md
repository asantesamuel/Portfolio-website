# Portfolio refinement — QA report

Date: 15 November 2026

## Current scope

Reviewed all nine pages after the SVG-arrow replacement, mobile typography/layout fixes, floating navigation dock, interactive 360° sculpture, grayscale About portrait, and owner-confirmed NovaYield status update.

The original specification files and résumé remain unchanged. NovaYield now says its backend and frontend are implemented in the homepage preview, project listing, detail page, and metadata. No deployment, performance, yield-prediction, or agronomic-validation claims were inferred.

## Browser verification performed

Tests used installed Google Chrome, the bundled Playwright runtime, and temporary loopback HTTP servers. No packages or build requirements were added to the website. Completed runs closed their browsers and servers.

| Check | Result |
| --- | --- |
| Responsive/theme matrix | 162 combinations: nine pages, both themes, widths 320, 360, 390, 430, 520, 700, 768, 961, and 1440 CSS pixels. No horizontal overflow, missing images, or collisions between separate content blocks. |
| Visual review | Mobile and desktop screenshots of every page reviewed. Portrait framing, SVG arrows, long project titles, contact links, education labels, and dark-mode surfaces were checked. |
| Larger text | 18 additional checks: nine pages at 320 and 390px with computed text sizes increased by 25%. No horizontal overflow. Home, About, and Contact screenshots inspected. The email's redundant arrow was removed to avoid an isolated arrow at large text sizes. |
| Short screens/touch menu | Menu, theme control, Escape, and touch navigation passed at 320×568, 390×844, 667×375, and 768×1024. No menu-control overlap. |
| Idle navigation | Dock receded after inactivity and returned on mouse approach. The visible Menu control reopened it with actual emulated touch. Keyboard use restored the dock. Programmatic focus inside the dock prevented hiding. An expanded mobile menu remained visible. |
| Theme state | Theme switching, reload persistence, and Escape checked on every page using the mobile menu. |
| Mouse rotation | Drag changed the sculpture's view; release preserved the angle in reduced-motion mode. Keyboard rotation and Reset view worked. |
| 360° bounds | Twenty-four yaw steps, interspersed with pitch rotation, tested at full separation. No sculpture pixels clipped against the canvas boundary. |
| Touch rotation | Browser-dispatched touch start/move/end events rotated the sculpture without scrolling the page. Touch gestures outside the canvas still scrolled the document. |
| Motion control | Automatic canvas movement, pause, and resume passed. Manual rotation remained available under reduced motion. |
| Portrait interaction | Pointer tilt updated the frame; reduced motion suppressed its transform. The portrait loaded at its declared 1254×1254 size. |
| No JavaScript | Mobile navigation remained visible and successfully linked from About to Contact with JavaScript disabled. |
| Runtime | No application errors, console warnings, failed requests, or HTTP errors in the final 162-layout/interaction run. |

The collision check compares text ranges belonging to separate content blocks. Adjacent lines inside the same tightly set heading were reviewed visually, rather than treating overlapping font metric boxes as overlapping visible letters.

## Static review

- Nine pages; 174 local href/src references, including 13 fragments, and 21 external/protocol references checked. No missing files or fragment targets.
- Eleven images have alt attributes and explicit dimensions.
- All five JavaScript files pass node --check.
- No duplicate IDs, missing page metadata, or invalid ARIA references found.
- No Unicode directional-arrow glyphs remain in the HTML. Arrows use currentColor SVG strokes, explicit aspect ratios, and decorative aria-hidden semantics.
- Keyboard focus is protected even when it originates from assistive technology or programmatic focus rather than a Tab event.
- The website remains native HTML/CSS/JavaScript. Runtime JavaScript totals approximately 22.3 KB; the portrait is approximately 253 KB. No remote fonts, 3D libraries, model downloads, or video are required.

## Issues addressed

- Replaced emoji-prone text arrows with SVGs throughout the site.
- Relaxed tight mobile heading spacing and stacked cramped contact/education labels and section actions.
- Gave grid/flex text proper shrinking and wrapping behavior while preventing SVG arrows from collapsing.
- Kept a visible Menu recovery control when the floating navigation recedes.
- Corrected touch focus ordering so tapping the recovery control does not hide it before its click is handled.
- Prevented idle hiding while any header control is focused.
- Added pointer capture, cancellation handling, keyboard orbit, reset, and reduced-motion support to the sculpture.
- Added the grayscale portrait without modifying the supplied source photo.

## Limits

- Physical devices, Safari/iOS, Firefox, and a screen reader were not available for testing. Phone/tablet checks used Chromium viewport and touch emulation.
- The 25% text-size stress test is a controlled approximation, not every operating system's font-accessibility setting.
- External GitHub/LinkedIn destinations, mail delivery, and phone calls were not exercised. Existing destination values were preserved.
- The site is local and has not been deployed. No production canonical domain or absolute social-image URL was invented.
- Project illustrations remain conceptual images rather than product screenshots.

Setup and maintenance are documented in README.md. Navigation sources and the portrait-edit prompt are in DESIGN-NOTES.md. Screenshots, local browser harnesses, and machine-readable results remain in the ignored .qa/ directory and should not be deployed.
