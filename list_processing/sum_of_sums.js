function subArrays(arr) {
  return arr.map((_ele, idx) => arr.slice(0, (idx + 1)));
}

function sumOfSums(arr) {
  return subArrays(arr).flat().reduce((cur, acc) => cur + acc);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));
// (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));
// 4
console.log(sumOfSums([1, 2, 3, 4, 5]));
// 35