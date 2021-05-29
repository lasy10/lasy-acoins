const discord = require('discord.js');
const database = require('quick.db');

exports.run = async(client, message, args) => {

let banka = database.fetch(`banka.hesap_${message.author.id}`)
if(!banka)  return message.channel.send(`💰 \`|\` **${message.author.username}**, zaten bir bankan yok! Banka kurmak için: **.bankakur <banka adı>**`)
let bankaadı = database.fetch(`banka.hesap.adı_${message.author.id}`)
let bankaparası = database.fetch(`banka.para_${message.author.id}`) || 0

let para = args[0];
if(isNaN(args[0])) return message.channel.send(`💵 \`|\` **${message.author.username}** yatırmak için para miktarı gir.`)

const embed = new discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setDescription(`\n💰 \`|\` **${message.author.username}** adlı kullanıcı **${bankaadı}** isimli bankasına **${para}TL** para yatırdı.\n\n💵 \`|\` Bankasındaki toplam para miktarı: **${bankaparası}TL**`)

database.set(`banka.para_${message.author.id}`, para)
database.delete(`para.${message.author.id}`, -para)

setTimeout(() => {
    message.channel.send(embed)
}, 1200)


};

exports.conf = {
    enabled:true,
    guildOnly:false,
    aliases:["banka-parayatır","parayatır"],
    permLevel:0
};

exports.help = {
    name:'bankayatır'
}