# Asset handoff guide

Drop finished art and audio into this folder at the paths in [`manifest.js`](manifest.js), then reload. Each file replaces its placeholder straight away; anything missing keeps the code-drawn version. The demo panel's **Assets** section lists what is still a placeholder. The full ID list is in [`docs/game-asset-specification.md`](../docs/game-asset-specification.md).

## Rules for images
- **Symbols:** transparent PNG or WebP, trimmed to the art, about 600 px wide. Each is fitted into its 298×259 cell using the box in `manifest.js` → `fit` (fractions of the cell; tiles may overflow the cell a little, as in the mockup). Change a symbol's box there if it looks too big or small.
- **Backgrounds:** 1920×1080 JPG. The reel window must stay at x 215 to 1703, y 139 to 916 (or change `CONFIG.window`).
- **Full-reel art** (`sym_00_expanded`, `fx_scatter_full`): tall, about 0.4 to 0.5 as wide as high.
- **Banners:** title art only; the game draws the amount below it.

## Delivered (15 November 2026)
From `Kiyaan Gaming/01_GAMES/01_New_Year_Crackers/assets/images`:
- **Backgrounds:** `Basegame.png` and `Freegames.png` (4108×2220 full-screen mockups). The baked-in symbols were removed by rebuilding one clean reel panel from the empty parts of all five columns, smoothing its middle, and pasting it back into every column; symbol bits poking above the window were covered with clean roof beam. Then cover-cropped to 1920×1080. The mockups' bottom bar and message pill stay in the image; the game draws over them.
- **Symbols:** Lion Dance, Drum, Red Lantern, Gold Ingot, Lucky Coins (in files still named after X-Mas Dolls symbols), A, K, Q, J, 10, the Scatter, the framed Fortune Pig (cropped to one cell) and the cloud Fortune Pig (full reel).
- **Effects:** the full-reel Scatter with its firecracker string, and the lantern.

## Pipeline (`tools/asset-pipeline/`)
```bash
python3 tools/asset-pipeline/clean_mockup_reels.py Basegame.png base_clean.png base
python3 tools/asset-pipeline/fix_reel_panel.py Basegame.png base_clean_panel.png base_clean2.png
# same two steps for Freegames.png with "fg", then:
python3 tools/asset-pipeline/prep_new_year_crackers.py .     # edit U and W at the top for your paths
```
The older sprite-sheet tools from X-Mas Dolls (`cut_sprite_sheet.py`, `normalize_sprite_sheet.py`, ...) are kept for when win animations arrive.

## Still needed
Banner title art, a splash logo, symbol win animations, bottom bar and button art, music and sound effects (names in `manifest.js` → `sounds`).
