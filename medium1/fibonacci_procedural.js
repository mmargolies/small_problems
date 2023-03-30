/*
PROBLEM:
Using a procedural approach, write a function that will compute the nth number
of the fibonacci sequence.

Input: A number (n)
Output: The nth number in the fibonacci sequence

Rules:
- no recursion


Assumptions:
  - valid input
  - should be able to handle 0/1 as input, returning 1

DATA STRUCTURE:
- an array methinks

ALGO:
- Begin with an array containing the first two numbers in the sequence
- Using a loop with:
  - iterator set to three, as we already have the first two numbers
  - stopping condition of iterator <= input
  - increment clause += 1
      - push the result of the last two numbers summed to the array
- return the last item in the array

*/

function fibonacci(target) {
  if (target <= 2) return 1;

  let fibArr = [1, 1];
  for (let itr = 3; itr <= target; itr += 1) {
    fibArr = [fibArr[1], fibArr[0] + fibArr[1]];
  }

  return fibArr[1];
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050