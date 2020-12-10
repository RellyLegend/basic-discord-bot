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

}
});

client.login(process.env.BOT_TOKEN)
