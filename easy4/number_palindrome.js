/* PROBLEM:
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Input: Integer
Output: Boolean, based on whether input is palindromic

RULES:
  Implicit:
      - No floats
      - Input is always a number

ALGO:
  - Convert input to string
  - Compare input, as a string, to a reversed version of itself
  - Return comparison result */

const isPalindrome = string => string === [...string].reverse().join('');

const isPalindromicNumber = num => isPalindrome(String(num));


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(0o10));          // true