// 1
// example 1
let x: any = "Launch School";
let y: number;
// const y: number = x;
// console.log(y);

if (isNumber(x)) {
  y = x;
} else {
  console.log("x is not a number");
}

// example 2
let x2: any = "Launch School";
let y2: number;
// const y2: number = x2 as number;
if (isNumber(x2)) {
    y2 = x2;
} else {
  console.log("x2 is not a number");
}


function isNumber(value: any): value is number {
  return typeof value === 'number';
}

console.log(isNumber(x)); // false
console.log(isNumber(x2)); // false

// 2

function safeGet(arr: (string|number)[], idx: number) {
  if (idx > arr.length) {
    return undefined;
  } else {
    return arr[idx]
  }
}

let arr: string[] = ['1', '2', '3'];
let arr2: number[] = [1, 2, 3];

console.log(safeGet(arr, 5));   // undefined
console.log(safeGet(arr2, 1));  // 2
