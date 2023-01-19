
/* Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character */

/* Alternate solutions:
function crunch(string) {
  let collapsed = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== string[i + 1]) collapsed += string[i];
  }

  return collapsed;
}

function crunch(string) {
  let strArr = Array.from(string);
  let collapsed = strArr.reduce((acc, curr, idx, arr) => {
    if (curr !== arr[idx + 1]) return acc + curr;
    return acc;
  }, '');

  return collapsed;
}
*/


function crunch(string) {
  let collapsed = '';

  for (let char of string) {
    if (!collapsed.endsWith(char)) collapsed += char;
  }

  return collapsed;
}