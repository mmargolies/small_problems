const rlSync = require('readline-sync');

let bill = rlSync.question('What is the bill? ');
let tipPercent = rlSync.question('What is the tip percentage? ');

tipPercent /= 100;

let tipTotal = (Number(bill) * Number(tipPercent)).toFixed(2);
let billWithTip = Number(bill) + Number(tipTotal);

console.log(`\nThe tip is $${tipTotal}`);
console.log(`The total is $${billWithTip}`);