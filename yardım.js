const Discord = require('discord.js');

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
 .setAuthor(`Yardım`, client.user.avatarURL)
  .setColor("BLUE")
  .addField("Komut Kategorileri",`
**blue_small_square: | yasakla : Etiketlediğiniz kişiyi sunucudan banlar. (Botlar da çalışmaz.)
:blue_small_square: | bjk : Profil resminizin bjk versionunu atar. (Özelden çalışmaz.)
:blue_small_square: | düello : Etiketlediğiniz kişi ile düelloya girersiniz.
:blue_small_square: | fb : Profil resminizin fb versionunu atar. (Özelden çalışmaz.)
:blue_small_square: | gs : Profil resminizin gs versionunu atar. (Özelden çalışmaz.)
:blue_small_square: | havadurumu : Belirlediğiniz şehirin hava durumunu gösterir.
:blue_small_square: | servericon : Sunucunun resmini gösterir.
:blue_small_square: | istatistik : Botun istatistiklerini gösterir.
:blue_small_square: | A!oyun-ara : Aramak istediğiniz oyunu arar.
:blue_small_square: | rastgeleşifre : Bot size rastgele şifre atar. (Öylesine. XD)
:blue_small_square: | reboot : Botu yeniden başlatır. (Tehlikeli.)
:blue_small_square: | reklam-taraması : Kullanıcıların isimlerinde veya durumlarında reklam içeren kelimeler var mı, yok mu tarar.
:blue_small_square: | youtube : Yazdığınız bir YouTube kanalının linkini hem özelden, hemde sunucuda atar.
:blue_small_square: | sunucutanıt : Sunucunuzu bu botun destek sunucusundaki sunucu-tanıt kanalına atar sunucunuzu.
:blue_small_square: | sunubilgi : Bulunduğunuz sunucu hakkında bilgi verir.
:blue_small_square: | sunucukur2 : Sunucunuzu sıfırlar ve tekrardan botun ayarlarını ayarlayarak gerekli rolleri, kanalları, kategorileri oluşturarak sunucu kurar.
:blue_small_square: | wasted : Wasredlenirsiniz.
:blue_small_square: | yaz : Bota istediğin şeyleri yazdırırsın.
:blue_small_square: | bulanık : Avatarını bulanık bir şekilde gösterir.
:blue_small_square: | Prefix: A!**


`)
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setTimestamp()


  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};
