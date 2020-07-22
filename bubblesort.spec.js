describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([], comparator)).toEqual([]);
  });

  it('correctly sorts an array', function () {
    let array = [7, 1, 4, 54, 7, 1, 4, 54, 3, 2];
    let array2 = [1, 6, 2, 3, 4, 3, 6];
    expect(bubbleSort(array, comparator)).toEqual([1, 1, 2, 3, 4, 4, 7, 7, 54, 54]);

    expect(bubbleSort(array2, comparator)).toEqual(array2.sort());
  }); //toDeepEqual


  it('handles already sorted arrays', function () {
    let sortedArray = [1, 2, 3, 4, 5, 6, 7, 10];
    expect(bubbleSort(sortedArray, comparator)).toEqual(sortedArray);
  });

  it('handles an array of one element', function () {
    let oneElement = [3];
    expect(bubbleSort(oneElement, comparator)).toEqual(oneElement);
  });

  it('handles arrays of strings', function () {
    let stringArray = ['it', 'sorts', 'off', 'of', 'character code'];
    expect(bubbleSort(stringArray, comparator)).toEqual(stringArray.sort());
  })

});

