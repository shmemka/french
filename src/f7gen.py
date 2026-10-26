# Иконки Framework7 Icons (MIT, Vladimir Kharlampidi, github.com/framework7io/framework7-icons).
# Собирает в f7-icons.json только те иконки, что используются на сайте:
#   f7("name"…), f7on("a","b"…) в *.js и {{f7:name}} / {{f7url:name}} в shell.html.
# Запуск после добавления новой иконки:
#   cd /tmp && npm pack framework7-icons && tar xzf framework7-icons-*.tgz
#   python3 src/f7gen.py /tmp/package/svg
import os, re, sys, json, glob
HERE = os.path.dirname(os.path.abspath(__file__))
svgdir = sys.argv[1] if len(sys.argv) > 1 else '/tmp/package/svg'
names = set()
for f in glob.glob(os.path.join(HERE, '*.js')) + [os.path.join(HERE, 'shell.html')]:
    s = open(f, encoding='utf-8').read()
    names |= set(re.findall(r'\bf7\(\s*"([a-z0-9_]+)"', s))
    for a, b in re.findall(r'\bf7on\(\s*"([a-z0-9_]+)"\s*,\s*"([a-z0-9_]+)"', s): names |= {a, b}
    names |= set(re.findall(r'\{\{f7(?:url)?:([a-z0-9_]+)', s))
out, miss = {}, []
for n in sorted(names):
    p = os.path.join(svgdir, n + '.svg')
    if not os.path.exists(p): miss.append(n); continue
    d = re.search(r'<path d="([^"]+)"', open(p).read()).group(1)
    out[n] = re.sub(r'\s+', ' ', re.sub(r'(\d)\.(\d{2})\d+', r'\1.\2', d)).strip()
json.dump(out, open(os.path.join(HERE, 'f7-icons.json'), 'w'), ensure_ascii=False, indent=0, sort_keys=True)
print(len(out), 'icons', 'MISSING:' if miss else '', ' '.join(miss))
