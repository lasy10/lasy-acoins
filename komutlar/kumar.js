const { MessageEmbed, Client, Message } = require('discord.js');
const database = require('quick.db');
const moment = require('moment');
moment.locale('tr');
require('moment-duration-format');
exports.run = function(client, message, args) {

let para = database.fetch(`para.${message.author.id}`) || "0"

let kumarparasi = parseInt(args[0])
if(para === 0) return message.channel.send(`💵 \`|\` **${message.author.username}** yetersiz bakiye. :x:`)
if(para < kumarparasi) return message.channel.send(`💵 \`|\` **${message.author.username}** yetersiz bakiye. :x:`)
if(!kumarparasi) return message.channel.send(`💵 \`|\` **${message.author.username}** para miktarı gir. :x:`)

function kumar_oyna(bedel){
    return Math.random() ;
    }
    para = database.fetch(`para.${message.author.id}`);
    bedel = kumarparasi;
    let a =kumar_oyna(bedel);
    if(a < 0.5){
    message.channel.send(`💵 \`|\` **${message.author.username}** kumar oynadı ve kaybetti. :slight_frown:`);
    para+=-bedel;
    }
    else{
    message.channel.send(`💵 \`|\` **${message.author.username}** kumar oynadı ve kazandı. :tada:`);
    para+=(1.5*bedel) - bedel;}

database.set(`para.${message.author.id}`, para)

message.channel.send(`💵 \`|\` **${message.author.username}** adlı kullanıcının güncel parası: **${para}TL**`)

};

exports.conf = {
    enabled:true,
    guildOnly:true,
    aliases:["kumaroyna","kumar-oyna"],
    permLevel:0
};

exports.help = {
    name:'kumar'
};