function comparator(a, b) {
  if (a > b) { return -1; }
  if (b > a) { return 1; }
  if (a === b) { return 0; }
}

function bubbleSort(originalArray, comparator) {
  let array = [];

  // for the case [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }]
  if (typeof array[0] === 'object') {
    array = originalArray.map(object => {
      return Object.values(object)[0];
    })
  } else {
    array = [...originalArray];
  }

  let unSorted = true;
  while (unSorted) {
    unSorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      let comparison = comparator(array[i], array[i + 1]);
      // don't swap unless the comparator returns 1
      if (comparison === 1) {
        unSorted = true;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      } else if (comparison === -1 || comparison === 0) {
        continue; // do nothing if it's sorted in the correct direction
      }
    }
  }
  return array;
}




