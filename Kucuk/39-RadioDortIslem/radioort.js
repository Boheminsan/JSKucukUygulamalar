function hesapla() {
    document.getElementById("sonuc").innerHTML = "Sonuç: ";
    var sayi1 = parseFloat(document.getElementById("sayi1").value);
    var sayi2 = parseFloat(document.getElementById("sayi2").value);
    var rdtopla = document.getElementById("topla").checked;
    var rdcikar = document.getElementById("cikar").checked;
    var rdcarp = document.getElementById("carp").checked;
    var rdbol = document.getElementById("bol").checked;
    if (rdtopla) {
        var sonucgoster = sayi1 + sayi2;
        document.getElementById("sonuc").innerHTML = "Sonuç: " + sonucgoster;
    } else if (rdcikar) {
        var sonucgoster = sayi1 - sayi2;
        document.getElementById("sonuc").innerHTML = "Sonuç: " + sonucgoster;
    } else if (rdcarp) {
        var sonucgoster = sayi1 * sayi2;
        document.getElementById("sonuc").innerHTML = "Sonuç: " + sonucgoster;
    } else if (rdbol) {
        if (sayi2 != 0) {
            var sonucgoster = sayi1 / sayi2;
            document.getElementById("sonuc").innerHTML = "Sonuç: " + sonucgoster;
        } else {
            document.getElementById("sonuc").innerHTML = "Sıfıra bölme yapamazsınız.";
        }
    } else {
        document.getElementById("sonuc").innerHTML = "Lütfen işlem seçiniz.";
    }
}