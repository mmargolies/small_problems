// Build a program that logs when the user will retire and how many more years
// the user has to work until retirement.

const rlSync = require ('readline-sync');

const today = Date();
const thisYear = today.getFullYear();

let age = rlSync.question('What is your age? ');
let retirementAge = rlSync.question('At what age would you like to retire? ');
let yearsLeft = Number(retirementAge) - Number(age);

console.log(`It's ${thisYear}. You will retire in ${thisYear + yearsLeft}.`);
console.log(`You only have ${yearsLeft} years of work to go!`);