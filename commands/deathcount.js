
const admin = require("firebase-admin");

//Reference to the firestore
let db = admin.firestore();

module.exports = async function (msg, player, args) {
    //Check if payer is in db 
    const playerReference = db.collection('deaths').doc(player);
    const doc = await playerReference.get();

    if (!doc.exists) {
        msg.channel.send(`Character has either not died or does not exist`);

    } else {
        //retrieve original death count
        msg.channel.send(`${player} has passed away ${doc.data().deathCount} time(s)`);

    }

    msg.channel.send(`${player} has passed away ${deathCount} time(s)`);
}