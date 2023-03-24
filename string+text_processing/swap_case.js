function swapCase(str) {
  return [...str].map(char => {
    if (char === char.toLowerCase()) return char.toUpperCase();
    return char.toLowerCase();
  }).join('');
}

console.log(swapCase('CamelCase'));
// "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));
// "tONIGHT ON xyz-tv"