var liste = [2, 4, 5, 11, 13, 22, -7, 32, 16, -17, 6, 1, 4, 9, -3, 8, 5, 26];

var mak = liste[0];
var min = liste[0];

for (i = 0; i < liste.length; i++) {
  if (liste[i] > mak) {
    mak = liste[i];
  }
  if (liste[i] < min) {
    min = liste[i];
  }
}
document.getElementById("sayilar").innerHTML="min=" + min + " mak=" + mak;
