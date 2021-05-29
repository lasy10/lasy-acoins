const Discord = require('discord.js');
const database = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require('moment-duration-format');

exports.run = async (client, message, args) => {

    const para = database.fetch(`para.${message.author.id}`)

    if(database.fetch(`günlük.${message.author.id}`) > Date.now()) {
        return message.channel.send(new Discord.MessageEmbed().setTitle('Süren dolmamış!').setDescription('Bir sonra ki günlük ödülünü alabilmek için **'+moment.duration(database.fetch(`daily.${message.author.id}`)-Date.now()).format('w [hafta], d [gün], h [saat], m [dakika], s [saniye]')+'** beklemelisin. 🕛')); 
    } else {
        const eklenecek = Math.floor(Math.random() * 400) + 100;
        database.set(`günlük.${message.author.id}`, Date.now()+require('ms')('24h'));
        database.add(`para.${message.author.id}`, +eklenecek);
        return message.channel.send(new Discord.MessageEmbed().setTitle('Başarılı!').setDescription(`**${eklenecek}** kadar parayı cüzdanına ekledin!\nŞuanki paran: **${para}**TL 💵`));
      };

};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["daily","günlük","günlük-para"],
  permLevel: 0
};
 
exports.help = {
  name: 'daily'
};