/* function interleave(arr1, arr2) {
  let output = [];
  arr1.forEach((ele, idx) => output.push(ele, arr2[idx]));

  return output;
} */

// function interleave(arr1, arr2) {
//   return arr1.map((ele, idx) => {
//     return [ele, arr2[idx]];
//   }).flat();
// }

// with reduce:
function interleave(arr1, arr2) {
  return arr1.reduce((acc, curr, idx) => {
    return acc.concat(curr, arr2[idx]);
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
// [1, "a", 2, "b", 3, "c"]