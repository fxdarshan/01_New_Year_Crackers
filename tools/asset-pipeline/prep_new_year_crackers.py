#!/usr/bin/env python3
"""Step 3: export the game files. Reads the supplied art from U (uploaded copy of
01_New_Year_Crackers/assets/images) and the cleaned backgrounds from W, writes into <repo>/assets/images.
Backgrounds: cover crop to 1920 x 1080. Symbols: trimmed to the art, 600 px wide WebP.
The Fortune Pig 1-cell symbol is the top of the framed pig (sym_wild_idle.png).
Usage: prep_new_year_crackers.py <repo root>     (edit U and W below for your paths)
"""
import sys, os, numpy as np
from PIL import Image
U = '/mnt/user-data/uploads/images'; W = '/home/claude/work'
R = sys.argv[1]  # repo root
os.makedirs(f'{R}/assets/images/symbols', exist_ok=True); os.makedirs(f'{R}/assets/images/environment', exist_ok=True); os.makedirs(f'{R}/assets/images/fx', exist_ok=True)
def trim(im):
    a = np.asarray(im.split()[-1]); ys, xs = np.where(a > 8)
    return im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
def save_sym(src, dst, width=600, crop=None):
    im = Image.open(src).convert('RGBA')
    if crop: im = crop(im)
    im = trim(im); h = round(im.height * width / im.width)
    im = im.resize((width, h), Image.LANCZOS); im.save(dst, 'WEBP', quality=88, method=6)
    print(dst, im.size)
# backgrounds: cover crop of the 4108x2220 mockup to 1920x1080
for src, dst in [('base_clean2.png', 'bg_base_main.jpg'), ('fg_clean2.png', 'bg_freegame_main.jpg')]:
    im = Image.open(f'{W}/{src}').convert('RGB'); s = 1080 / im.height; w = round(im.width * s)
    im = im.resize((w, 1080), Image.LANCZOS); x = (w - 1920) // 2
    im.crop((x, 0, x + 1920, 1080)).save(f'{R}/assets/images/environment/{dst}', quality=88); print(dst, w, x)
S = f'{R}/assets/images/symbols'
def pighead(im):           # top of the framed pig, cut to a 1-cell window (cell aspect 612:532)
    im = trim(im); h = round(im.width * 532 / 612 * 1.04); return im.crop((0, 0, im.width, h))
save_sym(f'{U}/symbols/sym_wild_idle.png', f'{S}/sym_00_pig_idle.webp', 600, pighead)
save_sym(f'{U}/symbols/sym_wild_idle.png', f'{S}/sym_00_pig_tall.webp', 520)
save_sym(f'{U}/symbols/sym_ghost_idle.png', f'{S}/sym_00_pig_expanded.webp', 520)
for n, f in [('01_lion', 'sym_01_mrs_claus_idle'), ('02_drum', 'sym_02_elf_idle'), ('03_lantern', 'sym_03_nutcracker_idle'),
             ('04_ingot', 'sym_04_snowman_idle'), ('05_coins', 'sym_05_gingerbread_idle'), ('06_a', 'Symbol_A'), ('07_k', 'Symbol_K'),
             ('08_q', 'Symbol_Q'), ('09_j', 'Symbol_J'), ('10_ten', 'Symbol_10')]:
    save_sym(f'{U}/symbols/{f}.png', f'{S}/sym_{n}_idle.webp', 600)
save_sym(f'{U}/symbols/Scatter_Half.png', f'{S}/sym_scatter_idle.webp', 600)
save_sym(f'{U}/symbols/Scatter_full.png', f'{R}/assets/images/fx/fx_scatter_full.webp', 520)
save_sym(f'{U}/symbols/lamp.png', f'{R}/assets/images/fx/fx_lantern.webp', 300)
