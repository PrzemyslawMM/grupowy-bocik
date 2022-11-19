const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('kick')
    .addUserOption((option) =>
      option
        .setName('target')
        .setDescription('user you want to kick')
        .setRequired(true)
    ),
  async execute(interaction) {
    const user = interaction.options.getMember('target');
    user.kick();
  },
};
