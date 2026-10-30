#!/usr/bin/env python3
"""Данные иероглифов для китайского курса.

Сканирует src/zh-*.js, собирает все иероглифы (и их составные части) и пишет:
  src/zh-chars.js        — const ZH_CH = {иероглиф: {p: пиньинь, d: значение (en), r: ключ, dc: разложение}}
  src/static/zh/hz.json  — порядок черт (hanzi-writer-data, Arphic PL) только для нужных иероглифов
  src/static/zh/hanzi-writer.min.js, ARPHICPL.TXT — библиотека и лицензия данных

Использование: python3 tools/zhchars.py <hanzi-writer-data/package> <hanzi-writer/package> <makemeahanzi dictionary.txt>
"""
import glob, json, os, re, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA, LIB, DICT = sys.argv[1:4]
HAN = re.compile(r'[一-鿾]')

chars = set()
for f in glob.glob(os.path.join(ROOT, 'src', 'zh-*.js')):
    if f.endswith('zh-chars.js'):
        continue
    chars |= set(HAN.findall(open(f, encoding='utf-8').read()))

dic = {}
for line in open(DICT, encoding='utf-8'):
    line = line.strip()
    if line:
        e = json.loads(line)
        dic[e['character']] = e

# части иероглифов — чтобы клик по части в окне тоже работал
parts = set()
for c in chars:
    e = dic.get(c)
    if e:
        parts |= {x for x in e.get('decomposition', '') if HAN.match(x)}
    if e and e.get('radical') and HAN.match(e['radical']):
        parts.add(e['radical'])
allc = sorted(chars | parts)

ch = {}
for c in allc:
    e = dic.get(c)
    if not e:
        continue
    o = {'p': ', '.join(e.get('pinyin', [])[:2]), 'd': (e.get('definition') or '')[:60]}
    if e.get('radical'):
        o['r'] = e['radical']
    if e.get('decomposition') and e['decomposition'] != c:
        o['dc'] = e['decomposition']
    ch[c] = o
with open(os.path.join(ROOT, 'src', 'zh-chars.js'), 'w', encoding='utf-8') as f:
    f.write('/* Иероглифы курса: пиньинь, значение, ключ, разложение. Make Me a Hanzi (Arphic Public License / LGPL). Генерируется tools/zhchars.py */\n')
    f.write('const ZH_CH = ' + json.dumps(ch, ensure_ascii=False, separators=(',', ':')) + ';\n')

out = {}
for c in allc:
    p = os.path.join(DATA, c + '.json')
    if os.path.exists(p):
        d = json.load(open(p, encoding='utf-8'))
        out[c] = {'strokes': d['strokes'], 'medians': d['medians'], 'radStrokes': d.get('radStrokes', [])}
zd = os.path.join(ROOT, 'src', 'static', 'zh')
os.makedirs(zd, exist_ok=True)
with open(os.path.join(zd, 'hz.json'), 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False, separators=(',', ':'))
shutil.copy(os.path.join(LIB, 'dist', 'hanzi-writer.min.js'), zd)
shutil.copy(os.path.join(DATA, 'ARPHICPL.TXT'), zd)
print(f'{len(chars)} иероглифов в текстах, {len(allc)} с частями; ZH_CH: {len(ch)}, hz.json: {len(out)} ({os.path.getsize(os.path.join(zd, "hz.json")) // 1024} КБ)')
