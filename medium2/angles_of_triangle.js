/*
PROBLEM:
A triangle is classified as follows:

    Right: One angle is a right angle (exactly 90 degrees).
    Acute: All three angles are less than 90 degrees.
    Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and
every angle must be greater than 0. If either of these conditions is not
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and
returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry
about floating point errors. You may also assume that the arguments are in
degrees.

--------------------------------
Input: three numbers, representing angles of a triangle
Output: one of four classifications, as a string

Rules:
  Explicit:
    - all angles are integers
    - all arguments are in degrees
    - invalid triangle === all angles summed !== 180 || any angle <= 0
  Implicit:
    - have fun :)
--------------------------------

DATA STRUCTURE:
  - an array again, seems useful methinks

ALGO:
  - check for validity:
    - any angle 0? invalid
    - sum of all angles !== 180? invalid
  - check for acute
    - ALL angles < 90
  - check for obtuse
    - ALL angles !== 90
  - must be right triangle
*/
const RIGHT_ANGLE = 90;
const TRIANGLE_ANGLE_SUM = 180;

function triangleIsInvalid(angleArr) {
  let angleSum = angleArr.reduce((curr, acc) => curr + acc);

  return angleSum !== TRIANGLE_ANGLE_SUM || angleArr.some(angle => angle === 0);
}

function classifyTriangle(angleArr) {
  if (angleArr.every(angle => angle < RIGHT_ANGLE)) return 'acute';
  if (angleArr.every(angle => angle !== RIGHT_ANGLE)) return 'obtuse';

  return 'right';
}

function triangle(...angles) {
  if (triangleIsInvalid(angles)) return 'invalid';

  return classifyTriangle(angles);
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"