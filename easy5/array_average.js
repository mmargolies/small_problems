function averageReduce(arr) {
  let totalSum = arr.reduce((sum, num) => sum + num);
  return Math.floor(totalSum / arr.length);
}

console.log(averageReduce([1, 5, 87, 45, 8, 8]));
// 25
console.log(averageReduce([9, 47, 23, 95, 16, 52]));
// 40

function average(arr) {
  let sum = 0;

  arr.forEach(num => sum += num);
  return Math.floor(sum / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
// 25
console.log(average([9, 47, 23, 95, 16, 52]));
// 40