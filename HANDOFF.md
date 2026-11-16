# Handoff

The bridge between sessions (Claude Code at home, claude.ai chat elsewhere). **Read it first, update it last**, every session. Newest entry at the top; keep the last 5.

## Now
- **State:** first playable build (Book of Tut maths, 5×3, 10 lines) on `main`; 20/20 edge cases pass; preview and single file in `dist/`.
- **Next (waiting for Darshan's go-ahead):**
  1. Cap the big-win banner and the WIN box at the amount left under the 5,500× max win (`src/game.js` around lines 698 and 748); presentation only.
  2. RTP: measured about 96.8% average over 6 seeds × 4M rounds (95.9% to 98.2%); the README and GDD say 96.35% ±0.5%. Either correct the docs or lower `specialBoost` (1.33) slightly and re-tune.
- **Waiting for Darshan (open questions, `docs/reference-gdd.md` §7):** grid 5×3 (reference) or 5×4 / 100 lines (mockup); keep Gold Ingot and Lucky Coins or drop them; whether "random symbols may also expand"; art still to come (win animations, banner titles, splash logo, bar and buttons, sounds).

## Log
### 2026-11-16 · claude.ai chat
- Pushed the first build to GitHub. Added `CLAUDE.md`, `WORKFLOW.md`, this file, `art/` inbox, and the `slot-prototype-from-spec`, `slot-asset-integration`, `slot-project-sync` skills (from `fxdarshan/slot-starter-template`).
### 2026-11-15 · claude.ai chat
- Built New Year Crackers from the X-Mas Dolls base with Darshan's art and Book of Tut maths; ran `/slot-math-audit` (two findings above).
