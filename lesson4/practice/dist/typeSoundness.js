"use strict";
// 1
// example 1
let x = "Launch School";
let y;
// const y: number = x;
// console.log(y);
if (isNumber(x)) {
    y = x;
}
else {
    console.log("x is not a number");
}
// example 2
let x2 = "Launch School";
let y2;
// const y2: number = x2 as number;
if (isNumber(x2)) {
    y2 = x2;
}
else {
    console.log("x2 is not a number");
}
function isNumber(value) {
    return typeof value === 'number';
}
console.log(isNumber(x)); // false
console.log(isNumber(x2)); // false
// 2
function safeGet(arr, idx) {
    if (idx > arr.length) {
        return undefined;
    }
    else {
        return arr[idx];
    }
}
let arr = ['1', '2', '3'];
let arr2 = [1, 2, 3];
console.log(safeGet(arr, 5)); // undefined
console.log(safeGet(arr2, 1)); // 2
