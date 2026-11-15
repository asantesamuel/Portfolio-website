# Portfolio redesign — QA report

Date: 15 November 2026

## Implementation reviewed

The Assembly redesign covers Home, About, Experience, Projects, Contact, and all four project detail pages. It uses Cold Steel, graphite, and orange with a shared light/dark design system. Skills, education, and leadership remain on About. The site uses HTML, CSS, and vanilla JavaScript without a build step or runtime dependencies.

The original specification files and downloadable résumé are unchanged (SHA-256 comparison against the source portfolio). The three professional-experience entries are unchanged. The earlier malformed About closing markup was repaired. No new employment, project performance, or deployment claims were introduced. NovaYield explicitly retains its unfinished backend/frontend status.

## Browser checks performed

Testing used installed Google Chrome in headless mode through the bundled Playwright tooling and a temporary loopback HTTP server. No testing packages were installed into the project. The normal browser-preview tool failed to initialize, so local browser automation was used instead. The completed test runs closed their servers and browsers.

| Check | Actual result |
| --- | --- |
| Direct page loading | All 9 pages returned HTTP 200. Each has one main heading and appropriate active navigation. |
| Responsive/theme matrix | 108 combinations: all 9 pages in light and dark at 320, 390, 768, 1108, 1440, and 1920 CSS pixels. No document horizontal overflow. |
| Visual review | Desktop and mobile screenshots of every page inspected for composition, hierarchy, wrapping, and clipping. Contact additionally reviewed in both themes. |
| Theme controls | Toggled on every page; accessible pressed state checked; saved theme retained after reload on every page. |
| System preference | A fresh browser context with system dark mode initialized the dark theme. |
| Storage unavailable | Theme initialization and manual switching still worked when accessing localStorage threw an error. |
| Mobile menu | Open/close and Escape tested throughout the responsive matrix; Escape returned focus to its toggle. |
| Touch and short screens | Emulated touch navigation and theme switching passed at 320×568, 390×844, 667×375, and 768×1024. Scrollable landscape menu controls did not overlap. |
| Navigation/history | Every primary navigation route exercised on desktop and mobile; browser Back and Forward returned to the expected pages. |
| Project navigation | All four project artwork links opened the correct detail page; all return-to-projects links worked. |
| Keyboard access | Skip link activated with Tab/Enter; menu closed with Escape; range control operated with Home, End, and arrow keys. Visible focus states inspected. |
| Sculpture | Canvas changed during animation, remained unchanged while paused, resumed successfully, and updated through keyboard range input. Full separation stayed within canvas bounds. |
| Reduced motion | Browser preference emulated at runtime. Automatic motion stopped; the motion button was disabled; the range remained usable. CSS transition suppression reviewed in source. |
| Console/network | No JavaScript errors, console warnings/errors, failed requests, or HTTP error responses during the complete 108-layout run. |

After the main run, 24 focused layout checks rechecked Home, Projects, and Contact in both themes at 320, 390, 768, and 1440px following small refinements. Separate touch tests verified the final menu correction.

## Static and accessibility checks

- Checked 184 HTML references: 163 local references, including 13 fragment targets, plus 21 external/protocol references. No missing local files or fragment targets.
- All three JavaScript files passed node --check.
- All pages have unique titles, descriptions, viewport/theme metadata, Open Graph fields, semantic main content, and a single current navigation link. No duplicate IDs, unmatched closing tags, or unsafe new-tab links were found.
- Checked the primary light/dark text color pairs. The light muted token was darkened to fix a footer contrast failure; the final standard text tokens exceed 4.5:1 on page and surface backgrounds.
- The sculpture provides a descriptive accessible label and a native labelled range. Automatic motion can be paused. Its rendering loop suspends when offscreen or the document is hidden (source reviewed); reduced motion and pause were also verified at runtime.
- Project illustrations have explicit dimensions, empty decorative alt text inside named links, and visible concept-illustration labels. Below-the-fold images are lazy-loaded.
- All JavaScript totals approximately 15.7 KB uncompressed; the four project SVGs total approximately 5.1 KB. The site does not request remote fonts, animation libraries, videos, or models.

## Issues found and resolved

- Fixed the résumé button's hover text contrast in both themes.
- Darkened muted footer text to meet normal-text contrast requirements.
- Removed repeated title arrows after one wrapped onto a line by itself on the Projects page.
- Kept the landscape menu's theme button in normal grid flow so it no longer overlapped the Contact row.
- Increased the assembly slider's touch area to 44px and separated contact-link arrows from their text.
- Restored explicit frontend-under-development wording and labelled NovaYield's technologies as a selected stack.

## Limits and remaining content

- Tests used Chromium/Chrome and emulated viewport/touch settings. Safari, Firefox, physical devices, and a screen reader were not tested.
- External GitHub/LinkedIn destinations, mail delivery, and phone calling were not exercised. Existing destination values were preserved; no messages or calls were sent.
- Project imagery is conceptual artwork. Actual product screenshots can replace it when supplied.
- Some project implementation/status details remain unavailable. The site does not invent them. NeuroScan remains functional but not deployed and has no fabricated repository link.
- No production domain or social-preview image was supplied; no canonical domain or absolute Open Graph image URL was invented.
- The site has not been deployed. Local setup and content-maintenance instructions are in README.md.

Local screenshots, browser scripts, and machine-readable results are retained in the git-ignored .qa/ directory as review evidence; they are not deployment assets.
