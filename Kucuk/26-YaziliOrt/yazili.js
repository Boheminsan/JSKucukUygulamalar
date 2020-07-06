function hesapla() {
    var vize1 = parseInt(document.getElementById("vize1").value);
    var vize2 = parseInt(document.getElementById("vize2").value);
    var final = parseInt(document.getElementById("final").value);
    if (vize1 > 100 || vize2 > 100 || final > 100 || vize1 < 0 || vize2 < 0 || final < 0) {
        alert("lütfen 0 ile 100 arasında bir not giriniz.")
    } else {
        var not = (vize1 + vize2 + final) / 3;
        var sonuc;
        if (not >= 50) {
            sonuc = "Geçti";
        } else {
            sonuc = "Kaldı"
        }
        document.getElementById("sonuc").innerHTML = sonuc;

    }
}