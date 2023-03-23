let isPalindrome = string => string === [...string].reverse().join('');

function leadingSubstrings(str) {
  return [...str].map((_ele, idx) => str.slice(0, (idx + 1)));
}

function substrings(str) {
  let subs = [...str].map((_ele, idx) => str.slice(idx));
  return subs.flatMap(sub => leadingSubstrings(sub));
}

function palindromes(str) {
  return substrings(str).filter(sub => isPalindrome(sub) && sub.length > 1);
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));