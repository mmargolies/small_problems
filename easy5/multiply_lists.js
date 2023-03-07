/* PROBLEM:
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Input: two arrays of numbers, each being the same length
Output: a NEW array, where each element is the product of the input elements at
        the same indices

Rules:
  Explicit:
    - return a NEW array -- dont mutate
    - inputs are same length
    - elements of the arguments will be numbers
  Implicit:
    - valid input

DATA STRUCT:
  - new array, using map prob?

ALGO:
  Iterating through the first input array, return a new array where each
element is the result of (current element * 2ndInput[currentIndex])
*/

const multiplyList = (arr1, arr2) => arr1.map((ele, idx) => ele * arr2[idx]);

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]