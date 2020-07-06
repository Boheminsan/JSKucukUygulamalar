function degistir() {
    for (let sayi = 0; sayi < 10; sayi++) {
        var yazi = 'Batuhan';
        document.getElementById('yazdir').innerHTML += sayi + '<br>';
        document.getElementById('yazdir2').innerHTML += yazi + '<br>';
    }
    for (var sayilar = 0; sayilar < 50; sayilar++) {
        if (sayilar % 2 == 0) {
            document.getElementById('yazdir3').innerHTML += sayilar + '<br>';
        }
    }
    for (var sayilar = 0; sayilar < 100; sayilar++) {
        if (sayilar % 3 == 0 && sayilar % 5 == 0) {
            document.getElementById('yazdir4').innerHTML += sayilar + '<br>';
        }
    }
}

var sayilar = [];


function farkliyazdir() {
    var chb = document.getElementById('buyut').checked;
    if (chb == true) {
        document.getElementById('kackere').value = 6;
        document.getElementById('kackere').disabled = true;
    } else {
        document.getElementById('kackere').disabled = false;
    }
}

function yazdirgelsin() {
    document.getElementById('yazdir5').innerHTML = "";
    var yazi = document.getElementById('metin').value;
    var sayi = parseInt(document.getElementById('kackere').value);
    var chb = document.getElementById('buyut').checked;
    if (chb == true) {
        for (let buyu = 1; buyu <= 6; buyu++) {
            document.getElementById('yazdir5').innerHTML += '<h' + (7 - buyu) + '>' + yazi + '</h' + (7 - buyu) + '><br>';
        }
    } else {
        for (let kac = 0; kac < sayi; kac++) {
            document.getElementById('yazdir5').innerHTML += yazi + '<br>';
        }
    }
}

function yazdirgelsin2() {
    document.getElementById('yazdir5').innerHTML = "";
    var yazi = document.getElementById('metin').value;
    var sayi = parseInt(document.getElementById('kackere').value);
    var chb = document.getElementById('buyut').checked;
    if (chb == true) {
        for (let buyu = 1; buyu <= 6; buyu++) {
            document.getElementById('yazdir5').innerHTML += '<h' + (7 - buyu) + '>' + yazi + '</h' + (7 - buyu) + '><br>';
        }
    } else {
        for (let kac = 0; kac < sayi; kac++) {
            document.getElementById('yazdir5').innerHTML += "<span style='font-size:" + kac + 5 + "px;'>" + yazi + "</span><br/>";
        }
    }
}