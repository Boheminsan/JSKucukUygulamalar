function kaydir(nesne, zaman) {
    let yaziNesne = document.getElementById('btn');

    setInterval(function() {
        let yazi = yaziNesne.innerHTML;
        let harf = yazi.substring(0, 1);
        let kalan = yazi.substring(1, yazi.length);
        kalan = kalan + harf
        yaziNesne.innerHTML = kalan;
    }, zaman);
}