# Сборка сайта: python3 src/build.py → index.html и файлы в корне репозитория
import os, shutil
HERE=os.path.dirname(os.path.abspath(__file__)); os.chdir(HERE)
OUT=os.path.dirname(HERE)  # корень репозитория = то, что публикует GitHub Pages
files=['visuals.js','data-book.js','data-ref.js','data-test.js','vocab.js','gloss.js','es-book.js','es-book-2.js','es-book-3.js','es-book-4.js','es-gram.js','es-lexico.js','es-lexico-4.js','es-test.js','es-cheat.js','en-book-1.js','en-book-2.js','en-ref.js','en-test.js','bank-extra.js','why.js','why2.js','fr-u3.js','fr-cahier.js','fr-plus.js','es-plus.js','fr-phrase.js','es-frase.js','fr-test-u1.js','fr-test-u2.js','why2-fr.js','why2-cahier.js','why2-es.js','why2-pool.js','engine2.js']
js=''.join(open(f).read()+'\n' for f in files)
# модули платформы встраиваются внутрь движка (общая область видимости)
mods=''.join(open(f).read()+'\n' for f in ['game.js','platform.js','study.js','tools.js'])
assert js.count('/*@@MODULES@@*/')==1
js=js.replace('/*@@MODULES@@*/', mods)
shell=open('shell.html').read()

# index.html = каркас (shell.html) + все скрипты
cut=shell.index('</style>')+len('</style>')
head, body = shell[:cut], shell[cut:]
head=head.replace('<meta name="claude:viewport-fit-sides" content="cover">\n','')
fav="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%233446d0'/%3E%3Ctext x='32' y='44' font-family='Georgia,serif' font-size='34' font-weight='700' text-anchor='middle' fill='white'%3E%C3%A9%3C/text%3E%3C/svg%3E"
page=('<!doctype html>\n<html lang="ru">\n<head>\n<meta charset="utf-8">\n'
 '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
 '<meta name="description" content="Учи языки с нуля шаг за шагом: французский и испанский (скоро — китайский). Понятная теория, упражнения с мгновенной проверкой и объяснениями, лексика, карточки и тесты для самопроверки.">\n'
 '<meta name="theme-color" content="#f3f4fa" media="(prefers-color-scheme: light)">\n'
 '<meta name="theme-color" content="#0f1127" media="(prefers-color-scheme: dark)">\n'
 f'<link rel="icon" href="{fav}">\n'
 + head +
 '\n<style>[hidden]{display:none!important}body{margin:0}</style>\n'
 '<script src="config.js"></script>\n<script src="supabase.js"></script>\n'
 '</head>\n<body>\n' + body + '\n<script>\n' + js + '</script>\n</body>\n</html>\n')
open(os.path.join(OUT,'index.html'),'w').write(page)
for f in ['supabase.js','schema.sql','README.md','.nojekyll']:
    src=os.path.join('static',f)
    if os.path.exists(src): shutil.copy(src, os.path.join(OUT,f))
# картинки (фон экрана входа и т.п.)
if os.path.isdir('static/img'):
    shutil.copytree('static/img', os.path.join(OUT,'img'), dirs_exist_ok=True)
if not os.path.exists(os.path.join(OUT,'config.js')):
    shutil.copy('static/config.js',os.path.join(OUT,'config.js'))
print('index.html', len(page))
