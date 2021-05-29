const discord = require('discord.js');
const database = require('quick.db');

exports.run = async(client, message, args) => {

    let para = database.fetch(`para.${message.author.id}`) || 0
    let çalıntıpara = database.fetch(`çalıntıpara.${message.author.id}`) || 0

    const çalıntıparalar = ["0","0","0","0","25","30","40","70","100","130","150","180","200","210","250","300","500","340","370","400","423","123","623","584","952","768","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"]

    const calintiparaeklenecek = Math.floor(Math.random() * ((çalıntıparalar).length));
    
let toplampara = para+çalıntıpara

database.add(`çalıntıpara.${message.author.id}`, calintiparaeklenecek)
database.add(`para.${message.author.id}`, calintiparaeklenecek)
let calnt = çalıntıpara+calintiparaeklenecek

    const embed = new discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setDescription(`💰 \`|\` **${message.author.tag}** adlı kullanıcı bankadan **${calintiparaeklenecek}TL** kadar para çalmayı başardı.\n\n💳 \`|\` **${message.author.tag}** adlı kullanıcının toplamda **${toplampara}TL** parası oldu.\n\n💵 \`|\` Parası: **${calnt}TL**, Çalıntı: **${calintiparaeklenecek}TL**`)
message.channel.send(embed)
};

exports.conf = {
    enabled:true,
    guildOnly:true,
    permLevel:0,
    aliases:["para-çal","çal","pçal"],
    cooldown:10
};

exports.help = {
    name:'paraçal'
}