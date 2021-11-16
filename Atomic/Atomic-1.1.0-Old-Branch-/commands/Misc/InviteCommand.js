const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const clog = require('c-log');

const inv = 'https://discord.com/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot';
const icon = 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024';
const red = '#c21111';

module.exports = class InviteCommand extends BaseCommand {
	constructor() {
		super('Invite', 'Misc', []);
	}

	run(client, message, args) {
		message.channel.send('Invite command works');
	}
};