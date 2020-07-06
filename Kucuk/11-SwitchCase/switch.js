var d = new Date();
        var n = d.getDay();
        var gunadi = "";

        switch (n) {
            case 1:
                gunadi = "pazartesi";
                break;
            case 2:
                gunadi = "salı";
                break;
            case 3:
                gunadi = "çarşamba";
                break;
            case 4:
                gunadi = "perşembe";
                break;
            case 5:
                gunadi = "cuma";
                break;
            case 6:
                gunadi = "cumartesi";
                break;
            case 0:
                gunadi = "pazar";
                break;
        }
        document.getElementById("gun").innerHTML = gunadi;