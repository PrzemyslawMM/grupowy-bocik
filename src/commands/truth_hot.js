const { SlashCommandBuilder } = require('discord.js');

const truth = [
  'What is the most embarrassing thing you have ever done?',
  'Have you ever peed yourself?',
  'What’s the weirdest thing you’ve ever eaten?',
  'What is the weirdest dream you have ever had?',
  'What is the weirdest thing you have ever done in front of the mirror?',
  'What is the strangest rumour you’ve heard about yourself?',
  'Have you ever lied to get out of a bad date? If so, what was the lie?',
  'If you farted in the elevator, would you blame someone else or say excuse me?',
  'What’s the craziest thing you’ve done on public transportation?',
  'Who was your worst kiss ever?',
  'What was the last thing you searched for on your phone?',
  'Have you ever walked in on your parents doing it?',
  'What would you do if you got locked in a supermarket overnight?',
  'If you were the opposite sex for one day, what would you do?',
  'What is the most drunk you have ever been?',
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hottruth')
    .setDescription('Get spicy truth'),
  async execute(interaction) {
    await interaction.reply(truth[Math.floor(Math.random() * truth.length)]);
  },
};
