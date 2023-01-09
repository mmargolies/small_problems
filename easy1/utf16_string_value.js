/* Write a function that determines and returns the UTF-16 string value of a
string passed in as an argument. The UTF-16 string value is the sum of the
UTF-16 values of every character in the string.

(You may use String.prototype.charCodeAt() to determine the UTF-16 value of a
character.) */

function utf16Value(string) {
  let arrayFromString = Array.from(string);
  let utf16Array = arrayFromString.map(char => char.charCodeAt());

  return utf16Array.reduce((acc, curr) => acc + curr, 0);
}