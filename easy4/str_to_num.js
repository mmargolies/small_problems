/* PROBLEM:
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Input: String of non-signed digits
Output: integer, converted from the input string

Rules:
  Explicit:
    - No built in conversion methods
    - Non-signed input
    - Always base 10
  Implicit:
    - Valid input

DATA STRUCT:
- maybe using an object, where k = num and v = num as string?

ALGO (hilvl):
  Create an object with 10 k/v pairs, where all k's = '0' - '9' and
all v's = 0 - 9. Create a variable to store the output. Create a
variable for multiplying each #, initialized to 1.
Iterating through the input string from right to left (backwards):

  obtain appropriate value from object
  multiply by mult variable
  Multiply mult variable by 10
*/

/* eslint-disable max-lines-per-function */
function stringToInteger(string) {
  const NUMBERS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let output = 0;
  let multiplier = 1;

  for (let idx = (string.length - 1); idx >= 0; idx -= 1) {
    output += ((NUMBERS[string[idx]]) * multiplier);
    multiplier *= 10;
  }

  return output;
}

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

/* LS SOLUTION (after making obj):
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;

  This 'moves the decimal', so to speak, on each iteration, as it
  multiplies the running total by 10, and then adds the curr digit.
*/


function stringToSignedInteger(string) {
  if (string.startsWith('-')) {
    return -stringToInteger(string.slice(1));
  } else if (string.startsWith('+')) {
    return stringToInteger(string.slice(1));
  }

  return stringToInteger(string);
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true