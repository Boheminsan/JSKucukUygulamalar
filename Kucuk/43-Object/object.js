var arac = {
  marka: "Renault",
  model: "Clio",
  yil: 2018,
  renk: "Beyaz",
  yakit: "Dizel",
  saatUcreti: 60,
  ucret: function (sure) {
    var ucretim = this.saatUcreti * sure;
    return ucretim;
  },
};
document.getElementById("bilgi").innerHTML =
  arac.marka +
  " " +
  arac.model +
  " model " +
  arac.yakit +
  " aracın saatlik kiralama ücreti : " +
  arac.saatUcreti;

document.getElementById("detay").innerHTML =
  "Marka      : " +
  arac.marka +
  "<br>" +
  "Model      : " +
  arac.model +
  "<br>" +
  "Model Yılı : " +
  arac.model +
  "<br>" +
  "Renk       : " +
  arac.renk +
  "<br>" +
  "Yakıt Türü : " +
  arac.yakit +
  "<br>" +
  "Saat Ücreti: " +
  arac.saatUcreti +
  "<br>" +
  "Ödenecek tutar:" +
  arac.ucret(4);

var Ogrenci = {
  ad: "Ali",
  soyad: "Pınar",
  adSoyad: function () {
    return this.ad + " " + this.soyad;
  },
};

document.write(Ogrenci.adSoyad());