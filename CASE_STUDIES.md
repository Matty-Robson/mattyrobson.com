# Portfolio case studies

The website uses one data-driven case study template. Existing project cards remain the source for names and chips. No framework or dependencies are required.

## Preview and routes

Run the existing local server, then open:

- `http://localhost:8000/#project/rimmers-music` — initial project example.
- `http://localhost:8000/case-study-preview.html` — **Template interaction preview — sample artwork, not project evidence**. Includes annotations, range/static comparisons and every section type using existing piano artwork. This preview is separate from actual project content.

Every project uses `#project/<slug>` and supports direct entry, refresh and browser history. The template's Back to Projects control returns to the portfolio. Existing Explore Design controls connect the cards to their projects.

## Files and APIs

- `case-study-data.js`: project additions and JSDoc discriminated section definitions. Reuses `window.portfolioProjects`. Populate only supplied, verifiable material.
- `case-study.js` / `case-study.css`: shared page, routes, hero, project navigation and coordinated transitions.
- `case-study-sections.js` / `case-study-sections.css`: optional content sections.
- `window.renderCaseStudySection(section)` returns a section element, or `null` for an unsupported type.
- `window.setupCaseStudySections(root)` binds annotations, comparison ranges and scroll reveals. It returns a cleanup function; call this before replacing a rendered case study.

## Section configuration

Each section has `id`, `type`, optional `title`, `description` and `placeholder`. Sections render in array order and can be omitted entirely. Image objects use `{src, alt, caption?, width?, height?}`. A missing image may instead use `{placeholder, alt}`. Do not pass untrusted URLs.

| Type | Additional fields |
| --- | --- |
| `showcase`, `gallery`, `mobile` | `images`, `layout`: `full`, `contained`, `split`, `grid` or `horizontal` |
| `annotations` | `image`, `annotations`: title, description, `x`, `y`, optional category/image/region |
| `feature` | `images`, optional `chips`, layout `image-left`, `image-right` or `full` |
| `research` | `items`: title, description, optional image and documented solution |
| `comparison` | `before`, `after`, mode `slider` or `static` |
| `summary` | `body` |

Annotation positions and regions use normalized coordinates from **0 to 1**, relative to the screenshot: `{x:.4,y:.3,region:{x:.2,y:.2,width:.3,height:.15}}`. Use matching before/after aspect ratios. The interactive comparison provides a native keyboard-accessible range input; static mode is available when a slider is inappropriate.

Hotspots support pointer hover, click/touch, keyboard focus and Escape. Motion respects reduced-motion preferences. Descriptive image alternative text is required for meaningful visuals; captions can distinguish project artwork from finished website screenshots.

Missing screenshots, research or results are explicitly labelled in project data. Replace those placeholders with actual material rather than inventing deliverables or outcomes. Suggested topics in the original brief are not evidence.

## Visual configuration

Open a project and choose **Configure case study** in the top bar. This opens the existing portfolio config panel with project-specific controls. The **Section selector** lets you select, add, hide, remove and reorder sections; its editor exposes text, layout, image paths, comparison mode, research items and annotation positions/regions. Fields update the page immediately when changed. Changes persist locally in the existing `portfolio-interactive-card` configuration under `caseStudies`.

Use **Open section library & interaction demos** to inspect all available components without adding sample artwork to a real project. **Reset this case study** affects only the current project. **Export project data** downloads your customised project JSON for adding back to source; browser-local edits do not alter repository files or publish themselves.

Image paths should reference actual project assets (for example `Assets/Project/Screenshots/homepage.webp`). Do not describe sample artwork as a website screenshot. To activate hotspots, set a screenshot path and add markers; positions and regions use the slider percentages shown alongside the controls. Add both genuine Before and After image paths before enabling a real comparison.

Additional layout options: mobile `three` or `prominent`; feature `number` and `category`; image `crop: {aspectRatio,fit,x,y}` with normalized focal point; research `layout:'considerations'` and exploration items with `images` arrays. Empty optional sections are omitted unless they contain an explicit placeholder.

## Figma templates

Editable templates and reusable section components live on the **Case Study Templates** page in the folio file: desktop node `932:33`, mobile node `932:296`. See `CASE_STUDY_AUDIT.md` for the full brief coverage and remaining content requirements.
