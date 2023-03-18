function leadingSubstrings(str) {
  return [...str].map((_ele, idx) => str.slice(0, (idx + 1)));
}

console.log(leadingSubstrings('abc'));
// ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));
// ["a"]
console.log(leadingSubstrings('xyzzy'));
// ["x", "xy", "xyz", "xyzz", "xyzzy"]