const discord = require('discord.js');
const database = require('quick.db');

exports.run = async(client, message, args) => {

let banka = database.fetch(`banka.hesap_${message.author.id}`)
if(!banka)  return message.channel.send(`💰 \`|\` **${message.author.username}**, zaten bir bankan yok! Banka kurmak için: **.bankakur <banka adı>**`)

let bankaadı = database.fetch(`banka.hesap.adı_${message.author.id}`)
let bankaparası = database.fetch(`banka.para_${message.author.id}`) || 0

const embed = new discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setDescription(`\n💰 \`|\` **${message.author.username}** adlı kullanıcı **${bankaadı}** isimli bankasını yıktı.\n\n💵 \`|\` Bankasındaki **${bankaparası}TL** miktarındaki para hesabına aktarıldı.`)

database.set(`para.${message.author.id}`, bankaparası)
message.channel.send(embed)
client.channels.cache.get("833740727245996043").send(embed)


database.delete(`banka.hesap_${message.author.id}`)
database.delete(`banka.para_${message.author.id}`)
database.delete(`banka.hesap.adı_${message.author.id}`)
};

exports.conf = {
    enabled:true,
    guildOnly:false,
    aliases:["banka-sil","deletebank","bankdelete"],
    permLevel:0
};

exports.help = {
    name:'bankasil'
}