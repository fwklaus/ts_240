// interface Person {
//   name: string,
//   age: number;
// }

// interface Student extends Person {
//   graduationYear: number;
// }

// let roy: Student = {
//   name: "Roy",
//   age: 23,
//   graduationYear: 2033, 
// }

// let smith: Person = {
//   name: "Smith",
//   age: 45,
// }

// console.log(roy); // { name: 'Roy', age: 23, graduationYear: 2033 }
// console.log(smith); // { name: 'Smith', age: 45 }

class Animal implements Animal{
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    return "Generic animal sound";
  }
}

class Dog extends Animal implements Dog {  
  constructor(name: string) {
    super(name);
  }

  fetch() {
    return `${this.name} fetches a stick.`;
  }
}

// const myDog = new Dog("Rex");
// console.log(myDog.fetch());

// 1

interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

// in practice, we would be assiging myDog to an instantiated object/class to ensure type safety
// the above code is more practical

// const myDog: Dog = {
//   name: "Rex",
//   makeSound(): string {
//     return "Generic animal sound"
//   },
//   fetch(): string {
//     return `${this.name} fetches a stick`;
//   }
// }

// console.log(myDog.fetch()); // Rex fetches a stick


let myDog = new Dog("Rex");
console.log(myDog.fetch()); // Rex fetches a stick
