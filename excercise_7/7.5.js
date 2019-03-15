function Sort(array) {
    let output = false;

    while (!output) {
      output = true;

      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          output = false;

          let control = array[i - 1];
          array[i - 1] = array[i];
          array[i] = control;
        }
      }
    }
  
    return array;
  }
  
  let numbersArray = [45,80,66,74,37,21,3,11];
  Sort(numbersArray);
  console.log(numbersArray);