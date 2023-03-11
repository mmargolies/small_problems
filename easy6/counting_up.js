/* function sequence(num) {
  let output = [];

  for (let itr = 1; itr <= num; itr += 1) {
    output.push(itr);
  }
  return output;
} */

const sequence = num => [...Array(num)].map((_ele, idx) => idx + 1);

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]