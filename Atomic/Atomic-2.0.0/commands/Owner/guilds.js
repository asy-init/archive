const Discord = require('discord.js');

module.exports = {


	category: 'Fun & Games',
	description: 'Replies with "Pong"!',
	aliases: ['servers', 'guildes', 'sc'],
	cooldown: '5s',


	run: async (message) => {

		const guild_msg = await message.channel.send('Loading...');


		const embed = new Discord.MessageEmbed()

			.setColor('#cc2714')
			.setTitle('__Ping__')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot')
			.setDescription('\u200b')
			.setTimestamp()
			.setFooter('Atomic | Guilds', 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=4096');
		return guild_msg.edit(embed);
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
