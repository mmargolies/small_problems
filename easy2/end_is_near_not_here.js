/* Write a function that returns the next to last word in the
String passed to it as an argument.
Words are any sequence of non-blank characters.
You may assume that the input String will always contain at least two words. */

function penultimate(string) {
  let list = string.split(' ');
  return list[list.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// FURTHER EXPLORATION

function middleWord(string) {
  let phrase = String(string).trim().split(' ');
  let medianIndex = Math.floor(phrase.length / 2) // this obtains the median 
                                                  // index of our 'phrase' array
  if (phrase.length <= 1) return 'Invalid input!';
  else if (phrase.length % 2 === 1) {
    return phrase[medianIndex];
  } else {
    return phrase[medianIndex - 1] + ' ' + phrase[medianIndex]
  }
}