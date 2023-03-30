/*
PROBLEM:
A triangle is classified as follows:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must
be greater than the length of the longest side, and every side must have a
length greater than 0. If either of these conditions is not satisfied, the
triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as
arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.
---------------------------
Input: three numbers, representing the lengths of the sides of a triangle
Output: one of four strings classifying the triangle

Rules:
  Explicit:
    - must output one of the four strings
      - invalid if two shortest summed < longest
      - equilat if all three sides ====
      - isos if two sides ===, third is diff
      - scalene if all three !==
  Implicit:
    - always given three sides
    - triangles can be invalid
    - side values can be floats
---------------------------


DATA STRUCTURE
- I wanna try using rest syntax for some reason, so an array
- this will let me sort the sides too
----------------------------


ALGO:
- sort the input by ascending value, as it is an array
- check for validity
  - any sides are 0
  - summing first two values and comparing for > with last value
- check for equilateral
  - iterate over each element checking if they all === the first ele
- check for isos
  - last two elements ===
- must be scalene at this point
*/

function triangleIsInvalid(sideArr) {
  return sideArr[0] === 0 || sideArr[0] + sideArr[1] <= sideArr[2];
}

function classifyTriangle(sideArr) {
  if (sideArr.every(side => side === sideArr[0])) {
    return 'equliateral';
  } else if (sideArr[2] === sideArr[1] || sideArr[1] === sideArr[0]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function triangle(...sides) {
  sides.sort((a, b) => a - b);
  if (triangleIsInvalid(sides)) return 'invalid';

  return classifyTriangle(sides);
}
console.log(triangle(3, 3, 3));
// "equilateral"
console.log(triangle(3, 3, 1.5));
// "isosceles"
console.log(triangle(3, 4, 5));
// "scalene"
console.log(triangle(0, 3, 3));
// "invalid"
console.log(triangle(3, 1, 1));
// "invalid"
console.log(triangle(3, 4, 3));