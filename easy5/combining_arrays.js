/* PROBLEM:
Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Input: two arrays
Output: an array consisting of all values, excluding duplicates, from the inputs

Rules:
  Explicit:
      - Both arguments always arrays
      - No duplicates
  Implicit:
      - mutation ok?
      - array length is the same?

DATA STRUCTURE:
  - either an intermediary array or one of the input arrays (if mutating)

ALGO:
  Iterate through the 'second' input. On each iteration, check if the current
element is present in the 'first' input. If not, append the current element to
the 'first' array. Return the first array.
*/

// Without mutating:

function union(firstArr, secondArr) {
  let output = firstArr.slice();
  secondArr.forEach(ele => {
    if (!firstArr.includes(ele)) output.push(ele);
  });

  return output;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]