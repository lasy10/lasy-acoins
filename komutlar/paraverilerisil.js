const discord = require('discord.js');
const database = require('quick.db');

exports.run = async(client, message, args) => {

let user = message.mentions.users.first();
if(!user) return message.reply(`Kimin verilerini silmem gerek, belirtmelisin.`)

let para = database.fetch(`para.${user.id}`) || "0"

let çalıntıpara = database.fetch(`çalıntıpara.${user.id}`) || 0

database.delete(`para.${user.id}`)
database.delete(`çalıntıpara.${user.id}`)
message.channel.send(`💵 \`|\` **${user.username}** kullanıcısının tüm para verileri silindi.`)
};

exports.conf = {
    enabled:true,
    guildOnly:false,
    aliases:["parasil","para-veri-sil"],
    permLevel:4
};

exports.help = {
    name:'paraverisil'
}