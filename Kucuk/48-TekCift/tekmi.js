function tekcift() {
    var sayi = parseInt(document.getElementById("sayi").value);
    if (sayi % 2 == 0) {
        alert(sayi + " sayısı çifttir");
    } else if (sayi % 2 == 1) {
        alert(sayi + " sayısı tektir");
    } else if (sayi) {
        alert(sayi + " sayı değildir");
    } else {
        alert(sayi + " sayı değildir");

    }
}