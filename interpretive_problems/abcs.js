/*
PROBLEM:

A collection of spelling blocks has two letters per block.

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do
not use both letters from any given block. You can also only use each block
once.

Write a function that takes a word string as an argument and returns true if
the word can be spelled using the set of blocks, false otherwise. You can
consider the letters to be case-insensitive when you apply the rules.

Input: a string
Output: boolean

Rules:
  - can only use each block once
  - cannot use two letters from the same block
      - e.g cant do BOAT, as one block has both B and O
  - letters are case insensitive
  - input is always one full word
  - return true if word can be spelled, false if not

DATA STRUCTURE:
  - Thinking of using an object for this?
  - Maybe an array could work too, each block being a subarray

Mental Model:
Make a multidimensional array, where each subarray is a block. Iterate over
the input string. For each letter, find the index of the subarray (block) that
contains the current letter. If this block exists, delete this block from the
array. If the block does not exist, return false. Return true at the end of the
function.
*/

// const BLOCKS = [
//   ['b', 'o'], ['x', 'k'], ['d', 'q'], ['c', 'p'], ['n', 'a'],
//   ['g', 't'], ['r', 'e'], ['f', 's'], ['j', 'w'], ['h', 'u'],
//   ['v', 'i'], ['l', 'y'], ['z', 'm']
// ];

// function findBlockIdx(blockArr, char) {
//   return blockArr.indexOf(blockArr.find(ele => ele.includes(char)));
// }

// function isBlockWord(str) {
//   let blockArray = BLOCKS.slice();
//   str = str.toLowerCase();

//   for (let idx = 0; idx < str.length; idx += 1) {
//     let blockIdx = findBlockIdx(blockArray, str[idx]);
//     if (blockIdx === -1) return false;

//     blockArray.splice(blockIdx, 1);
//   }

//   return true;
// }

function isBlockWord(str) {
  let blocks = [
    'BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'
  ];
  str = str.toUpperCase();

  for (let idx = 0; idx < str.length; idx += 1) {
    let blockIdx = blocks.findIndex(ele => ele.includes(str[idx]));
    if (blockIdx === -1) return false;

    blocks.splice(blockIdx, 1);
  }

  return true;
}

console.log(isBlockWord('BATCH')); // true);
console.log(isBlockWord('BUTCH')); // false);
console.log(isBlockWord('jest'));  // true);