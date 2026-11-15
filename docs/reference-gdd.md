# New Year Crackers: Game Design Document (v0.1, prototype)

## 1. Concept
A Chinese New Year book-style slot. Fortune Pig, lion dance, drums, red lanterns, gold ingots and lucky coins sit under a temple roof hung with lanterns. The Firecracker Scatter plays the part of the "book": it is Wild and Scatter, and three of them light the fuse for free spins with a randomly picked expanding symbol.

Features and maths follow Pragmatic Play's **John Hunter and the Book of Tut** (`docs/reference-game.md`). The look follows the mockups Darshan supplied (`Basegame.png`, `Freegames.png`).

## 2. Problem statement
Darshan wants a playable prototype of a new game, built with the same workflow as the X-Mas Dolls ("Babushka") prototype: spec-driven maths, a pure engine, a scripted demo director, cheats and scenarios, video recording, a simulator, a single-file build and documented decisions. Art arrives as files and must be swappable without code changes.

## 3. Key numbers

| Item | Target (reference) | Prototype |
| --- | --- | --- |
| Grid / lines | 5×3 / 10 | 5×3 / 10 |
| RTP | 96.50% | 96.35% average of 4 × 4M rounds (±0.5%) |
| Max win | 5,500× | 5,500× cap; 5,143× seen in 4M rounds |
| Free spins frequency | not published | 1 in 163 base spins |
| Free spins average win | not published | 60× the bet |
| Base hit rate | not published | 28.3% |
| Bet range | 0.10 to 100 | 0.10 to 100 (default 9.00, as in the mockup) |

Base game 60.1% of RTP, free spins 36.6%.

## 4. Flow
1. **Base spin:** reels stop left to right. Once two Scatters are showing, each later reel spins longer under a glowing frame with a hanging lantern (anticipation).
2. **Wins:** all winning lines show together with the total, then (outside autoplay) each line on its own with its amount. Non-winning symbols dim.
3. **Scatters:** pulse and pay. On 3 or more, each Scatter's firecracker string unrolls down its reel and pops.
4. **Free spins intro:** "10 FREE SPINS" panel with lanterns.
5. **Special symbol pick:** the 11 symbols cycle in a card, slow down and stop on the special symbol.
6. **Transition:** red and gold curtain with "FREE SPINS"; the background switches to the night sky with floating lanterns, and the bar turns dark blue.
7. **Free spins:** the message pill counts "FREE SPIN n OF m", and an "EXPANDING SYMBOL" card sits at the bottom left. When the special symbol expands, its symbols flash, each reel grows into a full column (the Fortune Pig gets its full-reel cloud art), and all 10 lines pay.
8. **Retrigger:** "MORE FIRECRACKERS! +10 FREE SPINS".
9. **Summary:** total won and spins played (or "MAX WIN 5,500× REACHED"), COLLECT, zoom back to the base game.
10. **Big win banners** after any spin of 10× or more: NICE 10×, BIG 20×, MEGA 50×, SUPERB 100×, SENSATIONAL 250×, EPIC 500× (thresholds ASSUMED).

## 5. Screen layout (from the mockup)
- Reel window: x 215 to 1703, y 139 to 916 on the 1920×1080 stage; cells about 298×259.
- Bottom bar: settings, sound and info buttons; CASH, LINES (10, fixed), BET (per line, with − / +), TOTAL BET, WIN, SPIN, AUTOPLAY.
- Message pill above the bar, overlapping the reel ledge ("DEMO GAME IS ACTIVE" in the base game; the mockup's "Dema" typo is corrected).

## 6. Decisions (not in the reference sources)
- **Grid:** the mockup shows 5×4 and 100 lines, but the reference maths is 5×3 and 10 lines. The maths wins; the 3 rows fill the same reel window.
- **Symbol mapping:** Fortune Pig = John Hunter, Lion Dance = Tutankhamun, Drum = Cat, Red Lantern = Scarab. Gold Ingot and Lucky Coins are extra premiums with ASSUMED pays (3/4/5 = 1/5/25×).
- **Scatter vs Wild art:** the supplied framed pig was named `sym_wild_idle`, but the reference game's Wild is the Book, so the Firecracker Scatter is the Wild and the Pig is the top symbol. Its framed art is cropped to one cell; its cloud art is used when it expands.
- **Paylines:** classic 10-line book-slot shapes (not published for the reference).
- **Special symbol weights** (`specialWeights`) and the free spins boost (`specialBoost` 1.33) are TUNED.
- **Max win** 5,500× (official page) rather than 5,000× (reviews).
- **Timings** (`CONFIG.frames`) are chosen for this prototype; there is no animation spec yet.
- **Banners and modals** are code-drawn in red and gold until title art is supplied. The X-Mas Dolls banners in the art folder were not used.

## 7. Open questions for Darshan
1. Keep 5×3 / 10 lines (reference maths), or move to the mockup's 5×4 / 100 lines (needs new pays and a re-tune)?
2. Keep Gold Ingot and Lucky Coins as extra symbols, or drop them to match the reference's 9 pay symbols exactly?
3. The official page mentions random symbols "can also have a chance to expand" in free spins. Is that wanted, and how often?
4. Art still to come: win animations per symbol, banner title art, a logo for the splash screen, the bottom bar and buttons, music and sound effects.

## Prototype implementation status
Everything in sections 3 to 6 is implemented. Section 7 is open.
