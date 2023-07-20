// 1
// Create a reusable type guard function, `isNumber` to make our code safer when working with the following external code snippets
// None of the examples throw compile-time errors
// the type guard isNumber now prevents runtime errors

// example 1
let x: any = "Launch School";
const y: number = x;
console.log(y);


// example 2
let x2: any = "Launch School";
const y2: number = x as number;


function isNumber(value: any): value is number {
  // return !Number.isNaN(Number(value));
  return typeof value === "number";
}


console.log(isNumber(x)); // false
console.log(isNumber(y)); // false
console.log(isNumber(x2)); // false
console.log(isNumber(y2)); // false


// 2
// create a utility function safeGet
// allows access to elements in any array safely
// takes an array and the index of the element in the array
  // if the index is within bounds of the array, return the element at the index
  // if not, return undefined

const names: string[] = ["John", "Jane"];
const name2 = safeGet(names, 2); // Should return undefined

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2

function safeGet(arr: any[], idx: number): any {
  if (idx < arr.length) {
    return arr[idx];
  }
  return undefined;
}

console.log(name2); // undefined
console.log(number); // 2
