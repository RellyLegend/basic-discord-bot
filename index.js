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
message.channel.send(`🏓Latency is ${pingms.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)

} else if(message.content === `${prefix}info`)
  const infoEmbed = new MessageEmbed();
  .setColor("RANDOM")
  .setDescription(`Hey there! My name is ${process.env.BOT_NAME}! I am a Discord bot that is [easy-to-hosthost](https://github.com/RellyLegend/basic-discord-bot) yourself, I am owned by ${process.env.BOT_OWNER} and created in the Relly Developments! My prefix is ${process.env.BOT_PREFIX}! View my commands by typing ${process.env.BOT_PREFIX}help`)
});

client.login(process.env.BOT_TOKEN)
