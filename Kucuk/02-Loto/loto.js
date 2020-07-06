function uret() {
  var liste = [];
  while (liste.length < 6) {
    var r = randomIntFromInterval(1, 49);
    if (liste.indexOf(r) === -1) {
      liste.push(r);
    }
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  bubbleSort = (array) => {
    let swapped = false;
    do {
      swapped = false;
      array.forEach((current, i) => {
        //console.log(array.join(' '))
        if (current > array[i + 1]) {
          const temp = current;
          //console.log(array.join(' '))

          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      });
    } while (swapped);
    //console.log(array.join(' '))
    return array;
  };

  liste = bubbleSort(liste);
  console.log(liste);
  for (let j = 0; j < 6; j++) {
    var sayi = document.getElementById("sayi" + j);
    sayi.value = liste[j];
  }
}
