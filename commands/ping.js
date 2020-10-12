const fs = require('fs');
const { prefix } = require('../config.json');

module.exports = {
    name: 'ping',
	description: 'notifies users that a streamer is online',
    args: false,
    usage: '<@User>',
    guildOnly: true,
    cooldown: 10,
    aliases: ['p'],
	execute(message, args) {

		if (!fs.existsSync(process.env.STREAMERS_FILE_LOCATION)) {
            return message.author.send(
                'There is currently no streamers registered. Add your first streamer with the link-twitch command'
            );
        }
        data = fs.readFileSync(process.env.STREAMERS_FILE_LOCATION);
		data = JSON.parse(data);
		
		streamerName = message.author.username;//if no streamer was entered, jsut check for current user
		selectedStreamer = args.length > 0 ? "<@!" + message.author.id + ">" : args[0]; 
		//check that the selected streamer exists & is registered as a streamer
		
		for(i = 0; i < data.streamers.length; i++) {
			if (data.streamers[i].discordId == selectedStreamer)
			{
				return message.channel.send("@here " + streamerName + " is streaming now!\n https://www.twitch.com/" + data.streamers[i].twitchId);
			}
		}

		return message.channel.send(selectedStreamer + " is not registered as a streamer. You can add a streamer via the !s add-streamer command.");
	},
};