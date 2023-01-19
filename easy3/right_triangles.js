/* Declare a function with one parameter. Inside the function, initialize a
string to '*'. Using a for loop (let itr = input; input > 0; input -= 1;)
log `starString.padStart(input -1)`, and add/assign another '*' to star string
 */

function triangle(num) {
  let star = [...'*'.padStart(num)];

  for (let itr = num; itr > 0; itr -= 1) {
    console.log(star.join(''));
    star[itr - 2] = '*';
  }
}

triangle(5);
triangle(9);