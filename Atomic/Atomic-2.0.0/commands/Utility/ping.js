const Discord = require('discord.js');

module.exports = {

	category: 'Fun & Games',
	description: 'Replies with "Pong"!',
	aliases: ['latency', 'ping', 'Ping'],
	cooldown: '10s',
	slash:  'both',

	run: async (message) => {

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

	},

	error: ({ error, message }) => {

		if (error === 'COMMAND DISABLED') {
			const embed = new Discord.MessageEmbed()

				.setTitle('__MongoDB Promise Rejection__')
				.setDescription('Trouble Shooting...\n[FsUtil] : Logged warning & errors to fsutil.log');

			message.reply(embed);

		}
	},
};

