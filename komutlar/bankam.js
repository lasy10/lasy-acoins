const discord = require('discord.js');
const database = require('quick.db');

exports.run = async(client, message, args) => {
    let bankaparası = database.fetch(`banka.para_${message.author.id}`) || 0
    let bankaadı = database.fetch(`banka.hesap.adı_${message.author.id}`)
let banka = database.fetch(`banka.hesap_${message.author.id}`)
if(!banka) { return message.channel.send(`💰 \`|\` **${message.author.username}**, her hangi bir bankan yok! Banka kurmak için: **.bankakur <banka adı>**`)
} else {

const embed = new discord.MessageEmbed()
.setAuthor(`${message.author.tag}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setDescription(`💼 \`|\` Banka adı: **${bankaadı}**\n\n💰 \`|\` Bankanda toplamda **${bankaparası}** kadar para var.\n\n💵 \`|\` Bankana para yatırmak için: **.bankayatır <miktar>**`)
message.channel.send(embed)
}

};

exports.conf = {
    enabled:true,
    guildOnly:false,
    aliases:["mybank","banka","banka'm","my-bank"],
    permLevel:0
};

exports.help = {
    name:'bankam'
}