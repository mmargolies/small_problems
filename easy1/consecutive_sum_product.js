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