interface Mammal {
  name: string;
  legs: number;
}

interface Mammal {
  color: string
}

let tiger: Mammal = {
  name: "Tony",
  legs: 4,
  color: "Orange and black",
}

console.log(tiger); // { name: 'Tony', legs: 4, color: 'Orange and black' }
