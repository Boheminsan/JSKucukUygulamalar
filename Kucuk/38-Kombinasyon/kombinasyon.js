function kombinasyon() {
    a = parseInt(document.getElementById('sayi1').value);
    b = parseInt(document.getElementById('sayi2').value);
    var sonuc = faktoriyel(a) / (faktoriyel(b) * faktoriyel(a - b));
    document.getElementById('sonuc').innerHTML = sonuc;
}

function faktoriyel(sayi) {
    if (sayi > 0) {
        var carpan = 1;
        for (i = 2; i <= sayi; i++) {
            carpan *= i;
        }
        return carpan;
    }
}