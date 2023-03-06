/* eslint-disable radix */
/* PROBLEM:
Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Input: float, representing an angle between 0 - 360
Output: string, representing angle in degrees, minutes, and seconds

Rules:
  Explicit:
    - use ˚ for degrees, ' for min, " for seconds
    - 1˚ = 60 min aka 1 hour
    - 60 sec = 1 min
  Implict:
    - can return all 0's for inputs of 0 or 360

DATA STRUCT:
- building a string?
    - if this, using a template literal prob makes sense w/ both
      single and double quotes being used in the answer

ALGO:
  - Check if the input is an integer
      - If so, return the input as degrees w/needed zeros
  - Initialize an output variable to an empty string
      - Parse the input as an int, concat to the output as degrees
      - Subtract int portion of input from input
          - mult ^ by 60
          - store result
          - concact result to output as minutes
      - Perform the last two steps using the stored output from the prev step
          - concat result to output as seconds
  - Return the output
*/

const addZeros = num => num < 10 ? `0${num}` : num;

const correctAngle = float => {
  while (float > 360) {
    float -= 360;
  }

  while (float < 0) {
    float += 360;
  }

  return float;
};

const MINUTES_PER_DEG = 60;

const SECONDS_PER_MINUTE = 60;

function dms(float) {
  float = correctAngle(float);

  let output = `${parseInt(float)}°`;
  if (Number.isInteger(float)) return `${output}00'00"`;

  float %= 1;
  let minutes = addZeros(Math.floor(float * MINUTES_PER_DEG));
  output += `${minutes}'`;

  float *= MINUTES_PER_DEG;
  float %= 1;
  let seconds = addZeros(Math.floor(float * SECONDS_PER_MINUTE));
  output += `${seconds}"`;

  return output;
}


console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"