/* eslint-disable no-mixed-spaces-and-tabs */
const BaseCommand = require('../../utils/structures/BaseCommand');
// req const lib
const fetch = require('node-fetch');
const Discord = require('discord.js');
const clog = require('c-log');

const inv = 'https://discord.com/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot';
const icon = 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024';
const red = '#c21111';

module.exports = class PurgeCommand extends BaseCommand {
	constructor() {
		super('purge', 'Moderation', []);
	}

	async run(client, message, args) {
		// constants for embeds [copy-paste]


		// constants for args here
		const purge_int = args[0];
		const one = 1;


		if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
			const embed = new Discord.MessageEmbed()
				.setColor(red)
				.addField('__Error__', 'Atomic is missing `MANAGE_MESSAGES` permission', true)
				.setTimestamp()
				.setFooter('Atomic • Purge', icon);
			return message.channel.send(embed);

		}
		if(!message.member.hasPermission('MANAGE_MESSAGES')) {
			const embed = new Discord.MessageEmbed()
				.setColor(red)
				.setDescription('You cannot use this command')
				.setTimestamp()
				.setFooter('Atomic • Purge', icon);
			return message.channel.send(embed);
		}

		if(!args[0]) {
			const embed = new Discord.MessageEmbed()
				.setColor(red)
				.setDescription('Please specify a number.')
				.setTimestamp()
				.setFooter('Atomic • Purge', icon);
			return message.channel.send(embed);
		}

		if(isNaN(purge_int)) {
			const embed = new Discord.MessageEmbed()
				.setColor(red)
				.setDescription('Please use a valid whole number')
				.setTimestamp()
				.setFooter('Atomic • Purge', icon);
			return message.channel.send(embed);
		}


		if(purge_int < 2 || purge_int > 1001) {
			const embed = new Discord.MessageEmbed()
				.setColor(red)
				.setDescription('```Please use a number in the range of 2 to 1000```')
				.setTimestamp()
				.setFooter('Atomic • Purge', icon);
			return message.channel.send(embed);
		}
		if (message.member.hasPermission('MANAGE_MESSAGES')) {

			// Console Table Log
		   const del = await message.channel.bulkDelete(purge_int);
			const embed = new Discord.MessageEmbed()
			// Embed confirmation
				.setColor(red)
				.setDescription(`\`\`\`Atomic cleared ${purge_int} messages!\`\`\` `)
				.setTimestamp()
				.setFooter('Atomic • Purge', icon);


			const purge_log = [
				{ Command: 'Purge', Guild: `${message.guild.name}`,
				 User: `${message.author.username}`,
				 Logs: `${message.author.username} purged (${purge_int}) messages` },
			];
				  clog.table(purge_log);

				  // send embed
			return message.channel.send(embed);
		 }
	}
};