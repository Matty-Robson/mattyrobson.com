# Project working instructions

## Sprite implementation

Every newly implemented sprite must receive a second consistency pass before its first implementation is considered complete. Do this automatically, without waiting for the user to report problems.

After the initial implementation, inspect every frame and verify playback in the card. Check consistent scale, camera angle, perspective, lighting, stationary-body geometry, frame alignment and anchors. Remove unwanted floor/background remnants, stray pixels, edge fringes and other cutout debris. Check smooth movement, opening/closing continuity and seamless loop boundaries, preserving the intended action. Fix issues and verify again before reporting completion. Preserve original source assets and integrate cleaned versions with the existing playback and configuration system.
