const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SudoCommand extends BaseCommand {
	constructor() {
		super('Sudo', 'Fun & Games', []);
	}

	run(client, message, args) {
		const { sudo } = require('weky');
		const user = message.mentions.members.first();
		const msg = args.slice(1).join(' ');
		const xd = new sudo({
			message: message,
			text: msg,
			member: user,
		});
		xd.start();
	}
};