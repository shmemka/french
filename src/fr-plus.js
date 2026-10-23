/* =========================================================
   FRANÇAIS — дополнения к темам юнитов 0–2 и справочника:
   блок «Частые ошибки» в конце теории + новые задания в конец
   (ответы хранятся по индексу, поэтому только append).
   Применяется и к TOPICS (ru), и к TOPICS_EN (en).
   ========================================================= */
const ERRBOX = rows => `<div class="mist"><div class="mist-t">${TF("Частые ошибки","Common mistakes")}</div>${rows.map(([bad, good, why])=>`<div class="mist-r"><span class="mist-bad">✗ <s>${bad}</s></span><span class="mist-good">✓ <span class="fr">${good}</span></span>${why ? `<span class="mist-why">${why}</span>` : ""}</div>`).join("")}</div>`;

const FR_PLUS = () => ({
"u1-verbes": {
theory: ERRBOX([
["Je suis 20 ans.","J’ai 20 ans.",TF("Возраст — всегда avoir.","Age always takes avoir.")],
["Je m’appele Anna.","Je m’appelle Anna.",TF("Перед немой e — две l.","Two l’s before a silent e.")],
["Nous nous appellons…","Nous nous appelons…",TF("У nous и vous — одна l: окончание слышно.","nous and vous have one l: the ending is heard.")],
["Il est un étudiant.","Il est étudiant.",TF("Профессия после être — без артикля.","A job after être takes no article.")]
]),
ex:[{t:"mc", h:TF("Найди правильную фразу","Find the correct sentence"), w:[
"Проверь четыре ловушки: возраст с avoir; s’appeler — две l только перед немой e; профессия после être без артикля; tu es / il est.",
"Check the four traps: age with avoir; s’appeler has two l’s only before a silent e; no article for a job after être; tu es / il est."], items:[
{q:TF("Мне 19 лет.","I’m 19."), o:["J’ai 19 ans.","Je suis 19 ans.","J’ai 19."], a:0},
{q:TF("Их зовут Лео и Макс.","They’re called Léo and Max."), o:["Ils s’appellent Léo et Max.","Ils s’appelent Léo et Max.","Ils s’appelle Léo et Max."], a:0},
{q:TF("Мы — Анна и Ким.","We are Anna and Kim (our names)."), o:["Nous nous appelons Anna et Kim.","Nous nous appellons Anna et Kim.","Nous appelons Anna et Kim."], a:0},
{q:TF("Она студентка.","She’s a student."), o:["Elle est étudiante.","Elle est une étudiante.","Elle a étudiante."], a:0},
{q:TF("Ты говоришь по-английски?","Do you speak English?"), o:["Tu parles anglais ?","Tu parle anglais ?","Tu parlez anglais ?"], a:0}
]}]
},
"u1-nationalites": {
theory: ERRBOX([
["Elle est russee.","Elle est russe.",TF("Кончается на -e → не меняется.","Already ends in -e → no change.")],
["Elle est grece.","Elle est grecque.",TF("Исключения: grec → grecque, turc → turque.","Exceptions: grec → grecque, turc → turque.")],
["Il est Français.","Il est français.",TF("Прилагательное — со строчной. С заглавной только существительное: un Français.","The adjective is lower case. Only the noun is capitalised: un Français.")],
["Elle est italiene.","Elle est italienne.",TF("-ien → -ienne: n удваивается.","-ien → -ienne: the n doubles.")]
]),
ex:[{t:"fill", h:TF("Поставь в женский род","Put into the feminine"), w:[
"Обычно +e; -ien → -ienne, -éen → -éenne; на -e без изменений; grec → grecque, turc → turque.",
"Usually +e; -ien → -ienne, -éen → -éenne; no change after -e; grec → grecque, turc → turque."], items:[
{q:"Il est canadien. Elle est ___.", a:["canadienne"]},
{q:"Il est belge. Elle est ___.", a:["belge"]},
{q:"Il est coréen. Elle est ___.", a:["coréenne"]},
{q:"Il est turc. Elle est ___.", a:["turque"]},
{q:"Il est mexicain. Elle est ___.", a:["mexicaine"]},
{q:"Il est suisse. Elle est ___.", a:["suisse"]}
]}]
},
"u1-articles-def": {
theory: ERRBOX([
["le école, la université","l’école, l’université",TF("Перед гласной — всегда l’.","Before a vowel — always l’.")],
["J’aime cinéma.","J’aime le cinéma.",TF("После aimer существительное всегда с артиклем.","After aimer a noun always needs an article.")],
["la Mexique","le Mexique",TF("Исключение: на -e, но мужской род.","Exception: ends in -e but is masculine.")],
["J’aime les musique.","J’aime la musique.",TF("les — только для множественного числа.","les is for plurals only.")]
]),
ex:[{t:"mc", h:TF("Найди правильный вариант","Find the correct option"), w:[
"l’ перед гласной, le/la по роду, les для мн. ч.; после aimer артикль обязателен.",
"l’ before a vowel, le/la by gender, les for plurals; after aimer the article is required."], items:[
{q:TF("Я люблю историю.","I like history."), o:["J’aime l’histoire.","J’aime histoire.","J’aime la histoire."], a:0},
{q:TF("Мексика","Mexico"), o:["le Mexique","la Mexique","les Mexique"], a:0},
{q:TF("Ты любишь языки?","Do you like languages?"), o:["Tu aimes les langues ?","Tu aimes langues ?","Tu aimes la langues ?"], a:0},
{q:TF("университет","the university"), o:["l’université","la université","le université"], a:0}
]}]
},
"u1-prepositions": {
theory: ERRBOX([
["J’habite en Paris.","J’habite à Paris.",TF("Город — всегда à.","A city always takes à.")],
["J’habite au France.","J’habite en France.",TF("Страна ж. р. → en.","Feminine country → en.")],
["Il habite à Canada.","Il habite au Canada.",TF("Страна м. р. → au.","Masculine country → au.")],
["Elle est née en États-Unis.","Elle est née aux États-Unis.",TF("Мн. ч. → aux.","Plural → aux.")],
["Il habite au Iran.","Il habite en Iran.",TF("Мужская страна на гласную → en.","A masculine country starting with a vowel → en.")]
]),
ex:[{t:"fill", h:TF("Вставь à, en, au или aux","Fill in à, en, au or aux"), w:[
"Город — à. Страна: ж. р. или на гласную — en, м. р. — au, мн. ч. — aux.",
"City — à. Country: feminine or vowel-initial — en, masculine — au, plural — aux."], items:[
{q:"Je suis né à Rome, ___ Italie.", a:["en"]},
{q:"Elle habite ___ Japon.", a:["au"]},
{q:"Nous travaillons ___ Pays-Bas.", a:["aux"]},
{q:"Tu habites ___ Iran ?", a:["en"]},
{q:"Il est ___ Marseille.", a:["à"]},
{q:"Mes parents habitent ___ Mexique.", a:["au"]}
]}]
},
"u1-quel": {
theory: ERRBOX([
["Quel est ton adresse ?","Quelle est ton adresse ?",TF("adresse — ж. р., хотя перед гласной ton.","adresse is feminine even though it takes ton.")],
["Quelle âge tu as ?","Quel âge tu as ?",TF("âge — м. р.","âge is masculine.")],
["Quels langues tu parles ?","Quelles langues tu parles ?",TF("langues — ж. мн.","langues is feminine plural.")]
]),
ex:[{t:"mc", h:TF("quel, quelle, quels или quelles?","quel, quelle, quels or quelles?"), w:[
"Смотри на существительное: âge, pays, numéro — м. р.; adresse, nationalité, ville — ж. р.; во мн. ч. +s.",
"Look at the noun: âge, pays, numéro — masc.; adresse, nationalité, ville — fem.; add -s in the plural."], items:[
{q:"___ est ta nationalité ?", o:["Quelle","Quel","Quels"], a:0},
{q:"Tu as ___ âge ?", o:["quel","quelle","quels"], a:0},
{q:"___ films tu aimes ?", o:["Quels","Quelles","Quel"], a:0},
{q:"Vous habitez dans ___ ville ?", o:["quelle","quel","quelles"], a:0},
{q:"___ sont tes chanteuses préférées ?", o:["Quelles","Quels","Quelle"], a:0},
{q:"C’est ___ numéro ?", o:["quel","quelle","quels"], a:0}
]}]
},
"u2-articles": {
theory: ERRBOX([
["Je n’ai pas un frère.","Je n’ai pas de frère.",TF("После отрицания un/une/des → de.","After a negative un/une/des → de.")],
["J’habite avec amies.","J’habite avec des amies.",TF("Во мн. ч. без артикля нельзя — des.","A plural noun can’t go bare — des.")],
["Je n’aime pas de ski.","Je n’aime pas le ski.",TF("le/la/les после отрицания не меняются.","le/la/les don’t change after a negative.")],
["Ce n’est pas de piano.","Ce n’est pas un piano.",TF("После être артикль сохраняется.","After être the article stays.")]
]),
ex:[{t:"mc", h:TF("Найди правильную фразу","Find the correct sentence"), w:[
"pas + un/une/des → pas de; le/la/les не меняются; после être (c’est) артикль остаётся.",
"pas + un/une/des → pas de; le/la/les don’t change; after être (c’est) the article stays."], items:[
{q:TF("У меня нет машины.","I don’t have a car."), o:["Je n’ai pas de voiture.","Je n’ai pas une voiture.","Je n’ai pas la voiture."], a:0},
{q:TF("Я не люблю танцы.","I don’t like dancing."), o:["Je n’aime pas la danse.","Je n’aime pas de danse.","Je n’aime pas danse."], a:0},
{q:TF("Это не гитара.","It’s not a guitar."), o:["Ce n’est pas une guitare.","Ce n’est pas de guitare.","Ce n’est pas guitare."], a:0},
{q:TF("В квартале нет пляжа.","There’s no beach in the area."), o:["Il n’y a pas de plage.","Il n’y a pas une plage.","Il n’y a pas la plage."], a:0},
{q:TF("Я живу с друзьями.","I live with friends."), o:["J’habite avec des amis.","J’habite avec amis.","J’habite avec les amis."], a:0}
]}]
},
"u2-verbes-er": {
theory: ERRBOX([
["ils parlent = [paʁlɑ̃]","ils parlent = [paʁl]",TF("Окончание -ent у глаголов не читается.","The verb ending -ent is silent.")],
["Je ne parle italien.","Je ne parle pas italien.",TF("Отрицание из двух частей: ne … pas.","The negative has two parts: ne … pas.")],
["Je aime le sport.","J’aime le sport.",TF("je → j’ перед гласной.","je → j’ before a vowel.")],
["Nous nagons.","Nous nageons.",TF("e сохраняет мягкое g [ʒ].","The e keeps the g soft [ʒ].")]
]),
ex:[{t:"mc", h:TF("Найди правильную форму","Find the correct form"), w:[
"Окончания -e, -es, -e, -ons, -ez, -ent; j’ перед гласной; ne … pas вокруг глагола; nous nageons, nous mangeons.",
"Endings -e, -es, -e, -ons, -ez, -ent; j’ before a vowel; ne … pas around the verb; nous nageons, nous mangeons."], items:[
{q:TF("Мы плаваем.","We swim."), o:["Nous nageons.","Nous nagons.","Nous nagez."], a:0},
{q:TF("Я обожаю музыку.","I love music."), o:["J’adore la musique.","Je adore la musique.","J’adores la musique."], a:0},
{q:TF("Они не работают.","They don’t work."), o:["Ils ne travaillent pas.","Ils ne travaillent.","Ils travaillent ne pas."], a:0},
{q:TF("Ты живёшь в Ницце?","Do you live in Nice?"), o:["Tu habites à Nice ?","Tu habite à Nice ?","Tu habitez à Nice ?"], a:0},
{q:TF("Вы говорите по-испански.","You speak Spanish."), o:["Vous parlez espagnol.","Vous parlons espagnol.","Vous parlent espagnol."], a:0}
]}]
},
"u2-possessifs": {
theory: ERRBOX([
["ma amie","mon amie",TF("Перед гласной — mon/ton/son даже в женском роде.","Before a vowel — mon/ton/son even in the feminine.")],
["Marie et sa père","Marie et son père",TF("Род — по предмету (père — м.), а не по владельцу.","Gender follows the thing (père is masc.), not the owner.")],
["Paul et son sœur","Paul et sa sœur",TF("sœur — ж. р., даже если владелец — мужчина.","sœur is feminine, even if the owner is a man.")],
["Leurs fils (у них один сын)","Leur fils",TF("Один предмет у нескольких владельцев — leur.","One thing, several owners — leur.")]
]),
ex:[{t:"mc", h:TF("Выбери притяжательное слово","Choose the possessive"), w:[
"Род берём от предмета; перед гласной в ж. р. — mon/ton/son; несколько владельцев — notre/votre/leur (+ s во мн. ч.).",
"Take the gender from the thing; before a vowel in the feminine — mon/ton/son; several owners — notre/votre/leur (+ s in the plural)."], items:[
{q:TF("Пьер и его мама","Pierre and his mother"), o:["sa mère","son mère","ses mère"], a:0},
{q:TF("Лина и её брат","Lina and her brother"), o:["son frère","sa frère","ses frère"], a:0},
{q:TF("моя подруга (amie)","my friend (amie)"), o:["mon amie","ma amie","mes amie"], a:0},
{q:TF("их (двоих) дочь","their daughter (of two parents)"), o:["leur fille","leurs fille","sa fille"], a:0},
{q:TF("наши родители","our parents"), o:["nos parents","notre parents","nous parents"], a:0}
]}]
},
"u2-professions": {
theory: ERRBOX([
["Elle est acteure.","Elle est actrice.",TF("-teur → -trice.","-teur → -trice.")],
["Elle est coiffeur.","Elle est coiffeuse.",TF("-eur → -euse.","-eur → -euse.")],
["Elle est une étudiante.","Elle est étudiante.",TF("После être — без артикля.","No article after être.")],
["Il est infirmière.","Il est infirmier.",TF("Мужчина — мужская форма.","A man — the masculine form.")]
]),
ex:[{t:"fill", h:TF("Напиши профессию в нужном роде","Write the job in the right gender"), w:[
"-eur → -euse, -teur → -trice, -ier → -ière, -ien → -ienne; fleuriste, journaliste не меняются; после être без артикля.",
"-eur → -euse, -teur → -trice, -ier → -ière, -ien → -ienne; fleuriste, journaliste don’t change; no article after être."], items:[
{q:"Ma tante est ___. (vendeur)", a:["vendeuse"]},
{q:"Mon cousin est ___. (infirmière)", a:["infirmier"]},
{q:"Sa mère est ___. (acteur)", a:["actrice"]},
{q:"Ta sœur est ___ ? (informaticien)", a:["informaticienne"]},
{q:"Mon père est ___. (fleuriste)", a:["fleuriste"]}
]}]
},
"r-cest": {
ex:[{t:"fill", h:TF("Вставь c’est, ce sont, il est, elle est или il y a","Fill in c’est, ce sont, il est, elle est or il y a"), w:[
"c’est + артикль/имя (c’est un ami, c’est Paul); il/elle est + прилагательное или профессия без артикля; ce sont — мн. ч.; il y a — «есть, имеется».",
"c’est + article/name (c’est un ami, c’est Paul); il/elle est + adjective or job with no article; ce sont — plural; il y a — «there is/are»."], items:[
{q:"– Qui est-ce ? – ___ Paul, mon cousin.", a:["C’est","C'est"]},
{q:"Paul ? ___ informaticien.", a:["Il est"]},
{q:"___ mes parents sur la photo.", a:["Ce sont"]},
{q:"À Lyon, ___ beaucoup de restaurants.", a:["il y a"]},
{q:"Ma mère ? ___ très sympa.", a:["Elle est"]},
{q:"___ une ville calme.", a:["C’est","C'est"]}
]}]
},
"r-negation": {
ex:[{t:"order", h:TF("Собери отрицательную фразу","Build the negative sentence"), w:[
"ne (n’) стоит сразу после подлежащего, pas — сразу после глагола.",
"ne (n’) comes right after the subject, pas right after the verb."], items:[
{s:"Je ne parle pas allemand.", ru:TF("Я не говорю по-немецки.","I don’t speak German.")},
{s:"Ils n’ont pas de voiture.", ru:TF("У них нет машины.","They don’t have a car.")},
{s:"Ce n’est pas mon frère.", ru:TF("Это не мой брат.","That’s not my brother.")}
]}]
},
"r-pronoms": {
ex:[{t:"match", h:TF("Подлежащее ↔ ударная форма","Subject ↔ stressed form"), w:[
"je → moi, tu → toi, il → lui, elle → elle, nous → nous, vous → vous, ils → eux, elles → elles.",
"je → moi, tu → toi, il → lui, elle → elle, nous → nous, vous → vous, ils → eux, elles → elles."], pairs:[["je","moi"],["tu","toi"],["il","lui"],["ils","eux"],["nous","nous"]]}]
},
"r-irreg": {
theory: NOTE(TF(`${F("aller")} и ${F("faire")} подробно разбираются в Unité 3: ${F("aller au marché, faire les courses")}.`, `${F("aller")} and ${F("faire")} are covered in detail in Unité 3: ${F("aller au marché, faire les courses")}.`))
}
});

(function(){
  const apply = (L, list) => {
    const keepHL = HL; FRL = L; HL = L;
    try {
      const P = FR_PLUS();
      list.forEach(tp=>{ const x = P[tp.id]; if (!x) return; if (x.theory) tp.theory += x.theory; if (x.ex) tp.ex.push(...x.ex); });
      if (L === "ru") Object.keys(P).forEach(id=>{ const x = P[id]; if (x.ex && WHY[id]) WHY[id].push(...x.ex.map(e=>e.w || ["",""])); });
    } finally { HL = keepHL; FRL = "ru"; }
  };
  apply("ru", TOPICS); apply("en", TOPICS_EN);
})();
