function hesapla() {
    var sayi11 = document.getElementById("sayi1").value;
    var sayi22 = document.getElementById("sayi2").value;
    var islem = document.getElementById("islem");
    var nesneGoster = document.getElementById("goster");
    if (islem.value == "+") {
        nesneGoster.innerHTML = parseInt(sayi11) + parseInt(sayi22);
    } else if (islem.value == "-") {
        nesneGoster.innerHTML = parseInt(sayi11) - parseInt(sayi22);
    } else if (islem.value == "*") {
        nesneGoster.innerHTML = parseInt(sayi11) * parseInt(sayi22);
    } else if (islem.value == "/") {
        nesneGoster.innerHTML = parseInt(sayi11) / parseInt(sayi22);
    } else {
        nesneGoster.innerHTML = "Tanımlanmayan Operatör";
    }
    // if (islem.value == "+") {
    //     nesneGoster.innerHTML = sayi1 + sayi2;
    // } else if (islem.value == "-") {
    //     nesneGoster.innerHTML = sayi1 - sayi2;
    // } else if (islem.value == "*") {
    //     nesneGoster.innerHTML = sayi1 * sayi2;
    // } else if (islem.value == "/") {
    //     nesneGoster.innerHTML = sayi1 / sayi2;
    // } else {
    //     nesneGoster.innerHTML = "Tanımlanmayan Operatör";
    // }
}
