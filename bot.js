//Set up environmental variables
require("dotenv").config();

//Connect with discord.js
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

//Command handler
const commandHandler = require("./commands")

//Test message to show that the bot is running
client.on('ready', readyDiscord);

function readyDiscord() {
    console.log("yeeeeet im in bois");
}

//calling on a command when a message is sent
client.on('message', commandHandler)

