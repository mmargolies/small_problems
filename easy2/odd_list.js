/* Write a function that returns an Array that contains every other element of
an Array that is passed in as an argument. The values in the returned list
should be those values that are in the 1st, 3rd, 5th, and so on elements of the
argument Array.
*/

/* Write a function that returns an Array that contains every other element of
an Array that is passed in as an argument. The values in the returned list
should be those values that are in the 1st, 3rd, 5th, and so on elements of the
argument Array.
*/

function oddities(array) {
  let everyOther = [];

  for (let idx = 0; idx < array.length; idx += 2) {
    everyOther.push(array[idx]);
  }

  return everyOther;
}

// Further exploration (return 2nd, 4th, 6th, etc. elements)

function evens(array) {
  return array.filter(ele => array.indexOf(ele) % 2 === 1);
}