const fs = require('fs');
const { prefix } = require('../config.json');

module.exports = {
    name: 'link-twitch',
	description: 'Links a Discord user to a Twitch username',
    args: true,
    usage: '<@user> <TwitchID>',
    guildOnly: true,
    cooldown: 2,
    aliases: ['add-streamer', 'l-t', 'add-twitch'],
	execute(message, args) {
        let data;

        if (fs.existsSync(process.env.STREAMERS_FILE_LOCATION)) {
            //read the existing json file
            data = fs.readFileSync(process.env.STREAMERS_FILE_LOCATION)

            data = JSON.parse(data); //converts to object
            console.log(data)

        } else {
            //creates a new json file, should only be called upon first add
            data = {
                streamers: [
                    
                ]
            }
        }

        //adds the specified streamer to the JSON file
        newStreamer = {
            discordId: args[0],
            twitchId: args[1]
        }
        console.log("file was written")
        data.streamers.push(newStreamer);
        
        //write JSON file
        fs.writeFileSync(process.env.STREAMERS_FILE_LOCATION, JSON.stringify(data), (err) => {
            if (err) {
                console.log("erreur lors de l'écriture du fichier");
                throw err;
            }
        });
	},
};