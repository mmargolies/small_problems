/* PROBLEM:
Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Input: Non-neg integer
Output: String version of that integer

Rules:
  Explicit:
    - No conversion functions
    - No conversion w/coercion e.g. '' + 3
  Implicit:
    - Always valid input
  */

// How to make use of the % operator here?


console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"