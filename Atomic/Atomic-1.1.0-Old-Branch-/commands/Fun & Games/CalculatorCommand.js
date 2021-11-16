const BaseCommand = require('../../utils/structures/BaseCommand');

const config = require('C:/Repo/Bot_Master/atomic/slappey.json');

const fetch = require('node-fetch');
const Discord = require('discord.js');
const clog = require('c-log');

const inv = 'https://discord.com/oauth2/authorize?client_id=845957692005941261&permissions=8&scope=bot';
const icon = 'https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024https://cdn.discordapp.com/avatars/845957692005941261/ca13a109c47377169b99849fcfebf743.png?size=1024';
const red = '#c21111';

module.exports = class CalculatorCommand extends BaseCommand {
	constructor() {
		super('calculator', 'Fun & Games', []);
	}

	async	run(client, message, args) {

		const { Calculator } = require('weky');
		const { MessageButton } = require('discord-buttons');
		await Calculator(message);
	}
};