#!/usr/bin/env python3
"""Builds the logo assets (header mark, schema logo, favicons) from scripts/assets/logo-source.jpg (navy/orange ER mark with
the ERANOSIAN wordmark on a white background). White is converted to transparency; colours are un-multiplied so the edges stay clean.
Usage: python3 scripts/make-logo-assets.py"""
from PIL import Image
import numpy as np

SRC = 'scripts/assets/logo-source.jpg'
im = np.asarray(Image.open(SRC).convert('RGB')).astype(float)
t = im.min(axis=2)
a = np.clip((250 - t) / (250 - 45), 0, 1)
safe = np.where(a > 0.02, a, 1)[..., None]
rgb = np.clip((im - 255 * (1 - a[..., None])) / safe, 0, 255)
rgba = np.dstack([rgb, a * 255]).astype('uint8')
full = Image.fromarray(rgba, 'RGBA')

def bbox(img, y0=0, y1=None):
    al = np.asarray(img)[..., 3]
    al = al[y0:y1]
    ys, xs = np.where(al > 40)
    return xs.min(), ys.min() + y0, xs.max() + 1, ys.max() + 1 + y0

H = full.size[1]
# mark only: everything above the wordmark (the wordmark starts at ~65 % of the height)
x0, y0, x1, y1 = bbox(full, 0, int(H * 0.64))
mark = full.crop((x0, y0, x1, y1))
# full logo (mark + wordmark) trimmed
fx0, fy0, fx1, fy1 = bbox(full)
lockup = full.crop((fx0, fy0, fx1, fy1))

def fit(img, h):
    return img.resize((round(img.size[0] * h / img.size[1]), h), Image.LANCZOS)

m = fit(mark, 132)
m.save('public/images/logo-mark.png', optimize=True)
print('logo-mark', m.size, 'ratio', m.size[0] / m.size[1])
l = fit(lockup, 487)
l.save('public/images/logo.png', optimize=True)
print('logo', l.size)

def square(img, size, pad, bg=None):
    s = Image.new('RGBA', (size, size), bg or (255, 255, 255, 0))
    inner = size - 2 * pad
    k = min(inner / img.size[0], inner / img.size[1])
    r = img.resize((round(img.size[0] * k), round(img.size[1] * k)), Image.LANCZOS)
    s.paste(r, ((size - r.size[0]) // 2, (size - r.size[1]) // 2), r)
    return s

square(mark, 192, 10).save('public/favicon-192.png', optimize=True)
square(mark, 32, 1).save('public/favicon-32.png', optimize=True)
square(mark, 48, 2).save('public/favicon.ico', format='ICO', sizes=[(48, 48)])
square(mark, 180, 18, (255, 255, 255, 255)).convert('RGB').save('public/apple-touch-icon.png', optimize=True)
square(mark, 512, 48, (255, 255, 255, 255)).convert('RGB').save('public/icon-512.png', optimize=True)
