function logTruncated(string, width = Infinity) {
  if (string.length + 4 > width && width > 4) {
    string = string.slice(0, width - 4);
  } else if (width < 4) {
    console.log('Width must be greater than 4');
    return;
  }

  let stringPadded = `| ${string} |`;
  let border = '+' + '-'.repeat(stringPadded.length - 2) + '+';
  let blankLine = '|' + ' '.repeat(stringPadded.length - 2) + '|';

  console.log(border);
  console.log(blankLine);
  console.log(stringPadded);
  console.log(blankLine);
  console.log(border);
}

// FURTHER EXPLORATION:

/* Modify this function so that it truncates the message if it doesn't fit
inside a maximum width provided as a second argument (the width is the width of
the box itself). You may assume no maximum if the second argument is omitted.

For a challenging but fun exercise, try word wrapping messages that are too
long to fit, so that they appear on multiple lines but are still contained
within the box. This isn't an easy problem, but it's doable with basic
JavaScript.
*/

logInBox('Free money', 5);