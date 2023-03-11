function swapName(str) {
  let nameArr = str.split(' ');
  let last = nameArr.pop() + ',';
  return [last, ...nameArr].join(' ');
}

// const swapName = name => name.split(' ').reverse().join(', ');


console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));
// "Ragvals, Karl Oskar Henriksson"