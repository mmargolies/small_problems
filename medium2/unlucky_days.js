/*
PROBLEM:
Some people believe that Fridays that fall on the 13th day of the month are
unlucky days. Write a function that takes a year as an argument and returns the
number of Friday the 13ths in that year. You may assume that the year is
greater than 1752, which is when the United Kingdom adopted the modern
Gregorian Calendar. You may also assume that the same calendar will remain in
use for the foreseeable future.

--------------------------------------------
Input: Year, as a number
Output: A number, representing the # of friday the 13ths in the input year

Rules:
  - year is greater than 1752
  - it's the gregorian calenedar
--------------------------------------------

DATA STRUCTURE:
- some sorta date object? Out of my wheelhouse here, I assume that i'll need to
iterate over something to find the fridays

ALGO:
Make a date object for the 13th in the 0th month of the given year. Call
get day, if it's 5, increment a counting variable
*/

function fridayThe13ths(year) {
  let friCount = 0;

  for (let month = 0; month <= 11; month += 1) {
    let findFri = new Date(year, month, 13);
    if (findFri.getDay() === 5) friCount += 1;
  }

  return friCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2