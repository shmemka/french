"""Фото к словам с Wikimedia Commons: python3 tools/wimg.py items.json out
items.json: {"slug": "wp:Статья fr.wikipedia" | "en:Article" | "File:Имя_файла.jpg"}.
Главное фото статьи (REST summary) или указанный файл → 400×300 webp (обрезка 4:3) + out/credits.json
(автор и лицензия со страницы файла на Commons). Запросы по одному, с паузой; при 429 ждём Retry-After.
Дальше: python3 tools/wcredits.py out — копирует фото в src/static/img/w и пишет src/img-credits.js."""
import json,sys,os,io,re,time,hashlib,html,urllib.request,urllib.parse,urllib.error
from PIL import Image
UA="EditoStudySite/1.0 (https://shmemka.github.io/french/; maartynovlaad@gmail.com)"
def get(u):
    for i in range(12):
        time.sleep(3)
        try:
            return urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':UA}),timeout=60).read()
        except urllib.error.HTTPError as e:
            if e.code==429:
                ra=int(e.headers.get('retry-after') or 30); print('  wait',ra,flush=True); time.sleep(ra+2); continue
            raise
    raise RuntimeError('429 forever')
IT=json.load(open(sys.argv[1])); OUT=sys.argv[2]; CP=os.path.join(OUT,'credits.json')
cred=json.load(open(CP)) if os.path.exists(CP) else {}
for slug,src in IT.items():
    if slug in cred and cred[slug].get('license'): continue
    try:
        if src.startswith('File:'): f=src[5:]
        else:
            lang,t=src.split(':',1); lang={'wp':'fr'}.get(lang,lang)
            # статья → первая крупная картинка с Commons из её HTML (REST summary часто отдаёт 404/429)
            a=get(f"https://{lang}.wikipedia.org/wiki/"+urllib.parse.quote(t.replace(' ','_'))).decode('utf8','replace')
            f=None
            for mm in re.finditer(r'<img[^>]+src="//upload\.wikimedia\.org/wikipedia/commons/thumb/[0-9a-f]/[0-9a-f]{2}/([^/"]+)/[^"]*"[^>]*?\swidth="(\d+)"',a):
                if int(mm.group(2))>=150 and not mm.group(1).lower().endswith('.svg'): f=urllib.parse.unquote(mm.group(1)); break
            if not f: print('NOIMG',slug,t); continue
        f=f.replace(' ','_'); h=hashlib.md5(f.encode()).hexdigest(); q=urllib.parse.quote(f)
        page=get("https://commons.wikimedia.org/wiki/File:"+q).decode('utf8','replace').replace('&#95;','_')
        def span(c):
            m=re.search(r'class="'+c+r'"[^>]*>(.*?)</span>',page,re.S); return html.unescape(re.sub('<[^>]+>','',m.group(1))).strip() if m else ''
        L=[(html.unescape(a).strip(),html.unescape(b).strip()) for b,a in re.findall(r'class="licensetpl_link"[^>]*>(.*?)</span><span class="licensetpl_short"[^>]*>(.*?)</span>',page,re.S)]
        L.sort(key=lambda x: (not x[0].startswith(('CC','Public','PD')),))
        lic,lurl=L[0] if L else ('','')
        m=re.search(r'id="fileinfotpl_aut".*?</td>\s*<td[^>]*>(.*?)</tr>',page,re.S)
        au=html.unescape(re.sub(r'\s+',' ',re.sub('<[^>]+>',' ',re.sub(r'<style.*?</style>|<span[^>]*display:\s*none[^>]*>.*?</span>','',m.group(1),flags=re.S)))).strip() if m else ''
        au=re.split(r'\s+(?:Description|Alternative names|Date of birth|Work location|Authority file|Link back)\b',au)[0].replace('No machine-readable author provided. ','').strip()[:120]
        if not lic: m2=re.search(r'Public domain|domaine public',page,re.I); lic='Public domain' if m2 else ''
        tn=f"https://upload.wikimedia.org/wikipedia/commons/thumb/{h[0]}/{h[:2]}/{q}/500px-{q}"
        if f.lower().endswith(('.svg','.tif','.tiff')): tn+='.png' if f.lower().endswith('.svg') else '.jpg'
        wp_=os.path.join(OUT,slug+'.webp')
        if os.path.exists(wp_) and slug in cred: im=None
        else: im=Image.open(io.BytesIO(get(tn))).convert('RGB')
        if im is not None:
            w,hh=im.size
            if w/hh>4/3: nw=int(hh*4/3); im=im.crop(((w-nw)//2,0,(w-nw)//2+nw,hh))
            else: nh=int(w*3/4); im=im.crop((0,(hh-nh)//2,w,(hh-nh)//2+nh))
            im.resize((400,300),Image.LANCZOS).save(wp_,'WEBP',quality=74,method=6)
        cred[slug]={'file':f,'page':'https://commons.wikimedia.org/wiki/File:'+q,'author':au,'license':lic,'lurl':lurl}
        json.dump(cred,open(CP,'w'),ensure_ascii=False,indent=1); print('OK',slug,f,lic,'|',au[:40],flush=True)
    except Exception as e: print('ERR',slug,src,str(e)[:100],flush=True)
print('DONE')
