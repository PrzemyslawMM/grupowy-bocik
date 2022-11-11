const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('test').setDescription('placeholder'),
  async execute(interaction) {
    await interaction.reply('TEST');
  },
};
