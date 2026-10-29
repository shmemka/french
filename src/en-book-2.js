TOPICS_EN.push({
id:"u1-phonetique", sec:"book", unit:"1", kind:"Phonie-graphie",
title:"Accent tonique et liaisons", ru:"Stress, rhythm groups, liaison with prepositions", page:"p. 22, 28",
theory:`
${RULE("Stress in French",`<p>The stress falls on the <b>last pronounced syllable of a rhythm group</b>, not of every word. A rhythm group (groupe rythmique) is a few words that make sense together and are said without a pause.</p>`)}
${RHY([["Je","m’a","ppelle","En","zo"],["je","suis","i","ta","lien"]],"2 groups → 2 stresses · click to listen","Je m’appelle Enzo, je suis italien.")}
${RHY([["Je","m’a","ppelle","A","lice"],["j’ai","vingt","trois","ans"],["je","suis","al","le","mande"]],"3 groups → 3 stresses","Je m’appelle Alice, j’ai vingt-trois ans, je suis allemande.")}
<p>The stressed syllable is a little longer; the others are even and equal in length. That’s what gives French its «machine-gun» rhythm.</p>
<h3>Liaison with prepositions (p. 28)</h3>
${TBL(["Preposition + vowel","We hear","Examples"],[[F("en"),"[n]",F("en‿Argentine, en‿Italie, en‿Angola, en‿Europe, en‿Inde")],[F("aux"),"[z]",F("aux‿États-Unis, aux‿Émirats arabes unis")]])}
${LIS(LI("en","Argentine","n"),LI("en","Europe","n"),LI("aux","Émirats","z"),LI("en","Suisse",""),LI("aux","Philippines",""))}
<p>No liaison (a consonant follows): ${F("en Suisse, au Japon, aux Philippines")}.</p>
${RHY([["Elle","est","née"],["en","I","ta","lie"],["et","elle","ha","bite"],["en","Aus","tra","lie"]],"4 groups, 4 stresses, 2 liaisons: en‿Italie, en‿Australie","Elle est née en Italie et elle habite en Australie.")}
`,
ex:[
{t:"mc", h:"Where is the stress?", items:[
{q:"Je suis italien.", o:["on -lien (last syllable)","on je","on i- (start of the word)"], a:0},
{q:"J’aime le cinéma.", o:["on -ma","on ci-","on aime"], a:0},
{q:"Il est allemand.", o:["on -mand","on al-","on il"], a:0}
]},
{t:"mc", h:"How many rhythm groups?", items:[
{q:"Je m’appelle Enzo, je suis italien.", o:["2","1","5"], a:0},
{q:"Je m’appelle Alice, j’ai 23 ans, je suis allemande.", o:["3","2","6"], a:0},
{q:"Elle est née en Italie et elle habite en Australie.", o:["4","2","8"], a:0}
]},
{t:"sort", h:"What do we hear: [n], [z] or no liaison?", cats:["[n]","[z]","none"], items:[["en Italie",0],["aux États-Unis",1],["en Europe",0],["au Japon",2],["en Suisse",2],["aux Émirats",1],["en Inde",0],["aux Philippines",2],["en Afrique",0],["en Équateur",0]]},
{t:"tf", h:"True or false?", items:[
{q:"In French the stress is usually on the first syllable of a word.", a:false, e:"On the last syllable of the group."},
{q:"A rhythm group is said without a pause.", a:true},
{q:"A long sentence has as many stresses as it has words.", a:false, e:"As many as it has rhythm groups."}
]}
]});

/* ===== UNITÉ 2 ===== */
TOPICS_EN.push({
id:"u2-habiter", sec:"book", unit:"2", kind:"Communication + grammaire",
title:"Habiter : tu habites où ?", ru:"Where do you live? The verb habiter, on = nous, places", page:"p. 32–33, 35",
theory:`
${CJS(CJ("habiter","to live",["j’habit<b>e</b>","tu habit<b>es</b>","il / elle / on habit<b>e</b>","nous habit<b>ons</b>","vous habit<b>ez</b>","ils / elles habit<b>ent</b>"]))}
<p>The h is silent → ${F("j’habite")} (not «je habite»), and with liaison: ${F("nous‿habitons")} [nuzabitɔ̃], ${F("vous‿habitez")}, ${F("ils‿habitent")}.</p>
${RULE("On = nous (in speech)",`<p>${F("On habite dans une rue calme.")} = ${F("Nous habitons dans une rue calme.")}</p><p>The verb after on takes the <b>il</b> form: ${F("on habite, on aime, on est")}. ✗ <i>on habitons</i>.</p><p>On also means «people in general»: ${F("En Belgique, on dit « septante ».")} — In Belgium people say «septante».</p>`)}
${FXS(FX(["on","+","~verb in the il form","=","!on habite"]),FX(["on habite","=","nous habitons"],"in conversation the French say on more often"))}
${CMP("","Similar to conversational <i>we</i> and to <i>one / people</i>.")}
<h3>Asking and answering</h3>
${TBL(["Question","Answer"],[
[F("Tu habites où ? / Où tu habites ?"),F("Je suis à Lyon. / Moi, j’habite à Nice.")],
[F("Tu habites dans un quartier sympa ?"),F("Oui ! Dans le quartier Saint-Jean.")],
[F("Tu habites où à Nice ?"),F("J’habite un appartement. / J’habite dans une rue calme.")],
[F("Tu habites avec qui ?"),F("J’habite avec des amies.")]
])}
${BIGC([["à","a city","à Lyon, à Nice"],["dans","a neighbourhood, street, flat","dans un quartier sympa, dans une rue calme"],["avec","with whom","avec des amies, avec ma famille"],["à la mer","by the sea / in the mountains","à la mer, à la montagne"]])}
<h3>Les lieux — places (p. 35)</h3>
${TBL(["Français","In English"],[[F("l’appartement (m.)"),"flat, apartment"],[F("la mer"),"sea (f.!)"],[F("la plage"),"beach (f.!)"],[F("le quartier"),"neighbourhood, district"],[F("la rue"),"street"],[F("l’université (f.)"),"university (f.!)"]])}
${TBL(["Describing a place",""],[[F("C’est super !"),"It’s great!"],[F("C’est beau !"),"It’s beautiful!"],[F("C’est très sympa !"),"It’s really nice!"],[F("calme"),"calm, quiet"],[F("Il y a la mer, la plage."),"There is the sea, the beach."]])}
<h3>Text from the textbook (p. 32)</h3>
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
{t:"conj", h:"Conjugate habiter", items:[{v:"habiter", p:P6j, f:["habite","habites","habite","habitons","habitez","habitent"]}]},
{t:"tf", h:"Milo / Lina text: true or false?", items:[
{q:"Lina habite à Nice.", a:true},
{q:"Milo habite dans le quartier Saint-Jean, à Lyon.", a:true},
{q:"Lina habite seule (alone).", a:false, e:"Avec des amies, Mira et Julie."},
{q:"Lina habite dans une rue calme.", a:true},
{q:"Les guitares sont à Lina.", a:false, e:"Ce sont les instruments de Julie et de Mira."}
]},
{t:"mc", h:"On = nous", items:[
{q:"On ___ à Lyon.", o:["habite","habitons","habitent"], a:0, e:"After on — the il form."},
{q:"On ___ la mer !", o:["adore","adorons","adorez"], a:0},
{q:"« On habite dans une rue calme » =", o:["Nous habitons dans une rue calme.","Ils habitent dans une rue calme.","J’habite dans une rue calme."], a:0}
]},
{t:"fill", h:"Write the word: quartier, université, rue, appartement, mer (p. 35)", items:[
{q:"À Cannes, il y a la ___.", a:["mer"]},
{q:"J’habite dans un ___ avec une amie.", a:["appartement"]},
{q:"C’est un ___ sympa !", a:["quartier"]},
{q:"Tu es à l’___ à Paris ?", a:["université"]},
{q:"Tu habites quelle ___ ?", a:["rue"]}
]},
{t:"match", h:"Match the question and the answer", pairs:[["Tu habites où ?","Je suis à Lyon maintenant."],["Tu habites dans un quartier sympa ?","Oui, dans le quartier Saint-Jean."],["Tu habites avec qui ?","Avec des amies, Mira et Julie."],["Il y a quoi à Nice ?","La mer, la plage."],["Vous avez une guitare ?","Deux guitares !"]]}
]});

TOPICS_EN.push({
id:"u2-articles", sec:"book", unit:"2", kind:"Grammaire",
title:"Articles définis et indéfinis", ru:"un, une, des or le, la, les?", page:"p. 33, 36",
theory:`
${GRID(["","m. sg","f. sg","pl."],[["<b>Indefinite</b><br><small>indéfinis</small>","m:un","f:une","p:des"],["<b>Definite</b><br><small>définis</small>","m:le / l’","f:la / l’","p:les"]])}
${RULE("The main rule",`<p><b>un / une / des</b> — the thing, person or place is <b>not identified</b>: «some, one of, any».<br><b>le / la / les</b> — <b>identified, known</b>: «that particular one» — or something in general (J’aime le cinéma).</p>`)}
${CMP("","Like <i>a/an</i> ↔ <i>the</i>.")}
${VS({h:"un / une / des",big:F("un quartier"),sub:"some, one of, mentioned for the first time"},{h:"le / la / les",big:F("le quartier Saint-Jean"),sub:"that one, known, specific — or «in general»"})}
<h3>When to use un / une / des</h3>
${EX([["Tu habites dans un quartier sympa ?","in some (any) nice neighbourhood"],["J’ai une guitare.","I have a guitar (some guitar, one)"],["C’est une université.","it’s a university (one of many)"],["J’habite un appartement avec des amies.","a flat, (some) friends — not specified"],["Il y a des instruments de musique ?","are there (any) instruments?"]])}
<h3>When to use le / la / les</h3>
${EX([["Oui, dans le quartier Saint-Jean.","a specific neighbourhood is named"],["C’est la rue Mantega.","a specific street"],["C’est l’université Lumière.","a specific university"],["C’est le piano de Mathieu.","«someone’s» → specific: le … de …"],["Ce sont les instruments de Julie.","Julie’s instruments"],["J’aime le cinéma.","in general (Unité 1)"]])}
${RULE("The chain «first mention → already known»",`<p>${F("J’habite dans un quartier sympa. Le quartier s’appelle Saint-Jean.")}<br>First un (new information), then le (we already know which one).</p>`)}
${FX(["J’habite dans","!un quartier|first time","→","!Le quartier|already known","s’appelle Saint-Jean."])}
<h3>C’est / ce sont</h3>
<p>${F("C’est un piano.")} — It’s a piano. ${F("Ce sont des photos.")} — These are (some) photos. ${F("Ce sont les instruments de Noémie.")} — These are Noémie’s instruments.</p>
<h3>Negation: un / une / des → de</h3>
${FXS(FX(["un · une · des","→","!de / d’"],"after ne… pas"),FX(["le · la · les","=","le · la · les"],"don’t change"))}
${RULE("pas de / pas d’",`<p>After a negative, <b>un, une, des</b> become <b>de</b> (d’ before a vowel):</p>${EX([["J’ai un frère. → Je n’ai pas de frère.","I don’t have a brother."],["J’ai des enfants. → Je n’ai pas d’enfants.","I don’t have any children."],["Il y a une plage. → Il n’y a pas de plage.","There is no beach."]])}<p><b>But le / la / les don’t change:</b> ${F("J’aime le ski. → Je n’aime pas le ski.")}<br>And after <b>être</b> the article stays: ${F("Ce n’est pas un piano.")}</p>`)}
${NOTE(`Pronunciation: ${F("un")} [œ̃] / ${F("une")} [yn]; ${F("un‿ami")} [œ̃nami], ${F("des‿amis")} [dezami].`)}
`,
ex:[
{t:"mc", h:"Choose the right article (p. 33)", items:[
{q:"J’habite ___ quartier calme.", o:["un","le"], a:0, e:"Some quiet neighbourhood."},
{q:"J’ai ___ guitare.", o:["une","la"], a:0},
{q:"J’habite ___ rue sympa.", o:["une","la"], a:0},
{q:"Ce sont ___ instruments de Julie.", o:["des","les"], a:1, e:"«Julie’s instruments» — specific ones."},
{q:"Nous habitons ___ quartier de Belleville.", o:["un","le"], a:1, e:"A specific neighbourhood is named."}
]},
{t:"fill", h:"Write the article (p. 36)", items:[
{q:"– C’est une université sur la photo ? – Oui, c’est ___ université Lumière.", a:["l’"]},
{q:"– Ah, vous avez ___ piano ici ? – Oui, c’est le piano de Mathieu.", a:["un"]},
{q:"J’habite dans ___ rue calme…", a:["une"]},
{q:"…c’est ___ rue des Arts.", a:["la"]},
{q:"– Il y a des instruments de musique ? – Oui, ce sont ___ instruments de Noémie.", a:["les"]},
{q:"J’habite avec ___ amis. (some friends)", a:["des"]}
]},
{t:"sort", h:"un, une or des?", cats:["un","une","des"], items:[["appartement",0],["rue",1],["amies",2],["quartier",0],["plage",1],["instruments",2],["université",1],["film",0],["guitare",1],["festival",0],["photos",2],["mer",1]]},
{t:"mc", h:"Negation: which word?", items:[
{q:"Je n’ai pas ___ frère.", o:["de","un","le"], a:0},
{q:"Il n’y a pas ___ université.", o:["d’","une","l’"], a:0},
{q:"Je n’aime pas ___ danse.", o:["la","de","une"], a:0, e:"le/la/les don’t change after a negative."},
{q:"Elle n’a pas ___ enfants.", o:["d’","des","les"], a:0},
{q:"Ce n’est pas ___ guitare, c’est un piano.", o:["une","de","la"], a:0, e:"After être the article stays."}
]},
{t:"fill", h:"Translate", items:[
{q:"I have a guitar.", a:["J’ai une guitare"], long:true},
{q:"I don’t have a brother.", a:["Je n’ai pas de frère","Je n’ai pas de frères"], long:true},
{q:"It’s Lina’s flat.", a:["C’est l’appartement de Lina"], long:true}
]}
]});

TOPICS_EN.push({
id:"u2-verbes-er", sec:"book", unit:"2", kind:"Grammaire",
title:"Les verbes en -er au présent", ru:"Regular -er verbs and the negative ne… pas", page:"p. 34, 36",
theory:`
<p>About 90% of French verbs end in <b>-er</b> and are conjugated the same way. Learn one pattern and you know hundreds of verbs.</p>
${FX(["aimer","→","aim|stem","+","!e · es · e · ons · ez · ent|endings"],"drop -er and add the ending to the stem")}
${CJS(
CJ("aimer","to like, to love",["j’aim<b>e</b>","tu aim<b>es</b>","il / elle / on aim<b>e</b>","nous aim<b>ons</b>","vous aim<b>ez</b>","ils / elles aim<b>ent</b>"]),
CJ("détester","to hate",["je détest<b>e</b>","tu détest<b>es</b>","il / elle / on détest<b>e</b>","nous détest<b>ons</b>","vous détest<b>ez</b>","ils / elles détest<b>ent</b>"])
)}
${WARN(`The endings <b>-e, -es, -e, -ent</b> are silent! ${F("je parle, tu parles, il parle, ils parlent")} all sound the same [paʁl]. You only hear ${F("nous parlons")} [ɔ̃] and ${F("vous parlez")} [e]. Don’t pronounce -ent as «-an»!`)}
${SAME(['je parl<span class="mute">e</span>','tu parl<span class="mute">es</span>','il parl<span class="mute">e</span>','ils parl<span class="mute">ent</span>'],"[paʁl]",[["nous parlons","[ɔ̃]"],["vous parlez","[e]"]])}
<h3>-er verbs from units 1–2</h3>
${TBL(["Verb","Meaning","Verb","Meaning"],[[F("aimer"),"to like, love",F("habiter"),"to live"],[F("adorer"),"to adore",F("parler"),"to speak"],[F("détester"),"to hate",F("travailler"),"to work"],[F("danser"),"to dance",F("écouter"),"to listen"],[F("marcher"),"to walk",F("regarder"),"to watch"],[F("nager"),"to swim",F("jouer"),"to play"],[F("skier"),"to ski",F("étudier"),"to study"],[F("inviter"),"to invite",F("préparer"),"to prepare"]])}
<p>Small details: ${F("nager → nous nageons")} (the e keeps the g soft), ${F("skier → je skie, nous skions")}, ${F("étudier → j’étudie, nous étudions")}.</p>
${RULE("je → j’",`<p>Before a vowel or silent h: ${F("j’aime, j’adore, j’habite, j’écoute, j’étudie")}. ✗ <i>je aime</i>.</p>`)}
<h3>Negation: ne … pas</h3>
${RULE("The verb goes inside a «sandwich»",`<p><b>ne + verb + pas</b>: ${F("Je ne parle pas italien.")}<br>Before a vowel/h ne → <b>n’</b>: ${F("Manon n’aime pas la neige.")} ${F("Je n’habite pas à Paris.")}</p>`)}
${FXS(FX(["~subject","!ne","~verb","!pas"]),FX(["Je","!ne","parle","!pas","italien."]),FX(["Je","!n’","habite","!pas","à Paris."],"ne → n’ before a vowel"))}
<h3>Aimer + noun / infinitive</h3>
${EX([["J’adore le cinéma.","aimer + le/la/les + noun"],["Elle déteste skier.","aimer + infinitive"],["Tu aimes danser ?","Do you like dancing?"]])}
`,
ex:[
{t:"conj", h:"Conjugate", items:[
{v:"aimer", p:P6j, f:["aime","aimes","aime","aimons","aimez","aiment"]},
{v:"détester", p:P6, f:["déteste","détestes","déteste","détestons","détestez","détestent"]},
{v:"travailler", p:P6, f:["travaille","travailles","travaille","travaillons","travaillez","travaillent"]},
{v:"nager", p:P6, f:["nage","nages","nage","nageons","nagez","nagent"]}
]},
{t:"mc", h:"Choose the pronoun (p. 34)", items:[
{q:"___ habite un appartement.", o:["Je","J’"], a:1},
{q:"___ détestes le ski.", o:["Il","Tu"], a:1},
{q:"___ marchons.", o:["Nous","Vous"], a:0},
{q:"___ aiment la danse.", o:["Nous","Ils"], a:1},
{q:"___ parlez anglais ?", o:["Vous","Tu"], a:0},
{q:"___ adore le cinéma.", o:["J’","Je"], a:0}
]},
{t:"fill", h:"Put the verb in the right form (p. 36)", items:[
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
{t:"fill", h:"Make the sentence negative", items:[
{q:"J’aime le ski. →", a:["Je n’aime pas le ski"], long:true},
{q:"Il habite à Paris. →", a:["Il n’habite pas à Paris"], long:true},
{q:"Nous parlons espagnol. →", a:["Nous ne parlons pas espagnol"], long:true},
{q:"Tu travailles. →", a:["Tu ne travailles pas"], long:true},
{q:"Elles adorent la danse. →", a:["Elles n’adorent pas la danse"], long:true}
]},
{t:"order", h:"Put the sentence together", items:[
{s:"Manon n’aime pas la neige.", ru:"Manon doesn’t like snow."},
{s:"Nous habitons à Nice et nous adorons la mer.", ru:"We live in Nice and we love the sea."},
{s:"Je ne parle pas italien.", ru:"I don’t speak Italian."}
]}
]});

TOPICS_EN.push({
id:"u2-gouts", sec:"book", unit:"2", kind:"Vocabulaire + communication",
title:"Les loisirs et les goûts", ru:"Hobbies and saying what you like", page:"p. 20–21, 34–35",
theory:`
<h3>The scale of likes</h3>
${SCALE([["Je déteste","I hate"],["Je n’aime pas","I don’t like"],["J’aime bien","I quite like"],["J’aime","I like / love"],["J’aime beaucoup","I really like"],["J’adore","I adore"]],["dislike","like"])}
${RULE("Two structures",`<p><b>+ le / la / les + noun:</b> ${F("J’adore le cinéma et la montagne !")}<br><b>+ infinitive:</b> ${F("Elle déteste skier.")} ${F("J’aime danser.")}</p>`)}
${NOTE("<b>aimer bien</b> is weaker than plain aimer! «J’aime bien Paul» = «I like Paul», but «J’aime Paul» = «I love Paul».")}
<h3>Unité 1 vocabulary: les loisirs (1)</h3>
${TBL(["Français","In English"],[[F("l’art (m.)"),"art"],[F("le cinéma"),"cinema"],[F("les langues (f.)"),"languages"],[F("la musique"),"music"],[F("le sport"),"sport"]])}
<h3>Unité 2 vocabulary: les loisirs (2)</h3>
${TBL(["Topic","Words"],[
["La musique",F("l’instrument de musique (m.), la guitare, le piano")],
["Le cinéma",F("le festival, le film, la place (de cinéma)")+" — seat / ticket"],
["Le sport",F("la danse – danser, la marche – marcher, la natation – nager, le ski – skier")]
])}
<p>Also from the texts: ${F("la montagne")} (mountains), ${F("la neige")} (snow), ${F("la bande dessinée / la BD")} (comic — the Angoulême festival), ${F("le tennis, le football")}, ${F("le rock")}.</p>
<h3>Playing and doing</h3>
${TBL(["Structure","Example"],[[F("jouer de + instrument"),F("Elle joue du piano. / Il joue de la guitare.")],[F("jouer à + game/sport"),F("Ils jouent au tennis. / au football.")],[F("faire de + sport"),F("Je fais du ski. / On fait de la marche. / de la natation.")]])}
${FXS(FX(["jouer","de","+","le","=","!du","piano"]),FX(["jouer","à","+","le","=","!au","tennis"]),FX(["faire","de","+","la","=","!de la","natation"],"de la doesn’t merge"))}
<h3>Keeping the conversation going</h3>
${EX([["– Tu aimes la musique ? – Oui, j’aime la musique, le cinéma et le sport ! Et toi ?","Do you like music? – Yes… And you?"],["– Moi, j’aime l’art et les langues !","I like art and languages!"],["– J’adore le ski ! – Moi aussi !","– I love skiing! – Me too!"],["– Je n’aime pas le football. – Moi non plus.","– I don’t like football. – Me neither."],["Qu’est-ce que tu aimes ?","What do you like?"]])}
`,
ex:[
{t:"cards", h:"Flashcards: hobbies", items:[["l’art","art"],["le cinéma","cinema"],["les langues","languages"],["la musique","music"],["le sport","sport"],["l’instrument de musique","musical instrument"],["la guitare","guitar"],["le piano","piano"],["le festival","festival"],["le film","film"],["la place (de cinéma)","seat / cinema ticket"],["la danse","dance"],["la marche","walking"],["la natation","swimming"],["le ski","skiing"],["la montagne","mountains"],["la neige","snow"]]},
{t:"match", h:"Noun → verb", pairs:[["la danse","danser"],["la natation","nager"],["la marche","marcher"],["le ski","skier"]]},
{t:"sort", h:"Sport or not? (p. 34)", cats:["activité sportive","autre loisir"], items:[["le ski",0],["le cinéma",1],["la danse",0],["la marche",0],["le film",1],["la natation",0],["la guitare",1],["le festival",1]]},
{t:"mc", h:"Choose the right option", items:[
{q:"J’adore ___ cinéma.", o:["le","un","—"], a:0},
{q:"Elle déteste ___.", o:["skier","le skier","ski"], a:0},
{q:"Il joue ___ piano.", o:["du","au","le"], a:0, e:"jouer DE + instrument: de + le = du."},
{q:"Ils jouent ___ tennis.", o:["au","du","le"], a:0, e:"jouer À + sport: à + le = au."},
{q:"Je fais ___ natation.", o:["de la","du","la"], a:0},
{q:"– Je n’aime pas le football. – Moi ___.", o:["non plus","aussi","si"], a:0},
{q:"Which is weaker?", o:["J’aime bien","J’adore","J’aime beaucoup"], a:0}
]},
{t:"fill", h:"Translate", items:[
{q:"I adore music.", a:["J’adore la musique"], long:true},
{q:"She hates swimming.", a:["Elle déteste nager"], long:true},
{q:"Do you like dancing? (informal)", a:["Tu aimes danser ?"], long:true},
{q:"We don’t like skiing.", a:["Nous n’aimons pas le ski","On n’aime pas le ski"], long:true}
]}
]});

TOPICS_EN.push({
id:"u2-possessifs", sec:"book", unit:"2", kind:"Grammaire",
title:"Les adjectifs possessifs", ru:"mon, ma, mes… — possessive adjectives", page:"p. 39, 42",
theory:`
${GRID(["Owner","m. sg","f. sg","pl."],[["je","m:mon","f:ma","p:mes"],["tu","m:ton","f:ta","p:tes"],["il / elle","m:son","f:sa","p:ses"],["nous","notre","notre","p:nos"],["vous","votre","votre","p:vos"],["ils / elles","leur","leur","p:leurs"]])}
${RULE("It agrees with the THING owned, not the owner",`<p>${F("son père")} = <b>his</b> father <i>or</i> <b>her</b> father. ${F("sa mère")} = his mother <i>or</i> her mother.</p><p>All that matters is the gender of <b>père</b> (m.) and <b>mère</b> (f.). Who they belong to doesn’t matter.</p>${EX([["Nina et son frère","Nina and her brother (frère — m.)"],["Théo et sa cousine","Théo and his cousin (cousine — f.)"],["Clara, son fils et sa fille","Clara, her son and her daughter"]])}`)}
${VS({h:"Paul → his mother",big:F("sa mère"),sub:"mère is f. → <b>sa</b>, even though the owner is a man"},{h:"Nina → her brother",big:F("son frère"),sub:"frère is m. → <b>son</b>, even though the owner is a woman"})}
${WARN(`Before a <b>feminine word starting with a vowel or silent h</b> use the masculine form: ${F("mon amie")}, ${F("ton adresse")}, ${F("son école")}, ${F("mon histoire")}. ✗ <i>ma amie</i> — two vowels in a row sound bad.`)}
${FX(["_ma","+","amie","→","!mon amie"],"no two vowels in a row — use mon")}
<h3>leur or leurs?</h3>
<p>${F("leur fils")} — their son (one). ${F("leurs enfants")} — their children (several). ${F("Sofia, son mari et leurs enfants")}.</p>
<h3>Pronunciation</h3>
<p>${F("notre / votre")} [nɔtʁ] / [vɔtʁ] — open o; ${F("nos / vos")} [no] / [vo] — closed o. Liaison:</p>
${LIS(LI("mon","ami","n"),LI("mes","amis","z"),LI("leurs","enfants","z"),LI("vos","enfants","z"))}
${NOTE(`${F("votre")} is also the polite «your» (to one person). To ${F("Votre grand-mère a quel âge ?")} you answer ${F("Ma grand-mère a 80 ans.")}`)}
`,
ex:[
{t:"mc", h:"Choose the possessive (p. 39)", items:[
{q:"J’ai un oncle. ___ oncle a 48 ans.", o:["Mon","Ma","Mes"], a:0},
{q:"J’ai des cousins. ___ cousins habitent à Toulouse.", o:["Mes","Mon","Ma"], a:0},
{q:"Elle a deux frères. ___ frères sont sympas.", o:["Ses","Son","Leurs"], a:0},
{q:"Nous avons une fille. ___ fille déteste le sport.", o:["Notre","Nos","Votre"], a:0}
]},
{t:"fill", h:"Answer as in the example (p. 42)", items:[
{q:"Ta sœur travaille ? — Oui, ___ sœur travaille.", a:["ma"]},
{q:"Vos enfants sont à l’université ? — Oui, ___ enfants sont à l’université.", a:["nos","mes"], e:"If «you» is a couple: nos. If it’s the polite «you» to one person: mes."},
{q:"Votre grand-mère a quel âge ? — ___ grand-mère a 80 ans.", a:["Ma","Notre"]},
{q:"Tes parents aiment la mer ? — Oui, ___ parents aiment la mer.", a:["mes"]},
{q:"Ton cousin habite où ? — ___ cousin habite à Lille.", a:["Mon"]}
]},
{t:"mc", h:"son, sa, ses or leur(s)?", items:[
{q:"Nina et ___ frère", o:["son","sa"], a:0},
{q:"Théo et ___ cousine Clara", o:["sa","son"], a:0, e:"cousine is f. — it doesn’t matter that Théo is a man."},
{q:"Paul et ___ mère", o:["sa","son"], a:0, e:"mère is f. → sa, even though Paul is a man."},
{q:"Sofia, son mari et ___ enfants (Sofia and her husband’s children)", o:["leurs","ses","leur"], a:0},
{q:"___ amie Léa (my)", o:["Mon","Ma"], a:0, e:"amie starts with a vowel → mon."},
{q:"Quelle est ___ adresse ? (your)", o:["ton","ta"], a:0, e:"adresse is f., but starts with a vowel → ton."}
]},
{t:"fill", h:"Translate (possessive + noun only)", items:[
{q:"his mother", a:["sa mère"]},{q:"her father", a:["son père"]},{q:"their children", a:["leurs enfants"]},{q:"my (female) friend", a:["mon amie"]},{q:"your parents (formal / plural)", a:["vos parents"]},{q:"our flat", a:["notre appartement"]},{q:"your brothers (informal)", a:["tes frères"]}
]},
{t:"tf", h:"True or false?", items:[
{q:"«sa mère» can mean «his mother».", a:true},
{q:"«ma amie» is correct.", a:false, e:"mon amie."},
{q:"«leurs enfants» means «their children».", a:true},
{q:"Choosing son/sa depends on whether the owner is a man or a woman.", a:false, e:"It depends on the gender of the thing owned."}
]}
]});

TOPICS_EN.push({
id:"u2-famille", sec:"book", unit:"2", kind:"Vocabulaire + communication",
title:"La famille", ru:"Family, marital status, talking about your family", page:"p. 38–39, 41",
theory:`
<h3>Family tree</h3>
<div class="tree">
${TC("2 / 4",1,"les grands-parents",NODE("le grand-père","grandfather")+NODE("la grand-mère","grandmother"),1)}
${TC(2,2,"les parents",NODE("le père","dad")+NODE("la mère","mum"),1)}
${TC(3,2,"frère / sœur de mes parents",NODE("l’oncle","uncle")+NODE("la tante","aunt"),1)}
${TC(1,3,"mes frères et sœurs",NODE("le frère","brother")+NODE("la sœur","sister"),1)}
${TC(2,3,"",NODE("moi","me","me"),1)}
${TC(3,3,"leurs enfants",NODE("le cousin","cousin (m.)")+NODE("la cousine","cousin (f.)"))}
${TC(1,4,"enfants de mon frère",NODE("le neveu","nephew")+NODE("la nièce","niece"))}
${TC(2,4,"mes enfants",NODE("le fils","son [fis]")+NODE("la fille","daughter"),1)}
${TC(2,5,"les petits-enfants",NODE("le petit-fils","grandson")+NODE("la petite-fille","granddaughter"))}
</div>
<h3>All the words</h3>
${TBL(["Français","In English","Français","In English"],[
[F("les grands-parents"),"grandparents",F("les petits-enfants"),"grandchildren"],
[F("le grand-père"),"grandfather",F("le petit-fils"),"grandson"],
[F("la grand-mère"),"grandmother",F("la petite-fille"),"granddaughter"],
[F("les parents"),"parents",F("l’oncle (m.)"),"uncle"],
[F("le père (papa)"),"father (dad)",F("la tante"),"aunt"],
[F("la mère (maman)"),"mother (mum)",F("le cousin / la cousine"),"cousin (m. / f.)"],
[F("les enfants"),"children",F("le neveu"),"nephew"],
[F("le fils"),"son — pronounced [fis]!",F("la nièce"),"niece"],
[F("la fille"),"daughter; girl",F("le frère / la sœur"),"brother / sister"]
])}
<h3>La situation familiale</h3>
${TBL(["Français","In English"],[[F("célibataire"),"single"],[F("marié(e)"),"married"],[F("le mariage"),"wedding; marriage"],[F("le mari"),"husband"],[F("la femme"),"wife; woman"],[F("le / la petit(e) ami(e)"),"boyfriend / girlfriend"],[F("fils / fille unique"),"only son / only daughter"]])}
${WARN(`False friends: ${F("les parents")} means parents only (not «relatives»); ${F("la femme")} is both wife and woman; ${F("la fille")} is both daughter and girl; ${F("le petit-fils")} is a grandson, not a «little son»; ${F("le fils")} — the s is pronounced, the l isn’t: [fis].`)}
<h3>Talking about your family</h3>
${EX([["J’ai un frère / une sœur.","I have a brother / a sister."],["Je n’ai pas de frères et sœurs. = Je suis fils / fille unique.","I have no brothers or sisters. = I’m an only child."],["Chez moi, nous sommes quatre.","There are four of us in my family."],["Mon frère est marié. Il a deux enfants.","My brother is married. He has two children."],["Ma sœur est célibataire.","My sister is single."],["– Ton frère et ta sœur étudient ou ils travaillent ? – Ils travaillent.","– Do your brother and sister study or work? – They work."]])}
<h3>Text from the textbook (p. 38): Nina et Théo préparent leur mariage</h3>
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
{t:"cards", h:"Flashcards: family", items:[["le père","father"],["la mère","mother"],["les parents","parents"],["le fils","son"],["la fille","daughter"],["le frère","brother"],["la sœur","sister"],["le grand-père","grandfather"],["la grand-mère","grandmother"],["le petit-fils","grandson"],["la petite-fille","granddaughter"],["l’oncle","uncle"],["la tante","aunt"],["le cousin","cousin (m.)"],["la cousine","cousin (f.)"],["le neveu","nephew"],["la nièce","niece"],["le mari","husband"],["la femme","wife"],["célibataire","single"],["marié(e)","married"],["le mariage","wedding"],["le petit ami","boyfriend"]]},
{t:"fill", h:"Write: nièce, frère, fille, fils unique, célibataire (p. 39)", items:[
{q:"Clara a deux enfants, un fils et une ___.", a:["fille"]},
{q:"Nina a un neveu et une ___…", a:["nièce"]},
{q:"…: les enfants de son ___.", a:["frère"]},
{q:"Nessim n’est pas marié, il est ___.", a:["célibataire"]},
{q:"Théo n’a pas de frères et sœurs, il est ___.", a:["fils unique"]}
]},
{t:"mc", h:"Choose the right answer (p. 41)", items:[
{q:"Ma sœur a un mari. Elle est…", o:["mariée","célibataire"], a:0},
{q:"Elsa est ___ de mon frère.", o:["la femme","le mari"], a:0},
{q:"Hugo n’est pas marié. Teresa est…", o:["sa petite amie","sa femme"], a:0},
{q:"C’est ___ de mon oncle Laurent : il y a 100 invités !", o:["le mariage","le marié"], a:0}
]},
{t:"mc", h:"Family logic", items:[
{q:"Le père de mon père, c’est mon…", o:["grand-père","oncle","petit-fils"], a:0},
{q:"La fille de ma tante, c’est ma…", o:["cousine","nièce","sœur"], a:0},
{q:"Le fils de ma sœur, c’est mon…", o:["neveu","cousin","petit-fils"], a:0},
{q:"La sœur de ma mère, c’est ma…", o:["tante","nièce","grand-mère"], a:0},
{q:"Le fils de mon fils, c’est mon…", o:["petit-fils","neveu","petit ami"], a:0}
]},
{t:"tf", h:"Nina / Théo text: true or false? (p. 39)", items:[
{q:"Théo invite son oncle Paul.", a:true},
{q:"Théo n’invite pas sa cousine.", a:false, e:"Il invite sa cousine Clara."},
{q:"Le frère de Nina est marié.", a:true, e:"Chez lui : lui, sa femme et ses enfants."},
{q:"Sofia, l’amie de Théo, a des enfants.", a:true},
{q:"Théo a une sœur.", a:false, e:"Il est fils unique."},
{q:"Nessim est célibataire.", a:true}
]}
]});

TOPICS_EN.push({
id:"u2-professions", sec:"book", unit:"2", kind:"Grammaire + vocabulaire",
title:"Le masculin et le féminin des professions", ru:"Jobs in the masculine and feminine", page:"p. 40–42",
theory:`
${MORPH([["-e → no change",[["fleuriste","fleuriste"],["journaliste","journaliste"]]],["-eur → -euse",[["coiffeur","coiffeuse"],["vendeur","vendeuse"]]],["-teur → -trice",[["acteur","actrice"],["directeur","directrice"]]],["-ien → -ienne",[["informaticien","informaticienne"],["musicien","musicienne"]]],["-er → -ère",[["infirmier","infirmière"],["boulanger","boulangère"]]],["-t / -r → + e",[["étudiant","étudiante"],["professeur","professeure"]]]])}
${NOTE("-ien → -ienne works exactly as with nationalities: italien → italienne. One pattern, two topics!")}
${RULE("A job after être — no article",`<p>${F("Il est infirmier.")} ${F("Elle est étudiante.")} ${F("Mon père est informaticien.")} ${F("Ma mère est professeure.")}</p><p>But with <b>c’est</b> — with an article: ${F("C’est un infirmier.")} ${F("C’est une actrice.")}</p>`)}
${VS({h:"il / elle est + job",big:F("Il est infirmier."),sub:"no article",tone:"good"},{h:"c’est + article + job",big:F("C’est un infirmier."),sub:"with an article",tone:"good"},{h:"don’t mix them",big:"<s>Il est un infirmier.</s>",sub:"mistake",tone:"bad"})}
<h3>Pronunciation</h3>
<p>${F("étudiant")} [etydjɑ̃] → ${F("étudiante")} [etydjɑ̃t]; ${F("infirmier")} [ɛ̃fiʁmje] → ${F("infirmière")} [ɛ̃fiʁmjɛʁ]; ${F("informaticien")} [ɛ̃] → ${F("informaticienne")} [ɛn].</p>
<h3>Vocabulary (p. 41)</h3>
${TBL(["Français","In English","Where they work"],[[F("l’acteur, l’actrice"),"actor, actress",F("au cinéma, au théâtre")],[F("le coiffeur, la coiffeuse"),"hairdresser",F("dans un salon de coiffure")],[F("l’étudiant(e)"),"student",F("à l’université")],[F("le / la fleuriste"),"florist",F("dans un magasin de fleurs")],[F("l’infirmier, l’infirmière"),"nurse",F("à l’hôpital")],[F("l’informaticien(ne)"),"IT specialist, programmer",F("dans une entreprise")],[F("le / la professeur(e)"),"teacher",F("à l’université, à l’école")]])}
`,
ex:[
{t:"fill", h:"Put the job in the masculine or feminine (p. 40, 42)", items:[
{q:"Maxime est coiffeur. Laure est ___.", a:["coiffeuse"]},
{q:"Élodie est infirmière. Jean est ___.", a:["infirmier"]},
{q:"Gabriel est fleuriste. Florence est ___.", a:["fleuriste"]},
{q:"Manuelle est actrice. Xavier est ___.", a:["acteur"]},
{q:"Christine est étudiante. Pedro est ___.", a:["étudiant"]},
{q:"Aurélie est informaticienne. William est ___.", a:["informaticien"]},
{q:"Romain est professeur. Ninon est ___.", a:["professeure","professeur"]},
{q:"Ana est coiffeuse. Paul est ___.", a:["coiffeur"]}
]},
{t:"sort", h:"Which pattern does it follow?", cats:["-eur → -euse","-teur → -trice","-ien → -ienne","-er → -ère","no change"], items:[["coiffeur",0],["acteur",1],["informaticien",2],["infirmier",3],["fleuriste",4],["vendeur",0],["directeur",1],["musicien",2],["boulanger",3],["journaliste",4]]},
{t:"fill", h:"Feminine of new jobs (same patterns)", items:[
{q:"vendeur →", a:["vendeuse"]},{q:"musicien →", a:["musicienne"]},{q:"cuisinier →", a:["cuisinière"]},{q:"directeur →", a:["directrice"]},{q:"avocat →", a:["avocate"]},{q:"dentiste →", a:["dentiste"]}
]},
{t:"mc", h:"Article or not?", items:[
{q:"Elle est ___ étudiante.", o:["— (no article)","une"], a:0},
{q:"C’est ___ actrice française.", o:["une","— (no article)"], a:0},
{q:"Mon père est ___ informaticien.", o:["— (no article)","un"], a:0},
{q:"Barbara travaille à l’hôpital, elle est…", o:["infirmière","professeure","coiffeuse"], a:0}
]},
{t:"match", h:"Match the job and the translation", pairs:[["l’infirmière","nurse (f.)"],["l’informaticien","programmer"],["la coiffeuse","hairdresser (f.)"],["l’acteur","actor"],["le fleuriste","florist"],["la professeure","teacher (f.)"]]}
]});

TOPICS_EN.push({
id:"u2-phonetique", sec:"book", unit:"2", kind:"Phonie-graphie",
title:"Verbes en -er et liaisons", ru:"Pronouncing -er verbs and liaison with determiners", page:"p. 36, 42",
theory:`
<h3>Je prononce / j’écris</h3>
${SAME(['je travaill<span class="mute">e</span>','tu travaill<span class="mute">es</span>','il travaill<span class="mute">e</span>','ils travaill<span class="mute">ent</span>'],"[tʁavaj]",[["nous travaillons","[ɔ̃]"],["vous travaillez","[e]"]])}
${TBL(["I write","I say"],[[F("je travaille, tu travailles, il travaille, ils travaillent"),"the same: [tʁavaj] — 1 sound, 4 spellings"],[F("j’aime, tu aimes, il aime"),"the same: [ɛm]"],[F("ils aiment"),"[il<b>z</b>ɛm] — different because of the liaison!"]])}
${RULE("When you can hear il vs ils",`<p>Only when the verb starts with a <b>vowel</b>: ${F("il écoute")} [ilekut] ≠ ${F("ils écoutent")} [ilzekut]; ${F("il adore")} ≠ ${F("ils adorent")}.</p>${LIS(LI("ils","écoutent","z"),LI("ils","adorent","z"),LI("ils","aiment","z"))}<p>With a consonant they sound the same: ${F("il parle = ils parlent")}, ${F("il déteste = ils détestent")}.</p>`)}
<h3>Liaison with determiners (p. 42)</h3>
<p>Between a determiner (article, possessive) and a noun starting with a vowel/silent h, liaison is <b>compulsory</b>.</p>
${TBL(["We hear","Examples"],[["[z]",F("les‿étudiants, des‿acteurs, mes‿amis, leurs‿enfants, vos‿enfants, ses‿amies, nos‿activités, mes‿oncles")],["[n]",F("un‿étudiant, mon‿ami, ton‿adresse, son‿oncle")],["none (consonant)",F("les professeurs, des coiffeurs, mes cousins")]])}
${LIS(LI("les","étudiants","z"),LI("des","acteurs","z"),LI("un","étudiant","n"),LI("mon","ami","n"),LI("leurs","enfants","z"),LI("les","professeurs",""),LI("mes","cousins",""))}
<p>The linking consonant «moves» to the next syllable: Les / <b>zé</b> / tu / diants.</p>
`,
ex:[
{t:"sort", h:"What do we hear: [z], [n] or no liaison?", cats:["[z]","[n]","none"], items:[["un étudiant",1],["des infirmiers",0],["les acteurs",0],["mon ami",1],["leurs enfants",0],["mes oncles",0],["ton adresse",1],["vos enfants",0],["les professeurs",2],["des coiffeurs",2],["mes cousins",2],["nos activités",0]]},
{t:"mc", h:"Same (=) or different (≠) pronunciation? (p. 36)", items:[
{q:"il écoute – ils écoutent", o:["=","≠"], a:1, e:"ils‿écoutent [z]."},
{q:"il parle – ils parlent", o:["=","≠"], a:0},
{q:"il travaille – ils travaillent", o:["=","≠"], a:0},
{q:"ils adorent – il adore", o:["=","≠"], a:1},
{q:"ils détestent – il déteste", o:["=","≠"], a:0}
]},
{t:"tf", h:"True or false?", items:[
{q:"In «ils parlent» the -ent ending is pronounced.", a:false},
{q:"In «mes amis» you hear [z].", a:true},
{q:"There is a liaison in «les professeurs».", a:false},
{q:"In «mon amie» you hear [n].", a:true}
]}
]});
