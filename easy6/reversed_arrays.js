// From the comments, essentially streamlines what my original was doing
// in a very big way! You're able to mutate while iterating here since
// you're replacing elements as you're removing them, preventing
// any issues w/index values

function reverse(arr) {
  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    arr.splice(idx, 1, arr.pop());
  }

  return arr;
}

// slicing current idx and length - 1 - current idx
//-----------------------------------------------------------
// a b c d e -- length 5 Middle index Math.ceil(length/2)
// e b c d a
// e d c b a

// a b c d -- length 4 Middle index Math.ceil(length/2)
// d b c a
// d c b a

// REVERSE - d c b a


// you could just keep pushing all elements starting from
// idx 0 UNTIL the last ele
// then slice remove everything from idx 0 until what was formerly the last ele

/* OG solution:
function reverse(arr) {
  if (arr.length < 2) return arr;

  let stoppingIdx = arr.length - 1;
  let copyIdx = 0;

  while (copyIdx > stoppingIdx) {
    arr.push(arr[copyIdx]);
    copyIdx += 1;
  }

  arr.splice(0, stoppingIdx);
  return arr;
}
*/

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
