function sum(num) {
  return [...String(num)].map(ele => Number(ele)).reduce((cur, sum) => {
    return cur + sum;
  });
}

console.log(sum(23));
// 5
console.log(sum(496));
// 19
console.log(sum(123456789));
// 45