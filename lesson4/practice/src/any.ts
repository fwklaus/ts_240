// 1
// no, there will be no type errors because any effectively turns off the type checking system
// the methods we call on the `input` value in `processInput` are not defined for all of the possible values passed as arguments, which will lead to runtime errors

// 2
function processInput(input: any) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else if (typeof input === 'number') {
    console.log(input.toFixed(2));
  } else if (Array.isArray(input)) {
    console.log(input.length);
  }
}

processInput("hello"); // HELLO
processInput(42); // 42.00
processInput([1, 2, 3]); // 3
