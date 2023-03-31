/*
PROBLEM:
A featured number (something unique to this exercise) is an odd number that is
a multiple of 7, with all of its digits occurring exactly once each. For
example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it
is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next
featured number greater than the integer. Issue an error message if there is no
next featured number.

NOTE: The largest possible featured number is 9876543201.

Input: An integer
Output: The next featured number greater than the input integer

Rules:
- A featured number is:
  - a multiple of 7
  - an odd number
  - has no duplicate digits (e.g. 133 has duplicates, two 3's)
- Output an error message if there is no possible featured number
    Implicit:
      - always valid input

DATA STRUCTURE:
- don't need a structure persay, probably a variable to store the number
being evaluated for featured status (lol)

ALGO:
- using a for loop, with the iterator as the input number, incrementing by 7
- check if number is odd
  - if yes, continue
- check for duplicate digits
  - if duplicate, continue
- if current number passes above tests, return the number
*/
const LARGEST_FEATURED = 9876543201;

function hasDupNumber(num) {
  let arr = [...String(num)];
  return arr.some((num, index) => arr.indexOf(num) !== index);
  // returns false if no duplicate
}

function divisBySeven(num) {
  return num % 7 === 0;
}

function numIsOdd(num) {
  return num % 2 === 1;
}

function featured(num) {
  do {
    num += 1;
    if (!numIsOdd(num)) continue;
    if (!divisBySeven(num)) continue;
    if (hasDupNumber(num)) continue;

    return num;
  } while (num <= LARGEST_FEATURED);

  return 'No possible featured number';
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."