const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CwCommand extends BaseCommand {
	constructor() {
		super('cw', 'Fun & Games', []);
	}

	async run(client, message, args) {
		const { ChaosWords } = require('weky');
		const randomWords = require('C:/Users/notka/AppData/Local/Microsoft/TypeScript/4.3/node_modules/@types/random-words/index.d.ts');
		const words = randomWords(2);
		await new ChaosWords({
			message: message,
			maxTries: 8,
			charGenerated: 20,
			words: words,
			embedTitle: 'Chaos words!',
			embedFooter: 'Find the words in the sentence!',
			embedColor: 'RANDOM',
		}).start();
	}
};