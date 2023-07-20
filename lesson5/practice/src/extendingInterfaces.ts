interface Elephant extends Mammal, Tusked {
  trunkLength: number;
}

interface Tusked {
  tuskCount: number;
  tuskColor: string;
}

const hugo: Elephant = {
  name: "Hugo",
  legs: 4,
  trunkLength: 8,
  color: "grey",
  tuskCount: 2,
  tuskColor: "ivory",
}

// 1
// convert the JS code to TS using interfaces and interface extension
// assume all animals have a `name` and can `makeSound`
// dogs can `fetch`

interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

const myDog: Dog = {
  name: "Moony",
  makeSound: () => "Generic animal sound",
  fetch: () => `Moony fetches a stick`,
}

console.log(myDog.fetch());
