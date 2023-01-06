// initial solution, not the best
// will return to refactor as if/else if/else
// once some time has passed

function isLeapYear(year) {
  if (year <= 0) return null;

  switch (!!year) {
    case (year % 4 === 0 ) && (year % 100 !== 0): return true;
    case (year % 100 === 0) && (year % 400 === 0): return true;
    default: return false;
  }
}
