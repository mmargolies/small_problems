const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`>> ${message}`);
}

// If refactoring, should declare sq meters to feet conversion as const here

/* prompt("Let's calculate the area of a room!");

prompt('Enter the length of the room in meters:');
let length = Number(rlSync.question());

prompt('Enter the width of the room in meters:');
let width = Number(rlSync.question());

let area = length * width;
let feetArea = area * 10.7639;

prompt(`The area of the room is ${area.toFixed(2)} square meters (${feetArea.toFixed(2)} square feet).`); */

// Further exploration:
// ask user to choose between sq meters or sq feet
//    validate input
// compute area accoridngly
// return result, including non-selected unit in parantheses

prompt("Let's calculate the area of a room!");

prompt("Would you like to use meters (1) or feet (2)?");
let unitChoice = rlSync.question();
while (!['1', '2'].includes(unitChoice)) {
  prompt("Sorry, that's not a valid input. Choose again: ");
  unitChoice = rlSync.question();
}

if (unitChoice === '1') {
  prompt('Enter the length of the room in meters:');
  let length = Number(rlSync.question());

  prompt('Enter the width of the room in meters:');
  let width = Number(rlSync.question());

  let metersSq = length * width;
  let convertToFeet = metersSq * 10.7639;

  prompt(`The area of the room is ${metersSq.toFixed(2)} square meters (${convertToFeet.toFixed(2)} square feet).`);
} else if (unitChoice === '2') {
  prompt('Enter the length of the room in feet:');
  let length = Number(rlSync.question());

  prompt('Enter the width of the room in feet:');
  let width = Number(rlSync.question());

  let feetSq = length * width;
  let convertToMeters = feetSq / 10.7639;

  prompt(`The area of the room is ${feetSq.toFixed(2)} square feet (${convertToMeters.toFixed(2)} square meters).`);
}