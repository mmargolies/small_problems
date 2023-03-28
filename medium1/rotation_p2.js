/*
PROBLEM:
Write a function that rotates the last count digits of a number. To perform the
rotation, move the first of the digits that you want to rotate to the end and
shift the remaining digits to the left.

Input: A number, the 'count' where the rotation will occur
Output: The input number with the appropriate digit 'rotated'

Rules:
- a rotation consists of moving the first of the digits to be rotated to the end
    (e.g. your number is 1234, count is 2, so you move 3 to the end)
  Implicit:
    - always valid input
    - count > 0 && count <= num.length

DATA STRUCT
  - likely an array, need a structure where digits can be selected individually
    w/o doing any math

ALGO:
  Convert the number to a string. Convert the string into an array. Remove the
  element at the beginning of the 'count' by using the
  length of the array - count. Append this element to the end of the array. Join
  the array back to a string, convert it back to a number, and return it.
*/

function rotateRightmostDigits(num, count) {
  let numArr = [...String(num)];
  let digitArr = numArr.splice(numArr.length - count, 1);

  return Number(numArr.concat(digitArr).join(''));
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);