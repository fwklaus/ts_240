type Circle = {
  kind: "circle";
  color: string;
  radius: number;
}

type Square = {
  kind: "square";
  color: string;
  sideLength: number;
}

// type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return "radius" in shape;
}

let redShape: Circle = {
  kind: "circle",
  color: 'red',
  radius: 5,
}

function sayShapeColor(shape: Shape): void {
  if (isCircle(shape)) {
    console.log(`The circle is ${shape.color}`);
    return;
  }

  console.log(`Shape is a square`);
}


// sayShapeColor(redShape);

// custom isArray

// function customIsArray<T>(arg: T | T[]): arg is T[] {
//   return Object.prototype.toString.call(arg) === "[object Array]";
// }

// function feed(petOrPets: Pet | Pet[]) {
//   if (customIsArray(petOrPets)) {
//     // inside this branch, petOrPets is a Pet[]
//     petOrPets.forEach((p) => console.log(`Feeding ${p.name} the ${p.type}`));
//   } else {
//     // inside this branch, petOrPets is Pet
//     console.log(`Feeding ${petOrPets.name} the ${petOrPets.type}`);
//   }
// }

// 1
// Implement the isCar type predicate function 
type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  // Implement this function
  // if ("type" in vehicle) {
  //   return vehicle.type === 'car';
  // } else {
  //   return false;
  // }

  return "doors" in vehicle;
}

// Usage
let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isCar(myCar)) {
  console.log(myCar.doors); // 4
}
