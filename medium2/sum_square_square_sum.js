/*
Write a function that computes the difference between the square of the sum of
the first count positive integers and the sum of the squares of the first count
positive integers.

Input: 'count', defining a range of numbers (e.g. 5 -> 1, 2, 3, 4, 5)
Output: a number, the difference between the sum of the range squared,
        and the sum of each number in the range squared

Rules:
  - integer input/valid input always

DATA STRUCT:
  - Going sicko mode here and using an array for the count/range

ALGO:
  - Create an array containing the range
  - reduce the array, summing everything together, store in variable
    - square/reassign variable to itself
  - Do the same operation, but this time sum everything while squaring each ele
  - return the difference of the two variables
*/

function createRangeArray(num) {
  return [...Array(num)].map((_ele, idx) => idx + 1);
}

function sumSquareDifference(num) {
  let rangeArray = createRangeArray(num);

  let summedSquared = (rangeArray.reduce((acc, cur) => cur + acc)) ** 2;
  let eachSquaredSummed = rangeArray.reduce((acc, cur) => acc + (cur ** 2), 0);

  return summedSquared - eachSquaredSummed;
}

console.log(sumSquareDifference(3));
// 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));
// 2640
console.log(sumSquareDifference(1));
// 0
console.log(sumSquareDifference(100));
// 25164150