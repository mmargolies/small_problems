const STRING_NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function getSign(num) {
  if (Object.is(Math.sign(num), -0)) return '-';
  switch (Math.sign(num)) {
    case 1:  return '+';
    case -1: return '-';
    case 0: return '';
  }
}

function signedIntegerToString(num) {
  let str = '';
  let sign = getSign(num);
  num = Math.abs(num);

  do {
    let remainder = num % 10;
    str = STRING_NUMBERS[remainder] + str;
    num = Math.floor(num / 10);
  } while (num > 0);
  str = sign + str;
  return str;
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");