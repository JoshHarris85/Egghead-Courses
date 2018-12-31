const { printArray } = require('../utils');

// Bubble Sort
// ________________________
// Loop through the array
// If this item > next item, swap them
// Indicate a swap occurred
// If a swap occurred, loop through the array again
// Continue looping until no swaps occur

function bubbleSort(array) {
  let swapped = false;

  do {
    swapped = false;

    array.forEach((item, index) => {
      if (item > array[index + 1]) {
        printArray(array);
        const temp = item;

        array[index] = array[index + 1];
        array[index + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped)

  return array;
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

bubbleSort(numbers);
