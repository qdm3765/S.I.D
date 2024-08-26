const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    // The slash command, name and description
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),

    // Acknowledge and respond
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};