/* =========================================================
   FRANÇAIS — «Разное» (sec:"misc"): материалы вне юнитов — диалоги, тексты.
   Группа в сайдбаре под «Для справки». Двуязычно через TF (из fr-u3.js).
   ========================================================= */
function FR_MISC(L){
  const keepHL = HL; FRL = L; HL = L;
  try { return [

{
id:"m-epicerie-bio", sec:"misc", kind:TF("Диалог", "Dialogue"),
title:"À l’épicerie bio", ru:TF("Диалог в магазине: очередь, покупки, цены, оплата", "A shop dialogue: whose turn it is, shopping, prices, paying"), page:TF("Unité 3, с. 47, B · трек 45", "Unité 3, p. 47, B · track 45"),
theory:`
<p>${TF("Нажми на любую реплику — она прозвучит. Кнопка «Слушать» включает весь диалог подряд.", "Tap any line to hear it. The Listen button plays the whole dialogue.")}</p>
${CHAT("fr-misc-epicerie", "À l’épicerie bio", [
["L’épicier", "C’est à qui ?", "Чья очередь?", "Who’s next?"],
["La cliente", "C’est à moi ! Bonjour !", "Моя! Здравствуйте!", "Me! Hello!"],
["L’épicier", "Bonjour, madame. Alors, 2 bouteilles de jus de pomme, 1 paquet de riz, 1 paquet de pâtes, 1 kg de farine et 1 bouteille d’huile d’olive.", "Здравствуйте, мадам. Итак, 2 бутылки яблочного сока, 1 пачка риса, 1 пачка макарон, 1 кг муки и 1 бутылка оливкового масла.", "Hello, madam. So, 2 bottles of apple juice, 1 packet of rice, 1 packet of pasta, 1 kg of flour and 1 bottle of olive oil."],
["La cliente", "La bouteille d’huile d’olive coûte 12 euros ? C’est ça ?", "Бутылка оливкового масла стоит 12 евро? Так?", "The bottle of olive oil costs 12 euros? Is that right?"],
["L’épicier", "Oui, c’est ça. Ce sera tout ?", "Да, так. Это всё?", "Yes, that’s right. Will that be all?"],
["La cliente", "Oui, merci.", "Да, спасибо.", "Yes, thank you."],
["L’épicier", "Vous payez comment ? Par carte ou en espèces ?", "Как будете платить? Картой или наличными?", "How are you paying? By card or in cash?"],
["La cliente", "Par carte, s’il vous plaît.", "Картой, пожалуйста.", "By card, please."],
["Malo", "Papa, on achète des biscuits ? Combien ça coûte ?", "Папа, купим печенье? Сколько это стоит?", "Dad, shall we buy some biscuits? How much is it?"],
["Le client", "Ça coûte 2 euros le paquet, Malo.", "2 евро за пачку, Мало.", "It’s 2 euros a packet, Malo."],
["Malo", "Et ça, ça coûte combien ?", "А это сколько стоит?", "And how much is this?"],
["Le client", "Les yaourts ? Ils coûtent 1,50 euro.", "Йогурты? Они стоят 1,50 евро.", "The yoghurts? They cost 1.50 euros."],
["L’épicier", "À nous ! Monsieur Peltier, bonjour ! Et bonjour, Malo !", "Ваша очередь! Месье Пелтье, здравствуйте! И привет, Мало!", "Your turn! Mr Peltier, hello! And hello, Malo!"],
["Le client", "Bonjour !", "Здравствуйте!", "Hello!"],
["L’épicier", "Comment ça va ?", "Как дела?", "How are you?"],
["Le client", "Très bien, merci.", "Очень хорошо, спасибо.", "Very well, thank you."],
["L’épicier", "Alors, 2 paquets de biscuits, 4 yaourts, 1 boîte de thon et 1 pot de crème. Ce sera tout ?", "Итак, 2 пачки печенья, 4 йогурта, 1 банка тунца и 1 баночка сливок. Это всё?", "So, 2 packets of biscuits, 4 yoghurts, 1 tin of tuna and 1 pot of cream. Will that be all?"],
["Le client", "Et je voudrais aussi 2 pains, s’il vous plaît.", "И ещё, пожалуйста, 2 хлеба.", "And I’d also like 2 loaves of bread, please."],
["L’épicier", "Vous payez comment ?", "Как будете платить?", "How are you paying?"],
["Le client", "En espèces.", "Наличными.", "In cash."]
])}`,
ex:[]
}

  ]; } finally { HL = keepHL; }
}
(function(){ const ru = FR_MISC("ru"), en = FR_MISC("en"); ru.forEach((tp, k)=>{ TOPICS.push(tp); TOPICS_EN.push(en[k]); }); })();
