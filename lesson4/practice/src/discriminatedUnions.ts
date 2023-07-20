type Oval = {
  kind: "oval"; // This is the discriminant property
  radius: number;
}

type Octagon = {
  kind: "octagon"; // This is the discriminant property 
  sideLength: number;
}

type AnotherShape = Oval | Octagon;

// 1

// type Dog = {
//   kind: "dog";
//   name: string; 
//   age: number;
// };

// type Bird = {
//   kind: "bird";
//   name: string;
//   wingspan: number;
// };

// type Animal = Dog | Bird;

//  function describeAnimal(animal: Animal): string {
//     switch(animal.kind) {
//       case("dog"):
//         return `${animal.name} is a ${animal.age} year(s) old dog`;
//         break;
//       case("bird"):
//         return `${animal.name} is a bird with a ${animal.wingspan}cm wingspan`;
//         break;
//     }
// }

// let tony: Dog = {
//   kind: "dog",
//   name: "Tony",
//   age: 12,
// }


// let hawk: Bird = {
//   kind: "bird",
//   name: "Hawk",
//   wingspan: 134,
// }

// console.log(describeAnimal(tony));
// console.log(describeAnimal(hawk));
