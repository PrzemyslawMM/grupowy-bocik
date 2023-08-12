const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  Events,
  Collection,
} = require('discord.js');

const commands = [require('./commands/nowy'), require('./commands/ile')];

require('dotenv').config();

console.log('-----------------------');
const TOKEN = process.env.TOKEN_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

const commandsForRefresh = [];

// eslint-disable-next-line no-restricted-syntax
for (const command of commands) {
  client.commands.set(command.data.name, command);
  commandsForRefresh.push({
    name: command.data.name,
    description: command.data.description,
    execute: command.execute,
    options: command.data.options,
  });
}

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in!`);
});

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commandsForRefresh,
    });

    console.log('Successfully reloaded application (/) commands.');
    await client.login(TOKEN);
  } catch (error) {
    console.error(error);
  }
})();

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});
