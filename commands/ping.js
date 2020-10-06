module.exports = {
    name: 'ping',
	description: 'Ping!',
	args: false,
	execute(message, args) {
		//get client that sent the msg with message.client
		//if args[0] = ....
		message.channel.send('Pong.');
	},
};