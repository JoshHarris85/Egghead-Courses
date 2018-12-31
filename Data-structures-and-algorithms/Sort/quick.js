const { printArray } = require('../utils');

// Quick Sort

// Recursive
// We receive an array and pick a "pivot"
// Items are compared to the pivot
// If an item is less than the pivot
// put it in the 'left' array, else into the 'right'
// array. Return the array resulting from quickSort
// called on the left, the pivot, and quicksort on the right

function quickSort(array) {
  printArray(array);

  if (array.length < 2) {
    return array;
  }

  const pivotIndex = array.length - 1;
  const pivot = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < pivotIndex; i++) {
    const currentItem = array[i];

    currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
  }

  const result = [...quickSort(left), pivot, ...quickSort(right)];

  printArray(result);

  return result;
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

quickSort(numbers);
