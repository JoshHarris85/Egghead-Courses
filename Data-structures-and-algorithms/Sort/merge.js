// Merge Sort
// ________________________
// Divides the given array into two halves:
// a left and a right sub array
// Calls mergeSort on these subarrays
// Once we get to arrays that are less than 2 in
// length. We begin to stitch them back together
// We sort as we stitch them up. This leading to our
// sorted array by the time we're all the way back up the stack

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  console.log(array)
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  // [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]
  // [ 10, 5, 6, 3, 2 ] --- [8, 9, 4, 7, 1]
  // [ 10, 5 ], [ 6, 3, 2 ] --- [8, 9], [4, 7, 1]
  // [ 10, 5 ], [ 3, 2 ] --- [8, 9], [7, 1]
  // [10], [5], [3], [2] --- [8], [9], [7], [1]

  // gives [5,10], [2, 3] --- [8, 9], [1, 7]
  // gives [5, 10], [2, 3, 6] --- [8, 9], [1, 4, 7]
  // gives [2, 3, 5, 6, 10] --- [1, 4, 7, 8 ,9]
  // gives [1,2,3,4,5,6,7,8,9,10]

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];

  console.log(`left: ${left}`);
  console.log(`right: ${right}`);

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  console.log(`sorted: ${sorted}`);
  const results = [...sorted, ...left, ...right];
  console.log(`results: ${results}`);

  return results;
}

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

mergeSort(numbers);
