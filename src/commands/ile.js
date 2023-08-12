const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder().setName('ile').setDescription('Pokazuje ile'),
  async execute(interaction) {
    await interaction.reply(
      `Obstarczyk powiedział: ${global.ile.liczba} "BLLB"`
    );
  },
};
