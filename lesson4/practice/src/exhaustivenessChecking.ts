type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Square | Triangle;

function describeShape(shape: Shape) {
  let area: number;

  switch(shape.kind) {
    case("circle"):
      area = Math.PI * shape.radius ** 2;
      break;
    case("square"):
      area = shape.sideLength ** 2;
      break;
    case("triangle"):
      area = 0.5 * shape.base * shape.height;
      break;
    default:
      const _exhaustiveCheck: never = shape;
      // Type 'Triangle' is not assignable to type 'never'.
      throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
  }

  console.log("The area is " + area);
}

// we add an exhaustiveness check to default

// 1) The TS compiler will detect the `default` path is reachable by the `Triangle` type. We assign `shape` to a variable of type `never`, and the compiler raises a warning

// 2) At runtime, we throw an error which tells us the specific object causing the issue

// 1
type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Giraffe = {
  kind: "giraffe";
  neckLength: number;
}

type Animal = Elephant | Tiger | Peacock | Giraffe;


function describeAnimal(animal: Animal): string {
  switch(animal.kind) {
    case("elephant"):
      return `An ${animal.kind} weighs ${animal.weight}kg`;
      break;
    case("tiger"):
      return `An ${animal.kind} runs ${animal.speed}kph`;
      break;
    case("peacock"):
      return `An ${animal.kind} has feathers ${animal.featherLength}cm long`;
      // Type 'Giraffe' is not assignable to type 'never'
      break;
    default:
      let _exhaustiveCheck: never = animal;
      throw new Error(`Unknown animal: ${JSON.stringify(_exhaustiveCheck)}`);
  }
}

let result1 = describeAnimal({
  kind: "elephant",
  weight: 5200,
}as Elephant);

let result2 = describeAnimal({
  kind: "tiger",
  speed: 56,
} as Tiger);

let result3 = describeAnimal({
  kind: "peacock",
  featherLength: 86,
} as Peacock);

let result4 = describeAnimal({
  kind: "giraffe",
  neckLength: 12,
});


console.log(result1); // An elephant weighs 5200kg
console.log(result2); // An tiger runs 56kph
console.log(result3); // An peacock has feathers 86cm long
console.log(result4); // Error: Unknown animal: {"kind":"giraffe","neckLength":12}