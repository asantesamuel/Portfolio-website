# Interaction and portrait refinement

15 November 2026

## Navigation research and decision

The research does not establish one navigation style as the most common across all websites in 2026. A compact floating dock is a design choice for this particular portfolio, supported by contemporary examples of controls that recede to give content more space.

- [Apple’s software design for iOS 26](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/) describes navigation as a separate control layer and tab bars that shrink during scrolling and expand again. This is an app-design precedent, not evidence of a universal website convention. The portfolio borrows the compact/adaptive behavior while retaining opaque, readable surfaces.
- [Awwwards’ navigation gallery](https://www.awwwards.com/websites/navigation/) provided a current reference for varied navigation treatments. It is a curated inspiration gallery, not a prevalence study.
- [NN/g’s hamburger-menu research update](https://www.nngroup.com/articles/hamburger-menu-icon-recognizability/) explains that familiarity with the icon does not remove discoverability risks. The portfolio therefore keeps explicit page labels on desktop and a visible, text-labelled Menu control in its idle state.

The full-width header was replaced with a floating capsule. It fades when idle, returns when a mouse enters its area, and can be restored by touch, keyboard, or upward scrolling. A small Menu control remains visible. The dock stays open while any of its controls has focus or the mobile menu is expanded. The mobile menu can scroll in short landscape viewports. Navigation is still native HTML page navigation.

## Arrows and mobile composition

Every directional arrow is now a monochrome inline SVG with a fixed aspect ratio, rounded strokes, and the current text color. This avoids platform emoji substitution. Icons are decorative and hidden from assistive technology; their surrounding links retain their names.

The mobile changes relax headline tracking, give multiline text more space, stack section actions and contact/education labels earlier, and allow grid text tracks to shrink safely. SVG arrows retain their width beside long links. The layout was also stress-tested with text enlarged by 25%.

## Sculpture interaction

Mouse, touch, and pen gestures beginning on the canvas rotate yaw and pitch freely through 360°. Pointer capture maintains the gesture outside the initial point. The chosen angle remains after release. Automatic movement pauses during dragging; no inertial spinning is added. Arrow keys rotate in 15° steps, Shift + arrow keys use 5° steps, and Home or Reset view restores the original angle. The range and motion controls keep their independent behavior.

Reduced motion disables automatic movement and portrait tilt, while deliberate manual sculpture rotation remains available. Page scrolling outside the canvas is unaffected.

## Portrait asset

- Source: the owner-supplied `profilePicture.jpg`; the source file was not modified.
- Saved website asset: `assets/images/samuel-asante-grayscale.jpg` (1254 × 1254, approximately 253 KB).
- Method: built-in image editing tool, then JPEG encoding for web delivery. No CLI/API fallback was used.
- Placement: About introduction, with an editorial crop, orange corner marks, small identification caption, and restrained pointer tilt. Text and the image stack on phones.

Prompt used:

> Use case: identity-preserve. Edit target: the supplied headshot of Samuel Boakye Asante. Produce a faithful black-and-white (neutral grayscale only) photographic version for a premium software engineer portfolio About page. Change ONLY the color treatment to grayscale, with gentle professional tonal contrast. Preserve the exact face, identity, expression, hairstyle, beard, skin texture, shirt, original pose, square framing, and simple light background. No beautification, reshaping, retouching, added objects, text, graphics, background replacement, or crop. Keep the photo natural, clear and recognizable. This is a photographic color conversion, not a new portrait.

## Content update

NovaYield’s homepage preview, project listing, detail page, and metadata now state that its backend and frontend are implemented, based on the owner’s explicit update. Its decision-support prototype context is retained. No deployment, yield prediction, agronomic validation, or model performance claims were inferred.
