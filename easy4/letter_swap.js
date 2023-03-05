/* PROBLEM:
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Input: a string of space separated words
Output: copy of the input string with first & last letters of
        each word swapped

Rules:
  Explicit:
    - No leading/trailing/repeated whitespace
    - Every word has at least one letter
    - Every string has as least one word
    - Every string only has words & spaces

  Implicit:
    - preserve case

DATA STRUCT:
  - Likely using an array? Non mutating transformation?

ALGO (hilvl):
  Create an array from the input string, where each element is a word.
Mapping a new array from the word array, create an array where each element
is a word from the previous array, but the first and last letters have been
swapped. Return the final array.

Swapping first/last letters:
  If the word length is 1, return the word. Otherwise:

  Concatenante the last letter of the word + extracted substring from 2nd
  character to penultimate character.
*/

function swap(string) {
  return string.split(' ').map(word => {
    if (word.length === 1) return word;

    return word.slice(-1) + word.slice(1, -1) + word[0];
  }).join(' ');
}

// word.slice(-1) + word.slice(1, -1) + word[0]

console.log(swap('Oh what a wonderful day it is'));
// "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));
// "ebcdA"
console.log(swap('a'));
// "a"