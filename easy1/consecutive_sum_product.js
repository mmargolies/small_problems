// requirements
// integers over 0
// implied that you should validate the input

// inputs:
// user supplied integer, selection of sum or product
// outpus:
// sum or product of nums from 1 to user choice

// examples:
// 1 -> 1, regardless of s or p
// 6p -> 720
// 5s -> 15

// mental model:
// Ask user for an integer greater than 0, and then validate their input. Keep
// asking until valid. Ask user to choose sum or product, similarly valiate.
// If they choose sum, use a loop to compute the answer. If they choose product,
// use a recursive function (calculating the factorial) to compute the answer.
// Return the final value with the appropriate text.

// algo:
// require rlSync
// declare factorial function, taking one parameter
//    baseline condition is param === 1
//    otherwise return num * factorial(num - 1)
// Ask user for integer, and parseToInt it
// While userNum greater than 0 || userNum % 1 !== 0, ask again
// Ask user for "s" (sum) or "p" (product)
// Let sumTotal = 0
// If user chooses s:
//    Using a for loop, increment through all values from 1 to userNum,
//    adding the current number to the sumTotal each loop.
//    return the value to the user
// If user chooses p:
//    call factorial function with userNum as param and store in factTotal
//    return the value to the user
let rlSync = require('readline-sync');
let sumTotal = 0;

function factorial(number) {
  if (number === 1) {
    return number;
  }

  return number * factorial(number - 1);
}

let userNum = parseFloat(rlSync.question('Enter an integer over 0: '));

while ((userNum <= 0) || (userNum % 1 !== 0)) {
  console.log('Please enter a valid integer over 0:');
  userNum = parseFloat(rlSync.question());
}

let operation = rlSync.question('Enter "s" for sum or "p" for product: ');

while (!['p', 's'].includes(operation.toLowerCase())) {
  console.log('Please choose "p" or "s":');
  operation = rlSync.question();
}

if (operation.toLowerCase === 's') {
  for (let i = 1; i <= userNum; i += 1) {
    sumTotal += i;
  }
  console.log(`The sum of integers between 1 and ${userNum} is: ${sumTotal}`);
} else if (operation.toLowerCase === 'p') {
  let factTotal = factorial(userNum);
  console.log(`The product of integers between 1 and ${userNum} is: ${factTotal}`);
}