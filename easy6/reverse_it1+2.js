// Take a string arg (sentence)
// Return a string w/position of words in starting sentence reversed

const reverseSentence = sentence => sentence.split(' ').reverse().join(' ');

console.log(reverseSentence(''));
// ""
console.log(reverseSentence('Hello World'));
// "World Hello"
console.log(reverseSentence('Reverse these words'));
// "words these Reverse"
//------------------------------------------------------------------------------


/* Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

- word.length > 4, reverse
- words are always space separated
- only letters and spaces
*/
const MIN_LENGTH = 5;

const reverseWord = str => [...str].reverse().join('');

function reverseWords(words) {
  return words.split(' ').map(word => {

    return word.length >= MIN_LENGTH ? reverseWord(word) : word;
  }).join(' ');
}

console.log(reverseWords('Professional'));
// "lanoisseforP"
console.log(reverseWords('Walk around the block'));
// "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));
// "hcnuaL loohcS"