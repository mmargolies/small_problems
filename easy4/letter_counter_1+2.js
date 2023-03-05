/* PROBLEM:
Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

Input: a string of 0 or more space separated words
Output: an object, containing k/v pairs where:
          k = word length as a string
          v = number of words that are k length

Rules:
  Explicit:
      - words = space separated NON-SPACE chars
      - return an object

  Implicit:
      - return empty obj for empty string
      - always getting a string

Mental Model
  If the input is an empty string, return an empty obj. Otherwise:

  Create an output object. Create an array of words from the input, and create
  an array where each element = word length as STRING. Looping through the
  array of word lengths:

  Is there a key on the output object that is the same as the current element?
  If not, make a k/v pair and set word length: 1
  If so, set the word length: word length + 1
*/

const wordSizesWithSymbols = words => words.split(' ').reduce((obj, word) => {
  if (!words) return {};

  let wordLength = word.length;
  obj[wordLength] = (obj[wordLength] || 0) + 1;

  return obj;
}, {});

// FIRST SOLUTION:
/* function wordSizes(words) {
  if (words === '') return {};

  let totalLengths = {};
  let lengthArr = words.split(' ').map(word => word.length);

  lengthArr.forEach(length => {
    if (!totalLengths[length]) {
      totalLengths[length] = 1;
    } else {
      totalLengths[length] += 1;
    }
  });

  return totalLengths;
} */

// ignoring non alphabetic chars:
const lettersOnly = array => array.map(word => word.replace(/[^a-z]+/gi, ''));

function wordSizes(words) {
  if (words === '') return {};

  let totalLengths = {};
  let lengthArr = lettersOnly(words.split(' '))
                  .map(word => word.length);

  lengthArr.forEach(length => {
    if (!totalLengths[length]) {
      totalLengths[length] = 1;
    } else {
      totalLengths[length] += 1;
    }
  });

  return totalLengths;
}

console.log(wordSizes("What's up doc?"));// { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// { "3": 5, "6": 3 }
console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('')); // {}