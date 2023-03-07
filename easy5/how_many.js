/* PROBLEM:
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Input: an array
Output: logged console messages, where each message shows the # of
        occurances for the given element AFTER they've been counted

Rules:
  Explicit:
    - array is input
    - elements are case sensitive when counting
  Implicit:
    - elements are words

DATA STRUCTURE:
  - Object, most likely

ALGO:
Declare/init an output variable to an empty object. Iterate through the
input array. On each iteration, check if the current element exists as a
property on the output object.
If not, create the k/v pair with a value of 1.
If so, increment the value of the k/v pair by 1.

Using a loop, iterate over the object and log a series of strings that contain
the k/v pairs.
*/

function countOccurrences(array) {
  let count = {};

  array.forEach(ele => {
    ele = ele.toLowerCase(); // reassignment to lowercase version
    count[ele] = ((count[ele] || 0) + 1);
  });

  logCount(count);
}

function logCount(obj) {
  Object.keys(obj).forEach(key => {
    console.log(`${key} => ${obj[key]}`);
  });
}

// input with varying case
let vehicles = ['car', 'CAR', 'truck', 'car', 'SUV', 'TruCk',
                'motorcycle', 'MotorCycle', 'CAR', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2