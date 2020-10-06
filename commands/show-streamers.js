const fs = require('fs');
const { prefix } = require('../config.json');

module.exports = {
    name: 'show-streamers',
	description: 'Shows all registered streamers',
    args: false,
    usage: '',
    guildOnly: true,
    cooldown: 2,
    aliases: ['show', 'show-all'],
	execute(message, args) {
        if (!fs.existsSync(process.env.STREAMERS_FILE_LOCATION)) {
            return message.author.send(
                'There is currently no streamers registered. Add your first streamer with the link-twitch command'
            );
        }
        data = fs.readFileSync(process.env.STREAMERS_FILE_LOCATION);
        data = JSON.parse(data);

        allStreamers = 'All streamers and their twitch name: \n'
        data.streamers.forEach(streamer => {
            allStreamers += streamer.discordId + ": " + streamer.twitchId + "\n";
        });
        console.log(allStreamers);
        message.channel.send(allStreamers);
	},
};