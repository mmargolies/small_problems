/*
PROBLEM:
You have a bank of switches before you, numbered from 1 to count. Every switch
is connected to exactly one light that is initially off. You walk down the row
of switches and toggle every one of them, that is, you flip every switch. All
the lights are now on. You walk back to the beginning of the row and start
another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now,
every other light is on. On the third pass, you go back to the beginning again,
this time toggling switches 3, 6, 9, and so on. You continue to repeat this
process until you have made count passes.

Write a program that takes one argument—the total number of switches—and
returns an array of the lights that are on after count passes

---------------------------------
INPUT: a number (count), representing the # of switches (i.e. 1 - count)
OUTPUT: an array, representing the # of lights on after count passes

EXPLICIT RULES:
  - all lights start on (pass '1')
  - starting with pass 2, every multiple of 2 switch is flipped off
  - on each subsequent pass, that multiple is incremented by 1:
    - on pass 3, every multiple of 3 is flipped off
    - on pass 4, every multiple of 4 is flipped off
  - make count passes, then you're done!
IMPLICIT RULES:
  - valid input always?
---------------------------------

DATA STRUCT:
  - probably using an array here, since that's what I have to output

ALGO:
- generate an array of false values (switch off) that is the length of the input
- iterating over the switches count times
  - go over every switch
  - if the switch is off and is a multiple of the , set it to on
  - repeat, where on the nth time you flip switches that are multiples of n
- iterate over the switch array, MAPPING
  - the switch is the index value + 1
- return the mapped array
*/

function generateSwitches(count) {
  return new Array(count).fill(false);
}

function flipSwitches(switchArr, passNum) {
  switchArr.forEach((_light, lightIdx, arr) => {
    if ((lightIdx + 1) % passNum === 0) arr[lightIdx] = !arr[lightIdx];
  });
}

function lightsOn(count) {
  let switches = generateSwitches(count);

  for (let pass = 1; pass <= count; pass += 1 ) {
    flipSwitches(switches, pass);
  }

  return switches.reduce((arr, light, idx) => {
    if (light) return arr.concat(idx + 1);

    return arr;
  }, []);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


// --------------------------------------------------------------------------
// This solution takes advantage of the pattern shown by the 2nd example
// The gap between each switch increments by 2, starting with a gap of 3
// e.g. starting with switch 1, the next on switch is 4 (1 + 3 = 4)
//  we then increment 3 by 2 --> 5
//  going from switch 4, the next on switch is 9 (4 + 5 = 9)

function lightsOnPattern(count) {
  let switches = [];
  let start = 1;
  let jumpSwitches = 1;

  for (let onSwitch = start; onSwitch <= count; onSwitch += jumpSwitches) {
    switches.push(onSwitch);
    jumpSwitches += 2;
  }

  return switches;
}