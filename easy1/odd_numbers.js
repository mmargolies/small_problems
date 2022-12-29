// input: none?
// output: all odd numbers from 1 to 99, inclusive

// requirements:
// log each number to the console on a seperate line
// inclue both 1 and 99

// edge cases:
// logging both 1 and 99

// data structure:
// a loop

// algorithm:
// Using a for loop, initialize iterator to 1, stopping condition to <= 99,
// and increment the iterator += 2
// We don't have to check if the current iterator value is odd if we start
// with an odd number and skip evens with our incrementing

/* for (let i = 1; i <= 99; i += 2) {
  console.log(i);
} */

// further exploration: 
// input: a user supplied number

// output: all odd #'s from 1 to user supplied #, inclusive

// requirements:
// use a different approach than above

// edge cases:
// user provides a negative number
// '' zero
// '' float
// '' 1 as their input
// '' an even number

// data structure:
// while loop
// if/else conditionals

// algo:
// require readline sync for input
// log a greeting and explanation of what the program will do to the console
// ask user for input and initialize a variable with user's input
// convert input to number type
// enter if/else if conditional
// if users input is not a number, exit conditional
// if users input is greater than zero, enter a while loop that logs all odds from 1 to user #
// if users number is zero or negative, enter a seperate conditional & loop

const rlSync = require('readline-sync');

console.log('Lets log some odd numbers starting from 1!')

let userInput = rlSync.question('What number would you like to end on? ')
userInput = Number(userInput);

let iterator = 1;

if ((userInput === Infinity) || (userInput === -Infinity)) {
  console.log('Please provide a valid input.');

} else if (userInput > 0) {
  while (iterator <= userInput) {
    console.log(iterator);
    iterator += 2;
  }
} else {
  while (iterator >= userInput) {
    console.log(iterator);
    iterator -= 2;
  }
}