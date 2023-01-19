/* Write a function that takes a non-empty string argument and returns the
middle character(s) of the string. If the string has an odd length, you should
return exactly one character. If the string has an even length, you should
return exactly two characters. */

function centerOf(string) {
  let middleIdx = Math.floor(string.length / 2);

  if (string.length % 2 === 1) {
    return string[middleIdx];
  } else {
    return string[middleIdx - 1] + string[middleIdx];
  }
}