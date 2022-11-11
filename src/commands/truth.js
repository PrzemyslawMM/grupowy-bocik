const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder().setName('truth').setDescription('Get truth'),
  async execute(interaction) {
    const data = await axios.get('https://api.truthordarebot.xyz/api/paranoia');
    await interaction.reply(data.data.question);
  },
};
