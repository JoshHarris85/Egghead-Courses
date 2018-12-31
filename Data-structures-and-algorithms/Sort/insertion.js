const { printArray } = require('../utils');

// Insertion Sort
// ________________________
// Uses nested loops
// Assumes a sorted list of length 1
// Compares the next item, and inserts it before
// or after depending on the comparison

function insertionSort(array) {
  let i;
  let j;

  for (i = 1; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      printArray(array);
      if (array[i] < array[j]) {
        const [item] = array.splice(i, 1);
        array.splice(j, 0, item);
      }
    }
  }

  printArray(array)
  return array;
}


let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

insertionSort(numbers);
