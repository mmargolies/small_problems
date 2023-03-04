/* PROBLEM:
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Input: string
Output: boolean, based on whether string is TRUE palindrome

RULES:
  - case insensitive
  - ignore non alphanumerics

Algo:
  - create a new string from the input string
      - during creation, filter values that:
          - are whitespace
          - do not have a UTF value betwen a - z and 1 - 0
  - perform the equality comparison, CASE INSENSITIVE
*/

// UTF values:
// a -> 97
// z -> 122

// 1 -> 48
// 0 -> 57

function filterInvalidChars(string) {
  return [...string.toLowerCase()].filter(char => {

    return (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
           (char.charCodeAt() >= 97 && char.charCodeAt() <= 122);
  }).join('');
}

function isRealPalindrome(string) {
  let validString = filterInvalidChars(string);
  return validString === [...validString].reverse().join('');
}

console.log(isRealPalindrome('madam'));            // true
console.log(isRealPalindrome('Madam'));
// true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));
// true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));           // true
console.log(isRealPalindrome('356a653'));          // true
console.log(isRealPalindrome('123ab321'));         // false

