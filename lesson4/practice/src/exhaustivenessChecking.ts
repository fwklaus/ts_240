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
  kind: "giraffe",
  neckLength: number,
}

type Animal = Elephant | Tiger | Peacock | Giraffe;

function describeAnimal(animal: Animal): string {
  switch(animal.kind) {
    case "elephant":
      return `An ${animal.kind} weighs ${animal.weight}kg`;
      break;
    case "tiger":
      return `An ${animal.kind} runs ${animal.speed}kph`;
      break;
    case "peacock":
      return `An ${animal.kind} has ${animal.featherLength}cm long tail-feathers`;
      break;
    default:
      let _exhaustiveCheck: never = animal; // Type 'Giraffe' is not assignable to type 'never'.
      throw new Error(`Invalid animal type: ${JSON.stringify(animal)}`);
  }
}

let ele: Elephant = {
  kind: "elephant",
  weight: 4533,
}

let tiny: Tiger = {
  kind: "tiger",
  speed: 45,
}

let peety: Peacock = {
  kind: "peacock",
  featherLength: 72,
}

let rose: Giraffe = {
  kind: "giraffe",
  neckLength: 36,
}

console.log(describeAnimal(ele)); // An elephant weighs 4533kg
console.log(describeAnimal(tiny)); // An tiger runs 45kph
console.log(describeAnimal(peety)); // An peacock has 72cm long tail-feathers
console.log(describeAnimal(rose)); // Error: Invalid animal type: {"kind":"giraffe","neckLength":36}
