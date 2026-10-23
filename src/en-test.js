/* ===== ENGLISH: mock-test pool overrides + cheat sheet ===== */
const POOL_TR = {
0:{e:"Age — avoir: vous avez."},
5:{e:"Single l with nous."},
9:{q:"«Nom : Baldi, prénom : Juliette». Baldi is…", o:["the surname","the first name","the city"]},
18:{e:"Already ends in -s → no change."},
19:{q:"Which adjective is only masculine?"},
24:{e:"Exception: ends in -e but masculine."},
49:{q:"In French the stress falls…", o:["on the last syllable of the rhythm group","on the first syllable of the word","on every word"]},
50:{q:"In «en Italie» you hear…", o:["[n]","[z]","no liaison"]},
69:{q:"Where can you hear the ending?"},
73:{q:"Which word is NOT about sport?"},
76:{q:"___ amie Mira (my)."},
80:{q:"«his mother» in French:"},
92:{q:"«il parle» and «ils parlent» sound…", o:["the same","different"]},
93:{q:"In «mes amis» you hear…", o:["[z]","[n]","no liaison"]},
95:{q:"Speaking to a group of friends, you use…"}
};
const POOL_EN = POOL.map((q,i)=>Object.assign({}, q, POOL_TR[i]||{}));

const CHEAT_EN = `
<div class="cheat">
<section class="ch"><h3>être · avoir</h3>${TBL(["","être","avoir"],[["je / j’","suis","ai"],["tu","es","as"],["il / elle / on","est","a"],["nous","sommes","avons"],["vous","êtes","avez"],["ils / elles","sont","ont"]])}<p class="ch-n">Age: <b>j’ai</b> 20 ans. Job: il est étudiant (no article).</p></section>
<section class="ch"><h3>s’appeler · -er</h3>${TBL(["","s’appeler","aimer"],[["je / j’","m’appelle","aime"],["tu","t’appelles","aimes"],["il / elle / on","s’appelle","aime"],["nous","nous appelons","aimons"],["vous","vous appelez","aimez"],["ils / elles","s’appellent","aiment"]])}<p class="ch-n">-e, -es, -e, -ent are silent. ne + verb + pas.</p></section>
<section class="ch"><h3>Articles</h3>${TBL(["","m.","f.","pl."],[["definite","le / l’","la / l’","les"],["indefinite","un","une","des"],["after pas","de / d’","de / d’","de / d’"]])}<p class="ch-n">aimer + le/la/les. pas de only replaces un/une/des.</p></section>
<section class="ch"><h3>Prepositions + place</h3>${TBL(["","",""],[["city","à","à Paris"],["m. country","au","au Japon"],["f. country / vowel","en","en France, en Iran"],["pl. country","aux","aux États-Unis"]])}<p class="ch-n">le Mexique, le Cambodge — masculine.</p></section>
<section class="ch"><h3>quel</h3>${TBL(["","sg","pl"],[["m.","quel","quels"],["f.","quelle","quelles"]])}<p class="ch-n">âge, numéro, pays — m.; adresse, ville, langue, date, nationalité — f.</p></section>
<section class="ch"><h3>Possessives</h3>${TBL(["","m.","f.","pl."],[["je","mon","ma","mes"],["tu","ton","ta","tes"],["il / elle","son","sa","ses"],["nous","notre","notre","nos"],["vous","votre","votre","vos"],["ils / elles","leur","leur","leurs"]])}<p class="ch-n">Gender of the thing: sa mère = his/her mother. mon amie (vowel).</p></section>
<section class="ch"><h3>Feminine</h3>${TBL(["m.","f.","example"],[["+ e","","français → française"],["-ien / -éen","-ienne / -éenne","italien, coréen"],["-e","=","russe, belge, fleuriste"],["-eur","-euse","coiffeur → coiffeuse"],["-teur","-trice","acteur → actrice"],["-er","-ère","infirmier → infirmière"]])}<p class="ch-n">grec → grecque, turc → turque.</p></section>
<section class="ch"><h3>Numbers 70–100</h3>${TBL(["",""],[["70","soixante-dix"],["71","soixante et onze"],["80","quatre-vingts"],["81","quatre-vingt-un"],["90","quatre-vingt-dix"],["99","quatre-vingt-dix-neuf"],["100","cent"]])}<p class="ch-n">et only in 21, 31, 41, 51, 61, 71. Belgium: septante, nonante.</p></section>
<section class="ch"><h3>Liaison</h3>${TBL(["",""],[["[z]","les‿amis, mes‿enfants, aux‿États-Unis, ils‿aiment"],["[n]","un‿ami, mon‿amie, en‿Italie"],["none","les professeurs, au Japon, et | Anna"]])}<p class="ch-n">ils sont [s] ≠ ils ont [z].</p></section>
<section class="ch"><h3>Family</h3>${TBL(["",""],[["père / mère","father / mother"],["fils [fis] / fille","son / daughter"],["frère / sœur","brother / sister"],["oncle / tante","uncle / aunt"],["cousin(e)","cousin"],["neveu / nièce","nephew / niece"],["petit-fils / petite-fille","grandson / granddaughter"],["mari / femme","husband / wife"]])}<p class="ch-n">Je n’ai pas <b>de</b> frères. Je suis fils unique.</p></section>
<section class="ch"><h3>du · de la · des</h3>${TBL(["","",""],[["m.","du","du poisson"],["f.","de la","de la farine"],["vowel","de l’","de l’eau"],["pl.","des","des pâtes"]])}<p class="ch-n">aimer / détester + <b>le</b> poisson; manger / acheter + <b>du</b> poisson. beaucoup / un peu / pas + <b>de</b>.</p></section>
<section class="ch"><h3>choisir · finir</h3>${TBL(["","choisir","finir"],[["je / tu","choisis","finis"],["il / elle / on","choisit","finit"],["nous","choisissons","finissons"],["vous","choisissez","finissez"],["ils / elles","choisissent","finissent"]])}<p class="ch-n">2nd group: -is, -is, -it, -issons, -issez, -issent.</p></section>
<section class="ch"><h3>aller · faire</h3>${TBL(["","aller","faire"],[["je","vais","fais"],["tu","vas","fais"],["il / elle / on","va","fait"],["nous","allons","faisons"],["vous","allez","faites"],["ils / elles","vont","font"]])}<p class="ch-n">acheter: j’achète, nous achetons. payer: je paie, nous payons. manger: nous mangeons.</p></section>
<section class="ch"><h3>à · chez</h3>${TBL(["",""],[["à + le = au","au marché"],["à + les = aux","aux caisses"],["à la / à l’","à la boulangerie, à l’épicerie"],["chez + person","chez le boucher, chez moi"]])}<p class="ch-n">Place → à, person → chez. Quantity: un kilo <b>de</b> pommes, une bouteille <b>d’</b>eau.</p></section>
</div>`;
