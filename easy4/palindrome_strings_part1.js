/* PROBLEM:
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Input: string
Output: boolean, based on whether input string is a palindrome

RULES:
  - case sensitive
  - ALL characters are relevant (includes whitespace, punctuation, etc)

DATA STRUCT:
  - An array probably? In order to reverse the string and compare OG w/reverse

ALGO:
  - Returning a comparison expression:
    - Left operand:
        - input string
    - Right operand:
        - input string, reversed

MINI ALGO -- reversing a string:
  - create an array with each ele being a character
  - reverse the order of all the elements
  - join the array together to create a string
  - return the string
*/

const isPalindrome = string => string === [...string].reverse().join('');

console.log(isPalindrome('madam'));           // true
console.log(isPalindrome('Madam'));           // false (case matters)
console.log(isPalindrome("madam i'm adam"));  // false (all characters matter)
console.log(isPalindrome('356653'));          // true