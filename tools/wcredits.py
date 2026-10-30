"""Копирует скачанные фото (tools/wimg.py → <out>/*.webp) в src/static/img/w и пишет src/img-credits.js.
Подпись к фото — слово из PICS в данных (fr-*.js): ["slug","la pomme",…]."""
import json, os, re, shutil, sys, glob
OUT = sys.argv[1] if len(sys.argv) > 1 else '/tmp/claude-0/wimg/out'
SRC = os.path.join(os.path.dirname(__file__), '..', 'src')
cred = json.load(open(os.path.join(OUT, 'credits.json')))
words = {}
for f in glob.glob(os.path.join(SRC, '*.js')):
    for m in re.finditer(r'\["([a-z0-9]+)","([^"]+)",TF\(', open(f).read()): words.setdefault(m.group(1), m.group(2))
dst = os.path.join(SRC, 'static', 'img', 'w'); os.makedirs(dst, exist_ok=True)
old = {}
p = os.path.join(SRC, 'img-credits.js')
if os.path.exists(p):
    t = open(p).read(); old = json.loads(t[t.index('{'):t.rindex('}')+1])
res = dict(old)
for slug, c in cred.items():
    w = os.path.join(OUT, slug + '.webp')
    if not os.path.exists(w): continue
    shutil.copy(w, os.path.join(dst, slug + '.webp'))
    res[slug] = {'w': words.get(slug, slug), 'page': c['page'], 'author': c['author'], 'license': c['license'], 'lurl': c['lurl']}
open(p, 'w').write('/* Фото к словам (Wikimedia Commons): автор и лицензия. Генерируется tools/wcredits.py */\nconst IMG_CREDITS = ' + json.dumps(res, ensure_ascii=False, indent=0) + ';\n')
print(len(res), 'photos')
