function isLeapYear(year) {
  if (year > 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  } else {
    return year % 4 === 0;
  }
}