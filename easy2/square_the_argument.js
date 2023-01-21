// Using the multiply() function from the "Multiplying Two Numbers" problem,
// write a function that computes the square of its argument (the square is the
// result of multiplying a number by itself).

function multiply(num1, num2) {
  return num1 * num2;
}

function square(num) {
  return multiply(num, num);
}

// FURTHER EXPLORATION:
function nthPower(num, pow = 0) {
  if (pow === 0) return num;

  let result = num;
  for (let itr = 1; itr < pow; itr += 1 ) {
    result = multiply(result, num);
  }

  return result;
}

console.log(nthPower(5, 2) === 25); // logs true
console.log(nthPower(-8, 2) === 64); // logs true
console.log(nthPower(3, 3) === 27); // logs true
console.log(nthPower(-2, 3) === -8); // logs true