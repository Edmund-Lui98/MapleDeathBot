//Firebase integration
const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

//Reference to the firestore
let db = admin.firestore();

module.exports = async function (msg, player, args) {

    //Check if payer is in db 
    const playerReference = db.collection('deaths').doc(player);
    const doc = await playerReference.get();
    var deathCount = 1;

    if (!doc.exists) {
        //create a doc for new user
        const data = {
            'deathCount': 1
         };

        await db.collection("deaths").doc(player).set(data);

    } else {
        //retrieve original death count
        deathCount = doc.data().deathCount + 1
        const data = {
        'deathCount': deathCount
        };

        await db.collection("deaths").doc(player).set(data);
    }

    msg.channel.send(`${player} has passed away ${deathCount} time(s)`); //this doesnt tag the person its replying to
    //msg.reply(`${player} has passed away 4 time(s)`);


    //diff replies
    //const r = Math.floor(Math.random() * deathReplies.length);
    //msg.channel.send(replies[r]);
};

//Different death replies for future integration
const deathReplies = [
    'rip',
    'gubi',
    'uhh.. ya dead',
]

//future integrations
//- check if there is an @mention. if yes, process, if no, error msg