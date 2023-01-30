/* Write a function that calculates and returns the index of the first
Fibonacci number that has the number of digits specified by the argument. (The
first Fibonacci number has an index of 1.)
*/

function findFibIdxByLength(number) {
  let fibArr = [1n, 1n];

  for (let idx = 0n; true; idx += 1n) {
    fibArr.push((fibArr[idx] + fibArr[idx + 1n]));

    if (number === BigInt(String(fibArr[idx + 2n]).length)) {
      return BigInt(fibArr.length);
    }
  }
}

console.log(findFibIdxByLength(2n));     // === 7n
console.log(findFibIdxByLength(3n));     // === 12n
console.log(findFibIdxByLength(10n));    // === 45n;
console.log(findFibIdxByLength(16n));    // === 74n;
console.log(findFibIdxByLength(100n));   // === 476n;
console.log(findFibIdxByLength(1000n));  // === 4782n;
console.log(findFibIdxByLength(10000n)); // === 47847n

// The last example may take a minute or so to run.