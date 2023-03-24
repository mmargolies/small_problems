const VOWELS = 'aeiouAEIOU';

function removeVowels(arr) {
  return arr.map(str => [...str].filter(char => {
    return !VOWELS.includes(char);
  }).join(''));
}

// iterate over each element
// iterate over the characters of each element
//    if vowel, don't include
// join the characters back to a string

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));
// ["BC", "", "XYZ"]