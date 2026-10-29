/* =========================================================
   FRANÇAIS — справочник: «Как строить предложения: + / − / ?»
   Двуязычная сборка через TF (FRL из fr-u3.js); ERRBOX — из fr-plus.js.
   Тема вставляется в TOPICS / TOPICS_EN перед r-questions.
   ========================================================= */
function FR_PHRASE(L){
  const keepHL = HL, keepFRL = FRL; FRL = L; HL = L;
  try { return FR_PHRASE_TOPIC(); } finally { HL = keepHL; FRL = keepFRL; }
}
function FR_PHRASE_TOPIC(){
const SUJ = TF("подлежащее","subject"), VERB = TF("глагол","verb"), REST = TF("остальное","the rest");
return {
id:"r-phrase", sec:"ref", kind:TF("С нуля","From scratch"),
title:"Construire une phrase : + / − / ?", ru:TF("Как строить предложения: утверждение, отрицание, вопрос","Building sentences: statements, negatives, questions"), page:"",
theory:`
<p>${TF("Почти любую фразу во французском можно сказать в трёх видах: утвердить (+), отрицать (−) или спросить (?). Схемы короткие — выучи их один раз, и они работают с любым глаголом.","Almost any French sentence comes in three forms: a statement (+), a negative (−) or a question (?). The patterns are short — learn them once and they work with any verb.")}</p>
${S3([
{k:"pos", sym:"+", h:TF("Утверждение","Statement"), f:[SUJ, VERB, REST], ex:[["Je parle français.",TF("Я говорю по-французски.","I speak French.")],["Il habite à Lyon.",TF("Он живёт в Лионе.","He lives in Lyon.")],["Nous aimons le cinéma.",TF("Мы любим кино.","We love cinema.")]]},
{k:"neg", sym:"−", h:TF("Отрицание","Negative"), f:[SUJ, "!ne", VERB, "!pas", REST], ex:[["Je ne parle pas français.",TF("Я не говорю по-французски.","I don’t speak French.")],["Il n’habite pas à Lyon.",TF("ne → n’ перед гласной","ne → n’ before a vowel")],["Nous n’aimons pas le cinéma.",TF("Мы не любим кино.","We don’t like cinema.")]]},
{k:"q", sym:"?", h:TF("Вопрос","Question"), f:["!Est-ce que", SUJ, VERB, REST, "!?"], ex:[["Tu parles français ?",TF("интонация ↗ — разговорный","rising intonation ↗ — spoken")],["Est-ce que tu parles français ?",TF("est-ce que — нейтральный, подходит всегда","est-ce que — neutral, always fine")],["Parles-tu français ?",TF("инверсия — письменный, вежливый","inversion — written, polite")]]}
])}
${RULE(TF("Подлежащее обязательно","The subject is required"), `<p>${TF(`Глагол никогда не стоит один: перед ним всегда ${F("je, tu, il, nous…")} или существительное. ✓ ${F("Je parle français.")} ✗ <s>Parle français.</s> Даже там, где «никого нет»: ${F("Il y a une plage.")} ${F("Il pleut.")}`, `A verb never stands alone: it always has ${F("je, tu, il, nous…")} or a noun in front of it. ✓ ${F("Je parle français.")} ✗ <s>Parle français.</s> Even when there’s «nobody»: ${F("Il y a une plage.")} ${F("Il pleut.")}`)}</p>`)}
${CMP2(``, `Как в английском: <i>I speak French</i> — подлежащее обязательно, порядок слов фиксированный.`, `Just like English: <i>I speak French</i> — the subject is required and the word order is fixed.`)}

<h3>${TF("Одна фраза — три формы","One sentence, three forms")}</h3>
${TBL([S3TH("pos","+",TF("утверждение","statement")), S3TH("neg","−",TF("отрицание","negative")), S3TH("q","?",TF("вопрос","question"))],[
[F("Tu aimes le café."), F("Tu n’aimes pas le café."), F("Est-ce que tu aimes le café ?")],
[F("Il a un frère."), F("Il n’a pas de frère."), F("Est-ce qu’il a un frère ?")],
[F("Vous êtes français."), F("Vous n’êtes pas français."), F("Êtes-vous français ?")],
[F("Elle s’appelle Léa."), F("Elle ne s’appelle pas Léa."), F("Est-ce qu’elle s’appelle Léa ?")],
[F("Il y a une plage."), F("Il n’y a pas de plage."), F("Est-ce qu’il y a une plage ?")],
[F("Nous mangeons du pain."), F("Nous ne mangeons pas de pain."), F("Est-ce que nous mangeons du pain ?")],
[F("C’est Paul."), F("Ce n’est pas Paul."), F("C’est Paul ?")]
])}

<h3>${TF("Отрицание: ne… pas «обнимают» глагол","Negatives: ne… pas «hug» the verb")}</h3>
${FXS(FX([`~${SUJ}`,"!ne",`~${VERB}`,"!pas"]), FX(["Je","!ne","m’appelle","!pas","Paul."], TF("me / te / se остаются рядом с глаголом — внутри","me / te / se stay next to the verb — inside")), FX(["Il","!n’","y a","!pas","de plage."], TF("y тоже внутри: il n’y a pas","y is inside too: il n’y a pas")))}
${TBL([TF("Правило","Rule"), TF("Пример","Example")],[
[TF("перед гласной и немой h: <b>ne → n’</b>","before a vowel or silent h: <b>ne → n’</b>"), F("Je n’aime pas… Il n’habite pas…")],
[TF("<b>un / une / des / du / de la → de (d’)</b>","<b>un / une / des / du / de la → de (d’)</b>"), F("J’ai une voiture. → Je n’ai pas de voiture.")+"<br>"+F("Je mange du pain. → Je ne mange pas de pain.")],
[TF("<b>le / la / les</b> не меняются","<b>le / la / les</b> don’t change"), F("J’aime le sport. → Je n’aime pas le sport.")],
[TF("после <b>être</b> артикль не меняется","after <b>être</b> the article doesn’t change"), F("C’est un piano. → Ce n’est pas un piano.")]
])}

<h3>${TF("Вопрос: три способа","Questions: three ways")}</h3>
${TBL([TF("Способ","Way"), TF("Как строится","How it’s built"), TF("Пример","Example")],[
[TF("1. Интонация ↗","1. Intonation ↗"), TF("обычный порядок слов, голос поднимается в конце","normal word order, the voice rises at the end"), F("Tu habites à Paris ?")],
[TF("2. Est-ce que","2. Est-ce que"), TF("<b>est-ce que</b> + обычная фраза; перед гласной — <b>est-ce qu’</b>","<b>est-ce que</b> + a normal sentence; before a vowel — <b>est-ce qu’</b>"), F("Est-ce que tu habites à Paris ?")+"<br>"+F("Est-ce qu’il habite à Paris ?")],
[TF("3. Инверсия","3. Inversion"), TF("глагол-местоимение через дефис; между гласными вставляем <b>-t-</b>","verb-pronoun with a hyphen; between two vowels add <b>-t-</b>"), F("Habites-tu à Paris ?")+"<br>"+F("Habite-t-il à Paris ? A-t-elle un chien ?")]
])}
${WARN(TF(`Не смешивай способы: ✗ <s>Est-ce que parles-tu…</s> → ✓ ${F("Est-ce que tu parles… ?")} Инверсия — только с местоимением; с именем проще так: ${F("Est-ce que Paul habite à Paris ?")}`, `Don’t mix the ways: ✗ <s>Est-ce que parles-tu…</s> → ✓ ${F("Est-ce que tu parles… ?")} Inversion only works with a pronoun; with a name it’s easier to say ${F("Est-ce que Paul habite à Paris ?")}`))}

<h3>${TF("Вопрос с вопросительным словом","Questions with a question word")}</h3>
${FXS(
FX(["!Où","!est-ce que",`~${SUJ}`,`~${VERB}`,"?"], F("Où est-ce que tu habites ?")),
FX([`~${SUJ}`,`~${VERB}`,"!où","?"], TF("разговорно: ","spoken: ")+F("Tu habites où ?")),
FX(["!Où",`~${VERB}-${SUJ}`,"?"], TF("письменно: ","written: ")+F("Où habites-tu ?"))
)}
<p>${TF(`Так же с ${F("quand, comment, pourquoi, combien")}. «Что?» — ${F("Qu’est-ce que tu fais ?")}; в разговоре — ${F("Tu fais quoi ?")}`, `The same goes for ${F("quand, comment, pourquoi, combien")}. «What?» — ${F("Qu’est-ce que tu fais ?")}; in speech — ${F("Tu fais quoi ?")}`)}</p>

<h3>${TF("Как ответить: oui, non, si","How to answer: oui, non, si")}</h3>
${TBL([TF("Вопрос","Question"), TF("Да","Yes"), TF("Нет","No")],[
[F("Tu parles anglais ?"), F("Oui, je parle anglais."), F("Non, je ne parle pas anglais.")],
[F("Tu ne parles pas anglais ?"), F("<b>Si</b>, je parle anglais !"), F("Non, je ne parle pas anglais.")]
])}
${CMP2(``, `Как <i>Yes, I do!</i> в ответ на <i>Don’t you…?</i> — только одним коротким словом.`, `Like <i>Don’t you speak English? — Yes, I do!</i>: <b>si</b> is the «yes» that contradicts a negative question.`)}
${ERRBOX([
["Je ne pas parle français.","Je ne parle pas français.",TF("pas стоит после глагола.","pas goes after the verb.")],
["Je ne aime pas le thé.","Je n’aime pas le thé.",TF("Перед гласной ne → n’.","ne → n’ before a vowel.")],
["Je n’ai pas un frère.","Je n’ai pas de frère.",TF("После отрицания un / une / des → de.","After a negative un / une / des → de.")],
["Est-ce que parles-tu anglais ?","Est-ce que tu parles anglais ?",TF("После est-ce que — обычный порядок слов.","After est-ce que — normal word order.")],
["Aime-il le sport ?","Aime-t-il le sport ?",TF("Между двумя гласными — -t-.","Between two vowels — -t-.")],
["– Tu n’aimes pas le sport ? – Oui, j’aime !","– Si, j’aime le sport !",TF("«Да» на отрицательный вопрос — si.","«Yes» to a negative question is si.")]
])}
<p class="cah-links"><a class="btn sm sec" href="#r-negation">${TF("Подробнее","More")}: La négation →</a> <a class="btn sm sec" href="#r-questions">${TF("Подробнее","More")}: Poser une question →</a></p>
`,
ex:[
{t:"sort", h:TF("Утверждение, отрицание или вопрос?","Statement, negative or question?"), cats:[TF("+ утверждение","+ statement"), TF("− отрицание","− negative"), TF("? вопрос","? question")], w:[
"Отрицание узнаём по ne (n’)… pas вокруг глагола; вопрос — по знаку «?», est-ce que или глаголу перед местоимением через дефис.",
"A negative has ne (n’)… pas around the verb; a question has «?», est-ce que or a verb before its pronoun with a hyphen."], items:[["Je parle russe.",0],["Elle n’aime pas le sport.",1],["Est-ce que tu habites ici ?",2],["Nous avons un chien.",0],["Ils ne sont pas français.",1],["Habitez-vous à Lyon ?",2],["Il n’y a pas de musée.",1],["Tu aimes le chocolat ?",2],["C’est mon frère.",0],["Ce n’est pas grave.",1]]},
{t:"fill", h:TF("Сделай отрицание","Make it negative"), w:[
"ne… pas обнимают глагол; ne → n’ перед гласной; un / une / des / du / de la → de; me / te / se остаются внутри: je ne m’appelle pas.",
"ne… pas go around the verb; ne → n’ before a vowel; un / une / des / du / de la → de; me / te / se stay inside: je ne m’appelle pas."], items:[
{q:"Je parle espagnol. →", a:["Je ne parle pas espagnol"], long:true},
{q:"Elle habite à Paris. →", a:["Elle n’habite pas à Paris"], long:true},
{q:"Nous avons une voiture. →", a:["Nous n’avons pas de voiture"], long:true},
{q:"Tu t’appelles Marc. →", a:["Tu ne t’appelles pas Marc"], long:true},
{q:"Ils mangent de la viande. →", a:["Ils ne mangent pas de viande"], long:true},
{q:"C’est un restaurant. →", a:["Ce n’est pas un restaurant"], long:true}
]},
{t:"fill", h:TF("Задай вопрос с est-ce que","Ask a question with est-ce que"), w:[
"est-ce que + обычная фраза, порядок слов не меняется; перед il, elle, on и гласной — est-ce qu’.",
"est-ce que + a normal sentence, the word order stays the same; before il, elle, on or a vowel — est-ce qu’."], items:[
{q:"Tu parles anglais. →", a:["Est-ce que tu parles anglais"], long:true},
{q:"Il habite à Nice. →", a:["Est-ce qu’il habite à Nice"], long:true},
{q:"Vous aimez le jazz. →", a:["Est-ce que vous aimez le jazz"], long:true},
{q:"Elle a des enfants. →", a:["Est-ce qu’elle a des enfants"], long:true},
{q:"Il y a une boulangerie. →", a:["Est-ce qu’il y a une boulangerie"], long:true}
]},
{t:"mc", h:TF("Инверсия: выбери правильный вопрос","Inversion: choose the correct question"), w:[
"Глагол — дефис — местоимение. Если глагол кончается на гласную, а дальше il / elle / on, вставляем -t-: aime-t-il, a-t-elle. С tu, nous, vous -t- не нужно.",
"Verb — hyphen — pronoun. If the verb ends in a vowel and il / elle / on follows, add -t-: aime-t-il, a-t-elle. No -t- with tu, nous, vous."], items:[
{q:"Vous parlez français. →", o:["Parlez-vous français ?","Parlez vous français ?","Vous parlez-vous français ?"], a:0},
{q:"Il aime le sport. →", o:["Aime-t-il le sport ?","Aime-il le sport ?","Il aime-t-il le sport ?"], a:0, e:TF("aime + il — две гласные встречаются → -t-.","aime + il — two vowels meet → -t-.")},
{q:"Tu as un frère. →", o:["As-tu un frère ?","A-tu un frère ?","As-t-tu un frère ?"], a:0},
{q:"Elle a vingt ans. →", o:["A-t-elle vingt ans ?","A-elle vingt ans ?","Elle a-t-elle vingt ans ?"], a:0},
{q:"Nous allons au marché. →", o:["Allons-nous au marché ?","Allons-t-nous au marché ?","Nous allons-nous au marché ?"], a:0, e:TF("-t- бывает только перед il / elle / on.","-t- only comes before il / elle / on.")}
]},
{t:"order", h:TF("Собери фразу","Build the sentence"), w:[
"+ : подлежащее + глагол + остальное. − : ne + глагол + pas. ? : est-ce que + обычная фраза или вопросительное слово + est-ce que + подлежащее + глагол.",
"+ : subject + verb + the rest. − : ne + verb + pas. ? : est-ce que + a normal sentence, or question word + est-ce que + subject + verb."], items:[
{s:"Je ne parle pas italien.", ru:TF("Я не говорю по-итальянски.","I don’t speak Italian.")},
{s:"Est-ce que tu aimes le fromage ?", ru:TF("Ты любишь сыр?","Do you like cheese?")},
{s:"Où est-ce que vous habitez ?", ru:TF("Где вы живёте?","Where do you live?")},
{s:"Il n’y a pas de plage.", ru:TF("Там нет пляжа.","There’s no beach.")},
{s:"Pourquoi est-ce qu’elle apprend le français ?", ru:TF("Почему она учит французский?","Why is she learning French?")}
]},
{t:"mc", h:TF("Oui, non или si?","Oui, non or si?"), w:[
"На обычный вопрос: oui (да) / non (нет). На отрицательный вопрос («Ты не…?») «да» — это si, а non подтверждает отрицание.",
"To a normal question: oui (yes) / non (no). To a negative question («Don’t you…?») «yes» is si, and non confirms the negative."], items:[
{q:"– Tu parles anglais ? – ___, je parle anglais.", o:["Oui","Si","Non"], a:0},
{q:"– Tu ne parles pas anglais ? – ___, je parle anglais !", o:["Si","Oui","Non"], a:0},
{q:"– Vous n’êtes pas russe ? – ___, je ne suis pas russe.", o:["Non","Si","Oui"], a:0},
{q:"– Il n’a pas de frère ? – ___, il a deux frères !", o:["Si","Oui","Non"], a:0}
]},
{t:"mc", h:TF("Найди правильную фразу","Find the correct sentence"), w:[
"Проверь: pas после глагола; n’ перед гласной; pas de вместо pas un/une/des; после est-ce que — обычный порядок; вопросительное слово стоит первым.",
"Check: pas after the verb; n’ before a vowel; pas de instead of pas un/une/des; normal order after est-ce que; the question word comes first."], items:[
{q:TF("Я не люблю кофе.","I don’t like coffee."), o:["Je n’aime pas le café.","Je ne pas aime le café.","Je n’aime pas de café."], a:0, e:TF("После aimer артикль le не меняется.","After aimer the article le doesn’t change.")},
{q:TF("Ты живёшь в Париже?","Do you live in Paris?"), o:["Est-ce que tu habites à Paris ?","Est-ce que habites-tu à Paris ?","Est-ce tu habites à Paris ?"], a:0},
{q:TF("Где он работает?","Where does he work?"), o:["Où est-ce qu’il travaille ?","Où il est-ce que travaille ?","Est-ce que où il travaille ?"], a:0},
{q:TF("У меня нет машины.","I don’t have a car."), o:["Je n’ai pas de voiture.","Je n’ai pas une voiture.","Je ne ai pas de voiture."], a:0},
{q:TF("Меня зовут не Поль.","My name isn’t Paul."), o:["Je ne m’appelle pas Paul.","Je m’appelle ne pas Paul.","Je ne appelle pas Paul."], a:0}
]}
]};
}

(function(){
  const ru = FR_PHRASE("ru"), en = FR_PHRASE("en");
  if (!WHY[ru.id]) WHY[ru.id] = ru.ex.map(e=>e.w || ["",""]);
  const put = (list, tp) => { const i = list.findIndex(x=>x.id === "r-questions"); if (i >= 0) list.splice(i, 0, tp); else list.push(tp); };
  put(TOPICS, ru); put(TOPICS_EN, en);
})();
