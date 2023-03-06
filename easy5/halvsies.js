/* PROBLEM:
Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Input: An array :)
Output: An array containing two arrays,
          first arr contains first half of input array
          second arr contains second half of input array

Rules:
  Explicit:
    - If input length is odd, put the longer half in the first nested arr
  Implicit:
    - If the input is empty, return an array containing two empty arrs
    - If the input has only one element, first arr = input second arr = empty
    - No mutation

DATA STRUCT:
  - A new array, to avoid mutating the inputs

ALGO:
  If the input has a length less than two, return an array with a copy of the
input as the first value, and an empty array as the second. Make an output.
Check to see if the length of the input array is even.

If so, push an array,
copied from the input, that spans the starting index to the index = length/2
EXCLUSIVE. Next, push another array to the output that spans the
index = length/2 to the end of the input array. Return the result.

If not, push an array, copied from the input, that spans the starting index to
index = length/2 rounded UP, EXCLUSIVE. Next push another array to the output
that spans the index = length/2 rounded UP to the end of the input. Return
the result.

0 1 2 3 -> length = 4
    first half = starting index - length/2 EXCLUSIVE
    second half = length/2 - end

0 1 2 3 4 -> length = 5
    first half = starting index - ((length/2) rounded UP) EXCLUSIVE
    second half = ((length/2) rounded UP) - end
*/

function halvsies(array) {
  let middleIdx = Math.ceil(array.length / 2);

  return [array.slice(0, middleIdx), array.slice(middleIdx)];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]