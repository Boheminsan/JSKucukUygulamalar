function bolenler(sayi) {
    var bolenler = [];
    for (var i = 1; i <= sayi / 2; i++) {
        if (sayi % i == 0) {
            bolenler.push(i);
        }
    }
    return bolenler;
    //document.getElementById("muk").innerHTML = bolenler;
}

function topla(dizi) {
    var toplam = 0;
    dizi.forEach(element => {
        toplam += element;
    });
    return toplam;
}

function mukemmelsayi() {
    document.getElementById("muk").innerHTML = "";
    var sayi = parseInt(document.getElementById("text").value);
    var bolen = bolenler(sayi);
    console.log(bolen);
    var toplam = topla(bolen);
    console.log(toplam);
    if (toplam == sayi) {
        document.getElementById("muk").innerHTML = "Bu sayı mükemmel sayıdır.";
    } else {
        document.getElementById("muk").innerHTML = "Bu sayı mükemmel değildir.";
    }
}