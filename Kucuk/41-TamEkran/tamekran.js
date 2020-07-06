function tamekran() {
    var tamek = document.getElementById("tamtam");
    if (tamek.requestFullscreen) {
        tamek.requestFullscreen();
    } else if (tamek.mozRequestFullScreen) {
        /* Firefox */
        tamek.mozRequestFullScreen();
    } else if (tamek.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        tamek.webkitRequestFullscreen();
    } else if (tamek.msRequestFullscreen) {
        /* IE/Edge */
        tamek.msRequestFullscreen();

        tamEkranFonk.call(tamEkranDiv);
    }
}