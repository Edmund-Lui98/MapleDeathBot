const admin = require("firebase-admin");

//Reference to the firestore
let db = admin.firestore();

module.exports = async function (msg, player, args) {
    

    const deaths = await db.collection('deaths').orderBy("deathCount", "desc")
    deaths.get().then((querySnapshot) => {
        const leaders = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
        msg.channel.send(`__**Leaderboards**__
1. ${leaders[0].id} with **${leaders[0].deathCount}** deaths
2. ${leaders[1].id} with **${leaders[1].deathCount}** deaths
3. ${leaders[2].id} with **${leaders[2].deathCount}** deaths
4. ${leaders[3].id} with **${leaders[3].deathCount}** deaths
5. ${leaders[4].id} with **${leaders[4].deathCount}** deaths`);
    })

    
}