var tuval = document.getElementById("tuval");
var cizim = tuval.getContext("2d");
var en = tuval.width;
var boy = tuval.height;

function hipotenus() {
  var kenar1 = Number(document.getElementById("kenar1").value);
  var kenar2 = Number(document.getElementById("kenar2").value);
  var hip = Math.sqrt(Math.pow(kenar1, 2) + Math.pow(kenar2, 2));
  document.getElementById("hipotenus").value = hip;
  if (20 * kenar1 + 100 < boy && 50 + 20 * kenar2 < en) {
    temizle();
    cizim.beginPath();
    cizim.moveTo(100, 50);
    cizim.lineTo(100, 50 + 20 * kenar1);
    cizim.lineTo(100 + 20 * kenar2, 50 + 20 * kenar1);
    //cizim.lineTo(400, 400);
    cizim.closePath();
    cizim.stroke();
  } else {
    temizle();
    cizim.fillStyle = "#ff00ff";
    cizim.font = "30px Calibri";
    cizim.fillText("Üçgen çok büyük", 200, 200);
    cizim.stroke();
  }
}

function temizle() {
  cizim.beginPath();
  cizim.fillStyle = "#ffffff";
  cizim.fillRect(0, 0, tuval.width, tuval.height);
  cizim.closePath();
  cizim.fill();
}
