/*
PROBLEM:
Write a function that takes an integer as an argument and returns the maximum
rotation of that integer.

Input: number
Output: the input number after being maximally rotated

Rules:
- The 'maximum rotation' is defined as rotating each digit, starting from
  the first digit, to the end of the number, until you have rotated the
  penultimate digit.
    Implicit:
      - Always valid input
      - no leading zeros

DATA STRUCTURE:
- likely an array, again, especially bc using function from prev exercise

ALGO:
- Initialize a variable to the input num called currentRotation
- initialize a for loop
  - iterator is the length of the input num (you'll have to convert to string)
  - condition is iterator > 1
  - increment is -= 1

  - call rotateRightMostDigits with currentRotation and iterator as arguments
  - reassign currentRotation to the above function call
- return currentRotation
*/

function rotateRightmostDigits(num, count) {
  let numArr = [...String(num)];
  let digitArr = numArr.splice(numArr.length - count, 1);

  return Number(numArr.concat(digitArr).join(''));
}

function maxRotation(num) {
  let numLength = String(num).length;

  for (let itr = numLength; itr > 1; itr -= 1) {
    num = rotateRightmostDigits(num, itr);
  }

  return num;
}

console.log(maxRotation(735291) === 321579); //
console.log(maxRotation(3) === 3); //
console.log(maxRotation(35) === 53); //
console.log(maxRotation(105) === 15); // -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845); //