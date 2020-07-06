function alanhesapla(uzun2, kisa2) {
    var uzun = document.getElementById(uzun2).value;
    var kisa = document.getElementById(kisa2).value;
    var alan = uzun * kisa;
    alert("Alanı:\n" + alan);
}

function cevrehesapla(uzun2, kisa2) {
    var uzun = document.getElementById(uzun2).value;
    var kisa = document.getElementById(kisa2).value;
    var cevre = 2 * (+uzun + +kisa);
    alert("Çevresi:\n" + cevre);
}