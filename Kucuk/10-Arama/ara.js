function Ara() {
    var str = document.getElementById("serdu").innerHTML;
    var konum = str.search("B");
    document.getElementById("arakonum").innerHTML = "B harfinin ilk karşılaşıldığı konum: " + konum;
}