/*
PROBLEM:
Write a function that displays a four-pointed diamond in an nxn grid, where n
is an odd integer supplied as an argument to the function. You may assume that
the argument will always be an odd integer.

INPUT: odd integer
OUTPUT: 4 pointed diamond in a n x n grid

EXPLICIT:
  - odd integer input
  - use a grid? multidimensional array aka matrix?

IMPLICIT:
  - should be ouput as a string ig? I see no brackets, array output not required

ALGO:
- generate an array, length = input (n), every ele = array of length n,
  each ele = ' '
- boundscounter = 0
- Iterate over the grid:
  - if idx <= grid.lengh / 2 floor --> middle idx
    - boundsCounter += idx
  - else
    - boundsCounter -= 1;

  - lower bound = middle index - boundsCounter
  - upper bound = middle index + current iteration (aka index)
  - Iterating through each line in the grid:
    - if the current index is >= lower bound && current index <= upper bound
      - set element to *

- return a map over the grid:
  - join each array with '' as delim
- join mapped array with newlines
*/

/* function generateGrid(num) {
  let grid = new Array(num);
  for (let line = 0; line < grid.length; line += 1) {
    grid[line] = new Array(num).fill(' ');
  }

  return grid;
}

function fillLine(currentLine, lowBound, highBound) {
  return currentLine.map((ele, idx) => {
    if (idx >= lowBound && idx <= highBound) return '*';

    return ele;
  });
}

function fillGrid(gridArr, middle, boundsNum) {
  return gridArr.map((line, idx) => {
    boundsNum += idx <= middle ? 1 : -1;
    let lowerBound = middle - boundsNum;
    let upperBound = middle + boundsNum;

    return fillLine(line, lowerBound, upperBound);
  });
}

function renderGrid(gridArr) {
  let gridString = gridArr.map(line => {
    return line.join('');
  }).join("\n");

  console.log(gridString);
}

function diamond(num) {
  let grid = generateGrid(num);
  let boundModifier = -1; // whoops my solution is weird
  const middleIdx = Math.floor((grid.length - 1) / 2);

  grid = fillGrid(grid, middleIdx, boundModifier);

  renderGrid(grid);
}
 */

// A less convoluted way:
// Generate the top and bottom half seperately
// calculate spaces by subtracting # of stars from total rows
// increment # of stars by 2 each iteration of loop

function calcSpaces(diamondNum, stars) {
  return Math.floor((diamondNum - stars) / 2);
}

function diamond(num) {
  let numStars = 1;

  while (numStars < num) {
    let numSpaces = calcSpaces(num, numStars);
    console.log(`${' '.repeat(numSpaces)}${'*'.repeat(numStars)}`);
    numStars += 2;
  }

  do {
    let numSpaces = calcSpaces(num, numStars);
    console.log(`${' '.repeat(numSpaces)}${'*'.repeat(numStars)}`);
    numStars -= 2;
  } while (numStars > 0);
}

diamond(1);
// logs
// *


diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *      5 long, 1 star, 4 space
//    ***     6 long, 3 star, 3 space
//   *****    7 long, 5 star, 2 space
//  *******   8 long, 7 star, 1 space
// *********  9 long, 9 star, 0 space
//  *******   8 long, 7 star, 1 space
//   *****    7 long, 5 star, 2 space
//    ***     6 long, 3 star, 3 space
//     *      5 long, 1 star, 4 space