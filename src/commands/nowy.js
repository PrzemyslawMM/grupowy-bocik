const { SlashCommandBuilder } = require('discord.js');

global.ile = { liczba: 0 };

module.exports = {
  data: new SlashCommandBuilder().setName('nowy').setDescription('Dodaje'),
  async execute(interaction) {
    global.ile.liczba += 1;
    await interaction.reply(
      `Obstarczyk powiedział: ${global.ile.liczba} "BLLB"`
    );
  },
};
