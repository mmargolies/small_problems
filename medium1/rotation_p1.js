/*
PROBLEM:
Write a function that rotates an array by moving the first element to the end
of the array. Do not modify the original array.

Input: any data type
Output: If input is array, return new array w/first element of input now being
        the last element.
        If input is not an array, return undefined.

Rules:
- No mutating
- If the input is not an array, return undefined.
- If the input is an empty array, return an empty array.

DATA STRUCT:
- a new array, will have to make some sort of copy as filtering and
  transformation aren't applicable in this case

ALGO:
Check the data type of the input. If it is not an array, return undefined.
Create a copy of the input array starting from index 1.
Operating on the copy, append the first element of the original array to
the copy.
 */

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;

  return arr.slice(1).concat(arr.slice(0, 1));
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
// [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));
// ["b", "c", "a"]
console.log(rotateArray(['a']));
// ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));
// ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
// [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));
// []

// return `undefined` if the argument is not an array
console.log(rotateArray());
// undefined
console.log(rotateArray(1));
// undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));
// [2, 3, 4, 1]
console.log(array);
// [1, 2, 3, 4]