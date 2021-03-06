//Accessing the commands
const death = require("./commands/death.js");
const leaderboard = require("./commands/leaderboard.js");
const deathcount = require("./commands/deathcount.js");
const help = require("./commands/help.js");



//Command list
const commands = {
    death:  death,
    leaderboard: leaderboard,
    deathcount: deathcount,
    help: help,
}

//funcion called when a message is sent in that server
module.exports = function (msg) {
    if (msg.channel.id == process.env.CHANNELID ) {
        let tokens = msg.content.split(" ");
        let command = tokens[0];

        if (command.charAt(0) === "!") {
            command = command.substring(1);

            if (command in commands) {
                commands[command](msg, tokens[1], tokens);
                // console.log(msg.mentions);
            } else {
                msg.channel.send(`Not a valid command. Please type "!help" for a list of commands`);
            }

            
        }        
    }
}