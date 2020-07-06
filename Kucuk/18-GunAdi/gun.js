var d = new Date();
var gunler = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
document.getElementById("gun").innerHTML = gunler[d.getDay()];
