function hesapla() {

    var sayi = document.getElementById("yaricap").value;

    //text kutusuna girilen değerler metinsel türdedir. Hesaplama yapabilmek için sayıya çeviriyoruz.
    sayi = Number(sayi);

    // Yarıçapı r olan kürenin hacmi (4. π. r*r*r )/ 3
    var hacim = (4 * Math.PI * sayi * sayi * sayi) / 3;

    //ondalıklı kısımda 2 basamak gösterme
    hacim = hacim.toFixed(2);
    alert("Kürenin Hacmi: " + hacim + " birim küp");

}