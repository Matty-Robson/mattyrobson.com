# Case study brief audit — 20 October 2026

Audited against the complete supplied “Build a Reusable Portfolio Project Case Study Template” brief. The website remains plain HTML/CSS/JavaScript and uses its existing project data, card interactions, config panel and persistence. No new dependencies were added.

| Brief area | Implementation |
| --- | --- |
| 1. Card → case study | Existing Explore Design actions open unique hash routes. Card copy exits horizontally; sidebar slides away; frozen on-screen logo travels to the hero without stretching; artwork expands/crossfades. Desktop travel is 850ms, phone travel 700ms. Back reverses the logo after the target card settles. |
| Navigation | Direct routes/refresh, browser history, next/previous, Back to Projects, scroll restoration, invalid-project recovery and reduced-motion handling. |
| 2. Shared template | One data-driven renderer; optional/reordered/enabled sections; empty optional content omitted. |
| 3. Hero / overview / showcase | Logo, name, headline, intro, chips, art or real screenshot/labelled placeholder. Editorial overview rows and optional metadata. Real hero screenshots become full-width; long screenshots retain natural height. |
| 4. Interactive breakdown | Relative-coordinate hotspots, highlighted regions, title/description/category/optional crop, hover/click/touch/focus, Escape dismissal and resize-aware panels. |
| 5. Feature spotlights | Image left/right/full; numbered category label; chips; supporting image pairs; configurable close-up crops. |
| 6. Research | Supplied insight/image modules, problem → response, exploration image grids and numbered key considerations. No unverified findings are populated. |
| 7. Comparisons | Draggable on-image divider plus accessible native keyboard range, Before/After labels, matching image treatment and static side-by-side option. Real project comparisons require both assets. |
| 8. Mobile showcase | Three-screen, prominent-with-supporting-screens and horizontal gallery variants. Responsive stacking, minimal framing. |
| 9. Summary | Optional short data-driven closing copy. |
| 10. Project navigation | Next name/logo/headline/preview or labelled placeholder/CTA; hover treatment and logo transition; previous project and all-projects links. |
| 11. Project-specific content | All six existing projects use their own titles/chips/logos/themes. Rimmers is the example; suggested features are not represented as verified work. |
| 12. Data architecture | Shared existing project objects with JSDoc discriminated section definitions; no `unknown` payloads; new content added through data. |
| 13. Motion | Web Animations API + existing CSS easing. Logo, panel, artwork, reveals, annotations and next-preview interactions. Interrupted travel cancels cleanly; native page scrolling retained. |
| 14. Responsive/accessibility | Desktop/tablet/phone layouts, normalized markers, touch-sized controls, keyboard access, focus restoration and reduced-motion guards. |
| 15. Delivery/verification | Shared sections and Rimmers demo; separate fully labelled component playground; syntax/data/asset and browser interaction checks. |

## Usability gaps corrected in this pass

- Added **Configure case study** to every project page. It opens the **existing config panel**, not a separate panel.
- Added a visual section selector: add, hide/show, remove, reorder and edit section content/layouts; edit hotspots and regions with labelled percentage sliders; persist changes per project through the existing storage object.
- Added project-only reset and JSON export, plus a direct link to the section library.
- Added a sticky **Jump to section** selector to the component preview.
- Added missing spotlight/crop, research and mobile variants; resized hotspot panels; on-image comparison handle; exact logo proportions and final reverse-transition anchoring.
- Added editable desktop/mobile templates and reusable section components to the Figma file.

## Figma

New page: **Case Study Templates**. Desktop: node `932:33`; mobile: `932:296`. The page includes 22 reusable section components. Hotspots, popovers and slider positions are editable visual states in Figma; live controls are implemented on the website.

## Content still to supply

The repository contains project branding and decorative card artwork, not finished desktop/mobile website screenshots, original Before designs, verified research findings or complete responsibility/approach copy. These remain explicitly labelled placeholders. The separate playground uses existing piano artwork and sample explanations labelled **not project evidence**. No missing material is silently fabricated.

## Where to use it

- Project example: `/#project/rimmers-music` → **Configure case study** → **Case Study · Section selector**.
- Interaction/variant library: `/case-study-preview.html` → **Jump to section**.
- Source data and schema: `case-study-data.js`; usage guide: `CASE_STUDIES.md`.

Local config edits are browser-local previews, not repository edits or publication. Export JSON to retain/share customised content for incorporation into source.
