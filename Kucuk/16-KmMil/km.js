function hesapla() {
    var kmch = document.getElementById("kmr").checked;
    var mch = document.getElementById("milr").checked;

    if (kmch == true) {
        var km = document.getElementById("input").value;
        var mil = parseFloat(km) / 1.6;
        document.getElementById("sonuc").innerHTML = mil + " mil";
    } else if (mch == true) {
        var mil = document.getElementById("input").value;
        var km = parseFloat(mil) * 1.6;
        document.getElementById("sonuc").innerHTML = km + " km";
    } else {
        document.getElementById("sonuc").innerHTML = "Bir hata oluştu!";
    }
}