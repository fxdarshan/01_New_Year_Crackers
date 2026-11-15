# Changelog

All notable changes to the prototype. Newest first.

## 2026-11-15: New Year Crackers, first playable build
- **Game:** rebuilt from the X-Mas Dolls base as **New Year Crackers**, with the features and maths of Pragmatic Play's *John Hunter and the Book of Tut* (Darshan's request): 5×3, 10 lines, Firecracker Scatter as Wild + Scatter (2× / 20× / 200×), 10 free spins with a random special expanding symbol that pays on all lines, unlimited retriggers, 5,500× max win.
- **Maths:** new `src/engine.js` (line wins with Scatter substitution, scatter pays, expansion) and `src/config.js`. Weights and free spins boost tuned with the new `tools/simulate.js`: RTP 96.35% average over 4 × 4M rounds (reference 96.50%), free spins 1 in 163.
- **Art:** Darshan's mockups and symbols from `01_New_Year_Crackers/assets/images`. The mockup backgrounds had symbols and UI baked in; the reel panels were rebuilt from the empty parts of all five columns (`tools/asset-pipeline/clean_mockup_reels.py`, `fix_reel_panel.py`). Symbols were trimmed and resized to WebP (`prep_new_year_crackers.py`). The X-Mas Dolls art was removed from this repo (it stays in Demo-SLot-Game).
- **Presentation:** HUD redrawn to match the mockup's bottom bar (CASH, LINES, BET, TOTAL BET, WIN, SPIN, AUTOPLAY) and message pill; anticipation with a glowing frame and hanging lantern after 2 Scatters; all-lines then line-by-line win display with dimming; firecracker fuse unrolling down each Scatter's reel with popping crackers; special symbol pick; full-reel expansion (cloud art for the Fortune Pig); red-and-gold code-drawn banners and modals; paytable screen with the 10 lines.
- **Demo tools:** new outcomes and scenarios (free spins, Pig free spins, every expansion size, retrigger, banners, max-win cap, base tour), hotkeys F/P/4/5/E/T/R/1/2/3/6/A/X/M/W/N, custom grid with a free spin preview.
- **Checks:** `tools/edge-cases.py` updated (20 checks, all pass), including money flow, retrigger on the last free spin and the max-win cap. Every scenario and outcome played in headless Chrome with no page errors.
- **Docs:** all docs rewritten for the new game, plus `docs/reference-game.md` (sources and conflicts) and the `/slot-math-audit` project skill in `.claude/skills/`.

## 2026-11-15: New project started from X-Mas Dolls
- Copy of the X-Mas Dolls prototype (https://github.com/fxdarshan/Demo-SLot-Game at 24cb7b5) with a fresh git history, as the base for a new game. Earlier history stays in the original repo.
