const Discord = require('discord.js');

const setStatus = (client, rp) => {
	client.user.setPresence({
		status: 'online',
		activity: {
			name: rp,
		},
	});
};

module.exports = {

	category: 'Fun & Games',
	description: 'Replies with "Pong!"',
	aliases: ['status', 'presence', 'Status', 'Presence', 'rpc', 'Rpc', 'RPC'],
	expectedArgs: '<Status>',
	minArgs: 1,
	cooldown: '5s',
	ownerOnly: true,


	init: (client) => {

		const rp = 'Testing';
		setStatus(client, rp);
	},


	callback: ({ client, text, message }) => {
		setStatus(client, text);

		const content = message.content.replace('z', '');
		const ccontent = content.substr(content.indexOf(' ') + 1);
		console.log(`[Status] : ${content} was triggered\n[Bot RPC] : ${message.author.username} set rpc => ${ccontent}`);
		const embed = new Discord.MessageEmbed()

			.setTitle('__Rich Presence__')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot')
			.setDescription(`**Rich Presence Status  was set to **__${ccontent}__**	 by <@${message.author.id}>**`)
			.setTimestamp()
			.setFooter('Atomic | Rich Presence', 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=4096');
		message.channel.send(embed);
	},
};