// 1  
// rewrite the function to avoid the error

// function getProperty(obj: object, key: string) {
//   return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
// }

// let sun = {
//   color: "yellow",
//   age: 4.6,
// }

// function getProperty(obj: {[key: string]: unknown}, key:string) {
//   return obj[key];
// }

// let color = getProperty(sun, "color");
// let age = getProperty(sun, "age");

// console.log(color);
// console.log(age);

// 2 refactor getProperty using generics so that color and age can be automaticall inferred

let sun = {
  color: "yellow",
  age: 4.6,
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let color = getProperty(sun, "color");
let age = getProperty(sun, "age");

console.log(color);
console.log(age);
