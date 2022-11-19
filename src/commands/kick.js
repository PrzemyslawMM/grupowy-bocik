const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('kick').setDescription('kick'),
  async execute(interaction) {
    const user = interaction.options.getMember('target');
    user.kick();
  },
};
