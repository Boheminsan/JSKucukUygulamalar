var sehirler = ['Ankara', 'Bursa', 'Bolu', 'Rize', 'Eskişehir', 'Adana', 'Çorum', 'Ağrı', 'Gaziantep', 'Aydın', 'Bingöl'];
        var i = 0;
        var text = "";
        while (sehirler[i]) {
            text += sehirler[i] + "<br>";
            i++;
        }
        document.getElementById("sehir").innerHTML = text;