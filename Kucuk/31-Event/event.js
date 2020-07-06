function kontrolet(nesne) {
  if (nesne.value % 2 == 0) {
    alert(nesne.value + " sayısı çifttir");
  } else if (nesne.value % 2 == 1) {
    alert(nesne.value + " sayısı tektir");
  } else if (nesne.value) {
    alert(nesne.value + " sayı değildir");
  } else {
    alert(nesne.value + " sayı değildir");
  }
}

function kontrolet2() {
  nesne = parseInt(document.getElementById("mert").value);
  if (nesne % 2 == 0) {
    alert(nesne + " sayısı çifttir");
  } else if (nesne % 2 == 1) {
    alert(nesne + " sayısı tektir");
  } else if (nesne) {
    alert(nesne + " sayı değildir");
  } else {
    alert(nesne + " sayı değildir");
  }
}
