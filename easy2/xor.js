/* In this exercise, you will write a function named xor that takes two
arguments, and returns true if exactly one of its arguments is truthy, false
otherwise. Note that we are looking for a boolean result instead of a truthy
falsy value as returned by || and &&.
*/

function xor(arg1, arg2) {
  arg1 = Number(!!arg1);
  arg2 = Number(!!arg2);

  if (arg1 + arg2 === 1) return true;

  return false;
}

// Also works:

function xorTwo(arg1, arg2) {
  let trueSum = 0;

  if (arg1) trueSum += 1;
  if (arg2) trueSum += 1;

  if (trueSum === 1) return true;

  return false;
}