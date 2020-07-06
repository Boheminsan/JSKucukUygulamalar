function regkontrol() {
  try {
    var adsoyad = document.getElementById("adsoyad").value;
    var tckn = document.getElementById("tckn");
    console.log(adsoyad, tckn.value);
    if (adsoyad == null) {
      throw "ad soyad boş";
    } else {
      var carta = adsoyad.match(/[^a-zA-Z]/g).join("");
      if (carta != null) {
        throw "Hatalı karakter girdiniz.";
      }
    }
    if (tckn.value == null) {
      throw "tckn boş";
    } else {
      var tckarta = tckn.value.match(/\D/g).join("");
      if (tckarta != null) {
        throw "tckn yanlış";
      }
    }
    if (tckn.value.length < 11) {
      throw "11 karakterden az girdiniz. ";
    }
    if (tckn.value.length > 11) {
      throw "11 karakterden fazla girdiniz. ";
    }
  } catch (e) {
    uyari.textContent = e;
  }
}

function kontrol() {
  var adsoyad = document.getElementById("adsoyad").value;
  var tckn = document.getElementById("tckn");
  try {
    if (isNaN(tckn.value)) {
      throw "Hatalı karakter girdiniz. ";
    }
    if (tckn.value.length < 11) {
      throw "11 karakterden az girdiniz. ";
    }
    if (tckn.value.length > 11) {
      throw "11 karakterden fazla girdiniz. ";
    }
  } catch (e) {
    uyari.textContent = e;
  }
}
