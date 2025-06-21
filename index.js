const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'your-server-ip-here', // e.g., play.myserver.net
    port: 25565, // Minecraft default port
    username: 'AFK_Bot123', // Change this to your desired bot name
    // password: 'yourpassword' // Uncomment if using a premium account
  });

  bot.on('spawn', () => {
    console.log('✅ Bot spawned and AFK!');
    bot.setControlState('jump', true); // Keeps jumping to prevent AFK kicks
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000); // Reconnect after 5 seconds
  });

  bot.on('error', err => {
    console.log('⚠️ Error:', err.message);
  });
}

createBot();
