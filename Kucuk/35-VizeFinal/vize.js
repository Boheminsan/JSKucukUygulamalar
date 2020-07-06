function hesapla() {
    var vize = parseInt(document.getElementById("vize").value);
    var final = parseInt(document.getElementById("final").value);
    if (vize > 100 || final > 100 || vize < 0 || final < 0) {
        alert("lütfen 0 ile 100 arasında bir not giriniz.")
    } else {
        var not = (vize * 0.4 + final * 0.6);
        var sonuc;
        if (not >= 50) {
            sonuc = "Geçti";
        } else {
            sonuc = "Kaldı"
        }
        document.getElementById("sonuc").innerHTML = "Notunuz: " + not + "<br>" + sonuc;

    }
}