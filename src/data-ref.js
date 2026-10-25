/* =========================================================
   ДЛЯ СПРАВКИ — с нуля
   ========================================================= */
TOPICS.push({
id:"r-lecture", sec:"ref", kind:"С нуля",
title:"Правила чтения", ru:"Как читать французские слова: буквы, сочетания, носовые звуки", page:"Приложение «Phonie-graphie», с. 167",
theory:`
<p>Французское письмо кажется хаотичным, но оно очень правильное: одно и то же сочетание букв почти всегда читается одинаково. Выучи сочетания — и сможешь прочитать любое слово, даже незнакомое. Нажимай на примеры, чтобы услышать.</p>
<h3>Пять главных принципов</h3>
${RULE("1. Конечные согласные обычно НЕ читаются",`<p>${F("Paris")} [paʁi], ${F("français")}, ${F("petit")}, ${F("grand")}, ${F("vous")}, ${F("deux")}, ${F("sport")}.</p><p>Исключение — часто читаются <b>c, r, f, l</b> (запомни английское слово <b>CaReFuL</b>): ${F("avec")}, ${F("bonjour")}, ${F("neuf")}, ${F("espagnol")}. Но <b>-er</b> в глаголах и словах на -ier — [e]: ${F("parler")}, ${F("premier")}.</p>`)}
${RULE("2. Конечная -e не читается",`<p>${F("France")} [fʁɑ̃s], ${F("madame")}, ${F("rue")}. Зато она «включает» согласную перед собой: ${F("grand")} [gʁɑ̃] → ${F("grande")} [gʁɑ̃d].</p>`)}
${RULE("3. -ent в глаголах не читается",`<p>${F("ils parlent")} [il paʁl] — а не «парлан»! В других словах -ent = [ɑ̃]: ${F("souvent")}, ${F("un étudiant")}… (там -ant).</p>`)}
${RULE("4. H никогда не читается",`<p>${F("hôtel")} [otɛl], ${F("habiter")} [abite], ${F("histoire")}.</p>`)}
${RULE("5. Ударение — всегда на последний слог",`<p>${F("université")} → u-ni-ver-si-<b>TÉ</b>. Остальные слоги ровные.</p>`)}
<h3>Гласные и их сочетания</h3>
${TBL(["Пишем","Звук","Примерно как","Примеры"],[
[F("a, à, â"),"[a]","а",F("madame, là, pâtes")],
[F("é")+", "+F("-er, -ez")+" в конце","[e]","закрытое «э» (губы в улыбке)",F("café, été, parler, vous parlez")],
[F("è, ê, ai, ei")+", e + 2 согласные","[ɛ]","открытое «э»",F("mère, fête, j’aime, treize, merci, avec")],
[F("e")+" в открытом слоге","[ə]","беглое «ё» без «й», часто выпадает",F("le, je, petit, samedi [samdi]")],
[F("i, î, y"),"[i]","и",F("midi, île, stylo")],
[F("o, ô, au, eau"),"[o]","о",F("hôtel, au revoir, beau, eau")],
[F("u, û"),"[y]","«ю» без «й»: губы — «у», язык — «и»",F("tu, rue, salut, musique")],
[F("ou, où, oû"),"[u]","у",F("vous, nous, où, août")],
[F("eu, œu"),"[ø] / [œ]","«ё» без «й»",F("deux, neuf, sœur, professeur")],
[F("oi"),"[wa]","уа",F("moi, toi, trois, voiture")],
[F("ui"),"[ɥi]","быстрое «юи»",F("huit, lui, nuit")]
])}
${WARN(`Самая важная пара: ${F("u")} [y] и ${F("ou")} [u]. ${F("tu")} (ты) ≠ ${F("tout")} (всё); ${F("rue")} (улица) ≠ ${F("roue")} (колесо). Русского звука [y] нет — тренируй: скажи «и», не двигая языком, вытяни губы трубочкой.`)}
${VS({h:"u → [y]",big:F("tu · rue · salut"),sub:"губы как на «у», язык как на «и»"},{h:"ou → [u]",big:F("vous · roue · tout"),sub:"обычное русское «у»"})}
<h3>Носовые гласные</h3>
<p>Гласная + <b>n</b> или <b>m</b> в конце слова или перед согласной = гласный «в нос», а сама n/m не читается.</p>
${TBL(["Пишем","Звук","Примеры"],[
[F("an, am, en, em"),"[ɑ̃] «ан» в нос",F("France, chambre, enfant, temps, allemand")],
[F("on, om"),"[ɔ̃] «он» в нос",F("bonjour, nom, onze, Japon")],
[F("in, im, ain, aim, ein, un, um, yn"),"[ɛ̃] «эн» в нос",F("vingt, important, demain, faim, plein, un, lundi")],
[F("ien"),"[jɛ̃]",F("bien, italien, canadien")],
[F("oin"),"[wɛ̃]",F("loin, coin")]
])}
${RULE("Когда НЕ носовой",`<p>Если после n/m идёт <b>гласная</b> или вторая <b>n/m</b>: ${F("bon")} [bɔ̃] / ${F("bonne")} [bɔn]; ${F("italien")} / ${F("italienne")}; ${F("américain")} / ${F("américaine")}; ${F("un")} [œ̃] / ${F("une")} [yn]; ${F("ami")}, ${F("animal")}. Особый случай: ${F("femme")} [fam].</p>`)}
${VS({h:"носовой",big:F("bon · italien · un"),sub:"n/m в конце или перед согласной"},{h:"не носовой",big:F("bonne · italienne · une"),sub:"после n — гласная или вторая n"})}
<h3>Согласные</h3>
${TBL(["Пишем","Звук","Правило","Примеры"],[
[F("c"),"[k] / [s]","[s] перед e, i, y; иначе [k]",F("café, comment / merci, cinéma")],
[F("ç"),"[s]","всегда [s] (стоит перед a, o, u)",F("ça, français, garçon")],
[F("g"),"[g] / [ʒ]","[ʒ] «ж» перед e, i, y; иначе [g]",F("gare, Congo / Belgique, girafe")],
[F("gu"),"[g]","u не читается",F("guitare")],
[F("ge")+" + a/o","[ʒ]","e не читается, нужна для мягкости",F("nous mangeons, nageons")],
[F("ch"),"[ʃ]","«ш»",F("chocolat, chinois, dimanche")],
[F("gn"),"[ɲ]","«нь»",F("Espagne, Allemagne, montagne")],
[F("qu"),"[k]","u не читается",F("quel, quatre, Belgique, Mexique")],
[F("ph / th"),"[f] / [t]","",F("photo, téléphone / thé")],
[F("s")+" между гласными","[z]","одна s между гласными = [z]",F("française, cousine, musique, rose")],
[F("ss"),"[s]","",F("passeport, classe")],
[F("j"),"[ʒ]","«ж»",F("je, japonais, juin")],
[F("ill")+" после гласной / согласной","[j]","«й»",F("fille, famille, travailler, juillet")],
[F("ail, eil"),"[aj], [ɛj]","«ай», «эй»",F("travail, soleil")],
[F("tion"),"[sjɔ̃]","«сьон»",F("nation, natation, nationalité")],
[F("x"),"[ks], [gz], [s], [z]","зависит от слова",F("taxi, exemple, six, deuxième")],
[F("r"),"[ʁ]","гортанный, «картавый»",F("rue, Paris, merci")]
])}
${NOTE(`Исключения, которые встречаются в учебнике: ${F("ville")} [vil], ${F("mille")} [mil] — ll как [l]; ${F("monsieur")} [məsjø] — «мёсьё»; ${F("fils")} [fis]; ${F("août")} [ut]; ${F("second")} [səgɔ̃].`)}
${CMP(`Французская r — не русская раскатистая «р». Похоже на звук, когда полощешь горло, очень мягко.`,`Английская привычка читать «u» как [ʌ] или [ju] здесь не работает: ${F("musique")} — [myzik].`)}
`,
ex:[
{t:"drill", h:"Прочитай вслух сам, потом нажми — проверь себя", items:[["bonjour","[bɔ̃ʒuʁ] бонжур"],["merci","[mɛʁsi] мэрси"],["rue","[ʁy] рю"],["vous","[vu] ву"],["moi","[mwa] муа"],["beaucoup","[boku] боку"],["quatre","[katʁ] катр"],["Espagne","[ɛspaɲ] эспань"],["guitare","[gitaʁ] гитар"],["famille","[famij] фамий"],["ville","[vil] виль"],["français","[fʁɑ̃sɛ] франсэ"],["française","[fʁɑ̃sɛz] франсэз"],["ils parlent","[il paʁl] иль парль"],["enfant","[ɑ̃fɑ̃] анфан"],["vingt","[vɛ̃] вэн"],["natation","[natasjɔ̃] натасьон"],["monsieur","[məsjø] мёсьё"],["Belgique","[bɛlʒik] бельжик"],["musique","[myzik] мюзик"]]},
{t:"mc", h:"Как читается?", items:[
{q:"rue", o:["[ʁy] «рю»","[ʁu] «ру»","[ʁue] «руэ»"], a:0},
{q:"ils parlent", o:["[il paʁl]","[il paʁlɑ̃]","[ilz paʁlɛnt]"], a:0, e:"-ent в глаголах не читается."},
{q:"fils (сын)", o:["[fis]","[fil]","[fils]"], a:0},
{q:"femme", o:["[fam]","[fɛm]","[fœm]"], a:0},
{q:"cinéma", o:["[sinema]","[kinema]","[tʃinema]"], a:0, e:"c перед i = [s]."},
{q:"guitare", o:["[gitaʁ]","[gwitaʁ]","[ʒitaʁ]"], a:0, e:"gu = [g]."},
{q:"Belgique", o:["[bɛlʒik]","[bɛlgik]","[bɛlgikə]"], a:0, e:"g перед i = [ʒ], qu = [k], e не читается."},
{q:"moi", o:["[mwa]","[moi]","[mɔj]"], a:0},
{q:"huit", o:["[ɥit]","[uit]","[ɥi:t]"], a:0},
{q:"cousine", o:["[kuzin]","[kusin]","[kuzinə]"], a:0, e:"s между гласными = [z]."}
]},
{t:"sort", h:"Какой носовой звук?", cats:["[ɑ̃] an","[ɔ̃] on","[ɛ̃] in"], items:[["France",0],["enfant",0],["chambre",0],["onze",1],["bonjour",1],["nom",1],["vingt",2],["demain",2],["lundi",2],["Japon",1],["temps",0],["important",2]]},
{t:"sort", h:"Конечная согласная читается или нет?", cats:["читается","не читается"], items:[["avec",0],["Paris",1],["bonjour",0],["petit",1],["neuf",0],["vous",1],["espagnol",0],["grand",1],["parler",1],["sport",1],["chef",0],["deux",1]]},
{t:"tf", h:"Верно или неверно?", items:[
{q:"В слове «bonne» есть носовой звук.", a:false, e:"nn + e → не носовой: [bɔn]."},
{q:"Буква h во французском не читается.", a:true},
{q:"«ou» читается как [u].", a:true},
{q:"В «ville» ll читается как [j].", a:false, e:"Исключение: [vil]."},
{q:"s между двумя гласными звучит как [z].", a:true}
]}
]});

TOPICS.push({
id:"r-accents", sec:"ref", kind:"С нуля",
title:"Accents : é, è, ê, ç…", ru:"Диакритические знаки и как их печатать на Mac", page:"",
theory:`
<p>Значки над буквами — не украшение. Они меняют произношение или различают слова. На письме пропущенный акцент = ошибка.</p>
${TBL(["Знак","Название","Что делает","Примеры"],[
[F("é"),"accent aigu","только над e → закрытое [e]",F("été, café, né, étudiant")],
[F("è"),"accent grave","над e → открытое [ɛ]",F("mère, frère, très")],
[F("à, ù"),"accent grave","звук не меняет, различает слова",F("a / à, ou / où, la / là")],
[F("ê, â, î, ô, û"),"accent circonflexe","часто на месте исчезнувшей s; ê = [ɛ]",F("fête, hôpital, forêt, août")],
[F("ë, ï"),"tréma","гласную читать отдельно",F("Noël, naïf")],
[F("ç"),"cédille","c читается [s] перед a, o, u",F("ça, français, garçon")]
])}
${CMP(``,`Подсказка через английский: circonflexe часто «прячет» s — ${F("hôpital")} = <i>hospital</i>, ${F("forêt")} = <i>forest</i>, ${F("fête")} = <i>feast</i>.`)}
<h3>Пары, которые различаются только акцентом</h3>
${TBL(["Без","С акцентом"],[[F("il a")+" — у него есть (avoir)",F("à Paris")+" — в Париже"],[F("ou")+" — или",F("où")+" — где"],[F("la")+" — артикль",F("là")+" — там"]])}
<h3>Как печатать на MacBook</h3>
${TBL(["Способ","Как"],[
["Удержать клавишу","Зажми <b>e</b> → появится меню é è ê ë → нажми цифру. Работает почти во всех приложениях."],
["é","⌥ Option + E, затем E"],
["è, à, ù","⌥ Option + ` (слева от Z / под Esc), затем буква"],
["ê, â, î, ô, û","⌥ Option + I, затем буква"],
["ë, ï","⌥ Option + U, затем буква"],
["ç","⌥ Option + C"],
["œ","⌥ Option + Q"]
])}
${NOTE("На этом сайте под заданиями с вводом есть кнопки é è ê à ç… — нажимай их, чтобы вставить букву.")}
`,
ex:[
{t:"mc", h:"С акцентом или без?", items:[
{q:"Il ___ 20 ans.", o:["a","à"], a:0, e:"a — глагол avoir."},
{q:"J’habite ___ Paris.", o:["à","a"], a:0, e:"à — предлог."},
{q:"Tu habites ___ ?", o:["où","ou"], a:0, e:"où — где."},
{q:"Le café ___ le thé ?", o:["ou","où"], a:0, e:"ou — или."},
{q:"Elle est ___, devant le cinéma.", o:["là","la"], a:0}
]},
{t:"fill", h:"Расставь акценты (напиши слово правильно)", items:[
{q:"ecole →", a:["école"]},{q:"frere →", a:["frère"]},{q:"tres →", a:["très"]},{q:"francais →", a:["français"]},{q:"fete →", a:["fête"]},{q:"etudiante →", a:["étudiante"]},{q:"telephone →", a:["téléphone"]},{q:"mere →", a:["mère"]},{q:"hopital →", a:["hôpital"]},{q:"Noel →", a:["Noël"]}
]},
{t:"match", h:"Соедини знак и название", pairs:[["é","accent aigu"],["è","accent grave"],["ê","accent circonflexe"],["ë","tréma"],["ç","cédille"]]}
]});

TOPICS.push({
id:"r-liaison", sec:"ref", kind:"С нуля",
title:"Élision, liaison, enchaînement", ru:"Как слова «склеиваются» в речи и на письме", page:"",
theory:`
<p>Французская речь звучит как одно длинное слово, потому что слова склеиваются. Есть три механизма.</p>
<h3>1. Élision — выпадение гласной (видно на письме)</h3>
${FXS(FX(["je","+","aime","→","!j’aime"]),FX(["le","+","hôtel","→","!l’hôtel"]),FX(["ne","+","habite","→","!n’habite"]))}
${RULE("Обязательно перед гласной и немой h",`${TBL(["Было","Стало","Пример"],[[F("le, la"),F("l’"),F("l’art, l’université, l’hôtel")],[F("je"),F("j’"),F("j’ai, j’aime, j’habite")],[F("ne"),F("n’"),F("je n’aime pas")],[F("de"),F("d’"),F("pas d’enfants")],[F("me, te, se"),F("m’, t’, s’"),F("je m’appelle, il s’appelle")],[F("que"),F("qu’"),F("qu’est-ce que")],[F("si"),F("s’")+" — только перед il/ils",F("s’il vous plaît")]])}<p>Перед согласной — не сокращаем: ${F("je suis, je parle, le sport")}.</p>`)}
${WARN("✗ <i>je aime</i>, ✗ <i>le université</i>, ✗ <i>je ne habite pas</i> — это ошибки на письме, а не просто «акцент».")}
<h3>2. Enchaînement — сцепление (только в произношении)</h3>
<p>Произносимая конечная согласная «перетекает» к следующей гласной: ${F("elle‿a")} [ɛ-la], ${F("il‿habite")} [i-la-bit], ${F("avec‿elle")}.</p>
<h3>3. Liaison — связывание</h3>
${LIS(LI("les","amis","z"),LI("deux","ans","z"),LI("un","ami","n"),LI("petit","ami","t"),LI("neuf","ans","v"),LI("et","Anna",""))}
<p>Немая конечная согласная <b>оживает</b> перед гласной:</p>
${TBL(["Буква","Звук","Пример"],[[F("s, x, z"),"[z]",F("les‿amis, deux‿ans, chez‿elle")],[F("n"),"[n]",F("un‿ami, en‿Italie, on‿a, mon‿ami")],[F("t, d"),"[t]",F("petit‿ami, c’est‿un, quand‿il")],[F("f")+" (neuf)","[v]",F("neuf‿ans")]])}
${TBL(["Обязательно","Запрещено"],[
["определитель + сущ.: "+F("les‿enfants, mon‿ami"),"после "+F("et")+": "+F("et | Anna")],
["прилаг. + сущ.: "+F("petit‿ami"),"перед h «придыхательной»: "+F("les | héros")],
["местоимение + глагол: "+F("nous‿avons, ils‿ont, vous‿êtes, on‿habite"),"после сущ. в ед.ч.: "+F("un étudiant | italien")],
["короткий предлог: "+F("en‿Italie, dans‿un, chez‿elle"),"перед "+F("onze")+": "+F("le | onze")]
])}
${RULE("Пара, которую надо слышать",`<p>${F("ils sont")} [il<b>s</b>ɔ̃] — они есть; ${F("ils ont")} [il<b>z</b>ɔ̃] — у них есть.<br>${F("elles sont")} / ${F("elles‿ont")}. Разница — одна звонкость!</p>`)}
`,
ex:[
{t:"mc", h:"Élision: как правильно?", items:[
{q:"___ habite à Paris.", o:["J’","Je"], a:0},
{q:"Elle ___ aime pas le ski.", o:["n’","ne"], a:0},
{q:"Il ___ appelle Paul.", o:["s’","se"], a:0},
{q:"C’est ___ amie de Paul.", o:["l’","la"], a:0},
{q:"___ suis russe.", o:["Je","J’"], a:0},
{q:"Je n’ai pas ___ enfants.", o:["d’","de"], a:0}
]},
{t:"fill", h:"Исправь: напиши с элизией", items:[
{q:"je aime →", a:["j’aime"]},{q:"la université →", a:["l’université"]},{q:"je ne habite pas →", a:["je n’habite pas"]},{q:"le hôtel →", a:["l’hôtel"]},{q:"le art →", a:["l’art"]},{q:"si il vous plaît →", a:["s’il vous plaît"]}
]},
{t:"sort", h:"Связывание есть или нет?", cats:["есть","нет"], items:[["les amis",0],["et Anna",1],["ils ont",0],["ils sont",1],["un étudiant",0],["vous êtes",0],["en Italie",0],["au Japon",1],["mon ami",0],["deux livres",1],["deux ans",0],["les professeurs",1]]}
]});

TOPICS.push({
id:"r-genre", sec:"ref", kind:"С нуля",
title:"Genre et pluriel des noms", ru:"Род и множественное число существительных", page:"",
theory:`
<p>Во французском два рода: <b>мужской</b> и <b>женский</b>. Среднего нет. И род часто <b>не совпадает</b> с русским — поэтому учи каждое слово с артиклем.</p>
${TBL(["Слово","Род во FR","В русском"],[[F("la mer"),Fe("ж."),"море — ср."],[F("la plage"),Fe("ж."),"пляж — м."],[F("le cinéma"),M("м."),"кино — ср."],[F("l’université"),Fe("ж."),"университет — м."],[F("la musique"),Fe("ж."),"музыка — ж."],[F("le pays"),M("м."),"страна — ж."],[F("la photo"),Fe("ж."),"фото — ср."]])}
<h3>Подсказки по окончаниям</h3>
${TBL(["Обычно женский","Обычно мужской"],[
[F("-tion, -sion")+": la nation, la natation",F("-ment")+": l’appartement"],
[F("-té")+": la nationalité, l’université",F("-age")+": le mariage (но "+F("la plage, l’image, la page")+"!)"],
[F("-ure")+": la culture, la voiture",F("-eau")+": le bureau (но "+F("l’eau")+" — ж.)"],
[F("-ie")+": la Russie, la boulangerie",F("-isme")+": le tourisme"],
[F("-ette, -ence, -ance")+": la France",F("-phone")+": le téléphone"],
["страны на -e: "+F("la Chine"),"слова на согласную: "+F("le sport, le film")]
])}
<h3>Множественное число</h3>
${TBL(["Правило","Примеры"],[
["обычно + s (не читается!)",F("le film → les films, la rue → les rues")],
["-eau, -eu → + x",F("le bureau → les bureaux, le neveu → les neveux")],
["-al → -aux",F("un journal → des journaux, un animal → des animaux")],
["-s, -x, -z → не меняются",F("le pays → les pays, le fils → les fils, le prix → les prix")],
["составные: обе части",F("le grand-père → les grands-pères, le petit-fils → les petits-fils")]
])}
${NOTE(`Исключение, которое может попасться: ${F("un festival → des festivals")} (не «festivaux»).`)}
${CMP("В русском число слышно по окончанию (фильм / фильмы).","В английском s слышно (film / films). Во французском <b>не слышно</b> — число узнаём по артиклю: [lə film] / [le film].")}
`,
ex:[
{t:"sort", h:"Мужской или женский?", cats:["masculin","féminin"], items:[["mer",1],["plage",1],["cinéma",0],["université",1],["appartement",0],["natation",1],["quartier",0],["photo",1],["pays",0],["nationalité",1],["mariage",0],["musique",1],["téléphone",0],["voiture",1]]},
{t:"fill", h:"Поставь во множественное число", items:[
{q:"le film → les ___", a:["films"]},{q:"le bureau → les ___", a:["bureaux"]},{q:"le neveu → les ___", a:["neveux"]},{q:"un journal → des ___", a:["journaux"]},{q:"le pays → les ___", a:["pays"]},{q:"le fils → les ___", a:["fils"]},{q:"le grand-père → les ___", a:["grands-pères"]},{q:"la rue → les ___", a:["rues"]}
]},
{t:"mc", h:"Ловушки", items:[
{q:"Слово «plage» —", o:["женского рода","мужского рода"], a:0, e:"la plage, хотя на -age."},
{q:"Как на слух понять, что «films» во мн.ч.?", o:["по артиклю les","по s на конце","никак"], a:0},
{q:"Множественное от «un festival»:", o:["des festivals","des festivaux"], a:0}
]}
]});

TOPICS.push({
id:"r-pronoms", sec:"ref", kind:"С нуля",
title:"Les pronoms personnels", ru:"Личные местоимения: je, tu, on… и moi, toi, lui…", page:"",
theory:`
${TBL(["Подлежащее","Ударная форма","RU","EN"],[
[F("je (j’)"),F("moi"),"я","I / me"],[F("tu"),F("toi"),"ты","you"],[F("il"),F("lui"),"он (и «оно» для вещей м.р.)","he / it"],[F("elle"),F("elle"),"она (и вещи ж.р.)","she / it"],[F("on"),F("—"),"мы (разг.), люди","we / one"],[F("nous"),F("nous"),"мы","we"],[F("vous"),F("vous"),"вы (вежл. и мн.ч.)","you"],[F("ils"),F("eux"),"они (м. или смешанная группа)","they"],[F("elles"),F("elles"),"они (только ж.)","they"]
])}
${RULE("il / elle для вещей",`<p>Нет «it» — вещи тоже «он» или «она» по роду: ${F("La rue ? Elle est calme.")} ${F("Le quartier ? Il est sympa.")}</p>`)}
${CMP("Как в русском: «Улица? Она тихая».","<i>It is quiet</i> — во французском it не существует.")}
${RULE("ils для смешанной группы",`<p>Даже если в группе 10 женщин и 1 мужчина — ${F("ils")}. ${F("elles")} — только если все женского рода.</p>`)}
<h3>Когда нужны ударные формы (moi, toi…)</h3>
${TBL(["Случай","Пример"],[["выделение",F("Moi, je suis russe. Lui, il est italien.")],["после et, aussi, non plus",F("Et toi ? — Moi aussi ! — Moi non plus.")],["после предлогов",F("avec moi, chez lui, pour elle, à toi")],["после c’est",F("C’est moi ! C’est lui.")],["одно слово в ответе",F("Qui parle français ? — Moi !")]])}
${NOTE(`${F("chez")} + ударное = «у кого-то дома»: ${F("chez moi")} — у меня дома; ${F("Chez lui, ils sont quatre.")} — У него в семье их четверо.`)}
`,
ex:[
{t:"fill", h:"Вставь ударное местоимение", items:[
{q:"Et ___ ? (ты)", a:["toi"]},{q:"J’habite avec ___. (он)", a:["lui"]},{q:"C’est ___ ! (я)", a:["moi"]},{q:"Chez ___, ils sont cinq. (они, м.)", a:["eux"]},{q:"– J’adore le ski ! – ___ aussi ! (я)", a:["Moi"]},{q:"Pour ___, c’est important. (она)", a:["elle"]}
]},
{t:"mc", h:"Выбери местоимение-подлежащее", items:[
{q:"Marie et Paul ? ___ habitent à Lyon.", o:["Ils","Elles","Eux"], a:0, e:"Смешанная группа → ils."},
{q:"La plage ? ___ est belle.", o:["Elle","Il","Lui"], a:0},
{q:"Anna et Léa ? ___ sont russes.", o:["Elles","Ils","Eux"], a:0},
{q:"Le piano ? ___ est à Julie.", o:["Il","Elle","Lui"], a:0},
{q:"On ___ français à Genève.", o:["parle","parlons","parlent"], a:0}
]}
]});

TOPICS.push({
id:"r-questions", sec:"ref", kind:"С нуля",
title:"Poser une question", ru:"Три способа задать вопрос и вопросительные слова", page:"",
theory:`
${TBL(["Способ","Стиль","Пример"],[
["1. Интонация ↗","разговорный",F("Tu habites à Paris ?")],
["2. Est-ce que","нейтральный, универсальный",F("Est-ce que tu habites à Paris ?")],
["3. Инверсия","письменный, вежливый",F("Habites-tu à Paris ?")]
])}
${SCALE([["Tu habites où ?","интонация"],["Où est-ce que tu habites ?","est-ce que"],["Où habites-tu ?","инверсия"]],["разговорно","официально"])}
${CMP("Способ 1 — как в русском: те же слова, только голос вверх в конце.","Способ 3 похож на английский (<i>Are you…?</i>): глагол перед подлежащим, через дефис.")}
${RULE("Est-ce que",`<p>«Est-ce que» [ɛskə] не переводится, это просто сигнал «сейчас будет вопрос», как русское «ли». Перед гласной → <b>est-ce qu’</b>: ${F("Est-ce qu’il parle anglais ?")}</p>`)}
${RULE("Инверсия и -t-",`<p>${F("Comment vous appelez-vous ?")} ${F("Parlez-vous français ?")}<br>Если глагол кончается на гласную, а дальше il/elle/on — вставляем <b>-t-</b> для благозвучия: ${F("Habite-t-il à Lyon ?")} ${F("Parle-t-elle anglais ?")} ${F("A-t-il un frère ?")}</p>`)}
<h3>Вопросительные слова</h3>
${TBL(["Слово","Значение","Пример"],[
[F("où"),"где, куда",F("Tu habites où ?")],
[F("d’où"),"откуда",F("Tu viens d’où ?")],
[F("quand"),"когда",F("Le festival, c’est quand ?")],
[F("comment"),"как",F("Comment tu t’appelles ?")],
[F("combien"),"сколько",F("Ça coûte combien ?")],
[F("pourquoi"),"почему → "+F("parce que")+" потому что",F("Pourquoi tu aimes Nice ? — Parce que j’adore la mer.")],
[F("qui"),"кто",F("Qui est-ce ? — C’est Paul.")],
[F("qu’est-ce que"),"что",F("Qu’est-ce que tu aimes ?")],
[F("quel / quelle…"),"какой",F("Quel est ton numéro ?")]
])}
<p>С вопросительным словом тоже три стиля: ${F("Tu habites où ?")} / ${F("Où est-ce que tu habites ?")} / ${F("Où habites-tu ?")}</p>
<h3>Oui, non… и si!</h3>
${RULE("Si — «да» на отрицательный вопрос",`<p>${F("Tu n’aimes pas le sport ? — Si, j’aime le sport !")} (Ты не любишь спорт? — Нет, люблю!)</p>`)}
${CMP("По-русски «нет, люблю» звучит путано. Во французском есть отдельное слово.","Похоже на <i>Yes, I do!</i> — но одно короткое si.")}
`,
ex:[
{t:"match", h:"Вопросительное слово → значение", pairs:[["où","где"],["quand","когда"],["comment","как"],["combien","сколько"],["pourquoi","почему"],["qui","кто"],["qu’est-ce que","что"]]},
{t:"fill", h:"Вставь вопросительное слово", items:[
{q:"___ tu habites ? — À Moscou.", a:["Où"]},{q:"___ tu t’appelles ? — Vlad.", a:["Comment"]},{q:"___ est-ce ? — C’est ma sœur.", a:["Qui"]},{q:"___ tu aimes Nice ? — Parce que j’adore la mer.", a:["Pourquoi"]},{q:"___ tu aimes ? — Le cinéma.", a:["Qu’est-ce que"]}
]},
{t:"mc", h:"Выбери правильный вариант", items:[
{q:"«Tu parles anglais ?» с est-ce que:", o:["Est-ce que tu parles anglais ?","Est-ce tu parles anglais ?","Est-ce que parles-tu anglais ?"], a:0},
{q:"«Il habite à Lyon ?» с инверсией:", o:["Habite-t-il à Lyon ?","Habite-il à Lyon ?","Il habite-t-il à Lyon ?"], a:0},
{q:"– Tu n’es pas russe ? – ___, je suis russe !", o:["Si","Oui","Non"], a:0},
{q:"«Est-ce que» перед il:", o:["Est-ce qu’il","Est-ce que il"], a:0}
]},
{t:"order", h:"Собери вопрос", items:[
{s:"Est-ce que tu aimes le cinéma ?", ru:"Ты любишь кино?"},
{s:"Comment vous appelez-vous ?", ru:"Как вас зовут? (формально)"},
{s:"Où est-ce que tu habites ?", ru:"Где ты живёшь?"}
]}
]});

TOPICS.push({
id:"r-negation", sec:"ref", kind:"С нуля",
title:"La négation", ru:"Отрицание: ne… pas, pas de и другие", page:"",
theory:`
${RULE("Основная схема",`<p><b>подлежащее + ne + глагол + pas</b></p>${EX([["Je ne parle pas italien.","Я не говорю по-итальянски."],["Il n’habite pas à Paris.","Он не живёт в Париже. (ne → n’ перед гласной)"],["Je ne m’appelle pas Paul.","Меня зовут не Поль. (m’ остаётся рядом с глаголом)"],["Je n’aime pas skier.","Я не люблю кататься на лыжах."]])}`)}
${FXS(FX(["~подлежащее","!ne","~глагол","!pas"]),FX(["Je","!ne","m’appelle","!pas","Paul."],"me/te/se остаются рядом с глаголом"))}
${RULE("pas de — главная ловушка",`<p>После отрицания <b>un / une / des</b> → <b>de / d’</b>:</p>${FX(["un · une · des","→","!de / d’"])}${TBL(["Утверждение","Отрицание"],[[F("J’ai un frère."),F("Je n’ai pas de frère.")],[F("J’ai une guitare."),F("Je n’ai pas de guitare.")],[F("J’ai des enfants."),F("Je n’ai pas d’enfants.")],[F("Il y a une plage."),F("Il n’y a pas de plage.")]])}`)}
${TBL(["Не меняется","Пример"],[["le / la / les",F("J’aime le ski. → Je n’aime pas le ski.")],["после être",F("C’est un piano. → Ce n’est pas un piano.")]])}
${CMP(`«У меня нет брата» — в русском тоже меняется форма (родительный падеж). Похожая логика: «нет + чего?» → pas de.`,`<i>I don’t have <b>a</b> brother / any brothers</i> → ${F("pas de frère")}.`)}
<h3>Другие отрицания (для справки)</h3>
${TBL(["Français","По-русски","Пример"],[[F("ne… jamais"),"никогда",F("Je ne skie jamais.")],[F("ne… plus"),"больше не",F("Il n’habite plus à Lyon.")],[F("ne… rien"),"ничего",F("Je ne comprends rien.")],[F("ne… personne"),"никого",F("Je ne connais personne.")]])}
${NOTE(`В разговоре французы часто глотают ne: «J’aime pas…», «C’est pas grave». На письме всегда пиши <b>ne… pas</b>.`)}
`,
ex:[
{t:"fill", h:"Сделай отрицательную фразу", items:[
{q:"J’ai un frère. →", a:["Je n’ai pas de frère"], long:true},
{q:"Il y a une plage. →", a:["Il n’y a pas de plage"], long:true},
{q:"Elle a des enfants. →", a:["Elle n’a pas d’enfants"], long:true},
{q:"Je m’appelle Paul. →", a:["Je ne m’appelle pas Paul"], long:true},
{q:"Nous aimons la danse. →", a:["Nous n’aimons pas la danse"], long:true},
{q:"C’est une guitare. →", a:["Ce n’est pas une guitare"], long:true}
]},
{t:"mc", h:"Выбери правильный вариант", items:[
{q:"Je n’ai pas ___ guitare.", o:["de","une","la"], a:0},
{q:"Il n’aime pas ___ musique.", o:["la","de","une"], a:0},
{q:"Je ___ habite pas à Nice.", o:["n’","ne"], a:0},
{q:"Где ошибка?", o:["Je ne pas parle anglais.","Je ne parle pas anglais.","Je n’aime pas le ski."], a:0, e:"pas стоит после глагола."}
]}
]});

TOPICS.push({
id:"r-cest", sec:"ref", kind:"С нуля",
title:"C’est, il est, il y a", ru:"Это… / Он есть… / Там есть…", page:"",
theory:`
<h3>Как выбрать</h3>
${FLOW([["Дальше идёт артикль + существительное, имя или moi/toi…?","c’est","C’est un acteur. C’est Paul. C’est moi !"],["Это оценка ситуации (super, beau, sympa)?","c’est","C’est super !"],["Дальше множественное число с артиклем?","ce sont","Ce sont les photos de Mira."]],["Прилагательное, профессия или национальность про конкретного человека","il / elle est","Il est acteur. Elle est française."])}
<h3>Подробно</h3>
${TBL(["Конструкция","+ что","Примеры"],[
[F("c’est"),"+ артикль + существительное",F("C’est un acteur. C’est la rue Mantega.")],
[F("c’est"),"+ имя",F("C’est Paul.")],
[F("c’est"),"+ ударное местоимение",F("C’est moi !")],
[F("c’est"),"+ прилагательное (оценка ситуации)",F("C’est super ! C’est beau ! C’est sympa !")],
[F("ce sont"),"+ мн.ч.",F("Ce sont les instruments de Julie.")],
[F("il / elle est"),"+ прилагательное, профессия, национальность — <b>без артикля</b>",F("Il est acteur. Elle est française. Il est sympa.")]
])}
${WARN(`✗ <i>Il est un acteur.</i> → ✓ ${F("C’est un acteur.")} или ✓ ${F("Il est acteur.")}`)}
${RULE("Il y a — «есть, имеется»",`<p>Неизменяемый оборот = <i>there is / there are</i>: ${F("À Nice, il y a la mer.")} ${F("Il y a des célébrités sur la fresque.")}</p><p>Отрицание: ${F("Il n’y a pas de plage.")} Вопрос: ${F("Qu’est-ce qu’il y a ?")} (Что там?)</p>`)}
${CMP("«В Ницце есть море» — без глагола-связки в русском, а во французском нужно il y a.","<i>There is / there are</i> — одна форма il y a для ед. и мн.ч.")}
`,
ex:[
{t:"mc", h:"C’est, il/elle est, ce sont или il y a?", items:[
{q:"___ un acteur.", o:["C’est","Il est"], a:0},
{q:"___ acteur.", o:["Il est","C’est"], a:0},
{q:"À Nice, ___ la mer.", o:["il y a","c’est","il est"], a:0},
{q:"Lina ? ___ très sympa !", o:["Elle est","C’est une"], a:0},
{q:"___ super !", o:["C’est","Il est"], a:0},
{q:"___ les photos de Mira.", o:["Ce sont","C’est","Il y a"], a:0},
{q:"Dans ma famille, ___ quatre personnes.", o:["il y a","ce sont","c’est"], a:0},
{q:"– Qui est-ce ? – ___ ma sœur.", o:["C’est","Elle est"], a:0}
]}
]});

TOPICS.push({
id:"r-er-ortho", sec:"ref", kind:"Полезно знать",
title:"Verbes en -er : particularités", ru:"Глаголы на -er с особенностями и возвратные глаголы", page:"",
theory:`
<p>Окончания у всех глаголов на -er одинаковые, но у некоторых чуть меняется основа — чтобы сохранить произношение.</p>
${TBL(["Тип","Что происходит","Пример"],[
["-ger","nous: + e перед -ons (иначе g прочиталось бы [g])",F("manger → nous mangeons, nager → nous nageons")],
["-cer","nous: c → ç (иначе [k])",F("commencer → nous commençons")],
["-eler","двойная l, где окончание немое",F("s’appeler → je m’appelle, nous nous appelons")],
["e / é → è","открытое è, где окончание немое",F("acheter → j’achète, nous achetons; préférer → je préfère, nous préférons")],
["-ier","ничего особенного, просто i + окончание",F("étudier → j’étudie, nous étudions; skier → je skie")]
])}
${RULE("«Ботинок»",`<p>Изменения у глаголов вроде acheter, préférer, s’appeler случаются в формах <b>je, tu, il, ils</b> (немое окончание) и не случаются у <b>nous, vous</b>. Если обвести эти четыре формы в таблице, получится форма ботинка — так проще запомнить.</p>`)}
${BOOTS(CJ2("préférer","предпочитать",["je préf<b>è</b>re","tu préf<b>è</b>res","il préf<b>è</b>re","nous préf<b>é</b>rons","vous préf<b>é</b>rez","ils préf<b>è</b>rent"],[0,1,2,5]),CJ2("acheter","покупать",["j’ach<b>è</b>te","tu ach<b>è</b>tes","il ach<b>è</b>te","nous achetons","vous achetez","ils ach<b>è</b>tent"],[0,1,2,5]),CJ2("s’appeler","называться",["je m’appe<b>ll</b>e","tu t’appe<b>ll</b>es","il s’appe<b>ll</b>e","nous nous appelons","vous vous appelez","ils s’appe<b>ll</b>ent"],[0,1,2,5]))}
${FXS(FX(["manger","→","!nous mangeons|e сохраняет звук [ʒ]"]),FX(["commencer","→","!nous commençons|ç сохраняет звук [s]"]))}
<h3>Возвратные глаголы (se + глагол)</h3>
<p>Как русское «-ся»: ${F("s’appeler")} — называться, ${F("se présenter")} — представляться, ${F("se lever")} — вставать. Местоимение меняется по лицу: ${F("je me, tu te, il se, nous nous, vous vous, ils se")}.</p>
${EX([["Je me présente : je m’appelle Anna.","Представлюсь: меня зовут Анна."],["Les personnes se présentent.","Люди представляются."]])}
`,
ex:[
{t:"fill", h:"Поставь в нужную форму", items:[
{q:"Nous ___ (nager)", a:["nageons"]},{q:"Nous ___ (commencer)", a:["commençons"]},{q:"J’___ (acheter)", a:["achète"]},{q:"Tu ___ (préférer)", a:["préfères"]},{q:"Vous ___ (préférer)", a:["préférez"]},{q:"Ils ___ (s’appeler)", a:["s’appellent"]},{q:"Nous ___ (manger)", a:["mangeons"]},{q:"J’___ (étudier)", a:["étudie"]}
]},
{t:"conj", h:"Проспрягай", items:[{v:"se présenter", p:P6, f:["me présente","te présentes","se présente","nous présentons","vous présentez","se présentent"]},{v:"acheter", p:P6j, f:["achète","achètes","achète","achetons","achetez","achètent"]}]}
]});

TOPICS.push({
id:"r-irreg", sec:"ref", kind:"Полезно знать",
title:"Aller, faire, venir", ru:"Ещё три неправильных глагола, которые пригодятся сразу", page:"Приложение «Conjugaisons», с. 168",
theory:`
<p>Они появятся в Unité 3–4, но уже встречаются в юнитах 1–2: ${F("Ça va ? Vous allez bien ?")}, ${F("faire du ski")}.</p>
${CJS(
CJ("aller","идти, ехать",["je <b>vais</b>","tu <b>vas</b>","il / elle / on <b>va</b>","nous <b>allons</b>","vous <b>allez</b>","ils / elles <b>vont</b>"]),
CJ("faire","делать",["je <b>fais</b>","tu <b>fais</b>","il / elle / on <b>fait</b>","nous <b>faisons</b>","vous <b>faites</b>","ils / elles <b>font</b>"]),
CJ("venir","приходить",["je <b>viens</b>","tu <b>viens</b>","il / elle / on <b>vient</b>","nous <b>venons</b>","vous <b>venez</b>","ils / elles <b>viennent</b>"])
)}
${RULE("Закономерности, которые облегчают жизнь",`<p>• Только три глагола кончаются на <b>-tes</b> у vous: ${F("vous êtes, vous faites, vous dites")}.<br>• Четвёрка на <b>-ont</b> у ils: ${F("ils sont, ils ont, ils vont, ils font")}.</p>`)}
<h3>Как использовать</h3>
${EX([["Je vais à Paris / en France / au cinéma.","aller + те же предлоги, что и habiter (à + le = au)"],["Je fais du ski. Elle fait de la danse.","faire de + спорт"],["Qu’est-ce que tu fais ?","Что ты делаешь?"],["Je viens de Russie / de Moscou.","Я из России / из Москвы"],["Il vient du Japon / des États-Unis.","de + le = du, de + les = des"]])}
${NOTE(`${F("nous faisons")} читается [fəzɔ̃] — «фёзон», а не «фэзон».`)}
`,
ex:[
{t:"conj", h:"Проспрягай", items:[
{v:"aller", p:P6, f:["vais","vas","va","allons","allez","vont"]},
{v:"faire", p:P6, f:["fais","fais","fait","faisons","faites","font"]},
{v:"venir", p:P6, f:["viens","viens","vient","venons","venez","viennent"]}
]},
{t:"mc", h:"Выбери правильный вариант", items:[
{q:"Je viens ___ Japon.", o:["du","de","des"], a:0},
{q:"Elle vient ___ Russie.", o:["de","du","des"], a:0},
{q:"Il vient ___ États-Unis.", o:["des","du","de"], a:0},
{q:"Vous ___ du sport ?", o:["faites","faisez","fais"], a:0},
{q:"Ils ___ au cinéma.", o:["vont","allent","vas"], a:0},
{q:"– Ça ___ ? – Oui, ça ___ bien.", o:["va / va","vas / va","allez / va"], a:0}
]}
]});

TOPICS.push({
id:"r-erreurs", sec:"ref", kind:"Полезно знать",
title:"Erreurs typiques", ru:"Типичные ошибки русскоговорящих — проверь себя", page:"",
theory:`
<div class="errs">
${[
["Je suis 20 ans.","J’ai 20 ans.","Возраст — через avoir."],
["Je suis un étudiant.","Je suis étudiant.","После être профессия без артикля."],
["J’aime sport.","J’aime le sport.","После aimer — всегда артикль."],
["Je aime. / Je ne aime pas.","J’aime. / Je n’aime pas.","Élision перед гласной."],
["J’habite en Japon.","J’habite au Japon.","Japon — м.р. → au."],
["J’habite à France.","J’habite en France.","à — только для городов."],
["Sa père, son mère","Son père, sa mère","Род по предмету, а не по владельцу."],
["Ma amie","Mon amie","Перед гласной — mon."],
["Je n’ai pas un frère.","Je n’ai pas de frère.","После отрицания un/une/des → de."],
["Elle est français.","Elle est française.","Согласуй национальность."],
["Je parle Français. Lundi, Janvier","Je parle français. lundi, janvier","Языки, дни, месяцы — с маленькой."],
["quatre-vingt (80), quatre-vingts-un (81)","quatre-vingts, quatre-vingt-un","s только у ровного 80."],
["Il est un acteur.","C’est un acteur. / Il est acteur.","il est + артикль нельзя."],
["Comment tu appelles ?","Comment tu t’appelles ?","Не теряй возвратное te."],
["On habitons à Lyon.","On habite à Lyon.","on + форма il."],
["Ils parlent → «парлан»","[il paʁl]","-ent в глаголах не читается."],
["Nom = имя","nom = фамилия, prénom = имя","Ложный друг."],
["Quel est ta adresse ?","Quelle est ton adresse ?","adresse — ж.р. (quelle), но на гласную (ton)."]
].map(([w,r,e])=>`<div class="err"><p class="err-w"><span class="fr">${w}</span></p><p class="err-r"><span class="fr">${r}</span></p><p class="err-e">${e}</p></div>`).join('')}
</div>
`,
ex:[
{t:"mc", h:"Найди правильное предложение", items:[
{q:"Возраст", o:["J’ai dix-neuf ans.","Je suis dix-neuf ans.","J’ai dix-neuf."], a:0},
{q:"Профессия", o:["Ma mère est professeure.","Ma mère est une professeure.","Mon mère est professeure."], a:0},
{q:"Вкусы", o:["Tu aimes la musique ?","Tu aimes musique ?","Tu aimes une musique ?"], a:0},
{q:"Страна", o:["Elle habite au Canada.","Elle habite en Canada.","Elle habite à Canada."], a:0},
{q:"Семья", o:["Je n’ai pas de sœur.","Je n’ai pas une sœur.","Je ne ai pas de sœur."], a:0},
{q:"Притяжательное", o:["Paul et sa sœur","Paul et son sœur","Paul et ses sœur"], a:0},
{q:"Подруга", o:["mon amie Lina","ma amie Lina","m’amie Lina"], a:0},
{q:"on", o:["On parle français.","On parlons français.","On parlent français."], a:0}
]},
{t:"tf", h:"Предложение правильное?", items:[
{q:"Elle est italienne.", a:true},
{q:"Il est un informaticien.", a:false, e:"Il est informaticien / C’est un informaticien."},
{q:"J’habite à Moscou, en Russie.", a:true},
{q:"Quel est ton adresse ?", a:false, e:"Quelle est ton adresse ?"},
{q:"Nous nous appelons Léa et Tom.", a:true},
{q:"Je parle Anglais.", a:false, e:"anglais — с маленькой."}
]}
]});

TOPICS.push({
id:"r-consignes", sec:"ref", kind:"Полезно знать",
title:"Les consignes", ru:"Задания на французском: пойми, что от тебя хотят", page:"",
theory:`
<p>Задания в тесте, скорее всего, будут на французском — как в учебнике. Вот всё, что встречается.</p>
${TBL(["Consigne","Что сделать"],[
[F("Complétez (avec…)"),"Дополните (словами…)"],
[F("Choisissez la bonne réponse."),"Выберите правильный ответ."],
[F("Associez. / Reliez."),"Соедините."],
[F("Conjuguez les verbes."),"Проспрягайте / поставьте глаголы в нужную форму."],
[F("Accordez l’adjectif (si nécessaire)."),"Согласуйте прилагательное (если нужно)."],
[F("Mettez au féminin / au pluriel."),"Поставьте в женский род / во мн.ч."],
[F("Mettez à la forme négative."),"Поставьте в отрицательную форму."],
[F("Transformez."),"Преобразуйте."],
[F("Répondez aux questions."),"Ответьте на вопросы."],
[F("Vrai ou faux ?"),"Верно или неверно?"],
[F("Cochez la bonne réponse."),"Отметьте правильный ответ (галочкой)."],
[F("Soulignez."),"Подчеркните."],
[F("Entourez."),"Обведите."],
[F("Classez (dans le tableau)."),"Распределите (по таблице)."],
[F("Trouvez / Retrouvez."),"Найдите."],
[F("Écrivez (en lettres)."),"Напишите (словами)."],
[F("Remettez dans l’ordre."),"Расставьте по порядку."],
[F("Corrigez les erreurs."),"Исправьте ошибки."],
[F("Barrez l’intrus."),"Вычеркните лишнее."],
[F("Observez. / Lisez. / Écoutez."),"Рассмотрите. / Прочитайте. / Послушайте."],
[F("Comme dans l’exemple."),"Как в примере."],
[F("Plusieurs réponses possibles."),"Возможны несколько ответов."]
])}
<h3>Если что-то непонятно — спроси</h3>
${TBL(["Français","По-русски"],[[F("Excusez-moi, j’ai une question."),"Извините, у меня вопрос."],[F("Qu’est-ce que ça veut dire ?"),"Что это значит?"],[F("Comment ça s’écrit ?"),"Как это пишется?"],[F("Vous pouvez répéter, s’il vous plaît ?"),"Можете повторить?"],[F("Plus lentement, s’il vous plaît."),"Помедленнее, пожалуйста."],[F("Je ne comprends pas."),"Я не понимаю."],[F("Je ne sais pas."),"Я не знаю."]])}
`,
ex:[
{t:"match", h:"Соедини задание и перевод", pairs:[["Complétez.","Дополните."],["Choisissez la bonne réponse.","Выберите правильный ответ."],["Associez.","Соедините."],["Conjuguez les verbes.","Поставьте глаголы в нужную форму."],["Mettez au féminin.","Поставьте в женский род."],["Soulignez.","Подчеркните."],["Cochez.","Отметьте галочкой."],["Barrez l’intrus.","Вычеркните лишнее."]]},
{t:"mc", h:"Что от тебя хотят?", items:[
{q:"Mettez à la forme négative : « J’aime le ski. »", o:["Je n’aime pas le ski.","J’aime le ski ?","Nous aimons le ski."], a:0},
{q:"Accordez l’adjectif : « Elle est allemand… »", o:["allemande","allemand","allemands"], a:0},
{q:"Écrivez en lettres : 80", o:["quatre-vingts","80","huitante"], a:0},
{q:"Mettez au pluriel : « le film »", o:["les films","le films","les film"], a:0}
]}
]});
