const Discord = require('discord.js');

exports.run = function(client, message, args) {

    if (!args[0]) {
const embed = new Discord.RichEmbed()
.setTitle(' Yardım Komutları ')
.setDescription('Botun tüm komutları: `A!yardım <komut>` (örn. A!yardım youtube)')
//.addField('Moderasyon', '`a`')
.addField('» Kullanıcı', '`profil`')
.addField('» Bilgi', '`sss`')
//.addField('» ban : Etiketlediğiniz kişiyi sunucudan banlar. (Botlar da çalışmaz.)')
//.addField('» bjk : Profil resminizin bjk versionunu atar. (Özelden çalışmaz.)')
//.addField('» düello : Etiketlediğin kişi ile düelloya girersin.
//.addField('» fb : Profil resminizin fb versionunu atar. (Özelden çalışmaz.)
//.addField('» havadurumu : Belirlediğiniz şehirin hava durumunu gösterir.
//.addField('» gs : Profil resminizin gs versionunu atar. (Özelden çalışmaz.)
//.addField('» servericon : Sunucunun resmini gösterir.
//.addField('» istatistik : Botun istatistiklerini gösterir.
//.addField('» oyun-ara : Aramak istediğiniz oyunu arar.
//.addField('» rastgeleşifre : Bot size şifre atar. (Öylesine. XD)
//.addField('» reboot : Botu yeniden başlatır. (Tehlikeli).
//.addField('» reklam-taraması : Kullanıcıların isimlerinde veya durumlarında reklam içeren kelimeler var mı, yok mu tarar.
//.addField('» youtube : Yazdığınız bir YouTube kanalının linkini hem özelden, hemde sunucuda atar.
//.addField('» sunucuanıt : Sunucunuzu bu botun destek sunucusundaki sunucu-tanıt kanalına atar sunucunuzu. (Bakımda.)
//.addField('» sunubilgi : Sunucu hakkında bilgi verir. (Bakımda.)
//.addField('» yaz : Bota istediğin şeyi yazdırtabilir.
//.addField('» bulanık : Avatarını bulanık bir şekilde gösterir.
//.addField('» wasted : Wasdetlenirsiniz.
//.addField('» Prefix: A!**
//.addField('Bağlantılar', `[Destek Sunucusu](https://discord.gg/CadhRAy) | [Botu sunucuna ekle](https://discord.com/oauth2/authorize?client_id=741370953430466632&scope=bot&permissions=2146958847) | [Botun yapımcısının YouTube kanalı](https://www.youtube.com/channel/UChbWL1A_ornD3QFeDHZYOaw?view_as=subscriber)`)`)
.setFooter(`${client.user.username} | A!yardım <komut> | k!sss`, client.user.avatarURL)
.setColor('BLUE')
.setTimestamp()
message.channel.send(embed)
}

let command = args[0]
        if (client.commands.has(command)) {
        command = client.commands.get(command)
        const embed = new Discord.RichEmbed()
      .addField("Komut", command.help.name, true)
        .addField('Açıklama', command.help.description, true)
            .addField('Kullanım', `!${command.help.usage}`)
            .addField('Alternatifler:', command.conf.aliases[0] ? command.conf.aliases.join(', ') : '`Bulunmuyor`')
      //.addField('Bağlantılar', `[Destek Sunucusu](https://discord.gg/CadhRAy) | [Botu sunucuna ekle](https://discord.com/oauth2/authorize?client_id=741370953430466632&scope=bot&permissions=2146958847) | [Botun yapımcısının YouTube kanalı](https://www.youtube.com/channel/UChbWL1A_ornD3QFeDHZYOaw?view_as=subscriber)`)
      .setTimestamp()
            .setColor("BLUE")
      .setFooter(`${client.user.username} | A!yardım <komut>`, client.user.avatarURL)
        message.channel.send({embed})
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım || A!yardım <komut>'
};
