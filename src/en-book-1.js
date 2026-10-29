/* =========================================================
   ENGLISH VERSION — textbook topics (part 1)
   ========================================================= */
HL = "en";
const TOPICS_EN = [];

TOPICS_EN.push({
id:"u0-contact", sec:"book", unit:"0", kind:"Communication",
title:"Bonjour, ça va ?", ru:"Greetings, tu and vous, the alphabet, pronouns, classroom phrases", page:"Unité 0, p. 12–13, 16",
theory:`
<h3>Saying hello and goodbye</h3>
${TBL(["Français","In English","When"],[
[F("Bonjour (madame / monsieur) !"),"Hello / Good morning","neutral, always appropriate"],
[F("Salut !"),"Hi! / Bye!","informal (fam.), both to greet and to leave"],
[F("Bonsoir !"),"Good evening","in the evening"],
[F("Au revoir !"),"Goodbye","neutral"],
[F("À bientôt ! / À plus !"),"See you soon!","À plus is colloquial"],
[F("À demain ! / À lundi !"),"See you tomorrow! / See you on Monday!","à + day"],
[F("Bonne journée !"),"Have a nice day!",""],
[F("Merci !"),"Thank you!",""]
])}
${VS({h:"Formel · neutral",big:F("Bonjour, madame.")+"<br>"+F("Vous allez bien ?")+"<br>"+F("Au revoir !"),sub:"with strangers, at work, with a teacher"},{h:"Familier · friendly",big:F("Salut !")+"<br>"+F("Ça va ?")+"<br>"+F("À plus !"),sub:"with friends, family, people your age"})}
<h3>How are you?</h3>
${EX([["– Ça va ? – Oui, ça va, et toi ? – Ça va bien, merci !","– How are you? – Fine, and you? – Fine, thanks!"],["– Vous allez bien ? – Très bien, merci. Et vous ?","– How are you (formal)? – Very well, thank you. And you?"],["– Tu vas bien ? – Oui, merci.","– Are you OK? – Yes, thanks."]])}
<h3>Tu or vous?</h3>
${FLOW([["Talking to several people at once?","vous","Vous allez bien, les amis ?"],["A stranger, a teacher, someone of higher status?","vous","Bonjour, madame. Vous allez bien ?"]],["Family, a friend, a child","tu","Salut ! Tu vas bien ?"])}
${NOTE("Je dis <b>vous</b> quand je ne connais pas la personne ou pour être poli(e). Je dis <b>tu</b> à ma famille, à un(e) ami(e) ou à un enfant. In France friends and family do <b>la bise</b> (a kiss on the cheek); you shake hands with strangers.")}
<h3>Introducing yourself</h3>
${EX([["– Bonjour, je m’appelle Alex, et vous ?","– Hello, my name is Alex, and yours?"],["– Moi, je m’appelle Élisa.","– My name is Élisa."]])}
<h3>Personal pronouns</h3>
<p>In French a verb is <b>never</b> used without a subject: you can’t just say «parle», only ${F("je parle")}. For emphasis («me, I…», «and you?») there are stressed forms:</p>
${TBL(["Subject","Stressed form","Example"],[
[F("je (j’)"),F("moi"),F("Moi, je suis russe.")],
[F("tu"),F("toi"),F("Et toi ?")],
[F("il / elle"),F("lui / elle"),F("Lui, il est italien.")],
[F("nous"),F("nous"),F("Nous, nous habitons à Nice.")],
[F("vous"),F("vous"),F("Et vous ?")],
[F("ils / elles"),F("eux / elles"),F("Eux, ils parlent anglais.")]
])}
<h3>The alphabet</h3>
<p>Click the letters to hear them. The main trap is <b>G</b> [ʒe] and <b>J</b> [ʒi]: they are easy to mix up when you spell a name or an e-mail.</p>
<div class="abc">${[["A","ah"],["B","bay"],["C","say"],["D","day"],["E","uh (ə)"],["F","eff"],["G","zhay"],["H","ahsh"],["I","ee"],["J","zhee"],["K","kah"],["L","ell"],["M","emm"],["N","enn"],["O","oh"],["P","pay"],["Q","kü"],["R","air"],["S","ess"],["T","tay"],["U","ü"],["V","vay"],["W","doobl-vay"],["X","eeks"],["Y","ee-grek"],["Z","zed"]].map(([l,r])=>`<span class="abc-l fr" data-say="${l.toLowerCase()}"><b>${l}</b><i>${r}</i></span>`).join('')}</div>
<h3>Classroom phrases (p. 16)</h3>
${TBL(["Français","In English"],[
[F("S’il vous plaît ? / S’il te plaît ?"),"Please (asking for something)"],
[F("Pardon. / Excusez-moi. / Excuse-moi."),"Sorry / Excuse me"],
[F("Comment ça s’écrit ?"),"How do you spell it?"],
[F("Vous pouvez répéter, s’il vous plaît ?"),"Can you repeat, please?"],
[F("Excusez-moi, je suis en retard."),"Sorry, I’m late."],
[F("Je ne comprends pas."),"I don’t understand."],
[F("Comment on dit… en français ?"),"How do you say… in French?"]
])}
`,
ex:[
{t:"match", h:"Match the French phrase with its translation", pairs:[["Salut !","Hi! (informal)"],["Au revoir !","Goodbye!"],["À demain !","See you tomorrow!"],["À bientôt !","See you soon!"],["Bonne journée !","Have a nice day!"],["Ça va ?","How are you?"],["Je ne comprends pas.","I don’t understand."],["Comment ça s’écrit ?","How do you spell it?"]]},
{t:"mc", h:"Tu or vous? How do you address…", items:[
{q:"…your friend Pierre", o:["tu","vous"], a:0, e:"A friend — tu."},
{q:"…your teacher, Madame Atal", o:["tu","vous"], a:1, e:"A teacher — polite vous."},
{q:"…a five-year-old child", o:["tu","vous"], a:0, e:"Children get tu."},
{q:"…a stranger in the street", o:["tu","vous"], a:1, e:"A stranger — vous."},
{q:"…a group of three friends", o:["tu","vous"], a:1, e:"Trap! They are friends, but there are several of them — vous is also the plural «you»."},
{q:"…your grandmother", o:["tu","vous"], a:0, e:"Family — tu."}
]},
{t:"mc", h:"Choose the right word", items:[
{q:"– Salut Carla ! Ça va ? – Oui, ça va, et ___ ?", o:["toi","vous","moi"], a:0, e:"Answering a friend (Salut = informal) → et toi ?"},
{q:"– Bonjour, monsieur Morel, vous allez bien ? – Très bien, merci. Et ___ ?", o:["toi","vous","tu"], a:1, e:"A conversation on vous → Et vous ?"},
{q:"___, je m’appelle Hugo.", o:["Moi","Je","Me"], a:0, e:"For emphasis, put stressed moi before je."},
{q:"– Bonjour, je m’appelle Lina, et ___ ?", o:["tu","toi","te"], a:1, e:"After et — the stressed form: et toi ?"},
{q:"Comment on ___ « cat » en français ?", o:["dit","parle","écrit"], a:0, e:"Comment on dit… ? — How do you say…?"},
{q:"Vous pouvez ___, s’il vous plaît ?", o:["répéter","comprendre","appeler"], a:0, e:"Vous pouvez répéter ? — Can you repeat?"}
]},
{t:"mc", h:"The alphabet: what is the letter called?", items:[
{q:"The letter J", o:["[zhee]","[zhay]","[jay]"], a:0, e:"J = [ʒi] «zhee»."},
{q:"The letter G", o:["[zhay]","[jee]","[gay]"], a:0, e:"G = [ʒe] «zhay»."},
{q:"The letter E", o:["[uh] (ə)","[ee]","[eh]"], a:0, e:"E = [ə]. «ee» is the letter I."},
{q:"The letter H", o:["[ahsh]","[aitch]","[hah]"], a:0, e:"H = [aʃ] «ahsh»."},
{q:"The letter U", o:["[ü]","[oo]","[you]"], a:0, e:"U = [y] — round your lips for «oo» and say «ee»."},
{q:"The letter Y", o:["[ee-grek]","[why]","[ee]"], a:0, e:"Y = i grec, the «Greek i»."}
]},
{t:"fill", h:"Write the stressed pronoun (moi, toi, lui, elle, nous, vous, eux, elles)", items:[
{q:"Je m’appelle Léo. Et ___ ? (you, informal)", a:["toi"]},
{q:"___, il est italien. (him)", a:["Lui"]},
{q:"___, nous sommes russes. (us)", a:["Nous"]},
{q:"– Ça va ? – Ça va bien, et ___ ? (you, formal)", a:["vous"]},
{q:"___, ils habitent à Lyon. (them, m.)", a:["Eux"]},
{q:"___, je parle anglais. (me)", a:["Moi"]}
]}
]});

TOPICS_EN.push({
id:"u0-dates", sec:"book", unit:"0", kind:"Vocabulaire",
title:"Aujourd’hui, c’est le…", ru:"Days of the week, months, saying the date", page:"Unité 0, p. 15",
theory:`
<h3>Les jours de la semaine — days of the week</h3>
<div class="week">${[["lundi","Mon"],["mardi","Tue"],["mercredi","Wed"],["jeudi","Thu"],["vendredi","Fri"],["samedi","Sat"],["dimanche","Sun"]].map(([d,r],k)=>`<div class="wd${k>4?" we":""}"><span class="fr">${d}</span><small>${r}</small></div>`).join("")}</div>
<p class="hint-l">Memory tip: lundi — Lune (Moon), mardi — Mars, mercredi — Mercury, jeudi — Jupiter, vendredi — Venus.</p>
<h3>Les mois de l’année — months</h3>
<div class="seasons">${[["l’hiver","winter",[["décembre","December"],["janvier","January"],["février","February"]]],["le printemps","spring",[["mars","March (s is pronounced)"],["avril","April"],["mai","May"]]],["l’été","summer",[["juin","June"],["juillet","July"],["août","August [ut]"]]],["l’automne","autumn",[["septembre","September"],["octobre","October"],["novembre","November"]]]].map(([s,r,ms],k)=>`<div class="ss s${k}"><h5><span class="fr">${s}</span><small>${r}</small></h5>${ms.map(([m,mr])=>`<p><span class="fr">${m}</span><small>${mr}</small></p>`).join("")}</div>`).join("")}</div>
<h3>Saying the date</h3>
${FXS(FX(["le","+","~21|day","+","octobre|month","+","~2026|year"],"le vingt et un octobre deux mille vingt-six"),FX(["le","+","!premier|1<sup>st</sup>","+","mai"],"only the 1st is an ordinal"))}
${RULE("Formula",`<p><b>le + number + month (+ year)</b>: ${F("le 2 décembre")}, ${F("le 14 juillet 1789")}. Ordinary (cardinal) numbers.</p><p>The exception is the first: <b>le 1<sup>er</sup> = le premier</b>: ${F("le premier mai")}.</p>`)}
${EX([["Aujourd’hui, c’est mardi. Demain, c’est mercredi.","Today is Tuesday. Tomorrow is Wednesday."],["Quelle est la date aujourd’hui ? – C’est le 21 octobre.","What’s the date today? – It’s the 21st of October."],["Je suis né le 26 janvier 1999.","I was born on the 26th of January 1999."]])}
<h3>French holidays from the textbook</h3>
${TBL(["Holiday","Date"],[[F("la fête du Travail"),F("le premier mai")],[F("la fête de la Musique"),F("le vingt et un juin")],[F("la Fête nationale"),F("le quatorze juillet")],[F("le Mardi gras"),"February–March, the date changes"]])}
<h3>Pronunciation: deux, trois, six, dix + month</h3>
<p>Before a vowel the final consonant sounds like [z]: ${F("le deux avril")} [døzavʁil], ${F("le trois octobre")}, ${F("le six août")}, ${F("le dix avril")}. Before a consonant it is silent: ${F("le deux janvier")}, ${F("le six février")} [si], ${F("le dix mai")} [di].</p>
`,
ex:[
{t:"cards", h:"Flashcards: days and months", items:[["lundi","Monday"],["mardi","Tuesday"],["mercredi","Wednesday"],["jeudi","Thursday"],["vendredi","Friday"],["samedi","Saturday"],["dimanche","Sunday"],["janvier","January"],["février","February"],["mars","March"],["avril","April"],["mai","May"],["juin","June"],["juillet","July"],["août","August"],["septembre","September"],["octobre","October"],["novembre","November"],["décembre","December"]]},
{t:"mc", h:"Choose the right answer", items:[
{q:"Aujourd’hui, c’est lundi. Demain, c’est…", o:["mardi","mercredi","dimanche"], a:0},
{q:"Aujourd’hui, c’est samedi. Demain, c’est…", o:["dimanche","vendredi","lundi"], a:0},
{q:"Le mois après juin, c’est…", o:["juillet","août","mai"], a:0, e:"juin → juillet (don’t mix them up: juin — June, juillet — July)."},
{q:"Le 1<sup>er</sup> mai se dit…", o:["le premier mai","le un mai","le première mai"], a:0, e:"1er = premier (mai is masculine)."},
{q:"La Fête nationale française, c’est…", o:["le 14 juillet","le 1er mai","le 21 juin"], a:0},
{q:"Which spelling is correct?", o:["le 3 octobre","le 3 Octobre","le trois d’octobre"], a:0, e:"Month in lower case, no de."}
]},
{t:"fill", h:"Write the date in words (e.g. 2/03 → le deux mars)", items:[
{q:"14/07 →", a:["le quatorze juillet"], long:true},
{q:"1/05 →", a:["le premier mai"], long:true},
{q:"21/06 →", a:["le vingt et un juin","le vingt-et-un juin"], long:true},
{q:"25/12 →", a:["le vingt-cinq décembre"], long:true},
{q:"8/08 →", a:["le huit août"], long:true},
{q:"16/02 →", a:["le seize février"], long:true}
]},
{t:"tf", h:"Pronunciation: true or false?", items:[
{q:"In «le deux avril» we hear [z] between deux and avril.", a:true, e:"Before a vowel x sounds like [z]."},
{q:"In «le six février» the x sounds like [z].", a:false, e:"Before a consonant x is silent: [si fevʁije]."},
{q:"In «le dix mai» the x is silent.", a:true},
{q:"In «le trois octobre» the s sounds like [z].", a:true}
]}
]});

/* ===== UNITÉ 1 ===== */
TOPICS_EN.push({
id:"u1-verbes", sec:"book", unit:"1", kind:"Grammaire",
title:"Être, avoir, s’appeler, parler", ru:"The four key verbs for introducing yourself", page:"p. 18–19, 26",
theory:`
<p>These are the first verbs in the textbook and you can’t get through a single conversation without them. Learn the forms by heart: once you can write out the tables, you’re halfway there.</p>
${CJS(
CJ("être","to be / быть",["je <b>suis</b>","tu <b>es</b>","il / elle / on <b>est</b>","nous <b>sommes</b>","vous <b>êtes</b>","ils / elles <b>sont</b>"]),
CJ("avoir","to have / иметь",["j’<b>ai</b>","tu <b>as</b>","il / elle / on <b>a</b>","nous <b>avons</b>","vous <b>avez</b>","ils / elles <b>ont</b>"]),
CJ("s’appeler","to be called",["je <b>m’appelle</b>","tu <b>t’appelles</b>","il / elle / on <b>s’appelle</b>","nous <b>nous appelons</b>","vous <b>vous appelez</b>","ils / elles <b>s’appellent</b>"]),
CJ("parler","to speak",["je parl<b>e</b>","tu parl<b>es</b>","il / elle / on parl<b>e</b>","nous parl<b>ons</b>","vous parl<b>ez</b>","ils / elles parl<b>ent</b>"])
)}
<h3>Être — nationality, profession, description</h3>
${EX([["Je suis russe.","I’m Russian."],["Tu es hollandaise ?","Are you Dutch? (f.)"],["Il est étudiant.","He is a student."],["Vous êtes italien, Enzo ?","Are you Italian, Enzo?"]])}
<h3>Avoir — age!</h3>
${VS({h:"✗ mistake",big:"<s>Je suis 20 ans</s>",sub:"age doesn’t take être",tone:"bad"},{h:"✓ in French",big:F("J’ai 20 ans."),sub:"«I have 20 years» — avoir + number + ans",tone:"good"})}
${RULE("Age = avoir + number + ans",`<p>${F("J’ai 30 ans.")} — literally «I have 30 years». ${F("Tu as quel âge ? / Vous avez quel âge ?")} — How old are you?</p>`)}
<h3>S’appeler — a reflexive verb</h3>
${FXS(FX(["je","+","!m’|myself","+","appelle|call"],"= my name is, «I call myself»"),FX(["~-ся","↔","!me · te · se · nous · vous · se"],"the reflexive pronoun changes with the person"))}
<p>Literally «to call oneself»: ${F("je m’appelle")} = «I call myself». The little words <b>me, te, se, nous, vous, se</b> change with the person.</p>
${WARN(`Double <b>ll</b> in je, tu, il, ils (you hear [ɛl]): ${F("je m’appelle, ils s’appellent")}. Single <b>l</b> in nous and vous (you hear [ə]): ${F("nous nous appelons, vous vous appelez")}.`)}
${EX([["Comment tu t’appelles ? – Je m’appelle Andrea.","What’s your name? – My name is Andrea."],["Comment vous vous appelez ?","What’s your name? (formal)"],["Elle s’appelle Sanae.","Her name is Sanae."]])}
<h3>Parler + language</h3>
<p>After parler the language usually has <b>no article</b>: ${F("Je parle français.")} ${F("Il parle quatre langues.")} Language names are written in lower case.</p>
<h3>Don’t confuse them by ear</h3>
${VS({h:"être · they are",big:F("ils sont"),sub:"[il<b>s</b>ɔ̃] — voiceless [s]"},{h:"avoir · they have",big:F("ils‿ont"),sub:"[il<b>z</b>ɔ̃] — voiced [z]"})}
${NOTE("je → j’ before a vowel: <b>j’ai</b>, but <b>je suis</b>. This is called élision — more in the Reference section.")}
`,
ex:[
{t:"conj", h:"Conjugate the verbs", items:[
{v:"être", p:P6, f:["suis","es","est","sommes","êtes","sont"]},
{v:"avoir", p:P6j, f:["ai","as","a","avons","avez","ont"]},
{v:"s’appeler", p:P6, f:["m’appelle","t’appelles","s’appelle","nous appelons","vous appelez","s’appellent"]},
{v:"parler", p:P6, f:["parle","parles","parle","parlons","parlez","parlent"]}
]},
{t:"mc", h:"Être or avoir? Choose the form", items:[
{q:"Lars ___ 52 ans.", o:["a","est"], a:0, e:"Age — avoir."},
{q:"Nous ___ italiens.", o:["sommes","avons"], a:0, e:"Nationality — être."},
{q:"Vous ___ quel âge ?", o:["avez","êtes"], a:0, e:"Vous avez quel âge ?"},
{q:"Tu ___ hollandaise ?", o:["es","as"], a:0},
{q:"Ils ___ 30 ans.", o:["ont","sont"], a:0, e:"ils ont [ilzɔ̃] — age uses avoir."},
{q:"Je ___ étudiant.", o:["suis","ai"], a:0},
{q:"Elles ___ un frère.", o:["ont","sont"], a:0},
{q:"Vous ___ allemand, monsieur ?", o:["êtes","avez"], a:0}
]},
{t:"fill", h:"Put the verb in the right form", items:[
{q:"Elle ___ Giulia. (s’appeler)", a:["s’appelle"]},
{q:"Comment vous ___ ? (s’appeler)", a:["vous appelez"]},
{q:"Je ___ Vlad. (s’appeler)", a:["m’appelle"]},
{q:"Ils ___ Enzo et Lars. (s’appeler)", a:["s’appellent"]},
{q:"Vous ___ anglais ? (parler)", a:["parlez"]},
{q:"Nous ___ français. (parler)", a:["parlons"]},
{q:"Tu ___ quel âge ? (avoir)", a:["as"]},
{q:"Alice et Giulia ___ allemande et italienne. (être)", a:["sont"]}
]},
{t:"order", h:"Put the sentence together", items:[
{s:"Je m’appelle Lars et j’ai 52 ans.", ru:"My name is Lars and I’m 52."},
{s:"Vous avez quel âge ?", ru:"How old are you? (formal)"},
{s:"Elle est italienne et elle parle anglais.", ru:"She is Italian and speaks English."},
{s:"Comment tu t’appelles ?", ru:"What’s your name?"}
]},
{t:"fill", h:"Translate into French", items:[
{q:"I’m 19.", a:["J’ai 19 ans","J’ai dix-neuf ans"], long:true},
{q:"I’m a student (m.).", a:["Je suis étudiant"], long:true, e:"No article!"},
{q:"What’s your name? (formal)", a:["Comment vous vous appelez ?","Vous vous appelez comment ?","Comment vous appelez-vous ?"], long:true},
{q:"They (m.) speak French.", a:["Ils parlent français"], long:true},
{q:"Are you Russian? (informal)", a:["Tu es russe ?"], long:true}
]}
]});

TOPICS_EN.push({
id:"u1-presenter", sec:"book", unit:"1", kind:"Communication",
title:"Se présenter", ru:"Talking about yourself, personal details, contacts, documents", page:"p. 18–20, 25–27, 30",
theory:`
<h3>Questions and answers about yourself</h3>
${TBL(["Informal (tu)","Formal (vous)","Answer"],[
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
${NOTE(`<b>né</b> (m.) / <b>née</b> (f.): ${F("Il est né le 27 septembre 1955 à Washington.")} ${F("Elle est née à Sion, en Suisse.")} For now just learn it as a set phrase.`)}
<h3>L’identité — personal details</h3>
<div class="idcard"><div class="id-t"><span>Fiche d’identité</span><span>sample form</span></div>${[["Nom","surname!","BALDI"],["Prénom","first name","Juliette"],["Date de naissance","date of birth","26/01/1999"],["Lieu de naissance","place of birth","Paris"],["Nationalité","nationality","française"],["Ville","city","Angoulême"],["Adresse mail","e-mail","juliette.baldi@gmail.com",1],["Numéro de téléphone","phone","06 80 72 86 45",1]].map(([l,r,v,w])=>`<div class="id-f${w?" wide":""}"><span class="lab"><span class="fr">${l}</span> · ${r}</span><b>${v}</b></div>`).join("")}</div>
${TBL(["Français","In English"],[
[F("le nom"),"<b>surname</b> (!)"],[F("le prénom"),"first name"],[F("la date de naissance"),"date of birth"],[F("le lieu de naissance"),"place of birth"],[F("le pays / la ville"),"country / city"],[F("les coordonnées (f.)"),"contact details"],[F("l’adresse mail (f.), le mail"),"e-mail address"],[F("le compte Facebook / Instagram"),"account"],[F("le numéro de téléphone"),"phone number"]
])}
${WARN(`${F("le nom")} means <b>surname</b>, not first name! First name is ${F("le prénom")}. On a form: Nom : Gainsbourg, Prénom : Charlotte.`)}
<h3>Dictating an e-mail and a phone number</h3>
${FXS(FX(["juliette","!.|point","baldi","!@|arobase","gmail","!.|point","com"],"juliette point baldi arobase gmail point com"),FX(["!-|tiret","!_|tiret du bas"],"hyphen and underscore"))}
${EX([["juliette point baldi arobase gmail point com","juliette.baldi@gmail.com"]])}
<p>French phone numbers have 10 digits and are read <b>in pairs</b>: 06 80 72 86 45 → ${F("zéro six, quatre-vingts, soixante-douze, quatre-vingt-six, quarante-cinq")}.</p>
<h3>Documents (Vie pratique, p. 30)</h3>
${TBL(["Français","In English"],[[F("un passeport"),"passport"],[F("une carte d’identité"),"ID card"],[F("un titre de transport"),"travel pass / ticket"],[F("une carte d’étudiant(e)"),"student card"],[F("un permis de conduire"),"driving licence"],[F("une carte de bibliothèque"),"library card"]])}
<h3>Sample self-introduction</h3>
<div class="sample"><p>${F("Bonjour ! Je m’appelle Anna. Je suis russe. J’ai 19 ans. Je suis née à Kazan, en Russie, et j’habite à Moscou. Je suis étudiante. Je parle russe, anglais et un peu français. J’aime la musique et le sport !")}</p><p class="tr">Hello! My name is Anna. I’m Russian. I’m 19. I was born in Kazan, in Russia, and I live in Moscow. I’m a student. I speak Russian, English and a little French. I love music and sport!</p></div>
`,
ex:[
{t:"match", h:"Match the question and the answer", pairs:[["Comment tu t’appelles ?","Je m’appelle Sanae."],["Tu as quel âge ?","J’ai 23 ans."],["Tu es français ?","Non, je suis suisse."],["Tu habites où ?","À Genève, en Suisse."],["Quel est ton numéro ?","C’est le 06 90 32 71 66."],["Tu as Instagram ?","Oui !"],["Tu parles quelles langues ?","Français et japonais."]]},
{t:"sort", h:"Sort the questions: informal (tu) or formal (vous)?", cats:["tu","vous"], items:[["Comment tu t’appelles ?",0],["Vous avez quel âge ?",1],["Tu as Instagram ?",0],["Quel est votre numéro ?",1],["Tu es né où ?",0],["Vous êtes français ?",1],["Quel est ton mail ?",0],["Comment vous vous appelez ?",1]]},
{t:"mc", h:"Choose the right answer", items:[
{q:"On a form: «Nom : Baldi». Baldi is…", o:["the surname","the first name","the nationality"], a:0, e:"nom = surname, prénom = first name."},
{q:"How do you read @ ?", o:["arobase","point","tiret"], a:0},
{q:"How do you read «.» in an e-mail address?", o:["point","arobase","tiret du bas"], a:0},
{q:"Il ___ né à Washington.", o:["est","a","et"], a:0, e:"Il est né / elle est née."},
{q:"Elle est ___ à Sion.", o:["née","né","nés"], a:0, e:"Feminine → née."},
{q:"– Tu as quel âge ? – ___", o:["J’ai 25 ans.","Je suis 25 ans.","J’ai 25."], a:0, e:"Age always takes ans."}
]},
{t:"fill", h:"Documents: write the word", items:[
{q:"Pour voyager à l’étranger, j’ai un ___ (passport).", a:["passeport"]},
{q:"Pour conduire une voiture, j’ai un ___ de conduire.", a:["permis"]},
{q:"À l’université, j’ai une carte d’___.", a:["étudiant","étudiante","étudiant(e)"]},
{q:"Dans le métro, j’ai un titre de ___.", a:["transport"]},
{q:"À la bibliothèque, j’ai une carte de ___.", a:["bibliothèque"]},
{q:"En France, la carte d’___ = ID.", a:["identité"]}
]},
{t:"order", h:"Put the sentence together", items:[
{s:"Quel est ton numéro de téléphone ?", ru:"What’s your phone number?"},
{s:"Je suis née le 26 janvier 1999.", ru:"I was born on 26 January 1999. (f.)"},
{s:"J’habite à Moscou, en Russie.", ru:"I live in Moscow, in Russia."}
]}
]});

TOPICS_EN.push({
id:"u1-nationalites", sec:"book", unit:"1", kind:"Grammaire + vocabulaire",
title:"Les adjectifs de nationalité", ru:"Countries and nationalities: masculine and feminine", page:"p. 19, 22, 27",
theory:`
<h3>Three patterns for the feminine</h3>
${MORPH([["1 · usually + e",[["français","française"],["allemand","allemande"],["américain","américaine"],["espagnol","espagnole"],["chinois","chinoise"]]],["2 · -ien → -ienne, -éen → -éenne",[["italien","italienne"],["canadien","canadienne"],["brésilien","brésilienne"],["coréen","coréenne"]]],["3 · ends in -e — no change",[["russe","russe"],["belge","belge"],["suisse","suisse"],["tchèque","tchèque"]]],["special",[["grec","grecque"],["turc","turque"]]]])}
<h3>How it sounds</h3>
<p>When you add -e, the «hidden» final consonant <b>starts being pronounced</b>:</p>
${TBL(["Masculin","Féminin","What happens"],[
[F("français")+" [fʁɑ̃sɛ]",F("française")+" [fʁɑ̃sɛz]","you hear [z]"],
[F("allemand")+" [almɑ̃]",F("allemande")+" [almɑ̃d]","you hear [d]"],
[F("italien")+" [italjɛ̃]",F("italienne")+" [italjɛn]","the nasal sound disappears, you hear [n]"],
[F("espagnol"),F("espagnole"),"sound the same (l is pronounced anyway)"],
[F("belge"),F("belge"),"the same"]
])}
<h3>Plural</h3>
<p>+ s: ${F("ils sont italiens")}, ${F("elles sont allemandes")}. If it already ends in -s, add nothing: ${F("ils sont français")}.</p>
<h3>Capital letter or not?</h3>
${TBL(["","Example","Letter"],[["adjective (what kind?)",F("Il est français."),"lower case"],["language",F("Je parle français."),"lower case"],["inhabitant (who?)",F("C’est un Français."),"capital"]])}
<h3>Countries and nationalities (p. 27)</h3>
${TBL(["Pays","Nationalité (m / f)"],[
[F("l’Algérie (f.)"),F("algérien / algérienne")],[F("l’Allemagne (f.)"),F("allemand / allemande")],[F("l’Argentine (f.)"),F("argentin / argentine")],[F("la Belgique"),F("belge")],[F("le Brésil"),F("brésilien / brésilienne")],[F("le Cameroun"),F("camerounais / camerounaise")],[F("le Canada"),F("canadien / canadienne")],[F("la Chine"),F("chinois / chinoise")],[F("la Colombie"),F("colombien / colombienne")],[F("le Congo"),F("congolais / congolaise")],[F("la Corée"),F("coréen / coréenne")],[F("l’Espagne (f.)"),F("espagnol / espagnole")],[F("les États-Unis"),F("américain / américaine")],[F("la France"),F("français / française")],[F("l’Inde (f.)"),F("indien / indienne")],[F("l’Italie (f.)"),F("italien / italienne")],[F("le Japon"),F("japonais / japonaise")],[F("le Maroc"),F("marocain / marocaine")],[F("le Mexique"),F("mexicain / mexicaine")],[F("la Pologne"),F("polonais / polonaise")],[F("les Pays-Bas"),F("hollandais / hollandaise")],[F("la Russie"),F("russe")],[F("le Sénégal"),F("sénégalais / sénégalaise")],[F("la Suisse"),F("suisse")],[F("la République tchèque"),F("tchèque")],[F("la Tunisie"),F("tunisien / tunisienne")],[F("le Vietnam"),F("vietnamien / vietnamienne")]
])}
${NOTE(`About yourself: ${F("Je suis russe.")} — the same for a man and a woman.`)}
`,
ex:[
{t:"fill", h:"Make it feminine", items:[
{q:"français →", a:["française"]},{q:"italien →", a:["italienne"]},{q:"coréen →", a:["coréenne"]},{q:"belge →", a:["belge"]},{q:"chinois →", a:["chinoise"]},{q:"américain →", a:["américaine"]},{q:"allemand →", a:["allemande"]},{q:"espagnol →", a:["espagnole"]},{q:"canadien →", a:["canadienne"]},{q:"grec →", a:["grecque"]},{q:"turc →", a:["turque"]},{q:"russe →", a:["russe"]},{q:"japonais →", a:["japonaise"]},{q:"suisse →", a:["suisse"]}
]},
{t:"sort", h:"Il est… / Elle est… / fits both (p. 22)", cats:["Il est…","Elle est…","Il ou elle"], items:[["grecque",1],["suisse",2],["tunisien",0],["vietnamienne",1],["chinois",0],["belge",2],["coréenne",1],["marocain",0],["russe",2],["allemande",1],["japonais",0],["tchèque",2]]},
{t:"mc", h:"Make the adjective agree if needed (p. 19)", items:[
{q:"Elle est japonais…", o:["japonais","japonaise"], a:1},
{q:"Monsieur Diouf est sénégalais…", o:["sénégalais","sénégalaise"], a:0},
{q:"Il est colombien…, Alberto ?", o:["colombien","colombienne"], a:0},
{q:"Vous êtes marocain…, madame ?", o:["marocain","marocaine"], a:1, e:"madame → feminine."},
{q:"Madame Lambert est belge…", o:["belge","belgee"], a:0, e:"belge doesn’t change."},
{q:"Giulia et Lucia sont…", o:["italiennes","italiens","italienne"], a:0, e:"Two women → feminine plural."}
]},
{t:"match", h:"Country → nationality (m.)", pairs:[["la Russie","russe"],["le Japon","japonais"],["les États-Unis","américain"],["les Pays-Bas","hollandais"],["l’Allemagne","allemand"],["la Chine","chinois"],["le Brésil","brésilien"],["la Corée","coréen"]]},
{t:"tf", h:"Pronunciation: true or false?", items:[
{q:"«espagnol» and «espagnole» sound the same.", a:true},
{q:"«français» and «française» sound the same.", a:false, e:"In française you hear [z]."},
{q:"«belge» (m.) and «belge» (f.) sound the same.", a:true},
{q:"«italien» and «italienne» sound the same.", a:false, e:"italien — nasal [ɛ̃], italienne — [ɛn]."},
{q:"«allemand» and «allemande» sound the same.", a:false, e:"In allemande you hear [d]."}
]},
{t:"cards", h:"Flashcards: countries", items:[["la Russie","Russia"],["l’Allemagne","Germany"],["l’Espagne","Spain"],["les États-Unis","the USA"],["les Pays-Bas","the Netherlands"],["le Japon","Japan"],["la Chine","China"],["la Corée","Korea"],["la Suisse","Switzerland"],["la Belgique","Belgium"],["le Maroc","Morocco"],["le Mexique","Mexico"],["la Pologne","Poland"],["l’Inde","India"],["le Brésil","Brazil"],["l’Italie","Italy"]]}
]});

TOPICS_EN.push({
id:"u1-articles-def", sec:"book", unit:"1", kind:"Grammaire",
title:"Les articles définis : le, la, l’, les", ru:"Definite articles", page:"p. 20, 22",
theory:`
<p>An article is a small word in front of a noun. It shows <b>gender</b> and <b>number</b>. In French a noun almost never stands «bare».</p>
${GRID(["","Singulier","Pluriel"],[["Masculin","m:le / l’","p:les"],["Féminin","f:la / l’","p:les"]])}
${EX([["le cinéma, le sport","cinema, sport (m.)"],["la musique","music (f.)"],["les langues","languages (pl.)"],["l’art (m.), l’histoire (f.)","before a vowel and h — l’"]])}
${RULE("Élision: le / la → l’",`<p>Before a word starting with a <b>vowel</b> or a <b>silent h</b>: ${F("l’art")}, ${F("l’université")}, ${F("l’histoire")}, ${F("l’appartement")}. So l’ hides the gender — learn words together with their gender (in a dictionary: <i>n.m.</i> / <i>n.f.</i>).</p>`)}
${FXS(FX(["le","+","art","→","!l’art"]),FX(["la","+","histoire","→","!l’histoire"],"silent h counts as a vowel"),FX(["le","+","sport","→","le sport"],"before a consonant — no change"))}
<h3>When we use them (Unité 1)</h3>
${RULE("General meaning",`<p>«On utilise les articles définis pour parler de quelque chose de <b>général</b>.» After <b>aimer, adorer, détester</b> — always le / la / les:</p>${EX([["J’aime le cinéma et le sport.","I like cinema and sport."],["J’aime l’art et les langues.","I like art and languages."],["Tu aimes la musique ?","Do you like music?"]])}`)}
<h3>Articles with countries</h3>
${FLOW([["Does the name end in -s?","les","les États-Unis, les Pays-Bas"],["Does it end in -e? (except le Mexique, le Mozambique, le Cambodge, le Zimbabwe)","la / l’","la France, la Russie, l’Italie"]],["Everything else","le / l’","le Japon, le Canada, le Brésil, l’Iran"])}
<p>Cities usually have no article: ${F("Paris")}, ${F("Moscou")}, ${F("Genève")}.</p>
<h3>Pronunciation</h3>
<p>${F("le film")} [lə] — ${F("les films")} [le]. The final -s of a noun is silent, so <b>you can only hear the plural in the article</b>.</p>
`,
ex:[
{t:"mc", h:"Choose the article (p. 20, 22)", items:[
{q:"J’aime ___ café.", o:["le","la","les"], a:0},
{q:"Tu aimes ___ musique ?", o:["la","le","l’"], a:0},
{q:"Tu aimes ___ cinéma ?", o:["le","la","les"], a:0},
{q:"Toi, tu aimes ___ langues.", o:["les","la","le"], a:0},
{q:"Moi, j’aime ___ histoire.", o:["l’","la","le"], a:0, e:"Silent h → l’."},
{q:"J’aime aussi ___ chocolat !", o:["le","la","l’"], a:0},
{q:"Tu aimes ___ sport ?", o:["le","l’","la"], a:0},
{q:"J’aime ___ art.", o:["l’","le","la"], a:0}
]},
{t:"sort", h:"Sort the countries by article", cats:["le","la","l’","les"], items:[["France",1],["Japon",0],["Italie",2],["États-Unis",3],["Mexique",0],["Russie",1],["Allemagne",2],["Canada",0],["Pays-Bas",3],["Suisse",1],["Espagne",2],["Brésil",0],["Cambodge",0],["Chine",1]]},
{t:"fill", h:"Write le, la, l’ or les", items:[
{q:"___ sport", a:["le"]},{q:"___ université", a:["l’"]},{q:"___ langues", a:["les"]},{q:"___ musique", a:["la"]},{q:"___ appartement", a:["l’"]},{q:"___ mer", a:["la"]},{q:"___ quartier", a:["le"]},{q:"___ amis", a:["les"]},{q:"___ Japon", a:["le"]},{q:"___ histoire", a:["l’"]}
]},
{t:"fill", h:"Translate", items:[
{q:"I like cinema.", a:["J’aime le cinéma"], long:true},
{q:"Do you like sport? (informal)", a:["Tu aimes le sport ?"], long:true},
{q:"She likes art and languages.", a:["Elle aime l’art et les langues"], long:true}
]}
]});

TOPICS_EN.push({
id:"u1-prepositions", sec:"book", unit:"1", kind:"Grammaire",
title:"À, au, en, aux + ville / pays", ru:"Prepositions with cities and countries", page:"p. 25, 28",
theory:`
${BIGC([["à","a city","à Paris, à Moscou, à Genève"],["au","masculine country (le)","au Japon, au Canada, au Mexique","m"],["en","feminine country (la) or starting with a vowel","en France, en Russie, en Italie, en Iran","f"],["aux","plural country (les)","aux États-Unis, aux Pays-Bas","p"]])}
<h3>A 3-second algorithm</h3>
${FLOW([["Is it a city?","à","à Lyon"],["Is the country plural (les …)?","aux","aux Philippines"],["Is the country feminine (la …) or does it start with a vowel?","en","en Espagne, en Angola"]],["Masculine country (le …)","au","au Brésil"])}
${FXS(FX(["à","+","le","=","!au"],"à le never exists"),FX(["à","+","les","=","!aux"],"à les never exists"))}
${WARN(`${F("à + le = au")}, ${F("à + les = aux")} — they always merge. ✗ <i>à le Japon</i>, ✗ <i>à les États-Unis</i>. And ✗ <i>en Japon</i> is the most common mistake: Japon is masculine → ${F("au Japon")}.`)}
<h3>«Where» and «where to» — the same</h3>
<p>${F("J’habite en France.")} (I live in France) and ${F("Je vais en France.")} (I’m going to France) use the same preposition.</p>
<h3>Being born / living</h3>
${EX([["Il est né le 27 septembre 1955 à Washington, aux États-Unis.","He was born on 27 September 1955 in Washington, in the USA."],["Il habite à Philadelphie, aux États-Unis.","He lives in Philadelphia, in the USA."],["Elle est née et elle habite à Miyazaki, au Japon.","She was born and lives in Miyazaki, in Japan."],["Il est né en Argentine en 1978.","He was born in Argentina in 1978."],["Elle est née à Sion, en Suisse.","She was born in Sion, in Switzerland."]])}
<p>Years also take <b>en</b>: ${F("en 1978")}, ${F("en 2026")}.</p>
<h3>Liaison</h3>
<p>${F("en Italie")} → [ɑ̃<b>n</b>itali], ${F("aux États-Unis")} → [o<b>z</b>etazyni]. Before a consonant there is no liaison: ${F("en Suisse")}, ${F("au Japon")}, ${F("aux Philippines")}.</p>
${LIS(LI("en","Italie","n"),LI("aux","États-Unis","z"),LI("en","Angola","n"),LI("en","Suisse",""),LI("au","Japon",""))}
`,
ex:[
{t:"mc", h:"Choose the preposition (p. 25, 28)", items:[
{q:"Elle est née ___ Italie.", o:["à","au","en","aux"], a:2},
{q:"Il est né ___ Bruxelles.", o:["à","au","en","aux"], a:0, e:"City → à."},
{q:"Elle habite ___ États-Unis.", o:["à","au","en","aux"], a:3},
{q:"Il habite ___ Canada.", o:["à","au","en","aux"], a:1},
{q:"Hugo habite ___ Bogota.", o:["à","au"], a:0},
{q:"Samia est née ___ Algérie.", o:["à","en"], a:1},
{q:"Mike habite ___ États-Unis.", o:["au","aux"], a:1},
{q:"Pietro est né ___ Rome.", o:["à","en"], a:0},
{q:"Bruna habite ___ Cambodge.", o:["à","au"], a:1, e:"le Cambodge is an exception, masculine → au."},
{q:"Pablo est né ___ Barcelone.", o:["à","au"], a:0}
]},
{t:"fill", h:"Write à, au, en or aux", items:[
{q:"J’habite ___ Moscou…", a:["à"]},
{q:"…___ Russie.", a:["en"]},
{q:"Tokyo est ___ Japon.", a:["au"]},
{q:"Il habite ___ Mexique.", a:["au"], e:"le Mexique is an exception."},
{q:"Amsterdam est ___ Pays-Bas.", a:["aux"]},
{q:"Je suis né ___ Espagne.", a:["en"]},
{q:"Elle habite ___ Angola.", a:["en"], e:"Starts with a vowel → en."},
{q:"Nous habitons ___ Portugal.", a:["au"]},
{q:"Ils sont ___ Chine.", a:["en"]},
{q:"Tu habites ___ Maroc ?", a:["au"]},
{q:"Elle est née ___ 1999.", a:["en"], e:"Year → en."}
]},
{t:"sort", h:"Sort the countries: au, en or aux", cats:["au","en","aux"], items:[["Brésil",0],["Belgique",1],["Pays-Bas",2],["Inde",1],["Sénégal",0],["États-Unis",2],["Allemagne",1],["Vietnam",0],["Suisse",1],["Mexique",0],["Philippines",2],["Équateur",1],["Japon",0],["Émirats arabes unis",2]]},
{t:"fill", h:"Translate", items:[
{q:"I live in Moscow, in Russia.", a:["J’habite à Moscou, en Russie"], long:true},
{q:"She was born in Japan.", a:["Elle est née au Japon"], long:true},
{q:"He lives in the USA.", a:["Il habite aux États-Unis"], long:true}
]},
{t:"tf", h:"Liaison: true or false?", items:[
{q:"In «en Italie» you hear [n].", a:true},
{q:"In «aux États-Unis» you hear [z].", a:true},
{q:"There is a liaison in «au Japon».", a:false, e:"Japon starts with a consonant."},
{q:"In «en Suisse» you hear [n] before Suisse.", a:false}
]}
]});

TOPICS_EN.push({
id:"u1-quel", sec:"book", unit:"1", kind:"Grammaire",
title:"L’adjectif interrogatif quel", ru:"Which? What?", page:"p. 26, 28",
theory:`
${GRID(["","Singulier","Pluriel"],[["Masculin","m:quel","m:quels"],["Féminin","f:quelle","f:quelles"]])}
${SAME(["quel","quelle","quels","quelles"],"[kɛl]")}
${WARN("All four forms sound <b>the same</b> [kɛl]. The difference is only in writing — look at the gender and number of the noun.")}
<h3>Two structures</h3>
${RULE("1. Quel + être + noun",EX([["Quel est ton numéro ?","What’s your number? (numéro — m.)"],["Quelle est ta nationalité ?","What’s your nationality? (f.)"],["Quels sont tes loisirs ?","What are your hobbies? (m. pl.)"],["Quelle est ton adresse mail ?","What’s your e-mail? (adresse — f.)"]]))}
${RULE("2. quel + noun",EX([["Tu as quel âge ?","How old are you? (âge — m.)"],["Tu habites dans quelle ville ?","Which city do you live in?"],["Tu parles quelles langues ?","Which languages do you speak?"],["Tu aimes quels auteurs ?","Which authors do you like?"],["Dans quel pays ?","In which country? (pays — m.!)"]]))}
<h3>Gender of words often used in questions</h3>
${TBL(["Masculin → quel","Féminin → quelle"],[[F("l’âge"),F("l’adresse")],[F("le numéro"),F("la nationalité")],[F("le pays"),F("la ville")],[F("le prénom, le nom"),F("la date (de naissance)")],[F("le sport, le loisir"),F("la langue, la musique")]])}
${NOTE(`${F("pays")} is masculine: ${F("le pays")}. ${F("Dans quel pays ?")}`)}
`,
ex:[
{t:"mc", h:"Choose the right form (p. 26)", items:[
{q:"Tu as ___ âge ?", o:["quel","quelle"], a:0, e:"âge — m."},
{q:"Tu parles ___ langues ?", o:["quels","quelles"], a:1},
{q:"Tu aimes ___ musique ?", o:["quelle","quel"], a:0},
{q:"Tu pratiques ___ loisirs ?", o:["quels","quel"], a:0}
]},
{t:"mc", h:"Choose the matching noun (p. 28)", items:[
{q:"Dans quelle ___ tu habites ?", o:["ville","pays"], a:0},
{q:"Tu aimes quelles ___ ?", o:["langue","musiques"], a:1, e:"quelles → f. pl."},
{q:"Quel est ___ de Paul ?", o:["la nationalité","le numéro de téléphone"], a:1},
{q:"Quelle est ___ de Malika ?", o:["la date de naissance","le lieu de naissance"], a:0},
{q:"Il aime quels ___ ?", o:["loisirs","sport"], a:0}
]},
{t:"fill", h:"Write quel, quelle, quels or quelles", items:[
{q:"___ est ton adresse mail ?", a:["Quelle"]},
{q:"___ est ton prénom ?", a:["Quel"]},
{q:"___ sont tes loisirs ?", a:["Quels"]},
{q:"Tu habites dans ___ pays ?", a:["quel"]},
{q:"___ est la date aujourd’hui ?", a:["Quelle"]},
{q:"Tu aimes ___ films ?", a:["quels"]},
{q:"Tu parles ___ langues ?", a:["quelles"]},
{q:"___ est ta nationalité ?", a:["Quelle"]}
]},
{t:"order", h:"Put the question together", items:[
{s:"Quel est ton numéro de téléphone ?", ru:"What’s your phone number?"},
{s:"Tu habites dans quelle ville ?", ru:"Which city do you live in?"},
{s:"Quelle est ta date de naissance ?", ru:"What’s your date of birth?"}
]}
]});

TOPICS_EN.push({
id:"u1-nombres", sec:"book", unit:"1", kind:"Vocabulaire",
title:"Les nombres de 0 à 100", ru:"Numbers and the logic of French counting", page:"p. 14, 21, 27",
theory:`
<h3>0–16 — just learn them</h3>
<div class="nums">${["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize"].map((w,i)=>`<span class="num fr" data-say="${w}"><b>${i}</b>${w}</span>`).join('')}</div>
<h3>17–69 — logical</h3>
${TBL(["Number","How it’s built","Written"],[
["17, 18, 19","10 + 7…",F("dix-sept, dix-huit, dix-neuf")],
["20, 30, 40, 50, 60","tens",F("vingt, trente, quarante, cinquante, soixante")],
["21, 31, 41, 51, 61","ten <b>et un</b> (no hyphen)",F("vingt et un, trente et un… soixante et un")],
["22–29 etc.","ten-unit (with a hyphen)",F("vingt-deux, trente-cinq, quarante-huit")]
])}
<h3>70–99 — the famous «oddity»</h3>
${FXS(FX(["~70","=","soixante|60","+","dix|10"]),FX(["~71","=","soixante|60","+","et","+","onze|11"]),FX(["~80","=","quatre|4","×","!vingts|20 (with s)"]),FX(["~81","=","quatre|4","×","vingt|20","+","un|1"],"no et and no s"),FX(["~90","=","quatre|4","×","vingt|20","+","dix|10"]),FX(["~97","=","quatre|4","×","vingt|20","+","dix-sept|17"]))}
${TBL(["Number","Logic","Written"],[
["70","60 + 10",F("soixante-dix")],
["71","60 <b>et</b> 11",F("soixante et onze")],
["72–79","60 + 12…19",F("soixante-douze … soixante-dix-neuf")],
["80","4 × 20",F("quatre-vingts")+" (with <b>s</b>!)"],
["81","4 × 20 + 1 — <b>no</b> et",F("quatre-vingt-un")+" (no s)"],
["82–89","",F("quatre-vingt-deux … quatre-vingt-neuf")],
["90","4 × 20 + 10",F("quatre-vingt-dix")],
["91","4 × 20 + 11",F("quatre-vingt-onze")],
["99","4 × 20 + 19",F("quatre-vingt-dix-neuf")],
["100","",F("cent")]
])}
${RULE("Traps with vingt",`<p>${F("quatre-vingts")} (80) has an s because it’s «four twenties» with nothing after it. As soon as something is added, the s disappears: ${F("quatre-vingt-un")}, ${F("quatre-vingt-dix")}. And «et» only appears in 21, 31, 41, 51, 61, 71 — 81 and 91 have <b>no</b> et.</p>`)}
${NOTE("90 = 4×20 + 10: «four-twenty-ten». Think of it as a formula: 97 = 4×20 + 17.")}
${NOTE("In Belgium and Switzerland it’s simpler: <b>septante</b> (70), <b>nonante</b> (90), and in Switzerland also <b>huitante</b> (80).")}
<h3>Pronunciation</h3>
${TBL(["Number","Alone","+ consonant","+ vowel"],[
[F("six"),"[sis]",F("six livres")+" [si]",F("six ans")+" [siz]"],
[F("dix"),"[dis]",F("dix mois")+" [di]",F("dix euros")+" [diz]"],
[F("huit"),"[ɥit]",F("huit jours")+" [ɥi]",F("huit ans")+" [ɥit]"],
[F("deux / trois"),"[dø] / [tʁwa]",F("deux livres"),F("deux euros")+" [døz]"],
[F("un"),"[œ̃]",F("un livre"),F("un euro")+" [œ̃n]"],
[F("neuf"),"[nœf]","",F("neuf ans")+" [nœvɑ̃] — f → v"]
])}
<p>${F("vingt")} — [vɛ̃], the t is silent; but in ${F("vingt-deux")} [vɛ̃tdø] and ${F("vingt et un")} [vɛ̃teœ̃] it is pronounced.</p>
${NOTE("Since the 1990 spelling reform you may put hyphens everywhere (vingt-et-un); both versions are correct. The textbook uses the classic one.")}
`,
ex:[
{t:"listen", h:"Listen and write in digits", items:[
{say:"dix-sept",a:["17"]},{say:"trente-deux",a:["32"]},{say:"quarante-cinq",a:["45"]},{say:"cinquante-huit",a:["58"]},{say:"soixante et un",a:["61"]},{say:"soixante-dix",a:["70"]},{say:"soixante et onze",a:["71"]},{say:"soixante-seize",a:["76"]},{say:"quatre-vingts",a:["80"]},{say:"quatre-vingt-un",a:["81"]},{say:"quatre-vingt-huit",a:["88"]},{say:"quatre-vingt-onze",a:["91"]},{say:"quatre-vingt-quinze",a:["95"]},{say:"quatre-vingt-dix-neuf",a:["99"]},{say:"soixante-six",a:["66"]},{say:"quarante-quatre",a:["44"]}
]},
{t:"fill", h:"Write in words", items:[
{q:"70", a:["soixante-dix"]},{q:"71", a:["soixante et onze","soixante-et-onze"]},{q:"80", a:["quatre-vingts"]},{q:"81", a:["quatre-vingt-un"]},{q:"90", a:["quatre-vingt-dix"]},{q:"99", a:["quatre-vingt-dix-neuf"]},{q:"21", a:["vingt et un","vingt-et-un"]},{q:"35", a:["trente-cinq"]},{q:"52", a:["cinquante-deux"]},{q:"64", a:["soixante-quatre"]},{q:"77", a:["soixante-dix-sept"]},{q:"16", a:["seize"]},{q:"100", a:["cent"]}
]},
{t:"match", h:"Match the word and the number", pairs:[["quatre-vingt-douze","92"],["soixante-seize","76"],["quatre-vingt-six","86"],["soixante-quatorze","74"],["quarante-trois","43"],["cinquante et un","51"],["septante","70 (Belgique)"],["nonante","90 (Belgique)"]]},
{t:"mc", h:"Choose the right option", items:[
{q:"How do you write 80?", o:["quatre-vingts","quatre-vingt","quatre-vingts-un"], a:0},
{q:"How do you write 81?", o:["quatre-vingt-un","quatre-vingt et un","quatre-vingts-un"], a:0, e:"81 has no et and no s."},
{q:"How do you write 61?", o:["soixante et un","soixante-un","soixante et une"], a:0},
{q:"06 80 72 86 45 is read as…", o:["zéro six, quatre-vingts, soixante-douze, quatre-vingt-six, quarante-cinq","zéro six, huitante, septante-deux, huitante-six, quarante-cinq","six, quatre-vingts, soixante-douze, quatre-vingt-six, quarante-cinq"], a:0, e:"A number is read in pairs, including zéro."},
{q:"Lang Lang est né le 14 juin 1982. En octobre 2026, il a…", o:["quarante-quatre ans","quarante-trois ans","quarante-cinq ans"], a:0},
{q:"Jodie Foster est née le 9 novembre 1962. Le 21 octobre 2026, elle a…", o:["soixante-trois ans","soixante-quatre ans","soixante-deux ans"], a:0, e:"Her birthday hasn’t come yet → 63."}
]}
]});
