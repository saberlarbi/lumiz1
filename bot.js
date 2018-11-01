const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { //playing
    client.user.setGame(`انا MaX الفله`,'https://www.twitch.tv/faresgameryt');
    client.user.setStatus('Online')
});


client.login("التوكن حقتك");