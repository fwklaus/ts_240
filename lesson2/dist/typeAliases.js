"use strict";
// 1
// the code raises two errors becuase we assign a number to the name property, which is typed as a `string` on `line 18` and a string to the `age` property, which is typed as `number` on `line 19`
function greet(person) {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}
const person1 = {
    name: "Alice",
    age: 30,
};
const person2 = {
    name: 42,
    age: "Bob", // Type 'string' is not assignable to type 'number'.
};
console.log(greet(person1));
console.log(greet(person2));
