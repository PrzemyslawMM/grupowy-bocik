const { SlashCommandBuilder } = require('discord.js');

const dare = [
  'Pull a moonie.',
  'Attempt to break dance for 30 seconds.',
  'Serenade the person to your right.',
  'Dance like your life depends on it with no music for 2 whole minutes.',
  'Give a personalised insult to everyone in the room.',
  'Tell everyone your most embarrassing story about yourself.',
  'Show the most embarrassing photo on your phone.',
  'Attempt to impersonate everyone in the room.',
  'Let the group text your mum on your phone something embarrassing.',
  'Quack like a duck until your next turn.',
  'Call a random phone number and talk to them for as long as you can.',
  'Close your eyes, sit on someone’s lap and guess who it is.',
  'Argue with a wall and pretend like it talks back for one minute.',
  'Call one of your parents and tell them you’ve pooped today.',
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hotdare')
    .setDescription('Get spicy dare'),
  async execute(interaction) {
    await interaction.reply(dare[Math.floor(Math.random() * dare.length)]);
  },
};
