/* ===== Банк вопросов для пробной контрольной (юниты 1–2) ===== */
const POOL = [
/* être / avoir / s'appeler / parler */
{tp:"u1-verbes", q:"Vous ___ quel âge ?", o:["avez","êtes","as","avons"], a:0, e:"Возраст — avoir: vous avez."},
{tp:"u1-verbes", q:"Nous ___ russes.", o:["sommes","avons","êtes","sont"], a:0},
{tp:"u1-verbes", q:"Elles ___ 25 ans.", o:["ont","sont","a","avons"], a:0},
{tp:"u1-verbes", q:"Comment tu ___ ?", o:["t’appelles","t’appelle","s’appelles","appelles"], a:0},
{tp:"u1-verbes", q:"Ils ___ Enzo et Lars.", o:["s’appellent","s’appelle","s’appelent","appellent"], a:0},
{tp:"u1-verbes", q:"Nous nous ___ Léa et Tom. (s’appeler)", a:["appelons"], e:"Одна l у nous."},
{tp:"u1-verbes", q:"Vous ___ espagnol ? (parler)", a:["parlez"]},
{tp:"u1-verbes", q:"Tu ___ hollandaise ? (être)", a:["es"]},
{tp:"u1-verbes", q:"J’___ 19 ans. (avoir)", a:["ai"]},
/* présenter */
{tp:"u1-presenter", q:"«Nom : Baldi, prénom : Juliette». Baldi — это…", o:["фамилия","имя","город"], a:0},
{tp:"u1-presenter", q:"@ se dit…", o:["arobase","point","tiret"], a:0},
{tp:"u1-presenter", q:"Elle est ___ le 26 janvier 1999.", o:["née","né","nés"], a:0},
{tp:"u1-presenter", q:"– Tu as quel âge ? – ___", o:["J’ai 23 ans.","Je suis 23 ans.","J’ai 23."], a:0},
/* nationalités */
{tp:"u1-nationalites", q:"Giulia est ___ (italien).", a:["italienne"]},
{tp:"u1-nationalites", q:"Sanae est ___ (japonais).", a:["japonaise"]},
{tp:"u1-nationalites", q:"Madame Lambert est ___ (belge).", a:["belge"]},
{tp:"u1-nationalites", q:"Elle est ___ (coréen).", a:["coréenne"]},
{tp:"u1-nationalites", q:"Elle est ___ (grec).", a:["grecque"]},
{tp:"u1-nationalites", q:"Ils sont ___ (français).", a:["français"], e:"Уже на -s → не меняется."},
{tp:"u1-nationalites", q:"Какое прилагательное только мужского рода?", o:["tunisien","suisse","russe","belge"], a:0},
{tp:"u1-nationalites", q:"Les Pays-Bas → nationalité :", o:["hollandais","paysbassien","hollandien"], a:0},
/* articles définis */
{tp:"u1-articles-def", q:"J’aime ___ musique.", o:["la","le","les","l’"], a:0},
{tp:"u1-articles-def", q:"Tu aimes ___ art ?", o:["l’","le","la","les"], a:0},
{tp:"u1-articles-def", q:"Elle aime ___ langues.", o:["les","la","le","l’"], a:0},
{tp:"u1-articles-def", q:"___ Mexique", o:["le","la","les","l’"], a:0, e:"Исключение: на -e, но м.р."},
{tp:"u1-articles-def", q:"___ États-Unis", o:["les","le","la","l’"], a:0},
{tp:"u1-articles-def", q:"___ Italie", o:["l’","la","le","les"], a:0},
/* prépositions */
{tp:"u1-prepositions", q:"Il habite ___ Japon.", o:["au","en","à","aux"], a:0},
{tp:"u1-prepositions", q:"Elle est née ___ Italie.", o:["en","au","à","aux"], a:0},
{tp:"u1-prepositions", q:"Mike habite ___ États-Unis.", o:["aux","au","en","à"], a:0},
{tp:"u1-prepositions", q:"Pietro est né ___ Rome.", o:["à","en","au","aux"], a:0},
{tp:"u1-prepositions", q:"Bruna habite ___ Cambodge.", o:["au","en","à","aux"], a:0},
{tp:"u1-prepositions", q:"J’habite ___ Russie. (à / au / en / aux)", a:["en"]},
{tp:"u1-prepositions", q:"Il habite ___ Canada. (à / au / en / aux)", a:["au"]},
{tp:"u1-prepositions", q:"Elle habite ___ Pays-Bas. (à / au / en / aux)", a:["aux"]},
{tp:"u1-prepositions", q:"Je suis né ___ Moscou. (à / au / en / aux)", a:["à"]},
/* quel */
{tp:"u1-quel", q:"___ est ton adresse mail ?", o:["Quelle","Quel","Quels","Quelles"], a:0},
{tp:"u1-quel", q:"Tu as ___ âge ?", o:["quel","quelle","quels","quelles"], a:0},
{tp:"u1-quel", q:"Tu parles ___ langues ?", o:["quelles","quels","quelle","quel"], a:0},
{tp:"u1-quel", q:"___ sont tes loisirs ?", o:["Quels","Quelles","Quel","Quelle"], a:0},
{tp:"u1-quel", q:"Tu habites dans ___ pays ?", o:["quel","quelle","quels","quelles"], a:0},
/* nombres */
{tp:"u1-nombres", q:"80 s’écrit…", o:["quatre-vingts","quatre-vingt","huitante-vingts","quatre-vingts-zéro"], a:0},
{tp:"u1-nombres", q:"71 s’écrit…", o:["soixante et onze","soixante-onze","septante et un","soixante-dix-un"], a:0},
{tp:"u1-nombres", q:"«quatre-vingt-dix-sept» =", o:["97","87","77","917"], a:0},
{tp:"u1-nombres", q:"«soixante-quinze» =", o:["75","65","85","615"], a:0},
{tp:"u1-nombres", q:"Écrivez en lettres : 91", a:["quatre-vingt-onze"]},
{tp:"u1-nombres", q:"Écrivez en lettres : 44", a:["quarante-quatre"]},
{tp:"u1-nombres", q:"Écrivez en lettres : 21", a:["vingt et un","vingt-et-un"]},
{tp:"u1-nombres", q:"En Belgique, 90 se dit…", o:["nonante","huitante","quatre-vingt-dix"], a:0},
/* phonétique */
{tp:"u1-phonetique", q:"Во французском ударение падает…", o:["на последний слог ритмической группы","на первый слог слова","на каждое слово"], a:0},
{tp:"u1-phonetique", q:"В «en Italie» слышно…", o:["[n]","[z]","связывания нет"], a:0},
/* habiter */
{tp:"u2-habiter", q:"On ___ dans une rue calme.", o:["habite","habitons","habitent","habites"], a:0},
{tp:"u2-habiter", q:"Nous ___ à Nice. (habiter)", a:["habitons"]},
{tp:"u2-habiter", q:"À Nice, il y a la ___ et la plage.", o:["mer","rue","quartier"], a:0},
{tp:"u2-habiter", q:"___ habite à Lyon.", o:["J’","Je","Jé"], a:0},
/* articles */
{tp:"u2-articles", q:"J’habite dans ___ quartier sympa.", o:["un","le","une","des"], a:0},
{tp:"u2-articles", q:"C’est ___ université Lumière.", o:["l’","une","la","un"], a:0},
{tp:"u2-articles", q:"J’habite avec ___ amies.", o:["des","les","une","de"], a:0},
{tp:"u2-articles", q:"Ce sont ___ instruments de Julie.", o:["les","des","un","de"], a:0},
{tp:"u2-articles", q:"Je n’ai pas ___ frère.", o:["de","un","le","des"], a:0},
{tp:"u2-articles", q:"Il n’y a pas ___ université.", o:["d’","une","l’","de"], a:0},
{tp:"u2-articles", q:"Vous avez ___ piano ? (un / une / des / le / la / les)", a:["un"]},
/* verbes en -er */
{tp:"u2-verbes-er", q:"Ils ___ le cinéma. (adorer)", a:["adorent"]},
{tp:"u2-verbes-er", q:"Tu ___ le ski ? (détester)", a:["détestes"]},
{tp:"u2-verbes-er", q:"Vous ___ ? (skier)", a:["skiez"]},
{tp:"u2-verbes-er", q:"Nous ___ (nager)", a:["nageons"]},
{tp:"u2-verbes-er", q:"Elle ___ le rock. (danser)", a:["danse"]},
{tp:"u2-verbes-er", q:"Mettez à la forme négative : « Manon aime la neige. »", a:["Manon n’aime pas la neige"]},
{tp:"u2-verbes-er", q:"Mettez à la forme négative : « Je parle italien. »", a:["Je ne parle pas italien"]},
{tp:"u2-verbes-er", q:"Где окончание слышно в произношении?", o:["nous parlons","ils parlent","tu parles","je parle"], a:0},
/* goûts */
{tp:"u2-gouts", q:"Elle déteste ___.", o:["skier","le skier","ski"], a:0},
{tp:"u2-gouts", q:"Il joue ___ piano.", o:["du","au","le"], a:0},
{tp:"u2-gouts", q:"la natation →", o:["nager","marcher","danser"], a:0},
{tp:"u2-gouts", q:"Какое слово НЕ про спорт?", o:["le festival","la marche","le ski","la danse"], a:0},
/* possessifs */
{tp:"u2-possessifs", q:"Théo invite ___ cousine Clara.", o:["sa","son","ses","leur"], a:0},
{tp:"u2-possessifs", q:"Nina et ___ frère.", o:["son","sa","ses","leur"], a:0},
{tp:"u2-possessifs", q:"___ amie Mira (моя).", o:["Mon","Ma","Mes","M’"], a:0},
{tp:"u2-possessifs", q:"Sofia, son mari et ___ enfants.", o:["leurs","leur","ses","son"], a:0},
{tp:"u2-possessifs", q:"Nous avons une fille. ___ fille déteste le sport.", o:["Notre","Nos","Votre","Leur"], a:0},
{tp:"u2-possessifs", q:"Tes parents aiment la mer ? — Oui, ___ parents aiment la mer.", a:["mes"]},
{tp:"u2-possessifs", q:"«его мать» по-французски:", o:["sa mère","son mère","ses mère"], a:0},
/* famille */
{tp:"u2-famille", q:"Le fils de ma sœur, c’est mon…", o:["neveu","cousin","petit-fils","oncle"], a:0},
{tp:"u2-famille", q:"La mère de ma mère, c’est ma…", o:["grand-mère","tante","nièce","petite-fille"], a:0},
{tp:"u2-famille", q:"Nessim n’est pas marié, il est…", o:["célibataire","mariage","fils unique"], a:0},
{tp:"u2-famille", q:"Théo n’a pas de frères et sœurs, il est ___ unique.", a:["fils"]},
{tp:"u2-famille", q:"La fille de mon oncle, c’est ma ___.", a:["cousine"]},
/* professions */
{tp:"u2-professions", q:"Maxime est coiffeur. Laure est ___.", a:["coiffeuse"]},
{tp:"u2-professions", q:"Manuelle est actrice. Xavier est ___.", a:["acteur"]},
{tp:"u2-professions", q:"Jean est infirmier. Élodie est ___.", a:["infirmière"]},
{tp:"u2-professions", q:"William est informaticien. Aurélie est ___.", a:["informaticienne"]},
{tp:"u2-professions", q:"Gabriel est fleuriste. Florence est ___.", a:["fleuriste"]},
{tp:"u2-professions", q:"Ma mère ___ professeure.", o:["est","est une","a"], a:0},
/* phonétique u2 */
{tp:"u2-phonetique", q:"«il parle» и «ils parlent» звучат…", o:["одинаково","по-разному"], a:0},
{tp:"u2-phonetique", q:"В «mes amis» слышно…", o:["[z]","[n]","связывания нет"], a:0},
/* dates (unité 0) */
{tp:"u0-dates", q:"Le 1er mai se dit…", o:["le premier mai","le un mai","le première mai"], a:0},
{tp:"u0-contact", q:"К группе друзей обращаемся на…", o:["vous","tu"], a:0}
];

/* ===== Шпаргалка ===== */
const CHEAT = `
<div class="cheat">
<section class="ch"><h3>être · avoir</h3>${TBL(["","être","avoir"],[["je / j’","suis","ai"],["tu","es","as"],["il / elle / on","est","a"],["nous","sommes","avons"],["vous","êtes","avez"],["ils / elles","sont","ont"]])}<p class="ch-n">Возраст: <b>j’ai</b> 20 ans. Профессия: il est étudiant (без артикля).</p></section>
<section class="ch"><h3>s’appeler · -er</h3>${TBL(["","s’appeler","aimer"],[["je / j’","m’appelle","aime"],["tu","t’appelles","aimes"],["il / elle / on","s’appelle","aime"],["nous","nous appelons","aimons"],["vous","vous appelez","aimez"],["ils / elles","s’appellent","aiment"]])}<p class="ch-n">-e, -es, -e, -ent не читаются. ne + глагол + pas.</p></section>
<section class="ch"><h3>Артикли</h3>${TBL(["","м.","ж.","мн."],[["опред.","le / l’","la / l’","les"],["неопред.","un","une","des"],["после pas","de / d’","de / d’","de / d’"]])}<p class="ch-n">aimer + le/la/les. pas de только для un/une/des.</p></section>
<section class="ch"><h3>Предлоги + место</h3>${TBL(["","",""],[["город","à","à Paris"],["страна м.","au","au Japon"],["страна ж. / гласная","en","en France, en Iran"],["страна мн.","aux","aux États-Unis"]])}<p class="ch-n">le Mexique, le Cambodge — м.р.</p></section>
<section class="ch"><h3>quel</h3>${TBL(["","ед.","мн."],[["м.","quel","quels"],["ж.","quelle","quelles"]])}<p class="ch-n">âge, numéro, pays — м.; adresse, ville, langue, date, nationalité — ж.</p></section>
<section class="ch"><h3>Притяжательные</h3>${TBL(["","м.","ж.","мн."],[["je","mon","ma","mes"],["tu","ton","ta","tes"],["il / elle","son","sa","ses"],["nous","notre","notre","nos"],["vous","votre","votre","vos"],["ils / elles","leur","leur","leurs"]])}<p class="ch-n">Род по предмету: sa mère = его/её мать. mon amie (гласная).</p></section>
<section class="ch"><h3>Женский род</h3>${TBL(["м.","ж.","пример"],[["+ e","","français → française"],["-ien / -éen","-ienne / -éenne","italien, coréen"],["-e","=","russe, belge, fleuriste"],["-eur","-euse","coiffeur → coiffeuse"],["-teur","-trice","acteur → actrice"],["-er","-ère","infirmier → infirmière"]])}<p class="ch-n">grec → grecque, turc → turque.</p></section>
<section class="ch"><h3>Числа 70–100</h3>${TBL(["",""],[["70","soixante-dix"],["71","soixante et onze"],["80","quatre-vingts"],["81","quatre-vingt-un"],["90","quatre-vingt-dix"],["99","quatre-vingt-dix-neuf"],["100","cent"]])}<p class="ch-n">et — только в 21, 31, 41, 51, 61, 71. Бельгия: septante, nonante.</p></section>
<section class="ch"><h3>Связывание</h3>${TBL(["",""],[["[z]","les‿amis, mes‿enfants, aux‿États-Unis, ils‿aiment"],["[n]","un‿ami, mon‿amie, en‿Italie"],["нет","les professeurs, au Japon, et | Anna"]])}<p class="ch-n">ils sont [s] ≠ ils ont [z].</p></section>
<section class="ch"><h3>Семья</h3>${TBL(["",""],[["père / mère","отец / мать"],["fils [fis] / fille","сын / дочь"],["frère / sœur","брат / сестра"],["oncle / tante","дядя / тётя"],["cousin(e)","двоюродный брат / сестра"],["neveu / nièce","племянник / племянница"],["petit-fils / petite-fille","внук / внучка"],["mari / femme","муж / жена"]])}<p class="ch-n">Je n’ai pas <b>de</b> frères. Je suis fils unique.</p></section>
</div>`;
