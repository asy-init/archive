const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('C:/Repo/Bot_Master/atomic/slappey.json');

const fetch = require('node-fetch');
const Discord = require('discord.js');
const clog = require('c-log');

const inv = 'https://discord.com/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot';
const icon = 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024';
const red = '#c21111';

module.exports = class ShutdownCommand extends BaseCommand {
	constructor() {
		super('shutdown', 'Utility', []);
	}


	async run(client, message, args) {
		const one = new Discord.MessageEmbed()
			.setColor(red)
			.setTitle('<a:loading:856704512886308884> __Checking User.ID...__')
			.setFooter('Atomic • Shutdown', icon);
		const one_wait = await message.channel.send({ embed:one });

		if(message.author.id === config.id) {
			const two = new Discord.MessageEmbed()
				.setColor(red)
				.setTitle('<a:verify:855276628561231883> __Shutting Down...__')
				.setFooter('Atomic • Shutdown', icon);
			const two_wait = await one_wait.edit({ embed:two });

			const three = new Discord.MessageEmbed()
				.setColor(red)
				.setTitle('`Index.js has been terminated`')
				.setFooter('Atomic • Shutdown', icon);

			await two_wait.edit({ embed:three }).then(() => {

				client.destroy();
			});
		}
	}
};

