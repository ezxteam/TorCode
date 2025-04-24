const { Client, GatewayIntentBits } = require('discord.js');

function startBot(token) {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  });

  client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
      message.reply('Pong!');
    }
  });

  client.login(token).catch((err) => {
    console.error('Invalid token:', err);
  });
}

module.exports = { startBot };
