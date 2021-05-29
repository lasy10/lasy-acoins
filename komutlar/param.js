const { MessageEmbed, Client, Message } = require('discord.js');
const database = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require('moment-duration-format');
exports.run = function(client, message, args) {

    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

let para = database.fetch(`para.${user.id}`) || 0
let çalıntıpara = database.fetch(`çalıntıpara.${user.id}`) || 0
let pr = para
let toplampara = para+çalıntıpara
let bankaparası = database.fetch(`banka.para_${message.author.id}`) || 0
const embed = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({ dynamic: true }))
.setDescription(`💵 \`|\` **${user.username}** adlı kullanıcının **${pr}TL** parası var.\n\n💰 \`|\` Toplam **${çalıntıpara}TL** miktarında çalıntı parası var.\n\n💳 \`|\` Toplam **${bankaparası}TL** banka parası bulunmakta.`)
message.channel.send(embed)
};

exports.conf = {
    enabled:true,
    guildOnly:true,
    aliases:["money","cash","para"],
    permLevel:0
};

exports.help = {
    name:'param'
};