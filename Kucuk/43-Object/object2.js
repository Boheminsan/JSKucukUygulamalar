var Uye = function() {
    var isim;
    var soyisim;
    this.yas = 26;

    this.setIsim = function(v) {
        isim = v;
    }
    this.getIsim = function() {
        return isim;
    }
    this.setSoyisim = function(v) {
        soyisim = v;
    }
    this.getSoyisim = function() {
        return soyisim;
    }
    this.adSoyad = function() {

        return isim + " " + soyisim;
    }
}

function kaydet(isim, soyisim, yas) {
    var Uye1 = new Uye();

    Uye1.setIsim(isim);
    Uye1.setSoyisim(soyisim);

    /*this anahtarı ile tanımlanan değişken doğrudan çarılıyor.*/
    Uye1.yas = yas;
    document.write(Uye1.adSoyad());
    document.write("<br>");
    document.write(Uye1.getIsim() + " ");
    document.write("<br>");
    document.write(Uye1.yas);
}
kaydet("Batuhan", "Aktaş", 26);