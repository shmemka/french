/* ===== helpers for theory markup ===== */
const EX = arr => `<ul class="exl">${arr.map(([a,b])=>`<li><span class="fr">${a}</span>${b?`<span class="tr">${b}</span>`:''}</li>`).join('')}</ul>`;
const TBL = (head, rows, cls='') => `<div class="tblw"><table class="tbl ${cls}">${head.some(h=>h)?`<thead><tr>${head.map(h=>`<th>${h}</th>`).join('')}</tr></thead>`:''}<tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const CJ = (verb, ru, rows) => `<div class="cj"><div class="cj-h"><span class="fr">${verb}</span><span class="cj-ru">${ru}</span></div>${rows.map(r=>`<div class="cj-r"><span class="fr">${r}</span></div>`).join('')}</div>`;
const CJS = (...tables) => `<div class="cjs">${tables.join('')}</div>`;
const RULE = (t, h) => `<div class="rule"><div class="rule-t">${t}</div>${h}</div>`;
const NOTE = h => `<div class="note"><span class="note-t">Au fait !</span> ${h}</div>`;
const WARN = h => `<div class="warn"><span class="warn-t">Attention !</span> ${h}</div>`;
const CMP = (ru, en) => `<div class="cmp">${ru?`<p><span class="lang">RU</span><span>${ru}</span></p>`:''}${en?`<p><span class="lang">EN</span><span>${en}</span></p>`:''}</div>`;
const F = s => `<span class="fr">${s}</span>`;
const M = s => `<span class="g-m">${s}</span>`, Fe = s => `<span class="g-f">${s}</span>`, P = s => `<span class="g-pl">${s}</span>`;

const P6 = ["je","tu","il/elle/on","nous","vous","ils/elles"];
const P6j = ["j’","tu","il/elle/on","nous","vous","ils/elles"];

const TOPICS = [];

/* =========================================================
   UNITÉ 0 — БАЗА
   ========================================================= */
TOPICS.push({
id:"u0-contact", sec:"book", unit:"0", kind:"Communication",
title:"Bonjour, ça va ?", ru:"Приветствия, tu и vous, алфавит, местоимения, фразы на уроке", page:"Unité 0, с. 12–13, 16",
theory:`
<h3>Поздороваться и попрощаться</h3>
${TBL(["Français","По-русски","Когда"],[
[F("Bonjour (madame / monsieur) !"),"Здравствуйте / Добрый день","нейтрально, всегда уместно"],
[F("Salut !"),"Привет! / Пока!","неформально (fam.), и при встрече, и при прощании"],
[F("Bonsoir !"),"Добрый вечер","вечером"],
[F("Au revoir !"),"До свидания","нейтрально"],
[F("À bientôt ! / À plus !"),"До скорого! / Увидимся!","À plus — разговорное"],
[F("À demain ! / À lundi !"),"До завтра! / До понедельника!","à + день"],
[F("Bonne journée !"),"Хорошего дня!",""],
[F("Merci !"),"Спасибо!",""]
])}
${VS({h:"Formel · нейтрально",big:F("Bonjour, madame.")+"<br>"+F("Vous allez bien ?")+"<br>"+F("Au revoir !"),sub:"с незнакомыми, на работе, с преподавателем"},{h:"Familier · по-дружески",big:F("Salut !")+"<br>"+F("Ça va ?")+"<br>"+F("À plus !"),sub:"с друзьями, семьёй, ровесниками"})}
<h3>Как дела?</h3>
${EX([["– Ça va ? – Oui, ça va, et toi ? – Ça va bien, merci !","– Как дела? – Хорошо, а у тебя? – Хорошо, спасибо!"],["– Vous allez bien ? – Très bien, merci. Et vous ?","– Как вы поживаете? – Очень хорошо, спасибо. А вы?"],["– Tu vas bien ? – Oui, merci.","– Ты в порядке? – Да, спасибо."]])}
<h3>Tu или vous?</h3>
${FLOW([["Говоришь сразу с несколькими людьми?","vous","Vous allez bien, les amis ?"],["Это незнакомый человек, преподаватель, кто-то старше по статусу?","vous","Bonjour, madame. Vous allez bien ?"]],["Семья, друг, ребёнок","tu","Salut ! Tu vas bien ?"])}
${CMP("Ровно как «ты / вы» в русском.","")}
${NOTE("Je dis <b>vous</b> quand je ne connais pas la personne ou pour être poli(e). Je dis <b>tu</b> à ma famille, à un(e) ami(e) ou à un enfant. Во Франции друзья и родные делают <b>la bise</b> (целуются в щёку), незнакомым пожимают руку.")}
<h3>Знакомство</h3>
${EX([["– Bonjour, je m’appelle Alex, et vous ?","– Здравствуйте, меня зовут Алекс, а вас?"],["– Moi, je m’appelle Élisa.","– А меня — Элиза."]])}
<h3>Личные местоимения</h3>
<p>Во французском глагол <b>никогда</b> не стоит без подлежащего: нельзя сказать просто «parle», только ${F("je parle")}. Для выделения («а я…», «а ты?») есть ударные формы:</p>
${TBL(["Подлежащее","Ударная форма","Пример"],[
[F("je (j’)"),F("moi"),F("Moi, je suis russe.")],
[F("tu"),F("toi"),F("Et toi ?")],
[F("il / elle"),F("lui / elle"),F("Lui, il est italien.")],
[F("nous"),F("nous"),F("Nous, nous habitons à Nice.")],
[F("vous"),F("vous"),F("Et vous ?")],
[F("ils / elles"),F("eux / elles"),F("Eux, ils parlent anglais.")]
])}
<h3>Алфавит</h3>
<p>Нажимай на буквы, чтобы услышать. Главная ловушка — <b>G</b> [ʒe] и <b>J</b> [ʒi]: их легко перепутать, когда диктуешь имя или e-mail.</p>
<div class="abc">${[["A","а"],["B","бэ"],["C","сэ"],["D","дэ"],["E","ё (ə)"],["F","эф"],["G","жэ"],["H","аш"],["I","и"],["J","жи"],["K","ка"],["L","эль"],["M","эм"],["N","эн"],["O","о"],["P","пэ"],["Q","кю"],["R","эр"],["S","эс"],["T","тэ"],["U","ю (ü)"],["V","вэ"],["W","дубль-вэ"],["X","икс"],["Y","игрэк"],["Z","зэд"]].map(([l,r])=>`<span class="abc-l fr" data-say="${l.toLowerCase()}"><b>${l}</b><i>${r}</i></span>`).join('')}</div>
<h3>Фразы на уроке (с. 16)</h3>
${TBL(["Français","По-русски"],[
[F("S’il vous plaît ? / S’il te plaît ?"),"Пожалуйста (просьба)"],
[F("Pardon. / Excusez-moi. / Excuse-moi."),"Извините / Извини"],
[F("Comment ça s’écrit ?"),"Как это пишется?"],
[F("Vous pouvez répéter, s’il vous plaît ?"),"Можете повторить, пожалуйста?"],
[F("Excusez-moi, je suis en retard."),"Извините, я опоздал(а)."],
[F("Je ne comprends pas."),"Я не понимаю."],
[F("Comment on dit… en français ?"),"Как сказать… по-французски?"]
])}
`,
ex:[
{t:"match", h:"Соедини французскую фразу с переводом", pairs:[["Salut !","Привет! (неформально)"],["Au revoir !","До свидания!"],["À demain !","До завтра!"],["À bientôt !","До скорого!"],["Bonne journée !","Хорошего дня!"],["Ça va ?","Как дела?"],["Je ne comprends pas.","Я не понимаю."],["Comment ça s’écrit ?","Как это пишется?"]]},
{t:"mc", h:"Tu или vous? Как обратиться…", items:[
{q:"…к своему другу Пьеру", o:["tu","vous"], a:0, e:"Друг — на «ты»."},
{q:"…к преподавательнице, мадам Атал", o:["tu","vous"], a:1, e:"Преподаватель — вежливое vous."},
{q:"…к ребёнку пяти лет", o:["tu","vous"], a:0, e:"К детям обращаются на tu."},
{q:"…к незнакомому человеку на улице", o:["tu","vous"], a:1, e:"Незнакомому — vous."},
{q:"…к группе из трёх друзей", o:["tu","vous"], a:1, e:"Ловушка! Друзья, но их несколько — vous = «вы» во множественном числе."},
{q:"…к своей бабушке", o:["tu","vous"], a:0, e:"Семье говорят tu."}
]},
{t:"mc", h:"Выбери правильное слово", items:[
{q:"– Salut Carla ! Ça va ? – Oui, ça va, et ___ ?", o:["toi","vous","moi"], a:0, e:"Ответ другу (Salut = неформально) → et toi ?"},
{q:"– Bonjour, monsieur Morel, vous allez bien ? – Très bien, merci. Et ___ ?", o:["toi","vous","tu"], a:1, e:"Разговор на vous → Et vous ?"},
{q:"___, je m’appelle Hugo.", o:["Moi","Je","Me"], a:0, e:"Для выделения перед je ставим ударное moi."},
{q:"– Bonjour, je m’appelle Lina, et ___ ?", o:["tu","toi","te"], a:1, e:"После et — ударная форма: et toi ?"},
{q:"Comment on ___ « кошка » en français ?", o:["dit","parle","écrit"], a:0, e:"Comment on dit… ? — Как сказать…?"},
{q:"Vous pouvez ___, s’il vous plaît ?", o:["répéter","comprendre","appeler"], a:0, e:"Vous pouvez répéter ? — Можете повторить?"}
]},
{t:"mc", h:"Алфавит: как называется буква?", items:[
{q:"Буква J", o:["[жи]","[жэ]","[джей]"], a:0, e:"J = [ʒi] «жи»."},
{q:"Буква G", o:["[жэ]","[джи]","[гэ]"], a:0, e:"G = [ʒe] «жэ»."},
{q:"Буква E", o:["[ё] (ə)","[и]","[э]"], a:0, e:"E = [ə]. А «и» — это буква I."},
{q:"Буква H", o:["[аш]","[эйч]","[ха]"], a:0, e:"H = [aʃ] «аш»."},
{q:"Буква U", o:["[ю] (ü)","[у]","[ю: как you]"], a:0, e:"U = [y] — губы как на «у», язык как на «и»."},
{q:"Буква Y", o:["[игрэк]","[уай]","[и]"], a:0, e:"Y = i grec, «греческая i»."}
]},
{t:"fill", h:"Вставь ударное местоимение (moi, toi, lui, elle, nous, vous, eux, elles)", items:[
{q:"Je m’appelle Léo. Et ___ ? (ты)", a:["toi"]},
{q:"___, il est italien. (он)", a:["Lui"]},
{q:"___, nous sommes russes. (мы)", a:["Nous"]},
{q:"– Ça va ? – Ça va bien, et ___ ? (вы)", a:["vous"]},
{q:"___, ils habitent à Lyon. (они, м.)", a:["Eux"]},
{q:"___, je parle anglais. (я)", a:["Moi"]}
]}
]});

TOPICS.push({
id:"u0-dates", sec:"book", unit:"0", kind:"Vocabulaire",
title:"Aujourd’hui, c’est le…", ru:"Дни недели, месяцы, как сказать дату", page:"Unité 0, с. 15",
theory:`
<h3>Les jours de la semaine — дни недели</h3>
<div class="week">${[["lundi","пн"],["mardi","вт"],["mercredi","ср"],["jeudi","чт"],["vendredi","пт"],["samedi","сб"],["dimanche","вс"]].map(([d,r],k)=>`<div class="wd${k>4?" we":""}"><span class="fr">${d}</span><small>${r}</small></div>`).join("")}</div>
<p class="hint-l">Подсказка: lundi — Lune (Луна), mardi — Mars, mercredi — Mercure, jeudi — Jupiter, vendredi — Vénus.</p>
<h3>Les mois de l’année — месяцы</h3>
<div class="seasons">${[["l’hiver","зима",[["décembre","декабрь"],["janvier","январь"],["février","февраль"]]],["le printemps","весна",[["mars","март (s читается)"],["avril","апрель"],["mai","май"]]],["l’été","лето",[["juin","июнь"],["juillet","июль"],["août","август [ut]"]]],["l’automne","осень",[["septembre","сентябрь"],["octobre","октябрь"],["novembre","ноябрь"]]]].map(([s,r,ms],k)=>`<div class="ss s${k}"><h5><span class="fr">${s}</span><small>${r}</small></h5>${ms.map(([m,mr])=>`<p><span class="fr">${m}</span><small>${mr}</small></p>`).join("")}</div>`).join("")}</div>
${CMP(`Дни и месяцы пишутся с маленькой буквы — как в русском.`,``)}
<h3>Как сказать дату</h3>
${FXS(FX(["le","+","~21|число","+","octobre|месяц","+","~2026|год"],"le vingt et un octobre deux mille vingt-six"),FX(["le","+","!premier|1<sup>er</sup>","+","mai"],"только первое число — порядковое"))}
${RULE("Формула",`<p><b>le + число + месяц (+ год)</b>: ${F("le 2 décembre")}, ${F("le 14 juillet 1789")}. Числа обычные (количественные).</p><p>Исключение — первое число: <b>le 1<sup>er</sup> = le premier</b>: ${F("le premier mai")}.</p>`)}
${EX([["Aujourd’hui, c’est mardi. Demain, c’est mercredi.","Сегодня вторник. Завтра среда."],["Quelle est la date aujourd’hui ? – C’est le 21 octobre.","Какое сегодня число? – 21 октября."],["Je suis né le 26 janvier 1999.","Я родился 26 января 1999 года."]])}
<h3>Французские праздники из учебника</h3>
${TBL(["Праздник","Дата"],[[F("la fête du Travail"),F("le premier mai")],[F("la fête de la Musique"),F("le vingt et un juin")],[F("la Fête nationale"),F("le quatorze juillet")],[F("le Mardi gras"),"февраль–март, дата меняется"]])}
<h3>Произношение: deux, trois, six, dix + месяц</h3>
<p>Перед гласной конечная согласная читается как [z]: ${F("le deux avril")} [døzavʁil], ${F("le trois octobre")}, ${F("le six août")}, ${F("le dix avril")}. Перед согласной — не читается: ${F("le deux janvier")}, ${F("le six février")} [si], ${F("le dix mai")} [di].</p>
`,
ex:[
{t:"cards", h:"Карточки: дни и месяцы", items:[["lundi","понедельник"],["mardi","вторник"],["mercredi","среда"],["jeudi","четверг"],["vendredi","пятница"],["samedi","суббота"],["dimanche","воскресенье"],["janvier","январь"],["février","февраль"],["mars","март"],["avril","апрель"],["mai","май"],["juin","июнь"],["juillet","июль"],["août","август"],["septembre","сентябрь"],["octobre","октябрь"],["novembre","ноябрь"],["décembre","декабрь"]]},
{t:"mc", h:"Выбери правильный ответ", items:[
{q:"Aujourd’hui, c’est lundi. Demain, c’est…", o:["mardi","mercredi","dimanche"], a:0},
{q:"Aujourd’hui, c’est samedi. Demain, c’est…", o:["dimanche","vendredi","lundi"], a:0},
{q:"Le mois après juin, c’est…", o:["juillet","août","mai"], a:0, e:"juin → juillet (не путай: juin — июнь, juillet — июль)."},
{q:"Le 1<sup>er</sup> mai se dit…", o:["le premier mai","le un mai","le première mai"], a:0, e:"1er = premier (mai — мужской род)."},
{q:"La Fête nationale française, c’est…", o:["le 14 juillet","le 1er mai","le 21 juin"], a:0},
{q:"Как правильно написать?", o:["le 3 octobre","le 3 Octobre","le trois d’octobre"], a:0, e:"Месяц с маленькой буквы, без de."}
]},
{t:"fill", h:"Напиши дату словами (например: 2/03 → le deux mars)", items:[
{q:"14/07 →", a:["le quatorze juillet"], long:true},
{q:"1/05 →", a:["le premier mai"], long:true},
{q:"21/06 →", a:["le vingt et un juin","le vingt-et-un juin"], long:true},
{q:"25/12 →", a:["le vingt-cinq décembre"], long:true},
{q:"8/08 →", a:["le huit août"], long:true},
{q:"16/02 →", a:["le seize février"], long:true}
]},
{t:"tf", h:"Произношение: верно или неверно?", items:[
{q:"В «le deux avril» мы слышим [z] между deux и avril.", a:true, e:"Перед гласной x читается как [z]."},
{q:"В «le six février» x читается как [z].", a:false, e:"Перед согласной x не читается: [si fevʁije]."},
{q:"В «le dix mai» x не читается.", a:true},
{q:"В «le trois octobre» s читается как [z].", a:true}
]}
]});

/* =========================================================
   UNITÉ 1 — JE SUIS…
   ========================================================= */
TOPICS.push({
id:"u1-verbes", sec:"book", unit:"1", kind:"Grammaire",
title:"Être, avoir, s’appeler, parler", ru:"Четыре главных глагола для знакомства", page:"с. 18–19, 26",
theory:`
<p>Это первые глаголы учебника, и без них не обойтись ни в одном разговоре. Их формы нужно знать наизусть: выпишешь таблицы — уже половина успеха.</p>
${CJS(
CJ("être","быть / to be",["je <b>suis</b>","tu <b>es</b>","il / elle / on <b>est</b>","nous <b>sommes</b>","vous <b>êtes</b>","ils / elles <b>sont</b>"]),
CJ("avoir","иметь / to have",["j’<b>ai</b>","tu <b>as</b>","il / elle / on <b>a</b>","nous <b>avons</b>","vous <b>avez</b>","ils / elles <b>ont</b>"]),
CJ("s’appeler","называться, зваться",["je <b>m’appelle</b>","tu <b>t’appelles</b>","il / elle / on <b>s’appelle</b>","nous <b>nous appelons</b>","vous <b>vous appelez</b>","ils / elles <b>s’appellent</b>"]),
CJ("parler","говорить",["je parl<b>e</b>","tu parl<b>es</b>","il / elle / on parl<b>e</b>","nous parl<b>ons</b>","vous parl<b>ez</b>","ils / elles parl<b>ent</b>"])
)}
<h3>Être — национальность, профессия, характеристика</h3>
${EX([["Je suis russe.","Я русский."],["Tu es hollandaise ?","Ты голландка?"],["Il est étudiant.","Он студент."],["Vous êtes italien, Enzo ?","Вы итальянец, Энцо?"]])}
${CMP(`Как в русском: «Я студент» — без артикля. ${F("Je suis étudiant.")}`,``)}
<h3>Avoir — возраст!</h3>
${VS({h:"✗ ошибка",big:"<s>Je suis 20 ans</s>",sub:"возраст не через être",tone:"bad"},{h:"✓ по-французски",big:F("J’ai 20 ans."),sub:"«у меня 20 лет» — avoir + число + ans",tone:"good"})}
${RULE("Возраст = avoir + число + ans",`<p>${F("J’ai 30 ans.")} — буквально «у меня 30 лет». ${F("Tu as quel âge ? / Vous avez quel âge ?")} — Сколько тебе/вам лет?</p>`)}
<h3>S’appeler — возвратный глагол</h3>
${FXS(FX(["je","+","!m’|себя","+","appelle|называю"],"= меня зовут, «я себя называю»"),FX(["~-ся","↔","!me · te · se · nous · vous · se"],"возвратная частица меняется по лицам"))}
<p>Буквально «называть себя»: ${F("je m’appelle")} = «я себя называю». Частички <b>me, te, se, nous, vous, se</b> — это русское «-ся»: зваться, называться.</p>
${WARN(`Двойная <b>ll</b> в формах je, tu, il, ils (там слышно [ɛl]): ${F("je m’appelle, ils s’appellent")}. Одна <b>l</b> у nous и vous (там [ə]): ${F("nous nous appelons, vous vous appelez")}.`)}
${EX([["Comment tu t’appelles ? – Je m’appelle Andrea.","Как тебя зовут? – Меня зовут Андреа."],["Comment vous vous appelez ?","Как вас зовут?"],["Elle s’appelle Sanae.","Её зовут Санаэ."]])}
<h3>Parler + язык</h3>
<p>После parler язык обычно <b>без артикля</b>: ${F("Je parle français.")} ${F("Il parle quatre langues.")} Названия языков — с маленькой буквы.</p>
<h3>Не перепутай на слух</h3>
${VS({h:"être · они есть",big:F("ils sont"),sub:"[il<b>s</b>ɔ̃] — глухое [s]"},{h:"avoir · у них есть",big:F("ils‿ont"),sub:"[il<b>z</b>ɔ̃] — звонкое [z]"})}
${NOTE("je → j’ перед гласной: <b>j’ai</b>, но <b>je suis</b>. Это называется élision — подробнее в разделе «Для справки».")}
`,
ex:[
{t:"conj", h:"Проспрягай глаголы", items:[
{v:"être", p:P6, f:["suis","es","est","sommes","êtes","sont"]},
{v:"avoir", p:P6j, f:["ai","as","a","avons","avez","ont"]},
{v:"s’appeler", p:P6, f:["m’appelle","t’appelles","s’appelle","nous appelons","vous appelez","s’appellent"]},
{v:"parler", p:P6, f:["parle","parles","parle","parlons","parlez","parlent"]}
]},
{t:"mc", h:"Être или avoir? Выбери форму", items:[
{q:"Lars ___ 52 ans.", o:["a","est"], a:0, e:"Возраст — avoir."},
{q:"Nous ___ italiens.", o:["sommes","avons"], a:0, e:"Национальность — être."},
{q:"Vous ___ quel âge ?", o:["avez","êtes"], a:0, e:"Vous avez quel âge ?"},
{q:"Tu ___ hollandaise ?", o:["es","as"], a:0},
{q:"Ils ___ 30 ans.", o:["ont","sont"], a:0, e:"ils ont [ilzɔ̃] — возраст через avoir."},
{q:"Je ___ étudiant.", o:["suis","ai"], a:0},
{q:"Elles ___ un frère.", o:["ont","sont"], a:0},
{q:"Vous ___ allemand, monsieur ?", o:["êtes","avez"], a:0}
]},
{t:"fill", h:"Поставь глагол в нужную форму", items:[
{q:"Elle ___ Giulia. (s’appeler)", a:["s’appelle"]},
{q:"Comment vous ___ ? (s’appeler)", a:["vous appelez"]},
{q:"Je ___ Vlad. (s’appeler)", a:["m’appelle"]},
{q:"Ils ___ Enzo et Lars. (s’appeler)", a:["s’appellent"]},
{q:"Vous ___ anglais ? (parler)", a:["parlez"]},
{q:"Nous ___ français. (parler)", a:["parlons"]},
{q:"Tu ___ quel âge ? (avoir)", a:["as"]},
{q:"Alice et Giulia ___ allemande et italienne. (être)", a:["sont"]}
]},
{t:"order", h:"Собери фразу", items:[
{s:"Je m’appelle Lars et j’ai 52 ans.", ru:"Меня зовут Ларс, мне 52 года."},
{s:"Vous avez quel âge ?", ru:"Сколько вам лет?"},
{s:"Elle est italienne et elle parle anglais.", ru:"Она итальянка и говорит по-английски."},
{s:"Comment tu t’appelles ?", ru:"Как тебя зовут?"}
]},
{t:"fill", h:"Переведи на французский", items:[
{q:"Мне 19 лет.", a:["J’ai 19 ans","J’ai dix-neuf ans"], long:true},
{q:"Я студент.", a:["Je suis étudiant"], long:true, e:"Без артикля!"},
{q:"Как вас зовут?", a:["Comment vous vous appelez ?","Vous vous appelez comment ?","Comment vous appelez-vous ?"], long:true},
{q:"Они (м.) говорят по-французски.", a:["Ils parlent français"], long:true},
{q:"Ты русская?", a:["Tu es russe ?"], long:true}
]}
]});

TOPICS.push({
id:"u1-presenter", sec:"book", unit:"1", kind:"Communication",
title:"Se présenter", ru:"Рассказать о себе, личные данные, контакты, документы", page:"с. 18–20, 25–27, 30",
theory:`
<h3>Вопросы и ответы о себе</h3>
${TBL(["На «ты»","На «вы»","Ответ"],[
[F("Comment tu t’appelles ?"),F("Comment vous vous appelez ?"),F("Je m’appelle Juliette.")],
[F("Tu es hollandais(e) ?"),F("Vous êtes hollandais(e) ?"),F("Non, je suis italien(ne).")],
[F("Tu as quel âge ?"),F("Vous avez quel âge ?"),F("J’ai 23 ans.")],
[F("Tu habites où ?"),F("Vous habitez où ?"),F("J’habite à Moscou, en Russie.")],
[F("Tu es né(e) où ?"),F("Vous êtes né(e) où ?"),F("Je suis né(e) à Kazan.")],
[F("Tu parles quelles langues ?"),F("Vous parlez quelles langues ?"),F("Je parle russe et anglais.")],
[F("Quel est ton numéro de téléphone ?"),F("Quel est votre numéro ?"),F("C’est le 06 80 72 86 45.")],
[F("Quel est ton mail ?"),F("Quelle est votre adresse mail ?"),F("C’est juliette.baldi@gmail.com.")],
[F("Tu as Instagram ?"),F("Vous avez Facebook ?"),F("Oui !")]
])}
${NOTE(`<b>né</b> (м.) / <b>née</b> (ж.): ${F("Il est né le 27 septembre 1955 à Washington.")} ${F("Elle est née à Sion, en Suisse.")} Пока просто запомни как готовую фразу.`)}
<h3>L’identité — личные данные</h3>
<div class="idcard"><div class="id-t"><span>Fiche d’identité</span><span>пример анкеты</span></div>${[["Nom","фамилия!","BALDI"],["Prénom","имя","Juliette"],["Date de naissance","дата рождения","26/01/1999"],["Lieu de naissance","место рождения","Paris"],["Nationalité","национальность","française"],["Ville","город","Angoulême"],["Adresse mail","e-mail","juliette.baldi@gmail.com",1],["Numéro de téléphone","телефон","06 80 72 86 45",1]].map(([l,r,v,w])=>`<div class="id-f${w?" wide":""}"><span class="lab"><span class="fr">${l}</span> · ${r}</span><b>${v}</b></div>`).join("")}</div>
${TBL(["Français","По-русски"],[
[F("le nom"),"<b>фамилия</b> (!)"],[F("le prénom"),"имя"],[F("la date de naissance"),"дата рождения"],[F("le lieu de naissance"),"место рождения"],[F("le pays / la ville"),"страна / город"],[F("les coordonnées (f.)"),"контактные данные"],[F("l’adresse mail (f.), le mail"),"адрес эл. почты"],[F("le compte Facebook / Instagram"),"аккаунт"],[F("le numéro de téléphone"),"номер телефона"]
])}
${WARN(`${F("le nom")} — это <b>фамилия</b>, а не имя! Имя — ${F("le prénom")}. В анкете: Nom : Gainsbourg, Prénom : Charlotte.`)}
<h3>Как продиктовать e-mail и телефон</h3>
${FXS(FX(["juliette","!.|point","baldi","!@|arobase","gmail","!.|point","com"],"juliette point baldi arobase gmail point com"),FX(["!-|tiret","!_|tiret du bas"],"дефис и нижнее подчёркивание"))}
${EX([["juliette point baldi arobase gmail point com","juliette.baldi@gmail.com"]])}
<p>Французские номера — 10 цифр, читаются <b>парами</b>: 06 80 72 86 45 → ${F("zéro six, quatre-vingts, soixante-douze, quatre-vingt-six, quarante-cinq")}.</p>
<h3>Документы (Vie pratique, с. 30)</h3>
${TBL(["Français","По-русски"],[[F("un passeport"),"паспорт (заграничный)"],[F("une carte d’identité"),"удостоверение личности (ID)"],[F("un titre de transport"),"проездной / билет"],[F("une carte d’étudiant(e)"),"студенческий билет"],[F("un permis de conduire"),"водительские права"],[F("une carte de bibliothèque"),"читательский билет"]])}
<h3>Образец рассказа о себе</h3>
<div class="sample"><p>${F("Bonjour ! Je m’appelle Anna. Je suis russe. J’ai 19 ans. Je suis née à Kazan, en Russie, et j’habite à Moscou. Je suis étudiante. Je parle russe, anglais et un peu français. J’aime la musique et le sport !")}</p><p class="tr">Здравствуйте! Меня зовут Анна. Я русская. Мне 19 лет. Я родилась в Казани, в России, и живу в Москве. Я студентка. Говорю по-русски, по-английски и немного по-французски. Люблю музыку и спорт!</p></div>
`,
ex:[
{t:"match", h:"Соедини вопрос и ответ", pairs:[["Comment tu t’appelles ?","Je m’appelle Sanae."],["Tu as quel âge ?","J’ai 23 ans."],["Tu es français ?","Non, je suis suisse."],["Tu habites où ?","À Genève, en Suisse."],["Quel est ton numéro ?","C’est le 06 90 32 71 66."],["Tu as Instagram ?","Oui !"],["Tu parles quelles langues ?","Français et japonais."]]},
{t:"sort", h:"Распредели вопросы: на «ты» или на «вы»?", cats:["tu","vous"], items:[["Comment tu t’appelles ?",0],["Vous avez quel âge ?",1],["Tu as Instagram ?",0],["Quel est votre numéro ?",1],["Tu es né où ?",0],["Vous êtes français ?",1],["Quel est ton mail ?",0],["Comment vous vous appelez ?",1]]},
{t:"mc", h:"Выбери правильный ответ", items:[
{q:"В анкете «Nom : Baldi». Baldi — это…", o:["фамилия","имя","национальность"], a:0, e:"nom = фамилия, prénom = имя."},
{q:"Как прочитать знак @ ?", o:["arobase","point","tiret"], a:0},
{q:"Как прочитать «.» в адресе e-mail?", o:["point","arobase","tiret du bas"], a:0},
{q:"Il ___ né à Washington.", o:["est","a","et"], a:0, e:"Il est né / elle est née."},
{q:"Elle est ___ à Sion.", o:["née","né","nés"], a:0, e:"Женский род → née."},
{q:"– Tu as quel âge ? – ___", o:["J’ai 25 ans.","Je suis 25 ans.","J’ai 25."], a:0, e:"Возраст всегда с ans."}
]},
{t:"fill", h:"Документы: впиши слово", items:[
{q:"Pour voyager à l’étranger, j’ai un ___ (паспорт).", a:["passeport"]},
{q:"Pour conduire une voiture, j’ai un ___ de conduire.", a:["permis"]},
{q:"À l’université, j’ai une carte d’___.", a:["étudiant","étudiante","étudiant(e)"]},
{q:"Dans le métro, j’ai un titre de ___.", a:["transport"]},
{q:"À la bibliothèque, j’ai une carte de ___.", a:["bibliothèque"]},
{q:"En France, la carte d’___ = ID.", a:["identité"]}
]},
{t:"order", h:"Собери фразу", items:[
{s:"Quel est ton numéro de téléphone ?", ru:"Какой у тебя номер телефона?"},
{s:"Je suis née le 26 janvier 1999.", ru:"Я родилась 26 января 1999 года."},
{s:"J’habite à Moscou, en Russie.", ru:"Я живу в Москве, в России."}
]}
]});

TOPICS.push({
id:"u1-nationalites", sec:"book", unit:"1", kind:"Grammaire + vocabulaire",
title:"Les adjectifs de nationalité", ru:"Страны и национальности: мужской и женский род", page:"с. 19, 22, 27",
theory:`
<h3>Три схемы женского рода</h3>
${MORPH([["1 · обычно + e",[["français","française"],["allemand","allemande"],["américain","américaine"],["espagnol","espagnole"],["chinois","chinoise"]]],["2 · -ien → -ienne, -éen → -éenne",[["italien","italienne"],["canadien","canadienne"],["brésilien","brésilienne"],["coréen","coréenne"]]],["3 · на -e — не меняется",[["russe","russe"],["belge","belge"],["suisse","suisse"],["tchèque","tchèque"]]],["особые",[["grec","grecque"],["turc","turque"]]]])}
<h3>Как это звучит</h3>
<p>Когда добавляется -e, «спрятанная» конечная согласная <b>начинает читаться</b>:</p>
${TBL(["Masculin","Féminin","Что происходит"],[
[F("français")+" [fʁɑ̃sɛ]",F("française")+" [fʁɑ̃sɛz]","появляется [z]"],
[F("allemand")+" [almɑ̃]",F("allemande")+" [almɑ̃d]","появляется [d]"],
[F("italien")+" [italjɛ̃]",F("italienne")+" [italjɛn]","носовой звук исчезает, слышно [n]"],
[F("espagnol"),F("espagnole"),"звучат одинаково (l и так читается)"],
[F("belge"),F("belge"),"одинаково"]
])}
<h3>Множественное число</h3>
<p>+ s: ${F("ils sont italiens")}, ${F("elles sont allemandes")}. Если уже кончается на -s, ничего не добавляем: ${F("ils sont français")}.</p>
<h3>Большая или маленькая буква?</h3>
${TBL(["","Пример","Буква"],[["прилагательное (какой?)",F("Il est français."),"маленькая"],["язык",F("Je parle français."),"маленькая"],["житель (кто?)",F("C’est un Français."),"большая"]])}
${CMP("Совпадает с русским: «он француз», «французский язык» — с маленькой.","")}
<h3>Страны и национальности (с. 27)</h3>
${TBL(["Pays","Nationalité (m / f)"],[
[F("l’Algérie (f.)"),F("algérien / algérienne")],[F("l’Allemagne (f.)"),F("allemand / allemande")],[F("l’Argentine (f.)"),F("argentin / argentine")],[F("la Belgique"),F("belge")],[F("le Brésil"),F("brésilien / brésilienne")],[F("le Cameroun"),F("camerounais / camerounaise")],[F("le Canada"),F("canadien / canadienne")],[F("la Chine"),F("chinois / chinoise")],[F("la Colombie"),F("colombien / colombienne")],[F("le Congo"),F("congolais / congolaise")],[F("la Corée"),F("coréen / coréenne")],[F("l’Espagne (f.)"),F("espagnol / espagnole")],[F("les États-Unis"),F("américain / américaine")],[F("la France"),F("français / française")],[F("l’Inde (f.)"),F("indien / indienne")],[F("l’Italie (f.)"),F("italien / italienne")],[F("le Japon"),F("japonais / japonaise")],[F("le Maroc"),F("marocain / marocaine")],[F("le Mexique"),F("mexicain / mexicaine")],[F("la Pologne"),F("polonais / polonaise")],[F("les Pays-Bas"),F("hollandais / hollandaise")],[F("la Russie"),F("russe")],[F("le Sénégal"),F("sénégalais / sénégalaise")],[F("la Suisse"),F("suisse")],[F("la République tchèque"),F("tchèque")],[F("la Tunisie"),F("tunisien / tunisienne")],[F("le Vietnam"),F("vietnamien / vietnamienne")]
])}
${NOTE(`Ты сам: ${F("Je suis russe.")} — одинаково для мужчины и женщины.`)}
`,
ex:[
{t:"fill", h:"Поставь в женский род", items:[
{q:"français →", a:["française"]},{q:"italien →", a:["italienne"]},{q:"coréen →", a:["coréenne"]},{q:"belge →", a:["belge"]},{q:"chinois →", a:["chinoise"]},{q:"américain →", a:["américaine"]},{q:"allemand →", a:["allemande"]},{q:"espagnol →", a:["espagnole"]},{q:"canadien →", a:["canadienne"]},{q:"grec →", a:["grecque"]},{q:"turc →", a:["turque"]},{q:"russe →", a:["russe"]},{q:"japonais →", a:["japonaise"]},{q:"suisse →", a:["suisse"]}
]},
{t:"sort", h:"Il est… / Elle est… / подходит обоим (с. 22)", cats:["Il est…","Elle est…","Il ou elle"], items:[["grecque",1],["suisse",2],["tunisien",0],["vietnamienne",1],["chinois",0],["belge",2],["coréenne",1],["marocain",0],["russe",2],["allemande",1],["japonais",0],["tchèque",2]]},
{t:"mc", h:"Согласуй прилагательное, если нужно (с. 19)", items:[
{q:"Elle est japonais…", o:["japonais","japonaise"], a:1},
{q:"Monsieur Diouf est sénégalais…", o:["sénégalais","sénégalaise"], a:0},
{q:"Il est colombien…, Alberto ?", o:["colombien","colombienne"], a:0},
{q:"Vous êtes marocain…, madame ?", o:["marocain","marocaine"], a:1, e:"madame → женский род."},
{q:"Madame Lambert est belge…", o:["belge","belgee"], a:0, e:"belge не меняется."},
{q:"Giulia et Lucia sont…", o:["italiennes","italiens","italienne"], a:0, e:"Две женщины → ж.р. мн.ч."}
]},
{t:"match", h:"Страна → национальность (м.р.)", pairs:[["la Russie","russe"],["le Japon","japonais"],["les États-Unis","américain"],["les Pays-Bas","hollandais"],["l’Allemagne","allemand"],["la Chine","chinois"],["le Brésil","brésilien"],["la Corée","coréen"]]},
{t:"tf", h:"Произношение: верно или неверно?", items:[
{q:"«espagnol» и «espagnole» звучат одинаково.", a:true},
{q:"«français» и «française» звучат одинаково.", a:false, e:"В française слышно [z]."},
{q:"«belge» (м.) и «belge» (ж.) звучат одинаково.", a:true},
{q:"«italien» и «italienne» звучат одинаково.", a:false, e:"italien — носовой [ɛ̃], italienne — [ɛn]."},
{q:"«allemand» и «allemande» звучат одинаково.", a:false, e:"В allemande слышно [d]."}
]},
{t:"cards", h:"Карточки: страны", items:[["la Russie","Россия"],["l’Allemagne","Германия"],["l’Espagne","Испания"],["les États-Unis","США"],["les Pays-Bas","Нидерланды"],["le Japon","Япония"],["la Chine","Китай"],["la Corée","Корея"],["la Suisse","Швейцария"],["la Belgique","Бельгия"],["le Maroc","Марокко"],["le Mexique","Мексика"],["la Pologne","Польша"],["l’Inde","Индия"],["le Brésil","Бразилия"],["l’Italie","Италия"]]}
]});

TOPICS.push({
id:"u1-articles-def", sec:"book", unit:"1", kind:"Grammaire",
title:"Les articles définis : le, la, l’, les", ru:"Определённые артикли", page:"с. 20, 22",
theory:`
<p>Артикль — маленькое служебное слово перед существительным. Он показывает <b>род</b> и <b>число</b>. Во французском существительное почти никогда не стоит «голым».</p>
${GRID(["","Singulier","Pluriel"],[["Masculin","m:le / l’","p:les"],["Féminin","f:la / l’","p:les"]])}
${EX([["le cinéma, le sport","кино, спорт (м.р.)"],["la musique","музыка (ж.р.)"],["les langues","языки (мн.ч.)"],["l’art (m.), l’histoire (f.)","перед гласной и h — l’"]])}
${RULE("Élision: le / la → l’",`<p>Перед словом на <b>гласную</b> или <b>немую h</b>: ${F("l’art")}, ${F("l’université")}, ${F("l’histoire")}, ${F("l’appartement")}. Значит, по l’ род не видно — учи слова вместе с родом (в словаре: <i>n.m.</i> / <i>n.f.</i>).</p>`)}
${FXS(FX(["le","+","art","→","!l’art"]),FX(["la","+","histoire","→","!l’histoire"],"h немая — считается гласной"),FX(["le","+","sport","→","le sport"],"перед согласной — без изменений"))}
<h3>Когда используем (Unité 1)</h3>
${RULE("Общее значение",`<p>«On utilise les articles définis pour parler de quelque chose de <b>général</b>.» После <b>aimer, adorer, détester</b> — всегда le / la / les:</p>${EX([["J’aime le cinéma et le sport.","Я люблю кино и спорт."],["J’aime l’art et les langues.","Я люблю искусство и языки."],["Tu aimes la musique ?","Ты любишь музыку?"]])}`)}
<h3>Артикль перед странами</h3>
${FLOW([["Название кончается на -s?","les","les États-Unis, les Pays-Bas"],["Кончается на -e? (кроме le Mexique, le Mozambique, le Cambodge, le Zimbabwe)","la / l’","la France, la Russie, l’Italie"]],["Всё остальное","le / l’","le Japon, le Canada, le Brésil, l’Iran"])}
<p>Города — обычно без артикля: ${F("Paris")}, ${F("Moscou")}, ${F("Genève")}.</p>
<h3>Произношение</h3>
<p>${F("le film")} [lə] — ${F("les films")} [le]. Конечная -s у существительного не читается, поэтому <b>на слух число слышно только по артиклю</b>.</p>
`,
ex:[
{t:"mc", h:"Выбери артикль (с. 20, 22)", items:[
{q:"J’aime ___ café.", o:["le","la","les"], a:0},
{q:"Tu aimes ___ musique ?", o:["la","le","l’"], a:0},
{q:"Tu aimes ___ cinéma ?", o:["le","la","les"], a:0},
{q:"Toi, tu aimes ___ langues.", o:["les","la","le"], a:0},
{q:"Moi, j’aime ___ histoire.", o:["l’","la","le"], a:0, e:"h немая → l’."},
{q:"J’aime aussi ___ chocolat !", o:["le","la","l’"], a:0},
{q:"Tu aimes ___ sport ?", o:["le","l’","la"], a:0},
{q:"J’aime ___ art.", o:["l’","le","la"], a:0}
]},
{t:"sort", h:"Распредели страны по артиклю", cats:["le","la","l’","les"], items:[["France",1],["Japon",0],["Italie",2],["États-Unis",3],["Mexique",0],["Russie",1],["Allemagne",2],["Canada",0],["Pays-Bas",3],["Suisse",1],["Espagne",2],["Brésil",0],["Cambodge",0],["Chine",1]]},
{t:"fill", h:"Впиши le, la, l’ или les", items:[
{q:"___ sport", a:["le"]},{q:"___ université", a:["l’"]},{q:"___ langues", a:["les"]},{q:"___ musique", a:["la"]},{q:"___ appartement", a:["l’"]},{q:"___ mer", a:["la"]},{q:"___ quartier", a:["le"]},{q:"___ amis", a:["les"]},{q:"___ Japon", a:["le"]},{q:"___ histoire", a:["l’"]}
]},
{t:"fill", h:"Переведи", items:[
{q:"Я люблю кино.", a:["J’aime le cinéma"], long:true},
{q:"Ты любишь спорт?", a:["Tu aimes le sport ?"], long:true},
{q:"Она любит искусство и языки.", a:["Elle aime l’art et les langues"], long:true}
]}
]});

TOPICS.push({
id:"u1-prepositions", sec:"book", unit:"1", kind:"Grammaire",
title:"À, au, en, aux + ville / pays", ru:"Предлоги перед городами и странами", page:"с. 25, 28",
theory:`
${BIGC([["à","город","à Paris, à Moscou, à Genève"],["au","страна м.р. (le)","au Japon, au Canada, au Mexique","m"],["en","страна ж.р. (la) или на гласную","en France, en Russie, en Italie, en Iran","f"],["aux","страна мн.ч. (les)","aux États-Unis, aux Pays-Bas","p"]])}
<h3>Алгоритм за 3 секунды</h3>
${FLOW([["Это город?","à","à Lyon"],["Страна во множественном числе (les …)?","aux","aux Philippines"],["Страна женского рода (la …) или начинается с гласной?","en","en Espagne, en Angola"]],["Страна мужского рода (le …)","au","au Brésil"])}
${FXS(FX(["à","+","le","=","!au"],"à le — не бывает"),FX(["à","+","les","=","!aux"],"à les — не бывает"))}
${WARN(`${F("à + le = au")}, ${F("à + les = aux")} — сливаются всегда. ✗ <i>à le Japon</i>, ✗ <i>à les États-Unis</i>. А ✗ <i>en Japon</i> — самая частая ошибка: Japon мужского рода → ${F("au Japon")}.`)}
<h3>«Где» и «куда» — одинаково</h3>
<p>${F("J’habite en France.")} (живу во Франции) и ${F("Je vais en France.")} (еду во Францию) — один и тот же предлог.</p>
<h3>Родиться / жить</h3>
${EX([["Il est né le 27 septembre 1955 à Washington, aux États-Unis.","Он родился 27 сентября 1955 года в Вашингтоне, в США."],["Il habite à Philadelphie, aux États-Unis.","Он живёт в Филадельфии, в США."],["Elle est née et elle habite à Miyazaki, au Japon.","Она родилась и живёт в Миядзаки, в Японии."],["Il est né en Argentine en 1978.","Он родился в Аргентине в 1978 году."],["Elle est née à Sion, en Suisse.","Она родилась в Сьоне, в Швейцарии."]])}
<p>Год — тоже с <b>en</b>: ${F("en 1978")}, ${F("en 2026")}.</p>
<h3>Связывание</h3>
<p>${F("en Italie")} → [ɑ̃<b>n</b>itali], ${F("aux États-Unis")} → [o<b>z</b>etazyni]. Перед согласной связывания нет: ${F("en Suisse")}, ${F("au Japon")}, ${F("aux Philippines")}.</p>
${LIS(LI("en","Italie","n"),LI("aux","États-Unis","z"),LI("en","Angola","n"),LI("en","Suisse",""),LI("au","Japon",""))}
`,
ex:[
{t:"mc", h:"Выбери предлог (с. 25, 28)", items:[
{q:"Elle est née ___ Italie.", o:["à","au","en","aux"], a:2},
{q:"Il est né ___ Bruxelles.", o:["à","au","en","aux"], a:0, e:"Город → à."},
{q:"Elle habite ___ États-Unis.", o:["à","au","en","aux"], a:3},
{q:"Il habite ___ Canada.", o:["à","au","en","aux"], a:1},
{q:"Hugo habite ___ Bogota.", o:["à","au"], a:0},
{q:"Samia est née ___ Algérie.", o:["à","en"], a:1},
{q:"Mike habite ___ États-Unis.", o:["au","aux"], a:1},
{q:"Pietro est né ___ Rome.", o:["à","en"], a:0},
{q:"Bruna habite ___ Cambodge.", o:["à","au"], a:1, e:"le Cambodge — исключение, мужской род → au."},
{q:"Pablo est né ___ Barcelone.", o:["à","au"], a:0}
]},
{t:"fill", h:"Впиши à, au, en или aux", items:[
{q:"J’habite ___ Moscou…", a:["à"]},
{q:"…___ Russie.", a:["en"]},
{q:"Tokyo est ___ Japon.", a:["au"]},
{q:"Il habite ___ Mexique.", a:["au"], e:"le Mexique — исключение."},
{q:"Amsterdam est ___ Pays-Bas.", a:["aux"]},
{q:"Je suis né ___ Espagne.", a:["en"]},
{q:"Elle habite ___ Angola.", a:["en"], e:"Начинается с гласной → en."},
{q:"Nous habitons ___ Portugal.", a:["au"]},
{q:"Ils sont ___ Chine.", a:["en"]},
{q:"Tu habites ___ Maroc ?", a:["au"]},
{q:"Elle est née ___ 1999.", a:["en"], e:"Год → en."}
]},
{t:"sort", h:"Распредели страны: au, en или aux", cats:["au","en","aux"], items:[["Brésil",0],["Belgique",1],["Pays-Bas",2],["Inde",1],["Sénégal",0],["États-Unis",2],["Allemagne",1],["Vietnam",0],["Suisse",1],["Mexique",0],["Philippines",2],["Équateur",1],["Japon",0],["Émirats arabes unis",2]]},
{t:"fill", h:"Переведи", items:[
{q:"Я живу в Москве, в России.", a:["J’habite à Moscou, en Russie"], long:true},
{q:"Она родилась в Японии.", a:["Elle est née au Japon"], long:true},
{q:"Он живёт в США.", a:["Il habite aux États-Unis"], long:true}
]},
{t:"tf", h:"Связывание: верно или неверно?", items:[
{q:"В «en Italie» слышно [n].", a:true},
{q:"В «aux États-Unis» слышно [z].", a:true},
{q:"В «au Japon» есть связывание.", a:false, e:"Japon начинается с согласной."},
{q:"В «en Suisse» слышно [n] перед Suisse.", a:false}
]}
]});

TOPICS.push({
id:"u1-quel", sec:"book", unit:"1", kind:"Grammaire",
title:"L’adjectif interrogatif quel", ru:"Какой? Какая? Какие?", page:"с. 26, 28",
theory:`
${CMP("«какой / какая / какие» — меняется по роду и числу. Точно так же quel!","")}
${GRID(["","Singulier","Pluriel"],[["Masculin","m:quel","m:quels"],["Féminin","f:quelle","f:quelles"]])}
${SAME(["quel","quelle","quels","quelles"],"[kɛl]")}
${WARN("Все четыре формы звучат <b>одинаково</b> [kɛl]. Разница только на письме — смотри на род и число существительного.")}
<h3>Две конструкции</h3>
${RULE("1. Quel + être + существительное",EX([["Quel est ton numéro ?","Какой у тебя номер? (numéro — м.р.)"],["Quelle est ta nationalité ?","Какая у тебя национальность? (ж.р.)"],["Quels sont tes loisirs ?","Какие у тебя увлечения? (м.р. мн.ч.)"],["Quelle est ton adresse mail ?","Какой у тебя e-mail? (adresse — ж.р.)"]]))}
${RULE("2. quel + существительное",EX([["Tu as quel âge ?","Сколько тебе лет? (âge — м.р.)"],["Tu habites dans quelle ville ?","В каком городе ты живёшь?"],["Tu parles quelles langues ?","На каких языках ты говоришь?"],["Tu aimes quels auteurs ?","Каких авторов ты любишь?"],["Dans quel pays ?","В какой стране? (pays — м.р.!)"]]))}
<h3>Род слов, которые часто бывают в вопросах</h3>
${TBL(["Masculin → quel","Féminin → quelle"],[[F("l’âge"),F("l’adresse")],[F("le numéro"),F("la nationalité")],[F("le pays"),F("la ville")],[F("le prénom, le nom"),F("la date (de naissance)")],[F("le sport, le loisir"),F("la langue, la musique")]])}
${NOTE(`${F("pays")} — мужской род: ${F("le pays")}. ${F("Dans quel pays ?")}`)}
`,
ex:[
{t:"mc", h:"Выбери правильную форму (с. 26)", items:[
{q:"Tu as ___ âge ?", o:["quel","quelle"], a:0, e:"âge — м.р."},
{q:"Tu parles ___ langues ?", o:["quels","quelles"], a:1},
{q:"Tu aimes ___ musique ?", o:["quelle","quel"], a:0},
{q:"Tu pratiques ___ loisirs ?", o:["quels","quel"], a:0}
]},
{t:"mc", h:"Выбери подходящее существительное (с. 28)", items:[
{q:"Dans quelle ___ tu habites ?", o:["ville","pays"], a:0},
{q:"Tu aimes quelles ___ ?", o:["langue","musiques"], a:1, e:"quelles → ж.р. мн.ч."},
{q:"Quel est ___ de Paul ?", o:["la nationalité","le numéro de téléphone"], a:1},
{q:"Quelle est ___ de Malika ?", o:["la date de naissance","le lieu de naissance"], a:0},
{q:"Il aime quels ___ ?", o:["loisirs","sport"], a:0}
]},
{t:"fill", h:"Впиши quel, quelle, quels или quelles", items:[
{q:"___ est ton adresse mail ?", a:["Quelle"]},
{q:"___ est ton prénom ?", a:["Quel"]},
{q:"___ sont tes loisirs ?", a:["Quels"]},
{q:"Tu habites dans ___ pays ?", a:["quel"]},
{q:"___ est la date aujourd’hui ?", a:["Quelle"]},
{q:"Tu aimes ___ films ?", a:["quels"]},
{q:"Tu parles ___ langues ?", a:["quelles"]},
{q:"___ est ta nationalité ?", a:["Quelle"]}
]},
{t:"order", h:"Собери вопрос", items:[
{s:"Quel est ton numéro de téléphone ?", ru:"Какой у тебя номер телефона?"},
{s:"Tu habites dans quelle ville ?", ru:"В каком городе ты живёшь?"},
{s:"Quelle est ta date de naissance ?", ru:"Какая у тебя дата рождения?"}
]}
]});

TOPICS.push({
id:"u1-nombres", sec:"book", unit:"1", kind:"Vocabulaire",
title:"Les nombres de 0 à 100", ru:"Числа и логика французского счёта", page:"с. 14, 21, 27",
theory:`
<h3>0–16 — просто выучить</h3>
<div class="nums">${["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize"].map((w,i)=>`<span class="num fr" data-say="${w}"><b>${i}</b>${w}</span>`).join('')}</div>
<h3>17–69 — логично</h3>
${TBL(["Число","Как строится","Пишется"],[
["17, 18, 19","10 + 7…",F("dix-sept, dix-huit, dix-neuf")],
["20, 30, 40, 50, 60","десятки",F("vingt, trente, quarante, cinquante, soixante")],
["21, 31, 41, 51, 61","десяток <b>et un</b> (без дефиса)",F("vingt et un, trente et un… soixante et un")],
["22–29 и т.д.","десяток-единицы (через дефис)",F("vingt-deux, trente-cinq, quarante-huit")]
])}
<h3>70–99 — главная «странность»</h3>
${FXS(FX(["~70","=","soixante|60","+","dix|10"]),FX(["~71","=","soixante|60","+","et","+","onze|11"]),FX(["~80","=","quatre|4","×","!vingts|20 (с s)"]),FX(["~81","=","quatre|4","×","vingt|20","+","un|1"],"без et и без s"),FX(["~90","=","quatre|4","×","vingt|20","+","dix|10"]),FX(["~97","=","quatre|4","×","vingt|20","+","dix-sept|17"]))}
${TBL(["Число","Логика","Пишется"],[
["70","60 + 10",F("soixante-dix")],
["71","60 <b>et</b> 11",F("soixante et onze")],
["72–79","60 + 12…19",F("soixante-douze … soixante-dix-neuf")],
["80","4 × 20",F("quatre-vingts")+" (с <b>s</b>!)"],
["81","4 × 20 + 1 — <b>без</b> et",F("quatre-vingt-un")+" (без s)"],
["82–89","",F("quatre-vingt-deux … quatre-vingt-neuf")],
["90","4 × 20 + 10",F("quatre-vingt-dix")],
["91","4 × 20 + 11",F("quatre-vingt-onze")],
["99","4 × 20 + 19",F("quatre-vingt-dix-neuf")],
["100","",F("cent")]
])}
${RULE("Ловушки с vingt",`<p>${F("quatre-vingts")} (80) — с s, потому что «четыре двадцатки» и после ничего нет. Как только что-то добавляется — s пропадает: ${F("quatre-vingt-un")}, ${F("quatre-vingt-dix")}. И «et» только у 21, 31, 41, 51, 61, 71 — у 81 и 91 его <b>нет</b>.</p>`)}
${NOTE("90 = 4×20 + 10: «четыре-двадцать-десять». Удобно думать формулой: 97 = 4×20 + 17.")}
${NOTE("В Бельгии и Швейцарии проще: <b>septante</b> (70), <b>nonante</b> (90), а в Швейцарии ещё и <b>huitante</b> (80).")}
<h3>Произношение</h3>
${TBL(["Число","Одно","+ согласная","+ гласная"],[
[F("six"),"[sis]",F("six livres")+" [si]",F("six ans")+" [siz]"],
[F("dix"),"[dis]",F("dix mois")+" [di]",F("dix euros")+" [diz]"],
[F("huit"),"[ɥit]",F("huit jours")+" [ɥi]",F("huit ans")+" [ɥit]"],
[F("deux / trois"),"[dø] / [tʁwa]",F("deux livres"),F("deux euros")+" [døz]"],
[F("un"),"[œ̃]",F("un livre"),F("un euro")+" [œ̃n]"],
[F("neuf"),"[nœf]","",F("neuf ans")+" [nœvɑ̃] — f → v"]
])}
<p>${F("vingt")} — [vɛ̃], t не читается; но ${F("vingt-deux")} [vɛ̃tdø] и ${F("vingt et un")} [vɛ̃teœ̃] — читается.</p>
${NOTE("По реформе 1990 года можно ставить дефисы везде (vingt-et-un), обе версии правильные. В учебнике — классическая.")}
`,
ex:[
{t:"listen", h:"Послушай и напиши цифрами", items:[
{say:"dix-sept",a:["17"]},{say:"trente-deux",a:["32"]},{say:"quarante-cinq",a:["45"]},{say:"cinquante-huit",a:["58"]},{say:"soixante et un",a:["61"]},{say:"soixante-dix",a:["70"]},{say:"soixante et onze",a:["71"]},{say:"soixante-seize",a:["76"]},{say:"quatre-vingts",a:["80"]},{say:"quatre-vingt-un",a:["81"]},{say:"quatre-vingt-huit",a:["88"]},{say:"quatre-vingt-onze",a:["91"]},{say:"quatre-vingt-quinze",a:["95"]},{say:"quatre-vingt-dix-neuf",a:["99"]},{say:"soixante-six",a:["66"]},{say:"quarante-quatre",a:["44"]}
]},
{t:"fill", h:"Напиши словами", items:[
{q:"70", a:["soixante-dix"]},{q:"71", a:["soixante et onze","soixante-et-onze"]},{q:"80", a:["quatre-vingts"]},{q:"81", a:["quatre-vingt-un"]},{q:"90", a:["quatre-vingt-dix"]},{q:"99", a:["quatre-vingt-dix-neuf"]},{q:"21", a:["vingt et un","vingt-et-un"]},{q:"35", a:["trente-cinq"]},{q:"52", a:["cinquante-deux"]},{q:"64", a:["soixante-quatre"]},{q:"77", a:["soixante-dix-sept"]},{q:"16", a:["seize"]},{q:"100", a:["cent"]}
]},
{t:"match", h:"Соедини слово и число", pairs:[["quatre-vingt-douze","92"],["soixante-seize","76"],["quatre-vingt-six","86"],["soixante-quatorze","74"],["quarante-trois","43"],["cinquante et un","51"],["septante","70 (Belgique)"],["nonante","90 (Belgique)"]]},
{t:"mc", h:"Выбери правильный вариант", items:[
{q:"Как правильно написать 80?", o:["quatre-vingts","quatre-vingt","quatre-vingts-un"], a:0},
{q:"Как правильно написать 81?", o:["quatre-vingt-un","quatre-vingt et un","quatre-vingts-un"], a:0, e:"У 81 нет et и нет s."},
{q:"Как правильно написать 61?", o:["soixante et un","soixante-un","soixante et une"], a:0},
{q:"06 80 72 86 45 читается как…", o:["zéro six, quatre-vingts, soixante-douze, quatre-vingt-six, quarante-cinq","zéro six, huitante, septante-deux, huitante-six, quarante-cinq","six, quatre-vingts, soixante-douze, quatre-vingt-six, quarante-cinq"], a:0, e:"Номер читается парами, включая zéro."},
{q:"Lang Lang est né le 14 juin 1982. En octobre 2026, il a…", o:["quarante-quatre ans","quarante-trois ans","quarante-cinq ans"], a:0},
{q:"Jodie Foster est née le 9 novembre 1962. Le 21 octobre 2026, elle a…", o:["soixante-trois ans","soixante-quatre ans","soixante-deux ans"], a:0, e:"День рождения ещё не наступил → 63."}
]}
]});

TOPICS.push({
id:"u1-phonetique", sec:"book", unit:"1", kind:"Phonie-graphie",
title:"Accent tonique et liaisons", ru:"Ударение, ритмические группы, связывание с предлогами", page:"с. 22, 28",
theory:`
${RULE("Ударение во французском",`<p>Ударение падает на <b>последний произносимый слог ритмической группы</b>, а не каждого слова. Ритмическая группа (groupe rythmique) — несколько слов, которые образуют смысл и произносятся без паузы.</p>`)}
${RHY([["Je","m’a","ppelle","En","zo"],["je","suis","i","ta","lien"]],"2 группы → 2 ударения · нажми, чтобы послушать","Je m’appelle Enzo, je suis italien.")}
${RHY([["Je","m’a","ppelle","A","lice"],["j’ai","vingt","trois","ans"],["je","suis","al","le","mande"]],"3 группы → 3 ударения","Je m’appelle Alice, j’ai vingt-trois ans, je suis allemande.")}
<p>Ударный слог чуть длиннее, остальные — ровные, одинаковой длины. Это и даёт французскую «пулемётную» мелодию.</p>
<h3>Связывание с предлогами (с. 28)</h3>
${TBL(["Предлог + гласная","Слышим","Примеры"],[[F("en"),"[n]",F("en‿Argentine, en‿Italie, en‿Angola, en‿Europe, en‿Inde")],[F("aux"),"[z]",F("aux‿États-Unis, aux‿Émirats arabes unis")]])}
${LIS(LI("en","Argentine","n"),LI("en","Europe","n"),LI("aux","Émirats","z"),LI("en","Suisse",""),LI("aux","Philippines",""))}
<p>Без связывания (дальше согласная): ${F("en Suisse, au Japon, aux Philippines")}.</p>
${RHY([["Elle","est","née"],["en","I","ta","lie"],["et","elle","ha","bite"],["en","Aus","tra","lie"]],"4 группы, 4 ударения, 2 связывания: en‿Italie, en‿Australie","Elle est née en Italie et elle habite en Australie.")}
`,
ex:[
{t:"mc", h:"Где ударение?", items:[
{q:"Je suis italien.", o:["на -lien (последний слог)","на je","на i- (начало слова)"], a:0},
{q:"J’aime le cinéma.", o:["на -ma","на ci-","на aime"], a:0},
{q:"Il est allemand.", o:["на -mand","на al-","на il"], a:0}
]},
{t:"mc", h:"Сколько ритмических групп?", items:[
{q:"Je m’appelle Enzo, je suis italien.", o:["2","1","5"], a:0},
{q:"Je m’appelle Alice, j’ai 23 ans, je suis allemande.", o:["3","2","6"], a:0},
{q:"Elle est née en Italie et elle habite en Australie.", o:["4","2","8"], a:0}
]},
{t:"sort", h:"Что слышим: [n], [z] или связывания нет?", cats:["[n]","[z]","нет"], items:[["en Italie",0],["aux États-Unis",1],["en Europe",0],["au Japon",2],["en Suisse",2],["aux Émirats",1],["en Inde",0],["aux Philippines",2],["en Afrique",0],["en Équateur",0]]},
{t:"tf", h:"Верно или неверно?", items:[
{q:"Во французском ударение обычно на первом слоге слова.", a:false, e:"На последнем слоге группы."},
{q:"Ритмическая группа произносится без паузы.", a:true},
{q:"В длинной фразе ударений столько же, сколько слов.", a:false, e:"Столько, сколько ритмических групп."}
]}
]});

/* =========================================================
   UNITÉ 2 — PRÈS DE MOI
   ========================================================= */
TOPICS.push({
id:"u2-habiter", sec:"book", unit:"2", kind:"Communication + grammaire",
title:"Habiter : tu habites où ?", ru:"Где ты живёшь? Глагол habiter, on = nous, места", page:"с. 32–33, 35",
theory:`
${CJS(CJ("habiter","жить",["j’habit<b>e</b>","tu habit<b>es</b>","il / elle / on habit<b>e</b>","nous habit<b>ons</b>","vous habit<b>ez</b>","ils / elles habit<b>ent</b>"]))}
<p>h немая → ${F("j’habite")} (не «je habite»), и со связыванием: ${F("nous‿habitons")} [nuzabitɔ̃], ${F("vous‿habitez")}, ${F("ils‿habitent")}.</p>
${RULE("On = nous (в разговоре)",`<p>${F("On habite dans une rue calme.")} = ${F("Nous habitons dans une rue calme.")}</p><p>Глагол после on — в форме <b>il</b>: ${F("on habite, on aime, on est")}. ✗ <i>on habitons</i>.</p><p>Ещё on = «люди вообще»: ${F("En Belgique, on dit « septante ».")} — В Бельгии говорят «септант».</p>`)}
${FXS(FX(["on","+","~глагол в форме il","=","!on habite"]),FX(["on habite","=","nous habitons"],"в разговоре французы чаще говорят on"))}
${CMP("Как русское безличное «говорят», «у нас живут…», но с формой глагола 3-го лица ед.ч.","")}
<h3>Спросить и ответить</h3>
${TBL(["Вопрос","Ответ"],[
[F("Tu habites où ? / Où tu habites ?"),F("Je suis à Lyon. / Moi, j’habite à Nice.")],
[F("Tu habites dans un quartier sympa ?"),F("Oui ! Dans le quartier Saint-Jean.")],
[F("Tu habites où à Nice ?"),F("J’habite un appartement. / J’habite dans une rue calme.")],
[F("Tu habites avec qui ?"),F("J’habite avec des amies.")]
])}
${BIGC([["à","город","à Lyon, à Nice"],["dans","квартал, улица, квартира","dans un quartier sympa, dans une rue calme"],["avec","с кем","avec des amies, avec ma famille"],["à la mer","на море / в горах","à la mer, à la montagne"]])}
<h3>Les lieux — места (с. 35)</h3>
${TBL(["Français","По-русски"],[[F("l’appartement (m.)"),"квартира"],[F("la mer"),"море (ж.р.!)"],[F("la plage"),"пляж (ж.р.!)"],[F("le quartier"),"район, квартал"],[F("la rue"),"улица"],[F("l’université (f.)"),"университет (ж.р.!)"]])}
${TBL(["Как оценить место",""],[[F("C’est super !"),"Супер!"],[F("C’est beau !"),"Красиво!"],[F("C’est très sympa !"),"Очень мило/классно!"],[F("calme"),"спокойный, тихий"],[F("Il y a la mer, la plage."),"Там есть море, пляж."]])}
<h3>Текст из учебника (с. 32)</h3>
<div class="sample chat">
<p><b>Milo :</b> ${F("Salut Lina ! Ça va ?")}</p>
<p><b>Lina :</b> ${F("Salut Milo ! Oui, très bien et toi ? Tu habites où ?")}</p>
<p><b>Milo :</b> ${F("Ça va bien ! Je suis à Lyon maintenant, à l’université Lumière.")}</p>
<p><b>Lina :</b> ${F("C’est super ! Et tu habites dans un quartier sympa ?")}</p>
<p><b>Milo :</b> ${F("Oui, dans le quartier Saint-Jean. C’est très sympa !")}</p>
<p><b>Lina :</b> ${F("C’est beau ! Moi, j’habite à Nice !")}</p>
<p><b>Milo :</b> ${F("Oh ! C’est bien ! À Nice, il y a la mer, la plage. Et tu habites où à Nice ?")}</p>
<p><b>Lina :</b> ${F("J’habite un appartement avec des amies, Mira et Julie. On habite dans une rue calme. C’est la rue Mantega.")}</p>
<p><b>Milo :</b> ${F("Elles sont super les photos ! Ah ! Vous avez une guitare ?")}</p>
<p><b>Lina :</b> ${F("Deux guitares ! Et un piano. Ce sont les instruments de musique de Julie et de Mira.")}</p>
</div>
`,
ex:[
{t:"conj", h:"Проспрягай habiter", items:[{v:"habiter", p:P6j, f:["habite","habites","habite","habitons","habitez","habitent"]}]},
{t:"tf", h:"По тексту Milo / Lina: верно или неверно?", items:[
{q:"Lina habite à Nice.", a:true},
{q:"Milo habite dans le quartier Saint-Jean, à Lyon.", a:true},
{q:"Lina habite seule (одна).", a:false, e:"Avec des amies, Mira et Julie."},
{q:"Lina habite dans une rue calme.", a:true},
{q:"Les guitares sont à Lina.", a:false, e:"Ce sont les instruments de Julie et de Mira."}
]},
{t:"mc", h:"On = nous", items:[
{q:"On ___ à Lyon.", o:["habite","habitons","habitent"], a:0, e:"После on — форма il."},
{q:"On ___ la mer !", o:["adore","adorons","adorez"], a:0},
{q:"« On habite dans une rue calme » =", o:["Nous habitons dans une rue calme.","Ils habitent dans une rue calme.","J’habite dans une rue calme."], a:0}
]},
{t:"fill", h:"Вставь слово: quartier, université, rue, appartement, mer (с. 35)", items:[
{q:"À Cannes, il y a la ___.", a:["mer"]},
{q:"J’habite dans un ___ avec une amie.", a:["appartement"]},
{q:"C’est un ___ sympa !", a:["quartier"]},
{q:"Tu es à l’___ à Paris ?", a:["université"]},
{q:"Tu habites quelle ___ ?", a:["rue"]}
]},
{t:"match", h:"Соедини вопрос и ответ", pairs:[["Tu habites où ?","Je suis à Lyon maintenant."],["Tu habites dans un quartier sympa ?","Oui, dans le quartier Saint-Jean."],["Tu habites avec qui ?","Avec des amies, Mira et Julie."],["Il y a quoi à Nice ?","La mer, la plage."],["Vous avez une guitare ?","Deux guitares !"]]}
]});

TOPICS.push({
id:"u2-articles", sec:"book", unit:"2", kind:"Grammaire",
title:"Articles définis et indéfinis", ru:"un, une, des или le, la, les?", page:"с. 33, 36",
theory:`
${GRID(["","м. ед.","ж. ед.","мн."],[["<b>Неопределённые</b><br><small>indéfinis</small>","m:un","f:une","p:des"],["<b>Определённые</b><br><small>définis</small>","m:le / l’","f:la / l’","p:les"]])}
${RULE("Главное правило",`<p><b>un / une / des</b> — предмет, человек, место <b>не определены</b>: «какой-то, один из, любой».<br><b>le / la / les</b> — <b>определены, известны</b>: «тот самый, конкретный» — или речь о чём-то в целом (J’aime le cinéma).</p>`)}
${CMP(`Подставь мысленно: «какой-то» → un/une/des; «этот, тот самый» → le/la/les.`,`Как <i>a/an</i> ↔ <i>the</i>.`)}
${VS({h:"un / une / des",big:F("un quartier"),sub:"какой-то, один из, впервые упоминаем"},{h:"le / la / les",big:F("le quartier Saint-Jean"),sub:"тот самый, известный, конкретный — или «вообще»"})}
<h3>Когда un / une / des</h3>
${EX([["Tu habites dans un quartier sympa ?","в каком-то (любом) симпатичном районе"],["J’ai une guitare.","у меня есть гитара (какая-то, одна)"],["C’est une université.","это университет (один из)"],["J’habite un appartement avec des amies.","квартира, подруги — не конкретизированы"],["Il y a des instruments de musique ?","есть ли (какие-то) инструменты?"]])}
<h3>Когда le / la / les</h3>
${EX([["Oui, dans le quartier Saint-Jean.","назван конкретный район"],["C’est la rue Mantega.","конкретная улица"],["C’est l’université Lumière.","конкретный университет"],["C’est le piano de Mathieu.","«чей-то» → конкретный: le … de …"],["Ce sont les instruments de Julie.","инструменты Жюли"],["J’aime le cinéma.","в целом (Unité 1)"]])}
${RULE("Цепочка «впервые → уже известно»",`<p>${F("J’habite dans un quartier sympa. Le quartier s’appelle Saint-Jean.")}<br>Сначала un (новое), потом le (уже знаем, о каком речь).</p>`)}
${FX(["J’habite dans","!un quartier|впервые","→","!Le quartier|уже знаем","s’appelle Saint-Jean."])}
<h3>C’est / ce sont</h3>
<p>${F("C’est un piano.")} — Это (какое-то) пианино. ${F("Ce sont des photos.")} — Это (какие-то) фотографии. ${F("Ce sont les instruments de Noémie.")} — Это инструменты Ноэми.</p>
<h3>Отрицание: un / une / des → de</h3>
${FXS(FX(["un · une · des","→","!de / d’"],"после ne… pas"),FX(["le · la · les","=","le · la · les"],"не меняются"))}
${RULE("pas de / pas d’",`<p>После отрицания <b>un, une, des</b> превращаются в <b>de</b> (d’ перед гласной):</p>${EX([["J’ai un frère. → Je n’ai pas de frère.","У меня нет брата."],["J’ai des enfants. → Je n’ai pas d’enfants.","У меня нет детей."],["Il y a une plage. → Il n’y a pas de plage.","Там нет пляжа."]])}<p><b>Но le / la / les не меняются:</b> ${F("J’aime le ski. → Je n’aime pas le ski.")}<br>И после <b>être</b> артикль остаётся: ${F("Ce n’est pas un piano.")}</p>`)}
${NOTE(`Произношение: ${F("un")} [œ̃] / ${F("une")} [yn]; ${F("un‿ami")} [œ̃nami], ${F("des‿amis")} [dezami].`)}
`,
ex:[
{t:"mc", h:"Выбери правильный артикль (с. 33)", items:[
{q:"J’habite ___ quartier calme.", o:["un","le"], a:0, e:"Какой-то спокойный район."},
{q:"J’ai ___ guitare.", o:["une","la"], a:0},
{q:"J’habite ___ rue sympa.", o:["une","la"], a:0},
{q:"Ce sont ___ instruments de Julie.", o:["des","les"], a:1, e:"«Инструменты Жюли» — конкретные."},
{q:"Nous habitons ___ quartier de Belleville.", o:["un","le"], a:1, e:"Назван конкретный район."}
]},
{t:"fill", h:"Вставь артикль (с. 36)", items:[
{q:"– C’est une université sur la photo ? – Oui, c’est ___ université Lumière.", a:["l’"]},
{q:"– Ah, vous avez ___ piano ici ? – Oui, c’est le piano de Mathieu.", a:["un"]},
{q:"J’habite dans ___ rue calme…", a:["une"]},
{q:"…c’est ___ rue des Arts.", a:["la"]},
{q:"– Il y a des instruments de musique ? – Oui, ce sont ___ instruments de Noémie.", a:["les"]},
{q:"J’habite avec ___ amis. (какими-то)", a:["des"]}
]},
{t:"sort", h:"un, une или des?", cats:["un","une","des"], items:[["appartement",0],["rue",1],["amies",2],["quartier",0],["plage",1],["instruments",2],["université",1],["film",0],["guitare",1],["festival",0],["photos",2],["mer",1]]},
{t:"mc", h:"Отрицание: какое слово?", items:[
{q:"Je n’ai pas ___ frère.", o:["de","un","le"], a:0},
{q:"Il n’y a pas ___ université.", o:["d’","une","l’"], a:0},
{q:"Je n’aime pas ___ danse.", o:["la","de","une"], a:0, e:"le/la/les после отрицания не меняются."},
{q:"Elle n’a pas ___ enfants.", o:["d’","des","les"], a:0},
{q:"Ce n’est pas ___ guitare, c’est un piano.", o:["une","de","la"], a:0, e:"После être артикль сохраняется."}
]},
{t:"fill", h:"Переведи", items:[
{q:"У меня есть гитара.", a:["J’ai une guitare"], long:true},
{q:"У меня нет брата.", a:["Je n’ai pas de frère","Je n’ai pas de frères"], long:true},
{q:"Это квартира Лины.", a:["C’est l’appartement de Lina"], long:true}
]}
]});

TOPICS.push({
id:"u2-verbes-er", sec:"book", unit:"2", kind:"Grammaire",
title:"Les verbes en -er au présent", ru:"Правильные глаголы на -er и отрицание ne… pas", page:"с. 34, 36",
theory:`
<p>Около 90% французских глаголов кончаются на <b>-er</b> и спрягаются одинаково. Выучишь одну схему — знаешь сотни глаголов.</p>
${FX(["aimer","→","aim|основа","+","!e · es · e · ons · ez · ent|окончания"],"отбрасываем -er, к основе добавляем окончание")}
${CJS(
CJ("aimer","любить",["j’aim<b>e</b>","tu aim<b>es</b>","il / elle / on aim<b>e</b>","nous aim<b>ons</b>","vous aim<b>ez</b>","ils / elles aim<b>ent</b>"]),
CJ("détester","ненавидеть",["je détest<b>e</b>","tu détest<b>es</b>","il / elle / on détest<b>e</b>","nous détest<b>ons</b>","vous détest<b>ez</b>","ils / elles détest<b>ent</b>"])
)}
${WARN(`Окончания <b>-e, -es, -e, -ent</b> не читаются! ${F("je parle, tu parles, il parle, ils parlent")} звучат одинаково [paʁl]. Слышны только ${F("nous parlons")} [ɔ̃] и ${F("vous parlez")} [e]. Не читай -ent как «-ан»!`)}
${SAME(['je parl<span class="mute">e</span>','tu parl<span class="mute">es</span>','il parl<span class="mute">e</span>','ils parl<span class="mute">ent</span>'],"[paʁl]",[["nous parlons","[ɔ̃]"],["vous parlez","[e]"]])}
<h3>Глаголы на -er из юнитов 1–2</h3>
${TBL(["Глагол","Значение","Глагол","Значение"],[[F("aimer"),"любить",F("habiter"),"жить"],[F("adorer"),"обожать",F("parler"),"говорить"],[F("détester"),"ненавидеть",F("travailler"),"работать"],[F("danser"),"танцевать",F("écouter"),"слушать"],[F("marcher"),"ходить пешком",F("regarder"),"смотреть"],[F("nager"),"плавать",F("jouer"),"играть"],[F("skier"),"кататься на лыжах",F("étudier"),"учиться"],[F("inviter"),"приглашать",F("préparer"),"готовить"]])}
<p>Мелкие особенности: ${F("nager → nous nageons")} (e сохраняет мягкое g), ${F("skier → je skie, nous skions")}, ${F("étudier → j’étudie, nous étudions")}.</p>
${RULE("je → j’",`<p>Перед гласной или немой h: ${F("j’aime, j’adore, j’habite, j’écoute, j’étudie")}. ✗ <i>je aime</i>.</p>`)}
<h3>Отрицание: ne … pas</h3>
${RULE("Глагол — внутри «бутерброда»",`<p><b>ne + глагол + pas</b>: ${F("Je ne parle pas italien.")}<br>Перед гласной/h ne → <b>n’</b>: ${F("Manon n’aime pas la neige.")} ${F("Je n’habite pas à Paris.")}</p>`)}
${FXS(FX(["~подлежащее","!ne","~глагол","!pas"]),FX(["Je","!ne","parle","!pas","italien."]),FX(["Je","!n’","habite","!pas","à Paris."],"ne → n’ перед гласной"))}
<h3>Aimer + существительное / инфинитив</h3>
${EX([["J’adore le cinéma.","aimer + le/la/les + сущ."],["Elle déteste skier.","aimer + инфинитив"],["Tu aimes danser ?","Ты любишь танцевать?"]])}
`,
ex:[
{t:"conj", h:"Проспрягай", items:[
{v:"aimer", p:P6j, f:["aime","aimes","aime","aimons","aimez","aiment"]},
{v:"détester", p:P6, f:["déteste","détestes","déteste","détestons","détestez","détestent"]},
{v:"travailler", p:P6, f:["travaille","travailles","travaille","travaillons","travaillez","travaillent"]},
{v:"nager", p:P6, f:["nage","nages","nage","nageons","nagez","nagent"]}
]},
{t:"mc", h:"Выбери местоимение (с. 34)", items:[
{q:"___ habite un appartement.", o:["Je","J’"], a:1},
{q:"___ détestes le ski.", o:["Il","Tu"], a:1},
{q:"___ marchons.", o:["Nous","Vous"], a:0},
{q:"___ aiment la danse.", o:["Nous","Ils"], a:1},
{q:"___ parlez anglais ?", o:["Vous","Tu"], a:0},
{q:"___ adore le cinéma.", o:["J’","Je"], a:0}
]},
{t:"fill", h:"Поставь глагол в нужную форму (с. 36)", items:[
{q:"Laurent et Pauline ___ à la mer. (habiter)", a:["habitent"]},
{q:"Ils ___ nager. (adorer)", a:["adorent"]},
{q:"Jeanne et toi, vous ___ ? (skier)", a:["skiez"]},
{q:"Et vous ___ marcher ? (aimer)", a:["aimez"]},
{q:"Je ___ le sport… (détester)", a:["déteste"]},
{q:"…mais j’___ la musique. (adorer)", a:["adore"]},
{q:"Tu ___ la danse ? (aimer)", a:["aimes"]},
{q:"Tu ___ le rock ? (danser)", a:["danses"]},
{q:"Elles ___ en Angleterre… (habiter)", a:["habitent"]},
{q:"…elles ___ bien anglais. (parler)", a:["parlent"]},
{q:"Nous ___ à la piscine. (nager)", a:["nageons"]}
]},
{t:"fill", h:"Сделай отрицательную фразу", items:[
{q:"J’aime le ski. →", a:["Je n’aime pas le ski"], long:true},
{q:"Il habite à Paris. →", a:["Il n’habite pas à Paris"], long:true},
{q:"Nous parlons espagnol. →", a:["Nous ne parlons pas espagnol"], long:true},
{q:"Tu travailles. →", a:["Tu ne travailles pas"], long:true},
{q:"Elles adorent la danse. →", a:["Elles n’adorent pas la danse"], long:true}
]},
{t:"order", h:"Собери фразу", items:[
{s:"Manon n’aime pas la neige.", ru:"Манон не любит снег."},
{s:"Nous habitons à Nice et nous adorons la mer.", ru:"Мы живём в Ницце и обожаем море."},
{s:"Je ne parle pas italien.", ru:"Я не говорю по-итальянски."}
]}
]});

TOPICS.push({
id:"u2-gouts", sec:"book", unit:"2", kind:"Vocabulaire + communication",
title:"Les loisirs et les goûts", ru:"Досуг и как сказать, что тебе нравится", page:"с. 20–21, 34–35",
theory:`
<h3>Шкала вкусов</h3>
${SCALE([["Je déteste","терпеть не могу"],["Je n’aime pas","не люблю"],["J’aime bien","нравится"],["J’aime","люблю"],["J’aime beaucoup","очень люблю"],["J’adore","обожаю"]],["не нравится","нравится"])}
${RULE("Две конструкции",`<p><b>+ le / la / les + существительное:</b> ${F("J’adore le cinéma et la montagne !")}<br><b>+ инфинитив:</b> ${F("Elle déteste skier.")} ${F("J’aime danser.")}</p>`)}
${NOTE("<b>aimer bien</b> — слабее, чем просто aimer! «J’aime bien Paul» = «Поль мне симпатичен», а «J’aime Paul» = «Я люблю Поля».")}
<h3>Лексика Unité 1: les loisirs (1)</h3>
${TBL(["Français","По-русски"],[[F("l’art (m.)"),"искусство"],[F("le cinéma"),"кино"],[F("les langues (f.)"),"языки"],[F("la musique"),"музыка"],[F("le sport"),"спорт"]])}
<h3>Лексика Unité 2: les loisirs (2)</h3>
${TBL(["Тема","Слова"],[
["La musique",F("l’instrument de musique (m.), la guitare, le piano")],
["Le cinéma",F("le festival, le film, la place (de cinéma)")+" — место/билет"],
["Le sport",F("la danse – danser, la marche – marcher, la natation – nager, le ski – skier")]
])}
<p>Ещё из текстов: ${F("la montagne")} (горы), ${F("la neige")} (снег), ${F("la bande dessinée / la BD")} (комикс — фестиваль в Ангулеме), ${F("le tennis, le football")}, ${F("le rock")}.</p>
<h3>Играть, заниматься</h3>
${TBL(["Конструкция","Пример"],[[F("jouer de + инструмент"),F("Elle joue du piano. / Il joue de la guitare.")],[F("jouer à + игра/спорт"),F("Ils jouent au tennis. / au football.")],[F("faire de + спорт"),F("Je fais du ski. / On fait de la marche. / de la natation.")]])}
${FXS(FX(["jouer","de","+","le","=","!du","piano"]),FX(["jouer","à","+","le","=","!au","tennis"]),FX(["faire","de","+","la","=","!de la","natation"],"de la не сливается"))}
<h3>Поддержать разговор</h3>
${EX([["– Tu aimes la musique ? – Oui, j’aime la musique, le cinéma et le sport ! Et toi ?","Ты любишь музыку? – Да… А ты?"],["– Moi, j’aime l’art et les langues !","А я люблю искусство и языки!"],["– J’adore le ski ! – Moi aussi !","– Обожаю лыжи! – Я тоже!"],["– Je n’aime pas le football. – Moi non plus.","– Не люблю футбол. – Я тоже (не люблю)."],["Qu’est-ce que tu aimes ?","Что ты любишь?"]])}
`,
ex:[
{t:"cards", h:"Карточки: досуг", items:[["l’art","искусство"],["le cinéma","кино"],["les langues","языки"],["la musique","музыка"],["le sport","спорт"],["l’instrument de musique","музыкальный инструмент"],["la guitare","гитара"],["le piano","пианино"],["le festival","фестиваль"],["le film","фильм"],["la place (de cinéma)","место / билет в кино"],["la danse","танец"],["la marche","ходьба, прогулка"],["la natation","плавание"],["le ski","лыжи"],["la montagne","горы"],["la neige","снег"]]},
{t:"match", h:"Существительное → глагол", pairs:[["la danse","danser"],["la natation","nager"],["la marche","marcher"],["le ski","skier"]]},
{t:"sort", h:"Спорт или нет? (с. 34)", cats:["activité sportive","autre loisir"], items:[["le ski",0],["le cinéma",1],["la danse",0],["la marche",0],["le film",1],["la natation",0],["la guitare",1],["le festival",1]]},
{t:"mc", h:"Выбери правильный вариант", items:[
{q:"J’adore ___ cinéma.", o:["le","un","—"], a:0},
{q:"Elle déteste ___.", o:["skier","le skier","ski"], a:0},
{q:"Il joue ___ piano.", o:["du","au","le"], a:0, e:"jouer DE + инструмент: de + le = du."},
{q:"Ils jouent ___ tennis.", o:["au","du","le"], a:0, e:"jouer À + спорт: à + le = au."},
{q:"Je fais ___ natation.", o:["de la","du","la"], a:0},
{q:"– Je n’aime pas le football. – Moi ___.", o:["non plus","aussi","si"], a:0},
{q:"Что слабее?", o:["J’aime bien","J’adore","J’aime beaucoup"], a:0}
]},
{t:"fill", h:"Переведи", items:[
{q:"Я обожаю музыку.", a:["J’adore la musique"], long:true},
{q:"Она ненавидит плавать.", a:["Elle déteste nager"], long:true},
{q:"Ты любишь танцевать?", a:["Tu aimes danser ?"], long:true},
{q:"Мы не любим лыжи.", a:["Nous n’aimons pas le ski","On n’aime pas le ski"], long:true}
]}
]});

TOPICS.push({
id:"u2-possessifs", sec:"book", unit:"2", kind:"Grammaire",
title:"Les adjectifs possessifs", ru:"mon, ma, mes… — притяжательные прилагательные", page:"с. 39, 42",
theory:`
${GRID(["Владелец","м. ед.","ж. ед.","мн."],[["je","m:mon","f:ma","p:mes"],["tu","m:ton","f:ta","p:tes"],["il / elle","m:son","f:sa","p:ses"],["nous","notre","notre","p:nos"],["vous","votre","votre","p:vos"],["ils / elles","leur","leur","p:leurs"]])}
${RULE("Согласуется с ПРЕДМЕТОМ, а не с владельцем",`<p>${F("son père")} = <b>его</b> отец <i>или</i> <b>её</b> отец. ${F("sa mère")} = его мать <i>или</i> её мать.</p><p>Важно только, какого рода <b>père</b> (м.) и <b>mère</b> (ж.). Кому они принадлежат — не важно.</p>${EX([["Nina et son frère","Нина и её брат (frère — м.р.)"],["Théo et sa cousine","Тео и его кузина (cousine — ж.р.)"],["Clara, son fils et sa fille","Клара, её сын и её дочь"]])}`)}
${VS({h:"Paul → его мать",big:F("sa mère"),sub:"mère — ж.р. → <b>sa</b>, хотя владелец мужчина"},{h:"Nina → её брат",big:F("son frère"),sub:"frère — м.р. → <b>son</b>, хотя владелец женщина"})}
${WARN(`Перед словом <b>женского рода на гласную или немую h</b> — мужская форма: ${F("mon amie")}, ${F("ton adresse")}, ${F("son école")}, ${F("mon histoire")}. ✗ <i>ma amie</i> — два гласных подряд звучат плохо.`)}
${FX(["_ma","+","amie","→","!mon amie"],"две гласные подряд не ставим — берём mon")}
<h3>leur или leurs?</h3>
<p>${F("leur fils")} — их сын (один). ${F("leurs enfants")} — их дети (несколько). ${F("Sofia, son mari et leurs enfants")}.</p>
<h3>Произношение</h3>
<p>${F("notre / votre")} [nɔtʁ] / [vɔtʁ] — открытое о; ${F("nos / vos")} [no] / [vo] — закрытое. Связывание:</p>
${LIS(LI("mon","ami","n"),LI("mes","amis","z"),LI("leurs","enfants","z"),LI("vos","enfants","z"))}
${NOTE(`${F("votre")} — это и «ваш» вежливо (одному человеку). На вопрос ${F("Votre grand-mère a quel âge ?")} отвечаешь ${F("Ma grand-mère a 80 ans.")}`)}
`,
ex:[
{t:"mc", h:"Выбери притяжательное (с. 39)", items:[
{q:"J’ai un oncle. ___ oncle a 48 ans.", o:["Mon","Ma","Mes"], a:0},
{q:"J’ai des cousins. ___ cousins habitent à Toulouse.", o:["Mes","Mon","Ma"], a:0},
{q:"Elle a deux frères. ___ frères sont sympas.", o:["Ses","Son","Leurs"], a:0},
{q:"Nous avons une fille. ___ fille déteste le sport.", o:["Notre","Nos","Votre"], a:0}
]},
{t:"fill", h:"Ответь, как в примере (с. 42)", items:[
{q:"Ta sœur travaille ? — Oui, ___ sœur travaille.", a:["ma"]},
{q:"Vos enfants sont à l’université ? — Oui, ___ enfants sont à l’université.", a:["nos","mes"], e:"Если «вы» — это пара: nos. Если вежливое «вы» одному человеку: mes."},
{q:"Votre grand-mère a quel âge ? — ___ grand-mère a 80 ans.", a:["Ma","Notre"]},
{q:"Tes parents aiment la mer ? — Oui, ___ parents aiment la mer.", a:["mes"]},
{q:"Ton cousin habite où ? — ___ cousin habite à Lille.", a:["Mon"]}
]},
{t:"mc", h:"son, sa, ses или leur(s)?", items:[
{q:"Nina et ___ frère", o:["son","sa"], a:0},
{q:"Théo et ___ cousine Clara", o:["sa","son"], a:0, e:"cousine — ж.р., неважно, что Тео мужчина."},
{q:"Paul et ___ mère", o:["sa","son"], a:0, e:"mère — ж.р. → sa, хотя Paul — мужчина."},
{q:"Sofia, son mari et ___ enfants (детей Софии и мужа)", o:["leurs","ses","leur"], a:0},
{q:"___ amie Léa (моя)", o:["Mon","Ma"], a:0, e:"amie начинается с гласной → mon."},
{q:"Quelle est ___ adresse ? (твой)", o:["ton","ta"], a:0, e:"adresse — ж.р., но на гласную → ton."}
]},
{t:"fill", h:"Переведи (только притяжательное + существительное)", items:[
{q:"его мать", a:["sa mère"]},{q:"её отец", a:["son père"]},{q:"их дети", a:["leurs enfants"]},{q:"моя подруга", a:["mon amie"]},{q:"ваши родители", a:["vos parents"]},{q:"наша квартира", a:["notre appartement"]},{q:"твои братья", a:["tes frères"]}
]},
{t:"tf", h:"Верно или неверно?", items:[
{q:"«sa mère» может значить «его мать».", a:true},
{q:"«ma amie» — правильно.", a:false, e:"mon amie."},
{q:"«leurs enfants» — их дети.", a:true},
{q:"Выбор son/sa зависит от того, мужчина или женщина владелец.", a:false, e:"Зависит от рода предмета."}
]}
]});

TOPICS.push({
id:"u2-famille", sec:"book", unit:"2", kind:"Vocabulaire + communication",
title:"La famille", ru:"Семья, семейное положение, как рассказать о семье", page:"с. 38–39, 41",
theory:`
<h3>Семейное древо</h3>
<div class="tree">
${TC("2 / 4",1,"les grands-parents",NODE("le grand-père","дедушка")+NODE("la grand-mère","бабушка"),1)}
${TC(2,2,"les parents",NODE("le père","папа")+NODE("la mère","мама"),1)}
${TC(3,2,"frère / sœur de mes parents",NODE("l’oncle","дядя")+NODE("la tante","тётя"),1)}
${TC(1,3,"mes frères et sœurs",NODE("le frère","брат")+NODE("la sœur","сестра"),1)}
${TC(2,3,"",NODE("moi","я","me"),1)}
${TC(3,3,"leurs enfants",NODE("le cousin","двоюр. брат")+NODE("la cousine","двоюр. сестра"))}
${TC(1,4,"enfants de mon frère",NODE("le neveu","племянник")+NODE("la nièce","племянница"))}
${TC(2,4,"mes enfants",NODE("le fils","сын [fis]")+NODE("la fille","дочь"),1)}
${TC(2,5,"les petits-enfants",NODE("le petit-fils","внук")+NODE("la petite-fille","внучка"))}
</div>
<h3>Все слова</h3>
${TBL(["Français","По-русски","Français","По-русски"],[
[F("les grands-parents"),"бабушка и дедушка",F("les petits-enfants"),"внуки"],
[F("le grand-père"),"дедушка",F("le petit-fils"),"внук"],
[F("la grand-mère"),"бабушка",F("la petite-fille"),"внучка"],
[F("les parents"),"родители",F("l’oncle (m.)"),"дядя"],
[F("le père (papa)"),"отец (папа)",F("la tante"),"тётя"],
[F("la mère (maman)"),"мать (мама)",F("le cousin / la cousine"),"двоюродный брат / сестра"],
[F("les enfants"),"дети",F("le neveu"),"племянник"],
[F("le fils"),"сын — читается [fis]!",F("la nièce"),"племянница"],
[F("la fille"),"дочь; девочка",F("le frère / la sœur"),"брат / сестра"]
])}
<h3>La situation familiale</h3>
${TBL(["Français","По-русски"],[[F("célibataire"),"холост, не замужем"],[F("marié(e)"),"женат / замужем"],[F("le mariage"),"свадьба; брак"],[F("le mari"),"муж"],[F("la femme"),"жена; женщина"],[F("le / la petit(e) ami(e)"),"парень / девушка (в отношениях)"],[F("fils / fille unique"),"единственный сын / дочь"]])}
${WARN(`Ложные друзья: ${F("les parents")} — родители (не «родственники»); ${F("la femme")} — и жена, и женщина; ${F("la fille")} — и дочь, и девочка; ${F("le petit-fils")} — внук, а не «маленький сын»; ${F("le fils")} — s читается, l нет: [fis].`)}
<h3>Как рассказать о семье</h3>
${EX([["J’ai un frère / une sœur.","У меня есть брат / сестра."],["Je n’ai pas de frères et sœurs. = Je suis fils / fille unique.","У меня нет братьев и сестёр. = Я единственный ребёнок."],["Chez moi, nous sommes quatre.","Нас в семье четверо."],["Mon frère est marié. Il a deux enfants.","Мой брат женат. У него двое детей."],["Ma sœur est célibataire.","Моя сестра не замужем."],["– Ton frère et ta sœur étudient ou ils travaillent ? – Ils travaillent.","– Твои брат и сестра учатся или работают? – Работают."]])}
<h3>Текст из учебника (с. 38): Nina et Théo préparent leur mariage</h3>
<div class="sample chat">
<p><b>Nina :</b> ${F("Théo, je prépare la liste des invités pour notre mariage. Moi, j’invite mes parents, ma grand-mère, mon frère (chez lui, ils sont quatre : lui, sa femme et ses enfants). Et toi ?")}</p>
<p><b>Théo :</b> ${F("Moi, j’invite mes parents, ma tante Olivia, mon oncle Paul, mes grands-parents, mon cousin Raphaël et ma cousine Clara, son fils et sa fille.")}</p>
<p><b>Théo :</b> ${F("Je n’ai pas de frères et sœurs, je suis fils unique, alors mes cousins, c’est important pour moi !")}</p>
<p><b>Nina :</b> ${F("Oui ! Et mon neveu et ma nièce adorent les enfants de Clara ! Et pour les amis ? On invite qui ?")}</p>
<p><b>Théo :</b> ${F("Sofia, son mari et leurs enfants. Et Nessim, le frère de Sofia ! C’est aussi mon ami.")}</p>
<p><b>Nina :</b> ${F("Il est marié ?")} <b>Théo :</b> ${F("Non, il est célibataire.")}</p>
</div>
`,
ex:[
{t:"cards", h:"Карточки: семья", items:[["le père","отец"],["la mère","мать"],["les parents","родители"],["le fils","сын"],["la fille","дочь"],["le frère","брат"],["la sœur","сестра"],["le grand-père","дедушка"],["la grand-mère","бабушка"],["le petit-fils","внук"],["la petite-fille","внучка"],["l’oncle","дядя"],["la tante","тётя"],["le cousin","двоюродный брат"],["la cousine","двоюродная сестра"],["le neveu","племянник"],["la nièce","племянница"],["le mari","муж"],["la femme","жена"],["célibataire","холост / не замужем"],["marié(e)","женат / замужем"],["le mariage","свадьба"],["le petit ami","парень (в отношениях)"]]},
{t:"fill", h:"Вставь: nièce, frère, fille, fils unique, célibataire (с. 39)", items:[
{q:"Clara a deux enfants, un fils et une ___.", a:["fille"]},
{q:"Nina a un neveu et une ___…", a:["nièce"]},
{q:"…: les enfants de son ___.", a:["frère"]},
{q:"Nessim n’est pas marié, il est ___.", a:["célibataire"]},
{q:"Théo n’a pas de frères et sœurs, il est ___.", a:["fils unique"]}
]},
{t:"mc", h:"Выбери правильный ответ (с. 41)", items:[
{q:"Ma sœur a un mari. Elle est…", o:["mariée","célibataire"], a:0},
{q:"Elsa est ___ de mon frère.", o:["la femme","le mari"], a:0},
{q:"Hugo n’est pas marié. Teresa est…", o:["sa petite amie","sa femme"], a:0},
{q:"C’est ___ de mon oncle Laurent : il y a 100 invités !", o:["le mariage","le marié"], a:0}
]},
{t:"mc", h:"Семейная логика", items:[
{q:"Le père de mon père, c’est mon…", o:["grand-père","oncle","petit-fils"], a:0},
{q:"La fille de ma tante, c’est ma…", o:["cousine","nièce","sœur"], a:0},
{q:"Le fils de ma sœur, c’est mon…", o:["neveu","cousin","petit-fils"], a:0},
{q:"La sœur de ma mère, c’est ma…", o:["tante","nièce","grand-mère"], a:0},
{q:"Le fils de mon fils, c’est mon…", o:["petit-fils","neveu","petit ami"], a:0}
]},
{t:"tf", h:"По тексту Nina / Théo: верно или неверно? (с. 39)", items:[
{q:"Théo invite son oncle Paul.", a:true},
{q:"Théo n’invite pas sa cousine.", a:false, e:"Il invite sa cousine Clara."},
{q:"Le frère de Nina est marié.", a:true, e:"Chez lui : lui, sa femme et ses enfants."},
{q:"Sofia, l’amie de Théo, a des enfants.", a:true},
{q:"Théo a une sœur.", a:false, e:"Il est fils unique."},
{q:"Nessim est célibataire.", a:true}
]}
]});

TOPICS.push({
id:"u2-professions", sec:"book", unit:"2", kind:"Grammaire + vocabulaire",
title:"Le masculin et le féminin des professions", ru:"Профессии в мужском и женском роде", page:"с. 40–42",
theory:`
${MORPH([["-e → без изменений",[["fleuriste","fleuriste"],["journaliste","journaliste"]]],["-eur → -euse",[["coiffeur","coiffeuse"],["vendeur","vendeuse"]]],["-teur → -trice",[["acteur","actrice"],["directeur","directrice"]]],["-ien → -ienne",[["informaticien","informaticienne"],["musicien","musicienne"]]],["-er → -ère",[["infirmier","infirmière"],["boulanger","boulangère"]]],["-t / -r → + e",[["étudiant","étudiante"],["professeur","professeure"]]]])}
${NOTE("-ien → -ienne работает так же, как с национальностями: italien → italienne. Одна схема на два топика!")}
${RULE("Профессия после être — без артикля",`<p>${F("Il est infirmier.")} ${F("Elle est étudiante.")} ${F("Mon père est informaticien.")} ${F("Ma mère est professeure.")}</p><p>Но с <b>c’est</b> — с артиклем: ${F("C’est un infirmier.")} ${F("C’est une actrice.")}</p>`)}
${VS({h:"il / elle est + профессия",big:F("Il est infirmier."),sub:"без артикля",tone:"good"},{h:"c’est + артикль + профессия",big:F("C’est un infirmier."),sub:"с артиклем",tone:"good"},{h:"смешивать нельзя",big:"<s>Il est un infirmier.</s>",sub:"ошибка",tone:"bad"})}
${CMP("Совпадает: «Она студентка».","")}
<h3>Произношение</h3>
<p>${F("étudiant")} [etydjɑ̃] → ${F("étudiante")} [etydjɑ̃t]; ${F("infirmier")} [ɛ̃fiʁmje] → ${F("infirmière")} [ɛ̃fiʁmjɛʁ]; ${F("informaticien")} [ɛ̃] → ${F("informaticienne")} [ɛn].</p>
<h3>Лексика (с. 41)</h3>
${TBL(["Français","По-русски","Где работает"],[[F("l’acteur, l’actrice"),"актёр, актриса",F("au cinéma, au théâtre")],[F("le coiffeur, la coiffeuse"),"парикмахер",F("dans un salon de coiffure")],[F("l’étudiant(e)"),"студент(ка)",F("à l’université")],[F("le / la fleuriste"),"флорист",F("dans un magasin de fleurs")],[F("l’infirmier, l’infirmière"),"медбрат, медсестра",F("à l’hôpital")],[F("l’informaticien(ne)"),"программист, айтишник",F("dans une entreprise")],[F("le / la professeur(e)"),"преподаватель",F("à l’université, à l’école")]])}
`,
ex:[
{t:"fill", h:"Поставь профессию в мужской или женский род (с. 40, 42)", items:[
{q:"Maxime est coiffeur. Laure est ___.", a:["coiffeuse"]},
{q:"Élodie est infirmière. Jean est ___.", a:["infirmier"]},
{q:"Gabriel est fleuriste. Florence est ___.", a:["fleuriste"]},
{q:"Manuelle est actrice. Xavier est ___.", a:["acteur"]},
{q:"Christine est étudiante. Pedro est ___.", a:["étudiant"]},
{q:"Aurélie est informaticienne. William est ___.", a:["informaticien"]},
{q:"Romain est professeur. Ninon est ___.", a:["professeure","professeur"]},
{q:"Ana est coiffeuse. Paul est ___.", a:["coiffeur"]}
]},
{t:"sort", h:"По какой схеме меняется?", cats:["-eur → -euse","-teur → -trice","-ien → -ienne","-er → -ère","не меняется"], items:[["coiffeur",0],["acteur",1],["informaticien",2],["infirmier",3],["fleuriste",4],["vendeur",0],["directeur",1],["musicien",2],["boulanger",3],["journaliste",4]]},
{t:"fill", h:"Женский род новых профессий (по тем же схемам)", items:[
{q:"vendeur →", a:["vendeuse"]},{q:"musicien →", a:["musicienne"]},{q:"cuisinier →", a:["cuisinière"]},{q:"directeur →", a:["directrice"]},{q:"avocat →", a:["avocate"]},{q:"dentiste →", a:["dentiste"]}
]},
{t:"mc", h:"С артиклем или без?", items:[
{q:"Elle est ___ étudiante.", o:["— (без артикля)","une"], a:0},
{q:"C’est ___ actrice française.", o:["une","— (без артикля)"], a:0},
{q:"Mon père est ___ informaticien.", o:["— (без артикля)","un"], a:0},
{q:"Barbara travaille à l’hôpital, elle est…", o:["infirmière","professeure","coiffeuse"], a:0}
]},
{t:"match", h:"Соедини профессию с переводом", pairs:[["l’infirmière","медсестра"],["l’informaticien","программист"],["la coiffeuse","парикмахер (ж.)"],["l’acteur","актёр"],["le fleuriste","флорист"],["la professeure","преподавательница"]]}
]});

TOPICS.push({
id:"u2-phonetique", sec:"book", unit:"2", kind:"Phonie-graphie",
title:"Verbes en -er et liaisons", ru:"Произношение глаголов на -er и связывание с определителями", page:"с. 36, 42",
theory:`
<h3>Je prononce / j’écris</h3>
${SAME(['je travaill<span class="mute">e</span>','tu travaill<span class="mute">es</span>','il travaill<span class="mute">e</span>','ils travaill<span class="mute">ent</span>'],"[tʁavaj]",[["nous travaillons","[ɔ̃]"],["vous travaillez","[e]"]])}
${TBL(["Пишу","Произношу"],[[F("je travaille, tu travailles, il travaille, ils travaillent"),"одинаково: [tʁavaj] — 1 звучание, 4 написания"],[F("j’aime, tu aimes, il aime"),"одинаково: [ɛm]"],[F("ils aiment"),"[il<b>z</b>ɛm] — отличается связыванием!"]])}
${RULE("Где на слух отличается il от ils",`<p>Только если глагол начинается с <b>гласной</b>: ${F("il écoute")} [ilekut] ≠ ${F("ils écoutent")} [ilzekut]; ${F("il adore")} ≠ ${F("ils adorent")}.</p>${LIS(LI("ils","écoutent","z"),LI("ils","adorent","z"),LI("ils","aiment","z"))}<p>Если с согласной — одинаково: ${F("il parle = ils parlent")}, ${F("il déteste = ils détestent")}.</p>`)}
<h3>Связывание с определителями (с. 42)</h3>
<p>Между определителем (артикль, притяжательное) и существительным на гласную/немую h связывание <b>обязательно</b>.</p>
${TBL(["Слышим","Примеры"],[["[z]",F("les‿étudiants, des‿acteurs, mes‿amis, leurs‿enfants, vos‿enfants, ses‿amies, nos‿activités, mes‿oncles")],["[n]",F("un‿étudiant, mon‿ami, ton‿adresse, son‿oncle")],["нет (согласная)",F("les professeurs, des coiffeurs, mes cousins")]])}
${LIS(LI("les","étudiants","z"),LI("des","acteurs","z"),LI("un","étudiant","n"),LI("mon","ami","n"),LI("leurs","enfants","z"),LI("les","professeurs",""),LI("mes","cousins",""))}
<p>Связующая согласная «переезжает» к следующему слогу: Les / <b>zé</b> / tu / diants.</p>
`,
ex:[
{t:"sort", h:"Что слышим: [z], [n] или связывания нет?", cats:["[z]","[n]","нет"], items:[["un étudiant",1],["des infirmiers",0],["les acteurs",0],["mon ami",1],["leurs enfants",0],["mes oncles",0],["ton adresse",1],["vos enfants",0],["les professeurs",2],["des coiffeurs",2],["mes cousins",2],["nos activités",0]]},
{t:"mc", h:"Произношение одинаковое (=) или разное (≠)? (с. 36)", items:[
{q:"il écoute – ils écoutent", o:["=","≠"], a:1, e:"ils‿écoutent [z]."},
{q:"il parle – ils parlent", o:["=","≠"], a:0},
{q:"il travaille – ils travaillent", o:["=","≠"], a:0},
{q:"ils adorent – il adore", o:["=","≠"], a:1},
{q:"ils détestent – il déteste", o:["=","≠"], a:0}
]},
{t:"tf", h:"Верно или неверно?", items:[
{q:"В «ils parlent» окончание -ent читается.", a:false},
{q:"В «mes amis» слышно [z].", a:true},
{q:"В «les professeurs» есть связывание.", a:false},
{q:"В «mon amie» слышно [n].", a:true}
]}
]});
