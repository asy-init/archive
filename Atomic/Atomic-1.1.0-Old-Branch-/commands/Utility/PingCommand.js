const BaseCommand = require('../../utils/structures/BaseCommand');

const fetch = require('node-fetch');
const Discord = require('discord.js');
const clog = require('c-log');

const inv = 'https://discord.com/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot';
const icon = 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024';
const red = '#c21111';

module.exports = class PingCommand extends BaseCommand {
	constructor() {
		super('ping', 'Utility', []);
	}

	async run(client, message) {
		// const for pings
		const ping_msg_load = await message.channel.send('Pinging...');
		const bot_ping = (Date.now() - message.createdTimestamp);
		const api_ping = Math.round(message.client.ws.ping);

		const embed = new Discord.MessageEmbed()

			.setColor('#cc2714')
			.setTitle('__Ping__')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot')
			.setDescription(`<a:LoadingDiscord:851651711856410674> *__Discord API__*  : **${api_ping}** ms\n\n<:Servers:851651708542517248>*__Server Ping__* : **${bot_ping}** ms`)
			.setTimestamp()
			.setFooter('Atomic | Latency', 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=4096');

		return ping_msg_load.edit(embed);

	}
};