var renkkod = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"];

function degistir() {
    var renk = uret();
    document.body.style.backgroundColor = renk;
}

function uret() {
    var renk = "#"
    for (let index = 0; index < 6; index++) {
        var rast = Math.floor(Math.random() * 16);
        renk += renkkod[rast];
    }
    return renk;
}