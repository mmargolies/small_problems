/*
PROBLEM:
Write a function that takes a string and returns an object containing the
following three properties:

    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither

You may assume that the string will always contain at least one character.

Input: a string
Output: an object w/the required properties

Rules:
  Explicit:
    - string.length > 0
    - Object should always have the three properties (lower, upper, neither)
  Implicit:
    - string can have any type of character
    - numbers should be rounded to two decimal places
    - numbers should be represented as a string
    - whitespace characters count towards the percentages

DATA STRUCTURE:
  - Obviously using an object to return needed values
  - Was considering using an array, but don't think i need to bc can iterate
    over strings
  - Likely using some helper functions to make this more readable

ALGO:
- Initialize a variable to an object w/the requsite keys. Values are set to 0.
- Initialize a variable to the length of the input string
- Iterating over the input string:
  - test the current character to see if it is alphabetic:
    - if not, increment 'neither' key
  - if char is alphabetic:
    - test to see if it is lowercase:
      - if so, increment 'lowercase' key
    - increment the 'uppercase' key
- reassign each associated value to (itself/input length * 100).toFixed(2)
*/


// THIS IS A NON - REGEX/MORE 'IMPERATIVE' SOLUTION
// WILL BE RETURNING TO CODE A REGEX BASED SOLUTION (eventually) :)
function charIsAlphabetic(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function charIsLowerCase(char) {
  return char.toLowerCase() === char;
}

function calcPercentages(obj, inputLength) {
  for (const key in obj) {
    obj[key] = (obj[key] / inputLength * 100).toFixed(2);
  }
}

function letterPercentages(str) {
  let length = str.length;
  let resultObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let idx = 0; idx < length; idx += 1) {
    if (!charIsAlphabetic(str[idx])) {
      resultObj.neither += 1;
    } else if (charIsLowerCase(str[idx])) {
      resultObj.lowercase += 1;
    } else {
      resultObj.uppercase += 1;
    }
  }
  calcPercentages(resultObj, length);
  return resultObj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }