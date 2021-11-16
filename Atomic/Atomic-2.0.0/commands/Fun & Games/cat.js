const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {

	category: 'Fun & Games',
	description: 'Replies with "Pong"!',
	aliases: ['cat', 'pussy', 'cute'],
	expectedArgs: '<cat>',
	cooldown: '10s',


	run : async (message) => {

		const raw_cat = await fetch('https://api.thecatapi.com/v1/images/search?api_key=7b6f6131-23a9-4d95-b595-5ea18dc95e5b').then(response => response.json());
		const cat = await raw_cat;

		console.log(cat);

		const api_msg_load = await message.channel.send('Waiting for Get Request...');
		const embed = new Discord.MessageEmbed()

			.setTitle('<:__:853968191407390721> 	__Kitty__')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot')
			.setDescription('*Hope your Having a great day!*')
			.setImage(cat[0].url)
			.setTimestamp()
			.setFooter('Atomic | Cat ', 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=4096');
		return api_msg_load.edit(embed);	
	},
};