function negatifmi() {
    var sayi = parseInt(document.getElementById("sayi").value);
    var mesaj = "";
    if (sayi < 0) {
        mesaj = "Sayı negatif.";
    } else if (sayi == 0) {
        mesaj = "Girilen sayi 0.";
    } else if (sayi > 0) {
        mesaj = "Girilen sayı pozitif.";
    } else {
        mesaj = "bir hata oluştu.";
    }
    document.getElementById("nego").innerHTML = mesaj;
}