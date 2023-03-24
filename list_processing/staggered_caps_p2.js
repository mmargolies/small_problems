function staggeredCase(str) {
  let counter = 0;

  return [...str.toLowerCase()].map(char => {
    if (char >= 'a' && char <= 'z') {
      counter += 1;
      return counter % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
    }

    return char;
  }).join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);