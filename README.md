# Samuel Boakye Asante — Portfolio

A responsive, multi-page portfolio for Samuel Boakye Asante, a software engineer focused on backend engineering. The site presents selected projects, résumé-supported experience, academic background, skills, leadership, and direct contact details.

## Technologies

- HTML5 for page structure and content
- CSS3 for layout, responsive styling, and light/dark themes
- Vanilla JavaScript for the theme control, mobile navigation, current year, and interactive canvas sculpture

There is no build step, package installation, or framework dependency.

## Design direction

The current **Assembly** redesign uses Cold Steel (`#F8F7F3`), graphite, and warm orange accents. Oversized typography, open content grids, offset project artwork, and quiet dividers give the nine pages a shared visual identity. The dark theme uses graphite surfaces with Cold Steel text.

The original homepage sculpture assembles twenty metal modules around an orange core: an abstract expression of parts becoming a system. Visitors can drag the sculpture through a full 360° view with a mouse, finger, or pen; use arrow keys to rotate it; reset the view; separate the modules with a slider; and pause automatic movement. Manual rotation remains available when paused or reduced motion is enabled. Touch gestures beginning outside the canvas continue to scroll the page normally. It uses native Canvas 2D projection with no 3D library, video, model download, or third-party requests. Automatic animation stops when paused, offscreen, hidden, or reduced motion is requested. Rendering is capped at 30 frames per second and a device-pixel ratio of 2.

Project artwork is original SVG concept illustration, explicitly labelled as such. It is not a product screenshot or evidence of implemented features. Replace it with verified product imagery when available. The system font stack avoids font downloads.

The November 15 follow-up replaces platform-dependent arrow characters with inline SVG icons, adds the grayscale About portrait and floating navigation, and updates NovaYield to **backend and frontend implemented**, as confirmed by the owner. No deployment or performance claims were added. Research and portrait production notes are in [DESIGN-NOTES.md](DESIGN-NOTES.md).

The latest redesign request supersedes the earlier green palette and the reference prompt's single-file/video architecture. The reference informed the sculptural focal point and interaction; the portfolio retains its separate pages, styles, and scripts. The visual redesign preserves the existing professional content; the NovaYield implementation status was subsequently updated at the owner’s request.

## Run locally

From the project root, start any static HTTP server. For example, with Python installed:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000/>. Stop the server with Ctrl+C. The site can also be deployed as static files on a standard static host.

## Folder structure

```text
.
├── README.md                 Local setup and maintenance notes
├── SPEC.md                   Product and design specification
├── QA-REPORT.md              Browser and layout review
├── index.html                 Home
├── about.html                 Background, education, skills, leadership
├── experience.html            Professional experience
├── projects.html              Selected projects
├── contact.html               Contact information
├── projects/                  Individual project detail pages
├── css/styles.css             Shared design tokens and responsive styles
├── js/site.js                 Theme control and current year
├── js/navigation.js           Floating dock, idle/reveal and mobile menu
├── js/portrait.js             Reduced-motion-aware portrait interaction
├── js/theme-init.js           Applies saved/system theme before rendering
├── js/builder-scene.js        Original interactive assembly sculpture
├── assets/icons/favicon.svg   Portfolio favicon
├── assets/images/            Project SVGs and grayscale portrait
└── assets/documents/          Downloadable résumé
```

`SPEC.md` is retained as the product and design reference.

## Update content

### Add a project

1. Add a project entry to `projects.html` with its title, concise summary, contribution, verified technologies, status, and repository link if available. Use the existing `.project-visual` structure for an illustration or screenshot, including explicit image dimensions.
2. Add a home-page preview in `index.html` if it should be featured there.
3. Create a detail page in `projects/` using one of the existing pages as a layout reference. Use `../` for shared CSS, JavaScript, favicon, résumé, and top-level page links.
4. Link to the detail page from the card. Keep the project status and technical claims tied to verified information.

### Edit project descriptions

Project cards and individual case-study pages are static HTML. Update both places when a summary or status changes so the list and detail view stay consistent. Repository links are external anchors with safe new-tab attributes. Do not add deployment, metrics, or capabilities unless verified.

### Update experience, education, skills, and leadership

Edit work entries in `experience.html`. Education, certification, leadership, and skill groups live in the corresponding sections of `about.html`; the in-page links at the top jump to each group. Dates, role titles, organizations, and tool names should match verified source material. The home page intentionally highlights a small selection of work instead of repeating the full experience list.

### Update contact and social links

The primary contact details are in `contact.html`; GitHub and LinkedIn also appear on the home page, and GitHub appears in each footer. Update repeated profile links together. Use `mailto:` for email, an international `tel:` URI for phone, and full HTTPS URLs for external profiles. Contact uses direct links rather than a form requiring a backend.

### Replace the résumé or other assets

Replace `assets/documents/Samuel-Boakye-Asante-Resume.pdf` with the new PDF and retain that filename, or update the résumé links in every page. Replace `assets/icons/favicon.svg` to change the icon. The About portrait is `assets/images/samuel-asante-grayscale.jpg`; its subtle tilt is in `js/portrait.js` and its crop/frame in `.portrait` CSS rules. The supplied source photo was left untouched. Keep image dimensions specified in HTML when adding images; lazy-load below-the-fold imagery.

### Change theme colors and typography

Edit the custom properties at the top of `css/styles.css`. `:root` contains light-theme tokens and `html[data-theme="dark"]` contains their dark-theme counterparts. The system font stacks are declared in `--font` and `--mono`; layout spacing uses `--section`, `--gutter`, and `--container`. Keep text, surface, link, border, and focus contrast readable in both themes. If the page background changes, update the browser theme colors in `js/theme-init.js`, `js/site.js`, and each HTML head. The sculpture's materials are configured separately in `js/builder-scene.js`; the favicon and project SVGs contain their own illustration colors.

### Update shared navigation and footer

These are static HTML on all nine pages, so update every page together. The primary navigation is Home, About, Experience, Projects, and Contact. Skills, education, and leadership remain within About. Detail pages use `../` paths and highlight Projects. Keep the 960px CSS menu breakpoint aligned with the 961px desktop query in `js/navigation.js`. The dock rests after 3.5 seconds of inactivity (or after scrolling down), leaving a visible Menu tab. Pointer approach, touch, keyboard use, or scrolling upward restores it. Open menus and any focus inside the dock keep it visible. Use `scheduleRest()` to adjust the timeout.

### Prepare for deployment

Upload the HTML files plus `css/`, `js/`, and `assets/` while preserving their relative paths. Exclude `.git/`, `.qa/`, and local tooling. No production domain is configured, so no canonical URL is emitted. Configure the domain and HTTPS with the selected static host before adding canonical metadata. Recheck the résumé link and all direct page URLs at the deployed base path.

## Quality assurance

The site has five primary pages and four project detail pages. Navigation uses direct HTML page links, so browser history remains native. The actual browser, keyboard, theme, viewport, and link checks are recorded in [QA-REPORT.md](QA-REPORT.md).
