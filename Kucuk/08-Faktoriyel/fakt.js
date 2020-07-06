function faktoriyel(sayi2) {
    var sayi = parseInt(document.getElementById(sayi2).value);
    if (sayi >= 0) {
        var carpan = 1;
        for (i = 2; i <= sayi; i++) {
            carpan *= i;
        }
        alert(carpan);
    }
}