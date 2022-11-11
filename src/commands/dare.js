const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder().setName('dare').setDescription('Get dare'),
  async execute(interaction) {
    const data = await axios.get('https://api.truthordarebot.xyz/api/dare');
    await interaction.reply(data.data.question);
  },
};
