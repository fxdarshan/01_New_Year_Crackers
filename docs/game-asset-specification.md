# New Year Crackers: Asset Specification

Asset IDs used by `assets/manifest.js`, the supplied file each one came from, and what is still missing. Supplied files were taken from `Kiyaan Gaming/01_GAMES/01_New_Year_Crackers/assets/images` on 2026-11-15 and prepared with `tools/asset-pipeline/` (see `assets/README.md`).

## 1. Environment

| ID | Supplied file | Prepared as |
| --- | --- | --- |
| `bg_base_main` | `background/Basegame.png` (4108×2220 full mockup) | reel panels rebuilt without the baked symbols, cover-cropped to 1920×1080 JPG |
| `bg_freegame_main` | `background/Freegames.png` | same, purple panels and night sky |

The mockups' bottom bar and message pill are still in the images; the game draws its own bar and pill over them.

## 2. Symbols

| Id | ID | Supplied file | Note |
| --- | --- | --- | --- |
| 0 | `sym_00_idle` | `symbols/sym_wild_idle.png` | framed Fortune Pig, top part cropped to one cell |
| 0 | `sym_00_expanded` | `symbols/sym_ghost_idle.png` | cloud Fortune Pig, used for the full-reel expansion |
| 1 | `sym_01_idle` | `symbols/sym_01_mrs_claus_idle.png` | Lion Dance (the file kept an X-Mas Dolls name) |
| 2 | `sym_02_idle` | `symbols/sym_02_elf_idle.png` | Drum |
| 3 | `sym_03_idle` | `symbols/sym_03_nutcracker_idle.png` | Red Lantern |
| 4 | `sym_04_idle` | `symbols/sym_04_snowman_idle.png` | Gold Ingot |
| 5 | `sym_05_idle` | `symbols/sym_05_gingerbread_idle.png` | Lucky Coins |
| 6 | `sym_06_idle` | `symbols/Symbol_A.png` | A |
| 7 | `sym_07_idle` | `symbols/Symbol_K.png` | K |
| 8 | `sym_08_idle` | `symbols/Symbol_Q.png` | Q |
| 9 | `sym_09_idle` | `symbols/Symbol_J.png` | J |
| 10 | `sym_10_idle` | `symbols/Symbol_10.png` | 10 |
| 11 | `sym_scatter_idle` | `symbols/Scatter_Half.png` | Firecracker Scatter (Wild + Scatter) |

## 3. Effects

| ID | Supplied file | Use |
| --- | --- | --- |
| `fx_scatter_full` | `symbols/Scatter_full.png` | the fuse: unrolls down a Scatter's reel when free spins trigger |
| `fx_lantern` | `symbols/lamp.png` | anticipation lantern over spinning reels; lanterns on the modals |

Not used: `Scatter_2x2.png` (a shorter version of the full Scatter), and the X-Mas Dolls files still in the folder (`sym_00_santa_*`, `sym_06_gift_idle`, `sym_bear_*`, `sym_wild_star_idle`, the `*_win_sheet.webp` files, `banners/*`, `environment/*`, `fx/vfx_anticipation_reel3.webp`, `ui/ui_splash_logo.webp`).

## 4. Still missing (code-drawn or synthesised until supplied)

| ID | What |
| --- | --- |
| `banner_win_nice`, `_big`, `_mega`, `_superb`, `_sensational`, `_epic` | title art for the win banners; the amount is drawn below |
| `ui_splash_logo` | game logo for the splash screen (the title is baked into the backgrounds) |
| symbol win animations | sprite sheets or Spine for each symbol (the X-Mas Dolls sheet support can be brought back) |
| bottom bar, SPIN, AUTOPLAY, buttons | currently drawn in code to match the mockup |
| all sounds (`assets/audio/*.mp3`) | music for base and free spins, and the effects named in `assets/manifest.js` |

## Prototype implementation status
All IDs in sections 1 to 3 are wired in `assets/manifest.js` and load in the game (17 of 17 files). Section 4 is open.
