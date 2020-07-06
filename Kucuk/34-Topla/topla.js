function topla() {
  var n = parseInt(document.getElementById("sayi").value);
  ////kolay yolu bu
  //document.getElementById('sonuc').innerHTML = n * (n + 1) / 2;
  //zor yolu bu
  var toplam = 0;
  for (let i = 1; i <= n; i++) {
    toplam += i;
  }
  document.getElementById("sonuc").innerHTML = toplam;
}
