# Anchor case study

Project route: `/#project/anchor-theme`. The seventh card inherits the existing grid, tilt, reveal and chips. The case study uses the existing data, section renderer, configuration panel and local persistence.

All displayed design studies are now actual HTML/CSS/JavaScript recreations of the supplied Figma frames. The earlier approximate native store demos and MP4 presentation have been replaced in the page by source-faithful views. The archived MP4 files have not been deleted.

The HTML views are in `Assets/Card 7/card assets/html-studies/`. Their README contains dimensions, source nodes, motion mapping and the intentional replacement of placeholder images/text. There are 14 frame views, with nine motion studies and all 96 animated node placements mapped to the exported CSS tracks. The swatch hover component was separately inspected and rebuilt, including its six 300 ms tracks and hover/mouse-leave reactions.

The source typography is self-hosted (Geist, Geist Mono and Quicksand for the original baseline). Original SVGs and photography remain local. Lossless WebP equivalents are used when smaller; they preserve decoded image pixels. The source assets remain intact. No React or Tailwind runtime/dependency was introduced. A one-off esbuild tool outside the repository compiled Figma's JSX reference into an intermediate tree; the checked-in build script outputs plain inline CSS and HTML.

Every view provides Replay, Pause/Resume, Reset, Timeline scrubbing and Actual size/Fit controls outside the source canvas. Source infinite loop settings are retained when playback is explicitly started. Reduced motion stays static; hidden and collapsed views pause. Populated labels and images are the intentional content exception to the source design, as requested. These are visual/motion studies, not a live Shopify checkout or search service.

Download `Assets/Card 7/anchor-html-studies.zip`, then open its index.html. The ZIP contains HTML, shared CSS/JavaScript, local fonts/images, referenced product photographs and motion source JSON. It contains no MP4s. The old anchor-interactions.zip path is refreshed with the HTML bundle for compatibility.

The header before/after slider still uses the original Figma evidence frames. Other source comparison PNGs and original videos remain archived. The project hero is a screenshot of the actual HTML fast-filter canvas. No conversion claims, usability results or unprovided user research are asserted.

Verification: all source utility styles converted without unhandled values; every animated node mapped; all 14 views load with local assets and no runtime errors; dropdown/swatch timeline start and end states verified; desktop and phone viewer layouts checked. Photography and the other project card designs remain unchanged.

Horizontal filters (369:305) now have a dedicated case-study section and HTML study, preserving the source 1600 × 300 frame and all 30 animated nodes in its 8.6-second loop.
