/* Create a function that takes 2 arguments, an array and an object. The array
will contain 2 or more elements that, when combined with adjoining spaces, will
produce a person's name. The object will contain two keys, "title" and
"occupation", and the appropriate values. Your function should return a
greeting that uses the person's full name, and mentions the person's title. */

function greetings(array, obj) {
  let name = array.join(' ');
  let titleOccupation = Object.values(obj).join(' ');

  return `Hello ${name}! Nice to have a ${titleOccupation} around.`;
}