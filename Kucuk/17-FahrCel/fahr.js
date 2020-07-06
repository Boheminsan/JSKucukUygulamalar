function hesapla() {
    var fhrch = document.getElementById("fhrr").checked;
    var celch = document.getElementById("celr").checked;

    if (celch == true) {
        var cel = document.getElementById("input").value;
        var fhr = (parseFloat(cel) - 32) * (5 / 9);
        document.getElementById("sonuc").innerHTML = fhr + " celcius";

    } else if (fhrch == true) {
        var fhr = document.getElementById("input").value;
        var cel = (parseFloat(fhr) * (9 / 5)) + 32;
        document.getElementById("sonuc").innerHTML = cel + " fahrenheit";
    } else {
        document.getElementById("sonuc").innerHTML = "Bir hata oluştu!";
    }
}