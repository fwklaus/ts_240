// 1
// the code raises two errors becuase we assign a number to the name property, which is typed as a `string` on `line 18` and a string to the `age` property, which is typed as `number` on `line 19`

type Name = string;
type Age = number;
type Person = {
  name: Name; // name: string
  age: Age;   // age: number 
};

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

const person1: Person = {
  name: "Alice",
  age: 30,
};

const person2: Person = {
  name: 42,   // Type 'number' is not assignable to type 'string'.
  age: "Bob", // Type 'string' is not assignable to type 'number'.
};

console.log(greet(person1));
console.log(greet(person2));
