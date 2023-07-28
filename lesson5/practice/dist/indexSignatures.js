"use strict";
// 1
const obj = new Map();
obj.set(1, "a");
obj.set(2, "b");
obj.set(3, "c");
console.log(Object.keys(obj).every(key => typeof key === 'number')); // true
