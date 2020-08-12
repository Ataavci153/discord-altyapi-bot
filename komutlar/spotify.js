const Discord = required ('discord.js');

export.run = (müşteri, mesaj, parametreler) => {
  const embed = new Discord.RichEmbed ()
 .setAuthor (`Yardım`, client.user.avatarURL)
  .setColor ( "mavi")
  .addField ("Komut yüklendi", `
** blue_small_square: | yasakla: Etiketlediğiniz kişiyi evrudan banlar. (Botlar da çalışmaz.)
: blue_small_square: | bjk: Profil resminizin bjk versionunu atar. (Özelden çalışmaz.)
: blue_small_square: | düello: Etiket türleri ile düelloya girersiniz.
: blue_small_square: | fb: Profil resminizin fb versionunu atar. (Özelden çalışmaz.)
: blue_small_square: | gs: Profil resminizin gs versionunu atar. (Özelden çalışmaz.)
: blue_small_square: | havadurumu: Belirlediğiniz şehirin hava durumunu gösterir.
: blue_small_square: | servericon: Sunucunun resmini gösterir.
: blue_small_square: | istatistik: Botun istatistiklerini gösterir.
: blue_small_square: | A! Oyun-ara: Aramak istediğiniz oyunu arar.
: blue_small_square: | rastgeleşifre: Bot size şifre şifre atar. (Öylesine. XD)
: blue_small_square: | reboot: Botu yeniden başlatır. (Tehlikeli).
: blue_small_square: | reklam-taraması: Kullanıcıların isimlerinde veya durumlarında reklam içeren kelimeler var mı, yok mu tarar.
: blue_small_square: | youtube: Yazdığınız bir YouTube kanalının linkini hem özelden, hemde sunucuda atar.
: blue_small_square: | Sunucunuzu: Sunucunuzu bu botun destek sunucusundaki sunucu-tanıtına atar sunucunuzu.
: blue_small_square: | sunubilgi: Bulunduğunuz sunucu hakkında bilgi verir.
: blue_small_square: | dürbün2: Sunucunuzu sıfırlar ve tekrardan botun ayarlayarak gerekli rolleri, kanalları, kategorileri oluşturarak sunucu kurar.
: blue_small_square: | israf: Wasredlenirsiniz.
: blue_small_square: | yaz: Bota istediğin incelendi.
: blue_small_square: | bulanık: Avatarını bulanık bir şekilde gösterir.
: blue_small_square: | Önek: A! **


`)
.setFooter (`$ {message.author.username} tarafından istendi.`, message.author.avatarURL)
  .setThumbnail (client.user.avatarURL)
  .setTimestamp ()


  return message.channel.sendEmbed (embed);
};

export.conf = {
  etkin: doğru,
  guildOnly: false,
  takma adlar: ["y"],
  permLevel: 0
};

export.help = {
  isim: 'yardım',
  açıklama: '',
  kullanım: 'yardım'
};
