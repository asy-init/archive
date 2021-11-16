const BaseCommand = require('../../utils/structures/BaseCommand');
const config = require('C:/Repo/Bot_Master/atomic/slappey.json');

const fetch = require('node-fetch');
const Discord = require('discord.js');
const clog = require('c-log');

const inv = 'https://discord.com/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot';
const icon = 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024';
const red = '#c21111';

module.exports = class KittyCommand extends BaseCommand {
	constructor() {
		super('kitty', 'Fun & Games', []);
	}

	async run(client, message, args) {

		const raw_cat = await fetch(config.cat_api).then(response => response.json());
		const cat = await raw_cat;


		const embed = new Discord.MessageEmbed()
			.setTitle('<:__:853968191407390721> Kitty')
			.setColor(red)
			.setImage(cat[0].url)
			.setFooter('Atomic | Kitty', icon);

		const api_msg_load = await message.channel.send(embed);
	}
};