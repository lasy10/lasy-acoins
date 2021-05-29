const discord = require('discord.js');
const database = require('quick.db');

exports.run = async(client, message, args) => {

let banka = database.fetch(`banka.hesap_${message.author.id}`)
if(banka)  return message.channel.send(`💰 \`|\` **${message.author.username}**, zaten bir bankan bulunmakta. İstatistiklerini görmek için: **.bankam**`)

let bankaadı = args.join(" ");
if(!bankaadı) return message.channel.send(`💰 \`|\` **${message.author.tag}**, banka kurmak için bir isim belirlemen gerek, havalı bir isim düşün :thinking:`)

database.set(`banka.hesap_${message.author.id}`, 'var')
database.set(`banka.hesap.adı_${message.author.id}`, bankaadı)
let bankaparası = database.fetch(`banka.para_${message.author.id}`) || 0

const embed = new discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setDescription(`\n💰 \`|\` **${message.author.username}** adlı kullanıcı **${bankaadı}** adında banka kurdu.\n\n💵 \`|\` Bankasındaki toplam para: **${bankaparası}TL**`)
message.channel.send(embed)
client.channels.cache.get("833740727245996043").send(embed)
};

exports.conf = {
    enabled:true,
    guildOnly:false,
    aliases:["banka-kur","bankcreate","createbank"],
    permLevel:0
};

exports.help = {
    name:'bankakur'
}