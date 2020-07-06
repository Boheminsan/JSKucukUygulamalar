window.onmousemove = function(event) {
    var x = event.clientX; // Get the horizontal coordinate
    var y = event.clientY; // Get the vertical coordinate
    document.getElementById('coor').innerHTML = "X coords: " + x + ", Y coords: " + y;
}