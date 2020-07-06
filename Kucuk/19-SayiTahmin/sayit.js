var hak;
var sayi;

function baslat() {
  hak = 10;
  sayi = Math.floor(Math.random() * 100);
}

function tahminet(params) {
  var tahmin = Number(document.getElementById("tahmin").value);
  console.log(tahmin);
  var kolay = document.getElementById("kolay").checked;
  var zor = document.getElementById("zor").checked;

  if (kolay == true) {
    if (tahmin != sayi && hak > 0) {
      if (tahmin < sayi) {
        document.getElementById("mesaj").innerHTML =
          "Tahmininiz yanlış. (Yukarı)";
        hak--;
      }
      if (tahmin > sayi) {
        document.getElementById("mesaj").innerHTML =
          "Tahmininiz yanlış. (Aşağı)";
        hak--;
      }
    }
    if (tahmin == sayi) {
      document.getElementById("mesaj").innerHTML = "Tebrikler! Bildiniz.";
    }
    if (hak == 0) {
      document.getElementById("mesaj").innerHTML =
        "Bilemediniz. Oyun bitti. Sayı: " + sayi + " idi.";
    }
  } else if (zor == true) {
    if (tahmin != sayi && hak > 0) {
      document.getElementById("mesaj").innerHTML = "Tahmininiz yanlış.";
      hak--;
    }
    if (tahmin == sayi) {
      document.getElementById("mesaj").innerHTML = "Tebrikler! Bildiniz.";
    }
    if (hak == 0) {
      document.getElementById("mesaj").innerHTML =
        "Bilemediniz. Oyun bitti. Sayı: " + sayi + " idi.";
    }
  }
}
