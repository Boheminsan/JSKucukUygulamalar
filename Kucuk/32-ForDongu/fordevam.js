function cizdir() {
    document.getElementById('dort').innerHTML = "";
    var kkenar = parseInt(document.getElementById('kken').value);
    var ukenar = parseInt(document.getElementById('uken').value);
    for (let i = 1; i <= kkenar; i++) {
        for (let j = 1; j <= ukenar; j++) {
            if (i > 1 && i < kkenar && j > 1 && j < ukenar) {
                document.getElementById('dort').innerHTML += "&nbsp;";
                document.getElementById('dort').innerHTML += "&nbsp;";
            } else {
                document.getElementById('dort').innerHTML += "*";
            }
        }
        document.getElementById('dort').innerHTML += "<br>";
    }
}