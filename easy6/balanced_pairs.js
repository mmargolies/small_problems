// Original solution
function isBalancedOG(string) {
  let left = 0;
  let right = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    if (
      string[idx] === ')' && (right >= left || left === 0)
    ) {
      return false;
    }

    if (string[idx] === ')') right += 1;
    if (string [idx] === '(') left += 1;
  }

  return left === right;
}

// Cearer/better logic, from LS ->
// use a shared counting variable, and + or - 1 as needed
// guard clause to return false for 'edge' cases

function isBalanced(string) {
  let count = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    if (count < 0) return false;

    if (string[idx] === '(') {
      count += 1;
    } else if (string[idx] === ')') {
      count -= 1;
    }
  }

  return count === 0;
}

/*
Hmm. Could have two vars to track left an right paren. If both vars are 0, and
a ) is encountered, return false. Otherwise increment by 1.
If a ( is encountered, increment by 1. If both vars are === return true
*/
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);