 //filter metodu kendisine gönderilen fonksiyondan geçen tüm elemanlardan yeni bir dizi oluşturur.

 function buyukSayilar(deger) {
    return deger >= 15;
}

var yeni_dizi = [12, 5, 8, 24, 26, 130, 44].filter(buyukSayilar);
// yeni_dizi degeri: [130, 44]

document.getElementById("hede").innerHTML = yeni_dizi;

//indexOf() metodu kendisine gönderilen parametre ile dizide aramayapıp bulduğu ilk indexi döndürür. eğer dizide yoksa aranan değer -1 değerini çevirir.
var dizi = [2, 9, 9];
dizi.indexOf(2); // 0
dizi.indexOf(7); // -1
dizi.indexOf(9, 2); // 2
dizi.indexOf(2, -1); // -1
dizi.indexOf(2, -3); // 0

 //join() methodu dizideki tüm değerleri belirtilen yapıştırıyıcıya göre birleştirir.

 var meyveler = ["Elma", "Muz", "Üzüm", "Portakal"];

 var dizi1 = meyveler.join(","); //Elma,Muz,Üzüm,Portakal
 var dizi2 = meyveler.join("+"); //Elma+Muz+Üzüm+Portakal

 document.getElementById("meyve1").innerHTML = "join " + dizi1 + "<br> " + dizi2;

 //pop() methodu dizideki son değeri diziden atar.

 var meyveler = ["Elma", "Muz", "Üzüm", "Portakal"];

 var son_meyve = meyveler.pop();
 document.getElementById("meyve2").innerHTML = "pop " + son_meyve;
 //meyveler yeni hali ["Elma", "Muz", "Üzüm"]
 //son_meyve : "Portakal"

  // push() methodu belirtilen elemanları dizinin sonuna ekler.

  var meyveler = ["Elma", "Muz"];
  meyveler.push("Üzüm", "Portakal");
  document.getElementById("meyve3").innerHTML = "push " + meyveler;

  //meyveler yeni hali : ["Elma", "Muz","Üzüm","Portakal"];

  //reverse() methodu diziyi ters çevirir.
  var meyveler = ["Elma", "Muz", "Üzüm", "Portakal"];
  meyveler.reverse();
  document.getElementById("meyve4").innerHTML = "reverse " + meyveler;

  //meyveler yeni hali: ["Portakal","Üzüm","Muz","Elma"]

   //sort() methodu diziyi sıralar.
   var meyveler = ["Elma", "Muz", "Ayva", "Portakal"];

   meyveler.sort();
   document.getElementById("meyve5").innerHTML = "sort " + meyveler;

   //meyveler yeni hali ["Ayva", "Elma", "Muz", "Portakal"]