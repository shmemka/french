/* ===== ENGLISH VERSION — reference topics ===== */
TOPICS_EN.push({
id:"r-lecture", sec:"ref", kind:"From scratch",
title:"Reading rules", ru:"How to read French words: letters, letter combinations, nasal sounds", page:"Appendix «Phonie-graphie», p. 167",
theory:`
<p>French spelling looks chaotic, but it is very regular: the same letter combination is almost always read the same way. Learn the combinations and you can read any word, even an unfamiliar one. Click the examples to hear them.</p>
<h3>Five key principles</h3>
${RULE("1. Final consonants are usually NOT pronounced",`<p>${F("Paris")} [paʁi], ${F("français")}, ${F("petit")}, ${F("grand")}, ${F("vous")}, ${F("deux")}, ${F("sport")}.</p><p>Exception — <b>c, r, f, l</b> are often pronounced (remember: <b>CaReFuL</b>): ${F("avec")}, ${F("bonjour")}, ${F("neuf")}, ${F("espagnol")}. But <b>-er</b> in verbs and words in -ier is [e]: ${F("parler")}, ${F("premier")}.</p>`)}
${RULE("2. Final -e is silent",`<p>${F("France")} [fʁɑ̃s], ${F("madame")}, ${F("rue")}. But it «switches on» the consonant before it: ${F("grand")} [gʁɑ̃] → ${F("grande")} [gʁɑ̃d].</p>`)}
${RULE("3. -ent in verbs is silent",`<p>${F("ils parlent")} [il paʁl] — not «parlant»! In other words -ent = [ɑ̃]: ${F("souvent")}, ${F("un étudiant")}… (there it’s -ant).</p>`)}
${RULE("4. H is never pronounced",`<p>${F("hôtel")} [otɛl], ${F("habiter")} [abite], ${F("histoire")}.</p>`)}
${RULE("5. Stress — always on the last syllable",`<p>${F("université")} → u-ni-ver-si-<b>TÉ</b>. The other syllables are even.</p>`)}
<h3>Vowels and combinations</h3>
${TBL(["Spelling","Sound","Roughly like","Examples"],[
[F("a, à, â"),"[a]","a in «father» (short)",F("madame, là, pâtes")],
[F("é")+", "+F("-er, -ez")+" at the end","[e]","closed «ay» without the glide",F("café, été, parler, vous parlez")],
[F("è, ê, ai, ei")+", e + 2 consonants","[ɛ]","e in «bed»",F("mère, fête, j’aime, treize, merci, avec")],
[F("e")+" in an open syllable","[ə]","the «uh» in «the», often dropped",F("le, je, petit, samedi [samdi]")],
[F("i, î, y"),"[i]","ee",F("midi, île, stylo")],
[F("o, ô, au, eau"),"[o]","o in «go» without the glide",F("hôtel, au revoir, beau, eau")],
[F("u, û"),"[y]","lips round for «oo», tongue says «ee»",F("tu, rue, salut, musique")],
[F("ou, où, oû"),"[u]","oo in «food»",F("vous, nous, où, août")],
[F("eu, œu"),"[ø] / [œ]","like «ur» in «fur», lips rounded",F("deux, neuf, sœur, professeur")],
[F("oi"),"[wa]","wa",F("moi, toi, trois, voiture")],
[F("ui"),"[ɥi]","a quick «wee» with rounded lips",F("huit, lui, nuit")]
])}
${WARN(`The most important pair: ${F("u")} [y] and ${F("ou")} [u]. ${F("tu")} (you) ≠ ${F("tout")} (all); ${F("rue")} (street) ≠ ${F("roue")} (wheel). Practise: say «ee» without moving your tongue and round your lips.`)}
${VS({h:"u → [y]",big:F("tu · rue · salut"),sub:"lips for «oo», tongue for «ee»"},{h:"ou → [u]",big:F("vous · roue · tout"),sub:"plain «oo»"})}
<h3>Nasal vowels</h3>
<p>Vowel + <b>n</b> or <b>m</b> at the end of a word or before a consonant = a vowel said «through the nose», and the n/m itself is not pronounced.</p>
${TBL(["Spelling","Sound","Examples"],[
[F("an, am, en, em"),"[ɑ̃] nasal «ahn»",F("France, chambre, enfant, temps, allemand")],
[F("on, om"),"[ɔ̃] nasal «ohn»",F("bonjour, nom, onze, Japon")],
[F("in, im, ain, aim, ein, un, um, yn"),"[ɛ̃] nasal «an»",F("vingt, important, demain, faim, plein, un, lundi")],
[F("ien"),"[jɛ̃]",F("bien, italien, canadien")],
[F("oin"),"[wɛ̃]",F("loin, coin")]
])}
${RULE("When it is NOT nasal",`<p>If the n/m is followed by a <b>vowel</b> or a second <b>n/m</b>: ${F("bon")} [bɔ̃] / ${F("bonne")} [bɔn]; ${F("italien")} / ${F("italienne")}; ${F("américain")} / ${F("américaine")}; ${F("un")} [œ̃] / ${F("une")} [yn]; ${F("ami")}, ${F("animal")}. Special case: ${F("femme")} [fam].</p>`)}
${VS({h:"nasal",big:F("bon · italien · un"),sub:"n/m at the end or before a consonant"},{h:"not nasal",big:F("bonne · italienne · une"),sub:"n followed by a vowel or a second n"})}
<h3>Consonants</h3>
${TBL(["Spelling","Sound","Rule","Examples"],[
[F("c"),"[k] / [s]","[s] before e, i, y; otherwise [k]",F("café, comment / merci, cinéma")],
[F("ç"),"[s]","always [s] (only before a, o, u)",F("ça, français, garçon")],
[F("g"),"[g] / [ʒ]","[ʒ] (s in «pleasure») before e, i, y; otherwise [g]",F("gare, Congo / Belgique, girafe")],
[F("gu"),"[g]","the u is silent",F("guitare")],
[F("ge")+" + a/o","[ʒ]","the e is silent, it keeps the g soft",F("nous mangeons, nageons")],
[F("ch"),"[ʃ]","sh",F("chocolat, chinois, dimanche")],
[F("gn"),"[ɲ]","ny as in «canyon»",F("Espagne, Allemagne, montagne")],
[F("qu"),"[k]","the u is silent",F("quel, quatre, Belgique, Mexique")],
[F("ph / th"),"[f] / [t]","",F("photo, téléphone / thé")],
[F("s")+" between vowels","[z]","a single s between vowels = [z]",F("française, cousine, musique, rose")],
[F("ss"),"[s]","",F("passeport, classe")],
[F("j"),"[ʒ]","s in «pleasure»",F("je, japonais, juin")],
[F("ill")+" after a vowel / consonant","[j]","y in «yes»",F("fille, famille, travailler, juillet")],
[F("ail, eil"),"[aj], [ɛj]","«eye», «ay»",F("travail, soleil")],
[F("tion"),"[sjɔ̃]","«syohn»",F("nation, natation, nationalité")],
[F("x"),"[ks], [gz], [s], [z]","depends on the word",F("taxi, exemple, six, deuxième")],
[F("r"),"[ʁ]","from the throat",F("rue, Paris, merci")]
])}
${NOTE(`Exceptions found in the textbook: ${F("ville")} [vil], ${F("mille")} [mil] — ll as [l]; ${F("monsieur")} [məsjø]; ${F("fils")} [fis]; ${F("août")} [ut]; ${F("second")} [səgɔ̃].`)}
${NOTE(`French r [ʁ] is a soft sound at the back of the throat, like a very gentle gargle.`)}
`,
ex:[
{t:"drill", h:"Read it aloud yourself, then click to check", items:[["bonjour","[bɔ̃ʒuʁ] bohn-ZHOOR"],["merci","[mɛʁsi] mair-SEE"],["rue","[ʁy] rü"],["vous","[vu] voo"],["moi","[mwa] mwah"],["beaucoup","[boku] boh-KOO"],["quatre","[katʁ] katr"],["Espagne","[ɛspaɲ] es-PANY"],["guitare","[gitaʁ] gee-TAR"],["famille","[famij] fa-MEE-y"],["ville","[vil] veel"],["français","[fʁɑ̃sɛ] frahn-SEH"],["française","[fʁɑ̃sɛz] frahn-SEZ"],["ils parlent","[il paʁl] eel parl"],["enfant","[ɑ̃fɑ̃] ahn-FAHN"],["vingt","[vɛ̃] van"],["natation","[natasjɔ̃] na-ta-SYOHN"],["monsieur","[məsjø] muh-SYUH"],["Belgique","[bɛlʒik] bel-ZHEEK"],["musique","[myzik] mü-ZEEK"]]},
{t:"mc", h:"How is it read?", items:[
{q:"rue", o:["[ʁy] «rü»","[ʁu] «roo»","[ʁue] «roo-eh»"], a:0},
{q:"ils parlent", o:["[il paʁl]","[il paʁlɑ̃]","[ilz paʁlɛnt]"], a:0, e:"-ent in verbs is silent."},
{q:"fils (son)", o:["[fis]","[fil]","[fils]"], a:0},
{q:"femme", o:["[fam]","[fɛm]","[fœm]"], a:0},
{q:"cinéma", o:["[sinema]","[kinema]","[tʃinema]"], a:0, e:"c before i = [s]."},
{q:"guitare", o:["[gitaʁ]","[gwitaʁ]","[ʒitaʁ]"], a:0, e:"gu = [g]."},
{q:"Belgique", o:["[bɛlʒik]","[bɛlgik]","[bɛlgikə]"], a:0, e:"g before i = [ʒ], qu = [k], final e silent."},
{q:"moi", o:["[mwa]","[moi]","[mɔj]"], a:0},
{q:"huit", o:["[ɥit]","[uit]","[ɥi:t]"], a:0},
{q:"cousine", o:["[kuzin]","[kusin]","[kuzinə]"], a:0, e:"s between vowels = [z]."}
]},
{t:"sort", h:"Which nasal sound?", cats:["[ɑ̃] an","[ɔ̃] on","[ɛ̃] in"], items:[["France",0],["enfant",0],["chambre",0],["onze",1],["bonjour",1],["nom",1],["vingt",2],["demain",2],["lundi",2],["Japon",1],["temps",0],["important",2]]},
{t:"sort", h:"Is the final consonant pronounced?", cats:["pronounced","silent"], items:[["avec",0],["Paris",1],["bonjour",0],["petit",1],["neuf",0],["vous",1],["espagnol",0],["grand",1],["parler",1],["sport",1],["chef",0],["deux",1]]},
{t:"tf", h:"True or false?", items:[
{q:"The word «bonne» has a nasal sound.", a:false, e:"nn + e → not nasal: [bɔn]."},
{q:"The letter h is not pronounced in French.", a:true},
{q:"«ou» is read [u].", a:true},
{q:"In «ville» the ll is read [j].", a:false, e:"Exception: [vil]."},
{q:"An s between two vowels sounds like [z].", a:true}
]}
]});

TOPICS_EN.push({
id:"r-accents", sec:"ref", kind:"From scratch",
title:"Accents : é, è, ê, ç…", ru:"Accent marks and how to type them on a Mac", page:"",
theory:`
<p>The marks above letters are not decoration. They change the pronunciation or distinguish words. In writing, a missing accent counts as a mistake.</p>
${TBL(["Mark","Name","What it does","Examples"],[
[F("é"),"accent aigu","only on e → closed [e]",F("été, café, né, étudiant")],
[F("è"),"accent grave","on e → open [ɛ]",F("mère, frère, très")],
[F("à, ù"),"accent grave","doesn’t change the sound, distinguishes words",F("a / à, ou / où, la / là")],
[F("ê, â, î, ô, û"),"accent circonflexe","often replaces a lost s; ê = [ɛ]",F("fête, hôpital, forêt, août")],
[F("ë, ï"),"tréma","read the vowel separately",F("Noël, naïf")],
[F("ç"),"cédille","c sounds [s] before a, o, u",F("ça, français, garçon")]
])}
${CMP(``,`A tip via English: the circonflexe often «hides» an s — ${F("hôpital")} = <i>hospital</i>, ${F("forêt")} = <i>forest</i>, ${F("fête")} = <i>feast</i>.`)}
<h3>Pairs that differ only by an accent</h3>
${TBL(["Without","With an accent"],[[F("il a")+" — he has (avoir)",F("à Paris")+" — in Paris"],[F("ou")+" — or",F("où")+" — where"],[F("la")+" — the (article)",F("là")+" — there"]])}
<h3>How to type them on a MacBook</h3>
${TBL(["Method","How"],[
["Hold the key","Hold <b>e</b> → a menu é è ê ë appears → press the number. Works in almost every app."],
["é","⌥ Option + E, then E"],
["è, à, ù","⌥ Option + ` (left of Z / below Esc), then the letter"],
["ê, â, î, ô, û","⌥ Option + I, then the letter"],
["ë, ï","⌥ Option + U, then the letter"],
["ç","⌥ Option + C"],
["œ","⌥ Option + Q"]
])}
${NOTE("On this site, exercises with typing have é è ê à ç… buttons — click them to insert the letter.")}
`,
ex:[
{t:"mc", h:"With or without an accent?", items:[
{q:"Il ___ 20 ans.", o:["a","à"], a:0, e:"a — the verb avoir."},
{q:"J’habite ___ Paris.", o:["à","a"], a:0, e:"à — the preposition."},
{q:"Tu habites ___ ?", o:["où","ou"], a:0, e:"où — where."},
{q:"Le café ___ le thé ?", o:["ou","où"], a:0, e:"ou — or."},
{q:"Elle est ___, devant le cinéma.", o:["là","la"], a:0}
]},
{t:"fill", h:"Add the accents (write the word correctly)", items:[
{q:"ecole →", a:["école"]},{q:"frere →", a:["frère"]},{q:"tres →", a:["très"]},{q:"francais →", a:["français"]},{q:"fete →", a:["fête"]},{q:"etudiante →", a:["étudiante"]},{q:"telephone →", a:["téléphone"]},{q:"mere →", a:["mère"]},{q:"hopital →", a:["hôpital"]},{q:"Noel →", a:["Noël"]}
]},
{t:"match", h:"Match the mark and its name", pairs:[["é","accent aigu"],["è","accent grave"],["ê","accent circonflexe"],["ë","tréma"],["ç","cédille"]]}
]});

TOPICS_EN.push({
id:"r-liaison", sec:"ref", kind:"From scratch",
title:"Élision, liaison, enchaînement", ru:"How words «glue together» in speech and writing", page:"",
theory:`
<p>Spoken French sounds like one long word because words glue together. There are three mechanisms.</p>
<h3>1. Élision — dropping a vowel (visible in writing)</h3>
${FXS(FX(["je","+","aime","→","!j’aime"]),FX(["le","+","hôtel","→","!l’hôtel"]),FX(["ne","+","habite","→","!n’habite"]))}
${RULE("Compulsory before a vowel and silent h",`${TBL(["Was","Becomes","Example"],[[F("le, la"),F("l’"),F("l’art, l’université, l’hôtel")],[F("je"),F("j’"),F("j’ai, j’aime, j’habite")],[F("ne"),F("n’"),F("je n’aime pas")],[F("de"),F("d’"),F("pas d’enfants")],[F("me, te, se"),F("m’, t’, s’"),F("je m’appelle, il s’appelle")],[F("que"),F("qu’"),F("qu’est-ce que")],[F("si"),F("s’")+" — only before il/ils",F("s’il vous plaît")]])}<p>Before a consonant — no shortening: ${F("je suis, je parle, le sport")}.</p>`)}
${WARN("✗ <i>je aime</i>, ✗ <i>le université</i>, ✗ <i>je ne habite pas</i> are spelling mistakes, not just an «accent».")}
<h3>2. Enchaînement — linking (pronunciation only)</h3>
<p>A pronounced final consonant «flows» into the next vowel: ${F("elle‿a")} [ɛ-la], ${F("il‿habite")} [i-la-bit], ${F("avec‿elle")}.</p>
<h3>3. Liaison</h3>
${LIS(LI("les","amis","z"),LI("deux","ans","z"),LI("un","ami","n"),LI("petit","ami","t"),LI("neuf","ans","v"),LI("et","Anna",""))}
<p>A silent final consonant <b>comes back to life</b> before a vowel:</p>
${TBL(["Letter","Sound","Example"],[[F("s, x, z"),"[z]",F("les‿amis, deux‿ans, chez‿elle")],[F("n"),"[n]",F("un‿ami, en‿Italie, on‿a, mon‿ami")],[F("t, d"),"[t]",F("petit‿ami, c’est‿un, quand‿il")],[F("f")+" (neuf)","[v]",F("neuf‿ans")]])}
${TBL(["Compulsory","Forbidden"],[
["determiner + noun: "+F("les‿enfants, mon‿ami"),"after "+F("et")+": "+F("et | Anna")],
["adjective + noun: "+F("petit‿ami"),"before an «aspirated» h: "+F("les | héros")],
["pronoun + verb: "+F("nous‿avons, ils‿ont, vous‿êtes, on‿habite"),"after a singular noun: "+F("un étudiant | italien")],
["short preposition: "+F("en‿Italie, dans‿un, chez‿elle"),"before "+F("onze")+": "+F("le | onze")]
])}
${RULE("A pair you must hear",`<p>${F("ils sont")} [il<b>s</b>ɔ̃] — they are; ${F("ils ont")} [il<b>z</b>ɔ̃] — they have.<br>${F("elles sont")} / ${F("elles‿ont")}. The only difference is voicing!</p>`)}
`,
ex:[
{t:"mc", h:"Élision: which is correct?", items:[
{q:"___ habite à Paris.", o:["J’","Je"], a:0},
{q:"Elle ___ aime pas le ski.", o:["n’","ne"], a:0},
{q:"Il ___ appelle Paul.", o:["s’","se"], a:0},
{q:"C’est ___ amie de Paul.", o:["l’","la"], a:0},
{q:"___ suis russe.", o:["Je","J’"], a:0},
{q:"Je n’ai pas ___ enfants.", o:["d’","de"], a:0}
]},
{t:"fill", h:"Fix it: write with élision", items:[
{q:"je aime →", a:["j’aime"]},{q:"la université →", a:["l’université"]},{q:"je ne habite pas →", a:["je n’habite pas"]},{q:"le hôtel →", a:["l’hôtel"]},{q:"le art →", a:["l’art"]},{q:"si il vous plaît →", a:["s’il vous plaît"]}
]},
{t:"sort", h:"Liaison or not?", cats:["liaison","no liaison"], items:[["les amis",0],["et Anna",1],["ils ont",0],["ils sont",1],["un étudiant",0],["vous êtes",0],["en Italie",0],["au Japon",1],["mon ami",0],["deux livres",1],["deux ans",0],["les professeurs",1]]}
]});

TOPICS_EN.push({
id:"r-genre", sec:"ref", kind:"From scratch",
title:"Genre et pluriel des noms", ru:"Gender and plural of nouns", page:"",
theory:`
<p>French has two genders: <b>masculine</b> and <b>feminine</b>. There is no neuter. You can’t guess the gender from the meaning — so learn every word with its article.</p>
${TBL(["Word","Gender","Meaning"],[[F("la mer"),Fe("f."),"sea"],[F("la plage"),Fe("f."),"beach"],[F("le cinéma"),M("m."),"cinema"],[F("l’université"),Fe("f."),"university"],[F("la musique"),Fe("f."),"music"],[F("le pays"),M("m."),"country"],[F("la photo"),Fe("f."),"photo"]])}
<h3>Hints from endings</h3>
${TBL(["Usually feminine","Usually masculine"],[
[F("-tion, -sion")+": la nation, la natation",F("-ment")+": l’appartement"],
[F("-té")+": la nationalité, l’université",F("-age")+": le mariage (but "+F("la plage, l’image, la page")+"!)"],
[F("-ure")+": la culture, la voiture",F("-eau")+": le bureau (but "+F("l’eau")+" is f.)"],
[F("-ie")+": la Russie, la boulangerie",F("-isme")+": le tourisme"],
[F("-ette, -ence, -ance")+": la France",F("-phone")+": le téléphone"],
["countries in -e: "+F("la Chine"),"words ending in a consonant: "+F("le sport, le film")]
])}
<h3>Plural</h3>
${TBL(["Rule","Examples"],[
["usually + s (silent!)",F("le film → les films, la rue → les rues")],
["-eau, -eu → + x",F("le bureau → les bureaux, le neveu → les neveux")],
["-al → -aux",F("un journal → des journaux, un animal → des animaux")],
["-s, -x, -z → no change",F("le pays → les pays, le fils → les fils, le prix → les prix")],
["compounds: both parts",F("le grand-père → les grands-pères, le petit-fils → les petits-fils")]
])}
${NOTE(`An exception you might meet: ${F("un festival → des festivals")} (not «festivaux»).`)}
${NOTE("The plural -s is silent — you hear the number in the article: [lə film] / [le film].")}
`,
ex:[
{t:"sort", h:"Masculine or feminine?", cats:["masculin","féminin"], items:[["mer",1],["plage",1],["cinéma",0],["université",1],["appartement",0],["natation",1],["quartier",0],["photo",1],["pays",0],["nationalité",1],["mariage",0],["musique",1],["téléphone",0],["voiture",1]]},
{t:"fill", h:"Put it in the plural", items:[
{q:"le film → les ___", a:["films"]},{q:"le bureau → les ___", a:["bureaux"]},{q:"le neveu → les ___", a:["neveux"]},{q:"un journal → des ___", a:["journaux"]},{q:"le pays → les ___", a:["pays"]},{q:"le fils → les ___", a:["fils"]},{q:"le grand-père → les ___", a:["grands-pères"]},{q:"la rue → les ___", a:["rues"]}
]},
{t:"mc", h:"Traps", items:[
{q:"The word «plage» is…", o:["feminine","masculine"], a:0, e:"la plage, even though it ends in -age."},
{q:"How can you hear that «films» is plural?", o:["from the article les","from the final s","you can’t"], a:0},
{q:"The plural of «un festival»:", o:["des festivals","des festivaux"], a:0}
]}
]});

TOPICS_EN.push({
id:"r-pronoms", sec:"ref", kind:"From scratch",
title:"Les pronoms personnels", ru:"Personal pronouns: je, tu, on… and moi, toi, lui…", page:"",
theory:`
${TBL(["Subject","Stressed form","RU","EN"],[
[F("je (j’)"),F("moi"),"я","I / me"],[F("tu"),F("toi"),"ты","you (informal)"],[F("il"),F("lui"),"он (also masculine things)","he / it"],[F("elle"),F("elle"),"она (also feminine things)","she / it"],[F("on"),F("—"),"мы (colloquial), люди","we / one"],[F("nous"),F("nous"),"мы","we"],[F("vous"),F("vous"),"вы (polite and plural)","you"],[F("ils"),F("eux"),"они (m. or mixed group)","they"],[F("elles"),F("elles"),"они (only f.)","they"]
])}
${RULE("il / elle for things",`<p>There is no «it» — things are «he» or «she» by gender: ${F("La rue ? Elle est calme.")} ${F("Le quartier ? Il est sympa.")}</p>`)}
${RULE("ils for a mixed group",`<p>Even if the group has 10 women and 1 man — ${F("ils")}. ${F("elles")} only if they are all feminine.</p>`)}
<h3>When you need stressed forms (moi, toi…)</h3>
${TBL(["Case","Example"],[["emphasis",F("Moi, je suis russe. Lui, il est italien.")],["after et, aussi, non plus",F("Et toi ? — Moi aussi ! — Moi non plus.")],["after prepositions",F("avec moi, chez lui, pour elle, à toi")],["after c’est",F("C’est moi ! C’est lui.")],["a one-word answer",F("Qui parle français ? — Moi !")]])}
${NOTE(`${F("chez")} + stressed form = «at someone’s place»: ${F("chez moi")} — at my place; ${F("Chez lui, ils sont quatre.")} — There are four of them in his family.`)}
`,
ex:[
{t:"fill", h:"Write the stressed pronoun", items:[
{q:"Et ___ ? (you, informal)", a:["toi"]},{q:"J’habite avec ___. (him)", a:["lui"]},{q:"C’est ___ ! (me)", a:["moi"]},{q:"Chez ___, ils sont cinq. (them, m.)", a:["eux"]},{q:"– J’adore le ski ! – ___ aussi ! (me)", a:["Moi"]},{q:"Pour ___, c’est important. (her)", a:["elle"]}
]},
{t:"mc", h:"Choose the subject pronoun", items:[
{q:"Marie et Paul ? ___ habitent à Lyon.", o:["Ils","Elles","Eux"], a:0, e:"Mixed group → ils."},
{q:"La plage ? ___ est belle.", o:["Elle","Il","Lui"], a:0},
{q:"Anna et Léa ? ___ sont russes.", o:["Elles","Ils","Eux"], a:0},
{q:"Le piano ? ___ est à Julie.", o:["Il","Elle","Lui"], a:0},
{q:"On ___ français à Genève.", o:["parle","parlons","parlent"], a:0}
]}
]});

TOPICS_EN.push({
id:"r-questions", sec:"ref", kind:"From scratch",
title:"Poser une question", ru:"Three ways to ask a question and question words", page:"",
theory:`
${TBL(["Way","Style","Example"],[
["1. Intonation ↗","colloquial",F("Tu habites à Paris ?")],
["2. Est-ce que","neutral, all-purpose",F("Est-ce que tu habites à Paris ?")],
["3. Inversion","written, polite",F("Habites-tu à Paris ?")]
])}
${SCALE([["Tu habites où ?","intonation"],["Où est-ce que tu habites ?","est-ce que"],["Où habites-tu ?","inversion"]],["casual","formal"])}
${CMP("","Way 3 is like English (<i>Are you…?</i>): the verb goes before the subject, with a hyphen.")}
${RULE("Est-ce que",`<p>«Est-ce que» [ɛskə] isn’t translated — it’s just a signal that «a question is coming». Before a vowel → <b>est-ce qu’</b>: ${F("Est-ce qu’il parle anglais ?")}</p>`)}
${RULE("Inversion and -t-",`<p>${F("Comment vous appelez-vous ?")} ${F("Parlez-vous français ?")}<br>If the verb ends in a vowel and il/elle/on follows, add <b>-t-</b> to make it sound smooth: ${F("Habite-t-il à Lyon ?")} ${F("Parle-t-elle anglais ?")} ${F("A-t-il un frère ?")}</p>`)}
<h3>Question words</h3>
${TBL(["Word","Meaning","Example"],[
[F("où"),"where",F("Tu habites où ?")],
[F("d’où"),"where from",F("Tu viens d’où ?")],
[F("quand"),"when",F("Le festival, c’est quand ?")],
[F("comment"),"how",F("Comment tu t’appelles ?")],
[F("combien"),"how much / how many",F("Ça coûte combien ?")],
[F("pourquoi"),"why → "+F("parce que")+" because",F("Pourquoi tu aimes Nice ? — Parce que j’adore la mer.")],
[F("qui"),"who",F("Qui est-ce ? — C’est Paul.")],
[F("qu’est-ce que"),"what",F("Qu’est-ce que tu aimes ?")],
[F("quel / quelle…"),"which, what",F("Quel est ton numéro ?")]
])}
<p>Question words also come in three styles: ${F("Tu habites où ?")} / ${F("Où est-ce que tu habites ?")} / ${F("Où habites-tu ?")}</p>
<h3>Oui, non… and si!</h3>
${RULE("Si — «yes» to a negative question",`<p>${F("Tu n’aimes pas le sport ? — Si, j’aime le sport !")} (Don’t you like sport? — Yes, I do!)</p>`)}
${CMP("","Like <i>Yes, I do!</i> after a negative question — but just one short si.")}
`,
ex:[
{t:"match", h:"Question word → meaning", pairs:[["où","where"],["quand","when"],["comment","how"],["combien","how much / many"],["pourquoi","why"],["qui","who"],["qu’est-ce que","what"]]},
{t:"fill", h:"Write the question word", items:[
{q:"___ tu habites ? — À Moscou.", a:["Où"]},{q:"___ tu t’appelles ? — Vlad.", a:["Comment"]},{q:"___ est-ce ? — C’est ma sœur.", a:["Qui"]},{q:"___ tu aimes Nice ? — Parce que j’adore la mer.", a:["Pourquoi"]},{q:"___ tu aimes ? — Le cinéma.", a:["Qu’est-ce que"]}
]},
{t:"mc", h:"Choose the right option", items:[
{q:"«Tu parles anglais ?» with est-ce que:", o:["Est-ce que tu parles anglais ?","Est-ce tu parles anglais ?","Est-ce que parles-tu anglais ?"], a:0},
{q:"«Il habite à Lyon ?» with inversion:", o:["Habite-t-il à Lyon ?","Habite-il à Lyon ?","Il habite-t-il à Lyon ?"], a:0},
{q:"– Tu n’es pas russe ? – ___, je suis russe !", o:["Si","Oui","Non"], a:0},
{q:"«Est-ce que» before il:", o:["Est-ce qu’il","Est-ce que il"], a:0}
]},
{t:"order", h:"Put the question together", items:[
{s:"Est-ce que tu aimes le cinéma ?", ru:"Do you like cinema?"},
{s:"Comment vous appelez-vous ?", ru:"What is your name? (formal)"},
{s:"Où est-ce que tu habites ?", ru:"Where do you live?"}
]}
]});

TOPICS_EN.push({
id:"r-negation", sec:"ref", kind:"From scratch",
title:"La négation", ru:"Negation: ne… pas, pas de and others", page:"",
theory:`
${RULE("The basic pattern",`<p><b>subject + ne + verb + pas</b></p>${EX([["Je ne parle pas italien.","I don’t speak Italian."],["Il n’habite pas à Paris.","He doesn’t live in Paris. (ne → n’ before a vowel)"],["Je ne m’appelle pas Paul.","My name isn’t Paul. (m’ stays next to the verb)"],["Je n’aime pas skier.","I don’t like skiing."]])}`)}
${FXS(FX(["~subject","!ne","~verb","!pas"]),FX(["Je","!ne","m’appelle","!pas","Paul."],"me/te/se stay next to the verb"))}
${RULE("pas de — the main trap",`<p>After a negative, <b>un / une / des</b> → <b>de / d’</b>:</p>${FX(["un · une · des","→","!de / d’"])}${TBL(["Affirmative","Negative"],[[F("J’ai un frère."),F("Je n’ai pas de frère.")],[F("J’ai une guitare."),F("Je n’ai pas de guitare.")],[F("J’ai des enfants."),F("Je n’ai pas d’enfants.")],[F("Il y a une plage."),F("Il n’y a pas de plage.")]])}`)}
${TBL(["No change","Example"],[["le / la / les",F("J’aime le ski. → Je n’aime pas le ski.")],["after être",F("C’est un piano. → Ce n’est pas un piano.")]])}
<h3>Other negatives (for reference)</h3>
${TBL(["Français","In English","Example"],[[F("ne… jamais"),"never",F("Je ne skie jamais.")],[F("ne… plus"),"no longer",F("Il n’habite plus à Lyon.")],[F("ne… rien"),"nothing",F("Je ne comprends rien.")],[F("ne… personne"),"nobody",F("Je ne connais personne.")]])}
${NOTE(`In conversation the French often drop ne: «J’aime pas…», «C’est pas grave». In writing, always write <b>ne… pas</b>.`)}
`,
ex:[
{t:"fill", h:"Make the sentence negative", items:[
{q:"J’ai un frère. →", a:["Je n’ai pas de frère"], long:true},
{q:"Il y a une plage. →", a:["Il n’y a pas de plage"], long:true},
{q:"Elle a des enfants. →", a:["Elle n’a pas d’enfants"], long:true},
{q:"Je m’appelle Paul. →", a:["Je ne m’appelle pas Paul"], long:true},
{q:"Nous aimons la danse. →", a:["Nous n’aimons pas la danse"], long:true},
{q:"C’est une guitare. →", a:["Ce n’est pas une guitare"], long:true}
]},
{t:"mc", h:"Choose the right option", items:[
{q:"Je n’ai pas ___ guitare.", o:["de","une","la"], a:0},
{q:"Il n’aime pas ___ musique.", o:["la","de","une"], a:0},
{q:"Je ___ habite pas à Nice.", o:["n’","ne"], a:0},
{q:"Which one has a mistake?", o:["Je ne pas parle anglais.","Je ne parle pas anglais.","Je n’aime pas le ski."], a:0, e:"pas goes after the verb."}
]}
]});

TOPICS_EN.push({
id:"r-cest", sec:"ref", kind:"From scratch",
title:"C’est, il est, il y a", ru:"It is… / He is… / There is…", page:"",
theory:`
<h3>How to choose</h3>
${FLOW([["Is it followed by article + noun, a name or moi/toi…?","c’est","C’est un acteur. C’est Paul. C’est moi !"],["Is it a comment on a situation (super, beau, sympa)?","c’est","C’est super !"],["Is it followed by a plural with an article?","ce sont","Ce sont les photos de Mira."]],["An adjective, job or nationality about a specific person","il / elle est","Il est acteur. Elle est française."])}
<h3>In detail</h3>
${TBL(["Structure","+ what","Examples"],[
[F("c’est"),"+ article + noun",F("C’est un acteur. C’est la rue Mantega.")],
[F("c’est"),"+ name",F("C’est Paul.")],
[F("c’est"),"+ stressed pronoun",F("C’est moi !")],
[F("c’est"),"+ adjective (comment on a situation)",F("C’est super ! C’est beau ! C’est sympa !")],
[F("ce sont"),"+ plural",F("Ce sont les instruments de Julie.")],
[F("il / elle est"),"+ adjective, job, nationality — <b>no article</b>",F("Il est acteur. Elle est française. Il est sympa.")]
])}
${WARN(`✗ <i>Il est un acteur.</i> → ✓ ${F("C’est un acteur.")} or ✓ ${F("Il est acteur.")}`)}
${RULE("Il y a — «there is / there are»",`<p>An invariable phrase = <i>there is / there are</i>: ${F("À Nice, il y a la mer.")} ${F("Il y a des célébrités sur la fresque.")}</p><p>Negative: ${F("Il n’y a pas de plage.")} Question: ${F("Qu’est-ce qu’il y a ?")} (What’s there? / What’s up?)</p>`)}
${CMP("","<i>There is / there are</i> — French uses one form il y a for singular and plural.")}
`,
ex:[
{t:"mc", h:"C’est, il/elle est, ce sont or il y a?", items:[
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

TOPICS_EN.push({
id:"r-er-ortho", sec:"ref", kind:"Good to know",
title:"Verbes en -er : particularités", ru:"-er verbs with spelling quirks, and reflexive verbs", page:"",
theory:`
<p>All -er verbs take the same endings, but some change their stem slightly to keep the pronunciation.</p>
${TBL(["Type","What happens","Example"],[
["-ger","nous: + e before -ons (otherwise g would sound [g])",F("manger → nous mangeons, nager → nous nageons")],
["-cer","nous: c → ç (otherwise [k])",F("commencer → nous commençons")],
["-eler","double l where the ending is silent",F("s’appeler → je m’appelle, nous nous appelons")],
["e / é → è","open è where the ending is silent",F("acheter → j’achète, nous achetons; préférer → je préfère, nous préférons")],
["-ier","nothing special, just i + ending",F("étudier → j’étudie, nous étudions; skier → je skie")]
])}
${RULE("The «boot»",`<p>Changes in verbs like acheter, préférer, s’appeler happen in <b>je, tu, il, ils</b> (silent ending) and not in <b>nous, vous</b>. If you circle those four forms in the table, you get the shape of a boot — easy to remember.</p>`)}
${BOOTS(CJ2("préférer","to prefer",["je préf<b>è</b>re","tu préf<b>è</b>res","il préf<b>è</b>re","nous préf<b>é</b>rons","vous préf<b>é</b>rez","ils préf<b>è</b>rent"],[0,1,2,5]),CJ2("acheter","to buy",["j’ach<b>è</b>te","tu ach<b>è</b>tes","il ach<b>è</b>te","nous achetons","vous achetez","ils ach<b>è</b>tent"],[0,1,2,5]),CJ2("s’appeler","to be called",["je m’appe<b>ll</b>e","tu t’appe<b>ll</b>es","il s’appe<b>ll</b>e","nous nous appelons","vous vous appelez","ils s’appe<b>ll</b>ent"],[0,1,2,5]))}
${FXS(FX(["manger","→","!nous mangeons|e keeps the [ʒ] sound"]),FX(["commencer","→","!nous commençons|ç keeps the [s] sound"]))}
<h3>Reflexive verbs (se + verb)</h3>
<p>Reflexive verbs: ${F("s’appeler")} — to be called, ${F("se présenter")} — to introduce oneself, ${F("se lever")} — to get up. The pronoun changes with the person: ${F("je me, tu te, il se, nous nous, vous vous, ils se")}.</p>
${EX([["Je me présente : je m’appelle Anna.","Let me introduce myself: my name is Anna."],["Les personnes se présentent.","The people introduce themselves."]])}
`,
ex:[
{t:"fill", h:"Put it in the right form", items:[
{q:"Nous ___ (nager)", a:["nageons"]},{q:"Nous ___ (commencer)", a:["commençons"]},{q:"J’___ (acheter)", a:["achète"]},{q:"Tu ___ (préférer)", a:["préfères"]},{q:"Vous ___ (préférer)", a:["préférez"]},{q:"Ils ___ (s’appeler)", a:["s’appellent"]},{q:"Nous ___ (manger)", a:["mangeons"]},{q:"J’___ (étudier)", a:["étudie"]}
]},
{t:"conj", h:"Conjugate", items:[{v:"se présenter", p:P6, f:["me présente","te présentes","se présente","nous présentons","vous présentez","se présentent"]},{v:"acheter", p:P6j, f:["achète","achètes","achète","achetons","achetez","achètent"]}]}
]});

TOPICS_EN.push({
id:"r-irreg", sec:"ref", kind:"Good to know",
title:"Aller, faire, venir", ru:"Three more irregular verbs you’ll need right away", page:"Appendix «Conjugaisons», p. 168",
theory:`
<p>They come in Unité 3–4, but already appear in units 1–2: ${F("Ça va ? Vous allez bien ?")}, ${F("faire du ski")}.</p>
${CJS(
CJ("aller","to go",["je <b>vais</b>","tu <b>vas</b>","il / elle / on <b>va</b>","nous <b>allons</b>","vous <b>allez</b>","ils / elles <b>vont</b>"]),
CJ("faire","to do, to make",["je <b>fais</b>","tu <b>fais</b>","il / elle / on <b>fait</b>","nous <b>faisons</b>","vous <b>faites</b>","ils / elles <b>font</b>"]),
CJ("venir","to come",["je <b>viens</b>","tu <b>viens</b>","il / elle / on <b>vient</b>","nous <b>venons</b>","vous <b>venez</b>","ils / elles <b>viennent</b>"])
)}
${RULE("Patterns that make life easier",`<p>• Only three verbs end in <b>-tes</b> with vous: ${F("vous êtes, vous faites, vous dites")}.<br>• A quartet in <b>-ont</b> with ils: ${F("ils sont, ils ont, ils vont, ils font")}.</p>`)}
<h3>How to use them</h3>
${EX([["Je vais à Paris / en France / au cinéma.","aller + the same prepositions as habiter (à + le = au)"],["Je fais du ski. Elle fait de la danse.","faire de + sport"],["Qu’est-ce que tu fais ?","What are you doing?"],["Je viens de Russie / de Moscou.","I’m from Russia / from Moscow"],["Il vient du Japon / des États-Unis.","de + le = du, de + les = des"]])}
${NOTE(`${F("nous faisons")} is pronounced [fəzɔ̃] — «fuh-zohn», not «feh-zohn».`)}
`,
ex:[
{t:"conj", h:"Conjugate", items:[
{v:"aller", p:P6, f:["vais","vas","va","allons","allez","vont"]},
{v:"faire", p:P6, f:["fais","fais","fait","faisons","faites","font"]},
{v:"venir", p:P6, f:["viens","viens","vient","venons","venez","viennent"]}
]},
{t:"mc", h:"Choose the right option", items:[
{q:"Je viens ___ Japon.", o:["du","de","des"], a:0},
{q:"Elle vient ___ Russie.", o:["de","du","des"], a:0},
{q:"Il vient ___ États-Unis.", o:["des","du","de"], a:0},
{q:"Vous ___ du sport ?", o:["faites","faisez","fais"], a:0},
{q:"Ils ___ au cinéma.", o:["vont","allent","vas"], a:0},
{q:"– Ça ___ ? – Oui, ça ___ bien.", o:["va / va","vas / va","allez / va"], a:0}
]}
]});

TOPICS_EN.push({
id:"r-erreurs", sec:"ref", kind:"Good to know",
title:"Erreurs typiques", ru:"Typical mistakes — check yourself", page:"",
theory:`
<div class="errs">
${[
["Je suis 20 ans.","J’ai 20 ans.","Age uses avoir."],
["Je suis un étudiant.","Je suis étudiant.","After être, a job takes no article."],
["J’aime sport.","J’aime le sport.","After aimer — always an article."],
["Je aime. / Je ne aime pas.","J’aime. / Je n’aime pas.","Élision before a vowel."],
["J’habite en Japon.","J’habite au Japon.","Japon is m. → au."],
["J’habite à France.","J’habite en France.","à is only for cities."],
["Sa père, son mère","Son père, sa mère","Gender of the thing, not the owner."],
["Ma amie","Mon amie","Before a vowel — mon."],
["Je n’ai pas un frère.","Je n’ai pas de frère.","After a negative un/une/des → de."],
["Elle est français.","Elle est française.","Make the nationality agree."],
["Je parle Français. Lundi, Janvier","Je parle français. lundi, janvier","Languages, days, months — lower case."],
["quatre-vingt (80), quatre-vingts-un (81)","quatre-vingts, quatre-vingt-un","s only on a round 80."],
["Il est un acteur.","C’est un acteur. / Il est acteur.","il est + article is wrong."],
["Comment tu appelles ?","Comment tu t’appelles ?","Don’t drop the reflexive te."],
["On habitons à Lyon.","On habite à Lyon.","on + the il form."],
["Ils parlent → «parlant»","[il paʁl]","-ent in verbs is silent."],
["Nom = first name","nom = surname, prénom = first name","False friend."],
["Quel est ta adresse ?","Quelle est ton adresse ?","adresse is f. (quelle), but starts with a vowel (ton)."]
].map(([w,r,e])=>`<div class="err"><p class="err-w"><span class="fr">${w}</span></p><p class="err-r"><span class="fr">${r}</span></p><p class="err-e">${e}</p></div>`).join('')}
</div>
`,
ex:[
{t:"mc", h:"Find the correct sentence", items:[
{q:"Age", o:["J’ai dix-neuf ans.","Je suis dix-neuf ans.","J’ai dix-neuf."], a:0},
{q:"Job", o:["Ma mère est professeure.","Ma mère est une professeure.","Mon mère est professeure."], a:0},
{q:"Likes", o:["Tu aimes la musique ?","Tu aimes musique ?","Tu aimes une musique ?"], a:0},
{q:"Country", o:["Elle habite au Canada.","Elle habite en Canada.","Elle habite à Canada."], a:0},
{q:"Family", o:["Je n’ai pas de sœur.","Je n’ai pas une sœur.","Je ne ai pas de sœur."], a:0},
{q:"Possessive", o:["Paul et sa sœur","Paul et son sœur","Paul et ses sœur"], a:0},
{q:"Friend", o:["mon amie Lina","ma amie Lina","m’amie Lina"], a:0},
{q:"on", o:["On parle français.","On parlons français.","On parlent français."], a:0}
]},
{t:"tf", h:"Is the sentence correct?", items:[
{q:"Elle est italienne.", a:true},
{q:"Il est un informaticien.", a:false, e:"Il est informaticien / C’est un informaticien."},
{q:"J’habite à Moscou, en Russie.", a:true},
{q:"Quel est ton adresse ?", a:false, e:"Quelle est ton adresse ?"},
{q:"Nous nous appelons Léa et Tom.", a:true},
{q:"Je parle Anglais.", a:false, e:"anglais — lower case."}
]}
]});

TOPICS_EN.push({
id:"r-consignes", sec:"ref", kind:"Good to know",
title:"Les consignes", ru:"Instructions in French: understand what you’re asked to do", page:"",
theory:`
<p>The test instructions will most likely be in French, as in the textbook. Here is everything you may see.</p>
${TBL(["Consigne","What to do"],[
[F("Complétez (avec…)"),"Complete (with…)"],
[F("Choisissez la bonne réponse."),"Choose the right answer."],
[F("Associez. / Reliez."),"Match."],
[F("Conjuguez les verbes."),"Conjugate the verbs / put them in the right form."],
[F("Accordez l’adjectif (si nécessaire)."),"Make the adjective agree (if necessary)."],
[F("Mettez au féminin / au pluriel."),"Put into the feminine / plural."],
[F("Mettez à la forme négative."),"Make it negative."],
[F("Transformez."),"Transform."],
[F("Répondez aux questions."),"Answer the questions."],
[F("Vrai ou faux ?"),"True or false?"],
[F("Cochez la bonne réponse."),"Tick the right answer."],
[F("Soulignez."),"Underline."],
[F("Entourez."),"Circle."],
[F("Classez (dans le tableau)."),"Sort (into the table)."],
[F("Trouvez / Retrouvez."),"Find."],
[F("Écrivez (en lettres)."),"Write (in words)."],
[F("Remettez dans l’ordre."),"Put in order."],
[F("Corrigez les erreurs."),"Correct the mistakes."],
[F("Barrez l’intrus."),"Cross out the odd one out."],
[F("Observez. / Lisez. / Écoutez."),"Look. / Read. / Listen."],
[F("Comme dans l’exemple."),"As in the example."],
[F("Plusieurs réponses possibles."),"Several answers are possible."]
])}
<h3>If something is unclear — ask</h3>
${TBL(["Français","In English"],[[F("Excusez-moi, j’ai une question."),"Excuse me, I have a question."],[F("Qu’est-ce que ça veut dire ?"),"What does it mean?"],[F("Comment ça s’écrit ?"),"How do you spell it?"],[F("Vous pouvez répéter, s’il vous plaît ?"),"Can you repeat, please?"],[F("Plus lentement, s’il vous plaît."),"More slowly, please."],[F("Je ne comprends pas."),"I don’t understand."],[F("Je ne sais pas."),"I don’t know."]])}
`,
ex:[
{t:"match", h:"Match the instruction and its translation", pairs:[["Complétez.","Complete."],["Choisissez la bonne réponse.","Choose the right answer."],["Associez.","Match."],["Conjuguez les verbes.","Put the verbs in the right form."],["Mettez au féminin.","Make it feminine."],["Soulignez.","Underline."],["Cochez.","Tick."],["Barrez l’intrus.","Cross out the odd one out."]]},
{t:"mc", h:"What are you asked to do?", items:[
{q:"Mettez à la forme négative : « J’aime le ski. »", o:["Je n’aime pas le ski.","J’aime le ski ?","Nous aimons le ski."], a:0},
{q:"Accordez l’adjectif : « Elle est allemand… »", o:["allemande","allemand","allemands"], a:0},
{q:"Écrivez en lettres : 80", o:["quatre-vingts","80","huitante"], a:0},
{q:"Mettez au pluriel : « le film »", o:["les films","le films","les film"], a:0}
]}
]});
