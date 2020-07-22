function comparator(a, b) {
  if (a > b) { return -1; }
  if (b > a) { return 1; }
  if (a === b) { return 0; }
}

function mergeSort(array) {
  if (!array[0]) {
    return [];
  }
  let result = [];
  if (array.length === 1) {
    return array;
  } // base case

  let midPoint = Math.ceil(array.length / 2);
  let firstHalf = mergeSort(array.slice(0, midPoint)); // breaking down the input array
  let secondHalf = mergeSort(array.slice(midPoint, array.length));

  let indexLeftMostFirst = 0;
  let indexLeftMostSecond = 0;

  while (indexLeftMostFirst < firstHalf.length && indexLeftMostSecond < secondHalf.length) { // while there are still values to compare
    let leftMostFirst = firstHalf[indexLeftMostFirst];
    let leftMostSecond = secondHalf[indexLeftMostSecond];

    if (leftMostFirst < leftMostSecond) {
      result.push(leftMostFirst); // we're trying to get things in ascending order
      indexLeftMostFirst++;
    } else { // you want to push the smaller value either way
      result.push(leftMostSecond);
      indexLeftMostSecond++;
    }
  }
  return [...result, ...firstHalf.slice(indexLeftMostFirst), ...secondHalf.slice(indexLeftMostSecond)];
}
