// =============Discord.js==========================//
const Discord = require('discord.js');
// =============WOK===============================//
const WOKCommands = require('wokcommands');
// =============Config.json=-==================//
const config = require('./config.json');
// =============Discord API =================//
const client = new Discord.Client({
	partials: ['MESSAGE', 'REACTION'] });
// =======================================//

client.on('ready', () => {
	new WOKCommands(client, {
		// ==============Dir================//

		commandsDir: 'commands',
		featuresDir: 'features',
		// ========Config.options==========//
		showWarns: true,
		del: -1,
		ignoreBots: false,
		dbOptions: {

			keepAlive: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		},
		testServers: ['833512367030927421', '847703498967089193'],

		// ==========Disable-Cmd=======//
		disabledDefaultCommands: [
			'command',
			'language',
			'requiredrole',
		],
	})
		.setBotOwner('805412409174654986')
	// ========Config.options==========//
		.setDefaultPrefix('a!')
		.setColor(0xff0000)
		.setMongoPath(config.mongo_url);
	// ========status msg============//
	console.log('[Bot Event]: Connected to API!');
});
client.login(config.token);

