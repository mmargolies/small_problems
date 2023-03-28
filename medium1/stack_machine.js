/* eslint-disable max-lines-per-function */
/*
PROBLEM:
Implement a mini stack-and-register based programming langugage that can handle
a given list of commands.

Input: One or more valid commands (i.e. a program), as a string
Output: One or more numbers, resulting from the operations described by commands

Rules:
Commands are as follows:
- n : Place a value, n, in the register. Do not modify the stack.
- PUSH : Push the register value onto the stack. Leave the value in the
  register.
- ADD : Pop a value from the stack and add it to the register value, storing
  the result in the register.
- SUB : Pop a value from the stack and subtract it from the register value,
  storing the result in the register.
- MULT : Pop a value from the stack and multiply it by the register value,
  storing the result in the register.
- DIV : Pop a value from the stack and divide the register value by the popped
  stack value, storing the integer result back in the register.
- REMAINDER : Pop a value from the stack and divide the register value by the
  popped stack value, storing the integer remainder of the division back in the
  register.
- POP : Remove the topmost item from the stack and place it in the register.
- PRINT : Print the register value.

- All operations will be INTEGERS
- ALL arguments will be VALID
- Initialize stack to [] and register to 0

DATA STRUCTURE:
- an array, as the problem is laid out this way. And it makes sense
- not quite a structure, but a switch statement prob makes sense here as there
  is a list of specific, expected inputs

ALGO:
- initialize variable for stack
- initialize variable for register
- split commands into an array of individual strings
- iterate over command array, passing each word into switch statement
- have a case for each command
  - for math operations, pop the stack, & perform the operation. Reassign
    register to result of the operation
  - DONT FORGET TO Number() REGISTER AND STACK VALUES WHEN OPERATING
  - DONT FORGET TO Math.floor ANY QUOTIENTS
- default case for numbers?? seems shoddy but all inputs are valid so it works?

*/
const VALID_TOKENS = [
  'PUSH', 'POP', 'PRINT', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER'
];

const ARITHMETIC_TOKENS = ['ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER'];

function validTokens(cmds) {
  let valid = cmds.filter(cmd => {
    return (Math.abs(+cmd % 1) === 0) || VALID_TOKENS.includes(cmd);
  });

  return valid.length === cmds.length;
}

function operateOnEmptyStack(command, stackArr) {
  if (ARITHMETIC_TOKENS.includes(command) && stackArr.length === 0) {
    console.log('ERROR - ATTEMPTING TO OPERATE ON EMPTY STACK');
    return true;
  }
}

function parseCmd(command, reg, stackArr) {
  switch (command) {
    case 'PUSH': stackArr.push(reg);
      break;
    case 'POP': reg = stackArr.pop();
      break;
    case 'PRINT': console.log(reg);
      break;
    case 'ADD': reg += stackArr.pop();
      break;
    case 'SUB': reg -= stackArr.pop();
      break;
    case 'MULT': reg *= stackArr.pop();
      break;
    case 'DIV': reg = Math.floor(reg / stackArr.pop());
      break;
    case 'REMAINDER': reg = Math.floor(reg % stackArr.pop());
      break;
    default: reg = Number(command);
  }

  return reg;
}

function minilang(program) {
  const stack = [];
  let register = 0;
  let commands = program.split(' ');

  if (!validTokens(commands)) {
    console.log('ERROR - INVALID TOKEN IN PROGRAM');
    return null;
  }

  for (let idx = 0; idx < commands.length; idx += 1) {
    let cmd = commands[idx];

    if (operateOnEmptyStack(cmd, stack)) return null;
    register = parseCmd(cmd, register, stack);
  }

  return undefined;
}

minilang('ADD PRINT');
// should print empty stack error

minilang('5 HELLO');
// should print invalid command error

minilang('4 PUSH 5 MULT PRINT POP ADD');
// should print 20, then empty stack error

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)