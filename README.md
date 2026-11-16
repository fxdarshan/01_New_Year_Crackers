# New Year Crackers (prototype)

A playable HTML5 prototype of **New Year Crackers**, a Chinese New Year book-style slot: 5×3, 10 lines, a Firecracker Scatter that is Wild and Scatter, and free spins with a randomly picked expanding symbol. Features and maths follow Pragmatic Play's *John Hunter and the Book of Tut*. The art is Darshan's mockups and symbols; anything not supplied yet is drawn in code and can be swapped file by file.

It is built with the same workflow as the X-Mas Dolls ("Babushka") prototype (https://github.com/fxdarshan/Demo-SLot-Game): a pure maths engine, a scripted demo director, cheats and scenarios, video recording, a Monte Carlo simulator, edge-case checks and a single-file build.

| Doc | Covers |
| --- | --- |
| [`docs/reference-game.md`](docs/reference-game.md) | Published facts of the reference game, with sources and how conflicts were settled |
| [`docs/official-game-rules.md`](docs/official-game-rules.md) | New Year Crackers rules |
| [`docs/pay-table.md`](docs/pay-table.md) | Pays, expansion pays, paylines |
| [`docs/reference-gdd.md`](docs/reference-gdd.md) | Design: problem statement, numbers, flow, layout, decisions, open questions |
| [`docs/game-asset-specification.md`](docs/game-asset-specification.md) | Asset IDs, which supplied file each came from, what's missing |
| [`docs/animation-specifications.md`](docs/animation-specifications.md) | Every timing (30 fps frames) |
| [`docs/cheats.md`](docs/cheats.md) | Cheat menu, hotkeys, scenarios, links |
| [`docs/edge-cases.md`](docs/edge-cases.md) | Edge cases and how they're checked |

Working across Claude Code at home and claude.ai chat: [`WORKFLOW.md`](WORKFLOW.md), house rules in [`CLAUDE.md`](CLAUDE.md), current state in [`HANDOFF.md`](HANDOFF.md).

Also: [`assets/README.md`](assets/README.md) (art handoff and pipeline), [`CHANGELOG.md`](CHANGELOG.md), and the project skill [`.claude/skills/slot-math-audit`](.claude/skills/slot-math-audit/SKILL.md) (`/slot-math-audit` in Claude Code: a read-only check of the code against these docs).

## Play it
- **Single file:** [`dist/new-year-crackers-prototype.html`](dist/new-year-crackers-prototype.html) has everything inlined, including every image. Download it and double-click. Sounds aren't embedded, so it uses the synthesised placeholder sounds. Rebuild with `node tools/build-single.js`.
- **Online:** turn on GitHub Pages (Settings → Pages, branch `main`, folder `/ (root)`); the game is then at https://fxdarshan.github.io/01_New_Year_Crackers/.

## Run it
```bash
python3 -m http.server 8000      # then open http://localhost:8000
```
Opening `index.html` directly also works (sounds are then synthesised). Add `?nosplash` to skip the loading screen.

**Controls:** SPIN or **Space** to spin (and to skip animations during a round), **i** button for the paytable, **− / +** for the bet, **AUTOPLAY**, **D** to hide the demo panel, **C** for cheats.

## Mechanics

| Feature | Rule |
| --- | --- |
| Grid and lines | 5×3, 10 fixed lines, left to right on adjacent reels, highest win per line |
| Symbols | Fortune Pig (top, 2 = 1×, 5 = 500×), Lion Dance, Drum, Red Lantern (pay from 2), Gold Ingot, Lucky Coins, A, K, Q, J, 10 |
| Firecracker Scatter | Wild for every symbol, and Scatter: 3 / 4 / 5 anywhere pay 2× / 20× / 200× and award 10 free spins |
| Free spins | A random special symbol is picked first. When it's on enough reels to win, it expands to fill them and pays on all 10 lines, adjacent or not. 3+ Scatters add 10 more, no limit |
| Max win | 5,500× the bet per round |

## Maths
Run `node tools/simulate.js [rounds] [seed]`. Four runs of 4 million rounds:

| | Measured | Reference |
| --- | --- | --- |
| RTP | 96.35% average (95.90% to 96.83%) | 96.50% |
| Base / free spins share | 60.1% / 36.6% | |
| Base hit rate | 28.3% | not published |
| Free spins | 1 in 163, average 10.6 spins, average win 60× | not published |
| Max win seen | 5,143× | 5,500× cap |

Run-to-run noise at 4M rounds is about ±0.5% because the game is highly volatile.

## Architecture (no build step, works from file://)
- `src/config.js`: grid, lines, pays, weights (TUNED), free spins settings, max win, bets, banner tiers, timings, layout. Shared by the browser and Node.
- `src/engine.js`: pure maths. `resolveSpin(grid, { bet, inFreeSpins, special })` returns ordered steps (`win`, `scatter`, `expand`) and the total.
- `src/director.js`: scripted outcomes for demos and cheats, built from real engine results.
- `src/game.js`: canvas renderer: reels with anticipation, wins and line cycling, fuse, pick, expansion, banners, modals, transitions, HUD, free spins flow, max-win cap.
- `assets/manifest.js`: every image and sound by asset ID, plus the fitting box per symbol; missing files fall back to `src/placeholders.js`.
- `src/devpanel.js`: outcome list, custom grid with free spin preview, speed, MediaRecorder video export (with sound).
- `src/cheats.js`: cheat menu, hotkeys, scenarios, `?scenario=` links.
- `tools/simulate.js`, `tools/edge-cases.py`, `tools/build-single.js`, `tools/asset-pipeline/`.

## Decisions
Not in the reference sources; each can be changed in `src/config.js`:
- **5×3 / 10 lines** (reference maths), not the mockup's 5×4 / 100 lines. The 3 rows fill the same reel window.
- **Symbol mapping:** Fortune Pig = John Hunter, Lion Dance = Tutankhamun, Drum = Cat, Red Lantern = Scarab. The Firecracker Scatter is the Book (Wild + Scatter), so the framed pig became the top symbol rather than a Wild.
- **Gold Ingot and Lucky Coins** are extra premiums (pays 3/4/5 = 1/5/25×, ASSUMED).
- **Line shapes:** classic 10-line book-slot layout.
- **Weights:** one base table for all reels; the special symbol is 1.33× more likely during free spins (`specialBoost`); special symbol pick weights favour lower symbols slightly. All TUNED to the RTP.
- **Max win** 5,500× (official page) rather than 5,000× (reviews).
- **Banner thresholds** 10/20/50/100/250/500× and all timings are the prototype's own.

## Open questions
See [`docs/reference-gdd.md`](docs/reference-gdd.md#7-open-questions-for-darshan): grid size, the two extra symbols, the "random symbols may also expand" line on the official page, and the art still to come.

## Next steps
- Win animations per symbol (the X-Mas Dolls sprite sheet support can be brought back from Demo-SLot-Game).
- Banner title art, splash logo, bar and button art, music and sounds.
- Answers to the open questions, then a re-tune if the grid or symbols change.
