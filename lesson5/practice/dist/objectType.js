"use strict";
// 1
// use interface with index signature and type unknown
// interface Object {
//   [key: string]: unknown;
// }
// function getProperty(obj: Object, key: string) {
//   if(key in obj) {
//     return obj[key];
//   } 
// }
// let example: Object =  {
//   hello: "world",
//   other: "hmmm",
// }
// let x = getProperty(example, "hello"); // return value typed as unknwon
// let y = getProperty(example, "other"); // return value types as unknown
// console.log(x); // world
// console.log(y); // hmmm
// 2 
