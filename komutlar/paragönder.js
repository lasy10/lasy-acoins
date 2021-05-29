const discord = require('discord.js');
const database = require('quick.db');

exports.run = async(client, message, args) => {

    let para = database.fetch(`para.${message.author.id}`) || "0"
    
let user = message.mentions.users.first();
if(!user) message.channel.send(`💵 \`|\` **${message.author.username}** para yollamak için birisini etiketlemelisin.`)
let gönderilecekpara = args[1]
if(!gönderilecekpara) return message.channel.send(`💵 \`|\` **${message.author.username}**, para göndermek için miktar gir.`)
if(gönderilecekpara > para) return message.channel.send(`💵 \`|\` **${message.author.username}**, yetersiz bakiye. :x:`)
database.set(`para.${message.author.id}`, -gönderilecekpara)
database.add(`para.${user.id}`, gönderilecekpara)
message.channel.send(`💵 \`|\` **${message.author.username}** adlı kullanıcı **${user.username}** adlı kullanıcıya **${gönderilecekpara}TL** para gönderdi.`)
};

exports.conf = {
    enabled:true,
    guildOnly:true,
    aliases:["send","gönder","paragönder","para-gönder","paraver"],
    permLevel:0
}

exports.help = {
    name:'paragönder'
}