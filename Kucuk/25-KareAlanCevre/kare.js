function hesapla() {
    var kenar = parseFloat(document.getElementById("kenar").value);
    document.getElementById("sonuc").innerHTML = "Alan=" + (kenar * kenar) + "<br>Çevre=" + (kenar * 4);
}