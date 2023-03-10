// inputs: one, valid integer argument (pos, neg, zero)
// output: boolean value

// requirements:
// make a function that takes one integer argument (pos, neg, zero)
// argument will always be a valid integer
// return true if absolute value of number is odd

// data structure:
// variables declared with let
// comparisons

// algorithm:
// if num is negative, make it positive
// perform % 2 operation on input
// if this expression is strictly equal to 1, return it

function isOdd(num) {
  if (num < 0) num *= -1;
  return (num % 2) === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true