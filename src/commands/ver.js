const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ver')
    .setDescription('Display Version of Bot'),
  async execute(interaction) {
    await interaction.reply('0.0.3');
  },
};
