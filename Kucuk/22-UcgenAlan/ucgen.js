function hesapla() {
    var taban = parseFloat(document.getElementById("kenar1").value);
    var yukseklik = parseFloat(document.getElementById("kenar2").value);
    document.getElementById("sonuc").innerHTML = taban * yukseklik / 2;
}