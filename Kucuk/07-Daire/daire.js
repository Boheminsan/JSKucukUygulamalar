function alanhesapla(yaricap2) {
    var yaricap = document.getElementById(yaricap2).value;
    var alan = Math.PI * Math.pow(yaricap, 2);
    alert("Alanı:\n" + alan);
}

function cevrehesapla(yaricap2) {
    var yaricap = document.getElementById(yaricap2).value;
    var cevre = 2 * Math.PI * (yaricap);
    alert("Çevresi:\n" + cevre);
}