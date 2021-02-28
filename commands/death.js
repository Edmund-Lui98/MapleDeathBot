//Firebase integration
const firebase = require("firebase/app");
const FieldValue = require("firebase-admin").firestore.FieldValue;
const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore();

module.exports = async function (msg, player, args) {

    const data = {
       'deathCount': 2
    };
    await db.collection("deaths").doc(player).set(data);
    //msg.reply(`${player} has passed away 4 time(s)`);
    msg.channel.send(`${player} has passed away 4 time(s)`); //this doesnt tag the person its replying to
    
    //diff replies
    //const r = Math.floor(Math.random() * deathReplies.length);
    //msg.channel.send(replies[r]);
};
