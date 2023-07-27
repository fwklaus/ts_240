"use strict";
// 1
// the first example will likely lead to runtime errors, but not compile-time errors
// the second example will lead to type errors in the else branch. We can't call `toLowerCase` on type `unknown`. With `unknown`, the variable remains typed as `unknown` all throughout the falsy branch
// 2
// this example throws a compile-time error
// we can assign `5` to type `unknown` without a problem, but we cannot assign `userInput`, which is typed as `unknown`, to `userName` without first narrowing the value
// 3
function processData(data) {
    if (typeof data === 'string') {
        return 'Hello, ' + data;
    }
    else if (typeof data === 'number') {
        return 'Age: ' + String(data);
    }
    else {
        let _exhaustiveCheck = data;
        throw new Error("Invalid data");
    }
}
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"
