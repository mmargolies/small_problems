const reverseNumber = num => Number([...String(num)].reverse().join(''));

console.log(reverseNumber(12345));  // 54321
console.log(reverseNumber(12213));  // 31221
console.log(reverseNumber(456));    // 654
console.log(reverseNumber(12000));  // 21 -- note the lack of leading 0's
console.log(reverseNumber(1));      // 1