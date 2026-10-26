# DotGrid adaptation

Upstream: https://github.com/DavidHDev/react-bits/blob/main/src/content/Backgrounds/DotGrid/DotGrid.jsx
Retrieved 2026-10-19. Copyright and licence are preserved in LICENSE.

Adapted the official WebGL2 drawing and spring simulation to an explicit JavaScript factory: `window.createPortfolioDotGrid(canvas, options)` returns `update(options)` and `destroy()`, or null when WebGL2 is unavailable. React hooks are replaced with lifecycle methods. Animation stops in hidden documents; destruction removes observers, listeners, buffers and graphics context. Interactive controls do not trigger shockwaves.

Design-only placement, saved settings, theme handling and the static CSS fallback live in design-background.js and design-background.css. No React runtime or build tooling is required.
