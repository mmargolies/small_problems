// function substrings(str) {
//   let result = [];
//   for (let idx = 0; idx < str.length; idx += 1) {
//     result.push(leadingSubstrings(str.slice(idx)));
//   }

//   return result.flat();
// }

function leadingSubstrings(str) {
  return [...str].map((_ele, idx) => str.slice(0, (idx + 1)));
}

function substrings(str) {
  let subs = [...str].map((_ele, idx) => str.slice(idx));
  return subs.flatMap(sub => leadingSubstrings(sub));
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]