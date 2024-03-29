/* PROBLEM:
Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3,
and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in
JavaScript, such as String(), Number.prototype.toString, or an expression such
as '' + number. Your function should do this the old-fashioned way and
construct the string by analyzing and manipulating the number.

Input: Non-neg integer
Output: String version of that integer

Rules:
  Explicit:
    - No conversion functions
    - No conversion w/coercion e.g. '' + 3
  Implicit:
    - Always valid input

ALGO:
- Create a lookup table (array) containing 0-9 as strings
- initialize a variable to store the string
- enter a do while loop
- get the 1's place by doing input % 10, store in variable
- access the lookup table with the remainder (1's place) and add to string
- reassign input number to rounded down result of input / 10
- do this while input number is > 0
*/

// How to make use of the % operator here?

const STRING_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let str = '';

  do {
    let remainder = num % 10;
    str = STRING_NUMBERS[remainder] + str;
    num = Math.floor(num / 10);
  } while (num > 0);

  return str;
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"