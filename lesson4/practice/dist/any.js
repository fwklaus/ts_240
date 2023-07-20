"use strict";
// 1
// There won't be any type errors at compile time
// There will be runtime errors, however, as we're calling methods that aren't defined on some of the values passed to the method
// 2 
function processInput(input) {
    // use type guards
    if (Array.isArray(input)) {
        console.log(input.length);
    }
    else if (typeof input === 'string') {
        console.log(input.toUpperCase());
    }
    else if (typeof input === 'number') {
        console.log(input.toFixed(2));
    }
}
processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3
