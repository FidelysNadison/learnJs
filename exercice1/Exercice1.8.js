const readlineSync = require("readline-sync");
let qst1 = readlineSync.question('Par quel moyen de transport avez vous rejoint beCode?');
let qst2 = readlineSync.question('ou est ce que vous avez pris votre petit dej');
let qst3 = readlineSync.question('vous vous etes pointer à quel heure ?');
console.log(" Je me suis lever à 5h du matin pour rejoindre ma formation en" + qst1 + "comme j'etais un peu en retard , je ne pouvais plus prendre mon petit dejeune donc je l'ai pris une fois arriver à la" + qst2 + "j'ai quand meme eu l'opportuniter de me pointer à" + qst3)

