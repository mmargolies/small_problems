/* Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length of
the string should match the given integer. */

function stringy(integer) {
  let ohZero = '';

  for (let idx = 0; idx < integer; idx += 1) {
    ohZero += (idx % 2 === 0) ? 1 : 0;
  }
  return ohZero;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"