describe('Merge Sort', function () {
  it('handles an empty array', function () {
    expect(mergeSort([])).toEqual([]);
  });

  it('correctly sorts an array', function () {
    let array = [7, 1, 4, 54, 7, 1, 4, 54, 3, 2];
    let array2 = [1, 6, 2, 3, 4, 3, 6];
    expect(mergeSort(array)).toEqual([1, 1, 2, 3, 4, 4, 7, 7, 54, 54]);

    expect(mergeSort(array2)).toEqual(array2.sort());
  }); //toDeepEqual


  it('handles already sorted arrays', function () {
    let sortedArray = [1, 2, 3, 4, 5, 6, 7, 10];
    expect(mergeSort(sortedArray)).toEqual(sortedArray);
  });

  it('handles an array of one element', function () {
    let oneElement = [3];
    expect(mergeSort(oneElement)).toEqual(oneElement);
  });

  it('handles arrays of strings', function () {
    let stringArray = ['it', 'sorts', 'off', 'of', 'character code'];
    expect(mergeSort(stringArray)).toEqual(stringArray.sort());
  })


});
