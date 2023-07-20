// 1
// the second example throws a type error
// in the `else` branch, `y` can't be a string, but we are attempting to call a string method on it

// 2
//The code raises compile-time warning on `line 5`. We attempty to assign a number to an unknown type. We can assign any value to an `unknown` type, but we cannot assign an unknown type to any other value

// 3
// write a function processData
// takes data as a parameter
  // if data is a string, should return a string
  // if data is a number, should return a string
  // if neither, should throw an error saying Invalid Data


function processData(data: unknown): string {
  if (typeof data === 'string') {
    console.log("Hello, " + data);
  } else if (typeof data === 'number') {
    console.log("Age: " + data);
  } else {
    throw new Error("Invalid Data");
  }
}

console.log(processData("Alice"));
console.log(processData(25));
console.log(processData(true));
  