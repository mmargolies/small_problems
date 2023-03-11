/* Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

Input: two integers - 1st = count, 2nd = starting # of a sequence
Output: array containing the sequence, w/length of the count

Rules:
  Explicit:
    - if count = 0, return empty array
    - value of each element is a multiple of the starting number

Algo:
  Create an empty array. Using a loop, add elements to the array until you hit
  the required length. Each element is the count # plus the previous element
*/

function sequence(count, start) {
  let arr = [];

  for (let itr = 1; itr <= count; itr += 1) {
    arr.push(itr * start);
  }

  return arr;
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []