/* PROBLEM:
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Input: array of numbers
Output: a NEW array, where each element is the 'running total' of the og array
        also same # of elements

Rules:
  Explicit:
      - Return a new array
      - New array has same # of elements
  Implicit:
      - array can be empty
      - will always get an array
      - numbers are positive integers

DATASTRUCT:
  A NEW array

Mental Mod:
  If the input array has a length of 1 or less, return a copy if the input array. Create an output array to a copy of the input arrays first element. Iterating through the input array, starting on the 2nd element, push the (current element + the previous element) to the output array, stopping after the last element. Return the output array.

Algo:
  - IF input array length < 2
    - RETURN copy of input

  - SET running = copy of input

  - FOR every element starting on 2nd element of input, idx < input.length
      - append (current element + previous element) to running

  - RETURN running
    */

/* function runningTotal(array) {
  if (array.length < 2) return array.slice();

  let running = [array[0]];
  for (let idx = 1; idx < array.length; idx += 1) {
    running.push(array[idx] + running[idx - 1]);
  }

  return running;
} */

function runningTotal(array) {
  let sum = 0;

  return array.map(ele => ele + sum);
}

console.log(runningTotal([2, 5, 13]),             // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]),    // [14, 25, 32, 47, 67]
  runningTotal([3]),                    // [3]
  runningTotal([]));                 // [])