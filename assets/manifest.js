/*
 * ASSET MANIFEST
 * ---------------------------------------------------------------------------
 * Keys are the asset IDs listed in docs/game-asset-specification.md. To replace art
 * or sound, save a file at the listed path (or change the path) and reload. Missing
 * files keep the built-in placeholder, so assets can be swapped one by one.
 *
 * Source art: the files Darshan supplied in 01_New_Year_Crackers/assets/images
 * (2026-11-15), prepared with tools/asset-pipeline/prep_new_year_crackers.py
 * (backgrounds cleaned of the mockup's baked-in symbols, symbols trimmed and resized).
 *
 * Sizes:
 *   bg_*_main ........ 1920 x 1080 JPG; the reel window is x 215-1703, y 139-916
 *   sym_*_idle ....... about 600 px wide, transparent, trimmed to the art; fitted into a
 *                      298 x 259 cell using the box in `fit` below (fractions of the cell)
 *   sym_00_expanded .. full-reel Fortune Pig for the expanding symbol (drawn over a sky panel)
 *   fx_scatter_full .. full-reel Scatter with its firecracker string (the free spins fuse)
 *   fx_lantern ....... hanging lantern for the anticipation and modals
 *
 * Sounds: MP3 or WAV. They only load when the game is served over http(s) (README: "Run it").
 * Without files, synthesised placeholder sounds play.
 */
window.ASSET_MANIFEST = {
  // fitting box per symbol, [width, height] as a fraction of the cell; tiles may overflow a little, as in the mockup
  fit: {
    default:          [0.98, 1.06],
    sym_00_idle:      [0.97, 1.00],
    sym_01_idle:      [1.00, 1.10],
    sym_scatter_idle: [1.00, 1.08],
    sym_06_idle: [0.80, 0.86], sym_07_idle: [0.80, 0.86], sym_08_idle: [0.80, 0.86], sym_09_idle: [0.80, 0.86], sym_10_idle: [0.86, 0.80]
  },

  images: {
    // environment (the mockups with the reel window cleaned)
    bg_base_main:      'assets/images/environment/bg_base_main.jpg',
    bg_freegame_main:  'assets/images/environment/bg_freegame_main.jpg',

    // symbols, highest paying first
    sym_00_idle:       'assets/images/symbols/sym_00_pig_idle.webp',       // Fortune Pig (framed, head and shoulders)
    sym_00_expanded:   'assets/images/symbols/sym_00_pig_expanded.webp',   // Fortune Pig on a cloud, full reel
    sym_01_idle:       'assets/images/symbols/sym_01_lion_idle.webp',      // Lion Dance
    sym_02_idle:       'assets/images/symbols/sym_02_drum_idle.webp',      // Drum
    sym_03_idle:       'assets/images/symbols/sym_03_lantern_idle.webp',   // Red Lantern
    sym_04_idle:       'assets/images/symbols/sym_04_ingot_idle.webp',     // Gold Ingot
    sym_05_idle:       'assets/images/symbols/sym_05_coins_idle.webp',     // Lucky Coins
    sym_06_idle:       'assets/images/symbols/sym_06_a_idle.webp',
    sym_07_idle:       'assets/images/symbols/sym_07_k_idle.webp',
    sym_08_idle:       'assets/images/symbols/sym_08_q_idle.webp',
    sym_09_idle:       'assets/images/symbols/sym_09_j_idle.webp',
    sym_10_idle:       'assets/images/symbols/sym_10_ten_idle.webp',
    sym_scatter_idle:  'assets/images/symbols/sym_scatter_idle.webp',      // Firecracker Scatter (Wild + Scatter)

    // effects
    fx_scatter_full:   'assets/images/fx/fx_scatter_full.webp',            // Scatter with the firecracker string, full reel
    fx_lantern:        'assets/images/fx/fx_lantern.webp'
    // optional, not supplied yet (code-drawn when absent): banner_win_nice / _big / _mega / _superb /
    // _sensational / _epic (title art above the amount) and ui_splash_logo (splash screen logo)
  },

  sounds: {
    bgm_basegame_loop:      'assets/audio/bgm_basegame_loop.mp3',
    bgm_freegame_loop:      'assets/audio/bgm_freegame_loop.mp3',
    sfx_spin_button_click:  'assets/audio/sfx_spin_button_click.mp3',
    sfx_reel_spin:          'assets/audio/sfx_reel_spin.mp3',
    sfx_reel_stop_01:       'assets/audio/sfx_reel_stop_01.mp3',
    sfx_reel_stop_02:       'assets/audio/sfx_reel_stop_02.mp3',
    sfx_reel_stop_03:       'assets/audio/sfx_reel_stop_03.mp3',
    sfx_reel_stop_04:       'assets/audio/sfx_reel_stop_04.mp3',
    sfx_reel_stop_05:       'assets/audio/sfx_reel_stop_05.mp3',
    sfx_scatter_land:       'assets/audio/sfx_scatter_land.mp3',
    sfx_scatter_win:        'assets/audio/sfx_scatter_win.mp3',
    sfx_fuse:               'assets/audio/sfx_fuse.mp3',
    sfx_cracker_pop:        'assets/audio/sfx_cracker_pop.mp3',
    sfx_pick_tick:          'assets/audio/sfx_pick_tick.mp3',
    sfx_pick_stop:          'assets/audio/sfx_pick_stop.mp3',
    sfx_expand_flash:       'assets/audio/sfx_expand_flash.mp3',
    sfx_expand:             'assets/audio/sfx_expand.mp3',
    sfx_symbol_win_line:    'assets/audio/sfx_symbol_win_line.mp3',
    sfx_countup_loop:       'assets/audio/sfx_countup_loop.mp3',
    sfx_countup_end:        'assets/audio/sfx_countup_end.mp3',
    banner_hit:             'assets/audio/banner_hit.mp3'
  }
};
