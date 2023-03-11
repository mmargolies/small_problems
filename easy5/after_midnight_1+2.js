/* eslint-disable radix */
/* PROBLEM:
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

Input: an integer that:
        if positive, represents minutes AFTER midnight
        if negative, represents minutes BEFORE midnight
Output: a string, representing the time of day in 24hr format (based on input)

Rules:
  Explicit:
    - use 24hr format
    - no Date class methods
    - handle any integer input
  Implict:
  - output all 0's with a 0 input
  - always valid input
  - # of minutes can be greater than 24hrs

DATA STRUCT:
  - probably just variables to hold integers?

ALGO (hilvl):
POSITIVE INTS:
  - calculate the # of hours by dividing num by 60
      - store the remainder
  - if the number of hours is greater than 24, keep subtracting 24 from
    the number of hours until it is < 24
  - ^^ this # is then the hours you will use
  - calc the # of minutes by multiplying your remainder from earlier by 60
  - ^^ this is the # of minutes you will use
  - interpolate and return
*/
const MIN_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MIN_PER_DAY = HOURS_PER_DAY * MIN_PER_HOUR;

const addZeros = num => num < 10 ? `0${num}` : num;

function findTrueHours(hours) {
  while (hours > 24) hours -= 24;
  return hours;
}

function timeOfDay(minutes) {
  let outputMins = Math.abs(minutes % MIN_PER_HOUR);
  let hours = Math.abs(Math.floor(minutes / MIN_PER_HOUR));

  hours = findTrueHours(hours);

  if (minutes < 0) {
    hours = HOURS_PER_DAY - hours;
    outputMins = MIN_PER_HOUR - outputMins;
  }

  return [addZeros(hours), addZeros(outputMins)].join(':');
}

// console.log(timeOfDay(800));
// console.log(timeOfDay(35));
// console.log(timeOfDay(-4231));

// should all log true
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");
// ----------------------------------------------------------------------------


// Do the reverse of above

function beforeMidnight(time) {
  let [hours, minutes] = time.split(':');
  if (hours * 60 === MIN_PER_DAY ||
     (hours === '00' && minutes === '00')
  ) return 0;

  return ((HOURS_PER_DAY - Number(hours)) * MIN_PER_HOUR) - Number(minutes);
}
console.log(beforeMidnight("23:57"));

function afterMidnight(time) {
  let [hours, minutes] = time.split(':');
  if (hours * 60 === MIN_PER_DAY) return 0;

  return (Number(hours) * MIN_PER_HOUR) + Number(minutes);
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
console.log(beforeMidnight("23:57") === 3);
console.log(afterMidnight("00:03") === 3);