const rlSync = require('readline-sync');

function factorial(number) {
  if (number === 1) {
    return number;
  }

  return number * factorial(number - 1);
}

function getReturnNumber() {
  let userNum = parseInt(rlSync.question('Enter an integer over 0: '), 10);

  while ((userNum <= 0) || (userNum % 1 !== 0)) {
    console.log('Please enter a valid integer over 0:');
    userNum = parseInt(rlSync.question(), 10);
  }
  return userNum;
}

function chooseOperation() {
  let operation = rlSync.question('Enter "s" for sum or "p" for product: ');

  while (!['p', 's'].includes(operation.toLowerCase())) {
    console.log('Please choose "p" or "s":');
    operation = rlSync.question();
  }

  operation = operation.toLowerCase();
  return operation;
}

function calcSumOrProduct(operation, userNum) {
  let sumTotal = 0;

  if (operation.toLowerCase() === 's') {
    for (let itr = 1; itr <= userNum; itr += 1) {
      sumTotal += itr;
    }
    console.log(`The sum of integers between 1 and ${userNum} is: ${sumTotal}`);

  } else if (operation.toLowerCase() === 'p') {
    let factTotal = factorial(userNum);
    console.log(`The product of integers between 1 and ` +
    `${userNum} is: ${factTotal}`);
  }
}

function result() {
  let userNum = getReturnNumber();
  let operation = chooseOperation();
  calcSumOrProduct(operation, userNum);
}

result();