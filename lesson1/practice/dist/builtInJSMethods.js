"use strict";
function convertToNumbers(arr) {
    return arr.map(Number);
}
const numbersInStringFormat = ["10", "20", "30", "40"];
console.log(convertToNumbers(numbersInStringFormat));
