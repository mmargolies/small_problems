/* PROBLEM:
Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Input: 6 numbers, obtained from user input
Output: A string, describing if the 6th number is among the first 5

RULES:
  Explicit:
      - Numbers are obtained from the user
      - Obtain only 6 numbers
      - Must log a message w/answer
  Implicit:
      - The user should ONLY input NUMBERS
      - Don't comma seperate them in output? But that looks UGLY
        so I'm gonna comma separate.

DATA STRUCTURE:
  - An array, which could be used to store user inputs and/or check
    the 6th input against

Algo:
  - Import readline-sync
  - Create an array to store the users numbers
  - Solicit the user for a number
  - Append the number to the array
  - Repeat previous two steps until 6 numbers have been gathered
  - Check if the 6th number is included in the previous 5
  - Return the appropriate message based on the result of the
    previous step

MINI ALGO ---- getting # from the user
  - use appropriate method to prompt user for #
  - return the number

*/
const rlSync = require('readline-sync');

let userNumbers = [];

function getNumber(iteration) {
  return Number(rlSync.question(`Enter the ${iteration} number: `));
}

userNumbers.push(getNumber('1st'));
userNumbers.push(getNumber('2nd'));
userNumbers.push(getNumber('3rd'));
userNumbers.push(getNumber('4th'));
userNumbers.push(getNumber('5th'));

let searchNum = (getNumber('Last'));

if (userNumbers.includes(searchNum)) {
  console.log(`The number ${searchNum} appears in ${userNumbers.join(', ')}`);
} else {
  console.log(`The number ${searchNum} does not appear in ` +
  `${userNumbers.join(', ')}`
  );
}

/* EXAMPLES:
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23. */

// FUTHER EXPLORATION:
// Change the following function to use Array.protype.some

function isIncludedOld(arr, val) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] > val) {
      return true;
    }
  }

  return false;
}

function isIncluded(arr, val) {
  return arr.some(ele => ele > val);
}

console.log(isIncluded(userNumbers, 3));