var tarih = new Date();
var yil = tarih.getFullYear();
var ay = tarih.getMonth();
var gun = tarih.getDay();
var saat = tarih.getHours();
var dak = tarih.getMinutes();
var san = tarih.getSeconds();
document.getElementById('tarih').innerHTML = tarih;
document.getElementById('yil').innerHTML = yil;
document.getElementById('ay').innerHTML = ay;
document.getElementById('gun').innerHTML = gun;
document.getElementById('saat').innerHTML = saat;
document.getElementById('dakika').innerHTML = dak;
document.getElementById('saniye').innerHTML = san