function asalmi() {
    var sayi = document.getElementById('sinput').value;
    var sayac = 0;
    for (i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            sayac++;
        }
    }
    if (sayac == 0) {
        alert(sayi + " asaldır");
    } else {
        alert(sayi + " asal değil.");
    }
}