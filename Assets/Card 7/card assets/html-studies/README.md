# Anchor HTML studies

These are ordinary HTML/CSS/JavaScript views rebuilt from the supplied Figma frame structures and styles, with source typography, dimensions, colours, SVGs and photography. They do not use React, Tailwind or video playback. Fonts and static assets are local.

Open index.html. The downloadable bundle preserves this folder and its sibling products folder; keep them together. Any static web server can serve the bundle. Replay starts motion, Pause/Resume controls it, and Timeline scrubs the source tracks. Actual size shows the native canvas dimensions; Fit to width scales the whole frame without reflowing or squashing its contents. Long frames scroll within the viewer.

## Fidelity and intentional content changes

- Frame geometry and styles are converted from high-fidelity Figma design context, not drawn from screenshots.
- All 96 animated node placements are mapped to their original CSS keyframes, including easing, delays, transforms, blur, opacity, rotations, heights and source loop modes.
- Horizontal filters preserve the 8.6-second looping price, size and colour sequence, slider movement and accumulating active-filter chips.
- Swatches use the separate 35:2232 hover variant. Its six child tracks run for 300 ms. The original hover/mouse-leave variant transitions have no additional transition duration.
- Collection cards use the source 464 × 666 geometry, 24 px gaps, 15 cards, source placement and individual reveal tracks.
- Blank fast-filter images and generic labels are populated as requested. This is an intentional content exception to a literal pixel copy. The surrounding geometry and motion stay faithful.
- Playback controls are outside the Figma canvas. Animations do not autoplay, pause when hidden, and respect reduced motion. A reduced-motion viewer remains static.
- These are visual/motion studies. Store purchasing, search backends and signup submissions are not connected.

## Source map

| File | Figma node | Native frame |
| --- | --- | --- |
| fast-filters.html | 209:292 | 1268 × 486 |
| dropdown.html | 12:7528 | 1072 × 488 |
| mega-menu.html | 158:2429 | 2000 × 546 |
| nested-menu.html | 269:5071 | 1140 × 532 |
| search.html | 318:233 | 912 × 1119 |
| accordion.html | 218:1264 | 1796 × 382 |
| swatches.html | 35:2071 + 35:2232 | 744 × 715 |
| collection-reveal.html | 331:3406 | 1600 × 3995 |
| horizontal-filters.html | 369:305 | 1600 × 300 |
| filters.html | 35:1413 | 2048 × 1119 |
| products.html | 11:7005 | 2264 × 1119 |
| cart.html | 158:2056 | 1496 × 1119 |
| footer.html | 10:1586 | 1840 × 2292.5 |
| quick-buy.html | 340:7069 | 446 × 702 |

Figma file: mDN9C9nkGnjKEeM2U3Q0OT, Anchor Default Design Updates.

The raw export references and the one-off conversion script are preserved in tools/anchor-motion in the portfolio repository. The build tool is not shipped to browsers. The original MP4s remain archived in the repository and are not used by these views or included in the HTML bundle.
