const { Client, MessageEmbed } = require('discord.js')
const client = new Client();
const prefix = process.env.BOT_PREFIX
require('dotenv')

client.on('ready', () => {
console.log(`${client.user.tag} has successfully booted up!`)
})

client.on('message', message => {

if (message.content === `${prefix}ping`){
const pingms = message.channel.send(":ping_pong: Pinging...")
pingms.delete();
message.channel.send(`🏓Latency is ${pingms.createdTimestamp - message.createdTimestamp}ms. 
Bot Latency is ${Math.round(client.ws.ping)}ms`)

} else if(message.content === `${prefix}info`) {
  const owner = client.users.cache.get(process.env.BOT_OWNER_ID)
  const infoEmbed = new MessageEmbed();
  .setColor("RANDOM")
  .setDescription(`Hey there! My name is ${client.user.username}! I am a Discord bot that is [easy-to-host](https://github.com/RellyLegend/basic-discord-bot) yourself, I am owned by ${owner} and powered by Relly Developments! My prefix is ${process.env.BOT_PREFIX}! View my commands by typing ${process.env.BOT_PREFIX}help`)
 
} else if(message.content === `${prefix}help`) {
  
  const helpEmbed = new MessageEmbed()
  .setTitle(`${client.user.tag} Commands`)
  .setDescription(`
${prefix}ping - 🏓 Pong!
${prefix}help - View Commands
${prefix}info - Information of this bot.`)
  .setFooter(`Powered by Relly Developments`)
  } 
});
client.login(process.env.BOT_TOKEN)
