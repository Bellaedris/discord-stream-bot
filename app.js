require('dotenv').config()
const Discord = require('discord.js')

const client = new Discord.Client();

//runned when client is ready
client.on('message', message => {
    console.log(message.content);
})

//login to discord
client.login(process.env.DISCORD_BOT_TOKEN);