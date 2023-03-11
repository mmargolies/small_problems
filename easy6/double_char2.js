/* const VOWELS = ['a','e','i','o','u'];

function isNotConsonant(char) {
  if (
    VOWELS.includes(char)    ||
    char.toLowerCase() < 'a' ||
    char.toLowerCase() > 'z'
  ) return true;

  return false;
}

function doubleConsonants(str) {
  return [...str].map (char => {
    if (isNotConsonant(char)) return char;

    return char + char;
  }).join('');
} */

const CONSONANTS = 'bcdfghjklmnpqrstvwxyz';

function doubleConsonants(str) {
  return [...str].map(char => {
    return CONSONANTS.includes(char.toLowerCase()) ? char + char : char;
  }).join('');
}

console.log(doubleConsonants('String'));
// "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));
// "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));
// "JJullyy 4tthh"
console.log(doubleConsonants(''));
// ""