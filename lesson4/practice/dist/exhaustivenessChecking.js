"use strict";
function describeShape(shape) {
    let area;
    switch (shape.kind) {
        case ("circle"):
            area = Math.PI * Math.pow(shape.radius, 2);
            break;
        case ("square"):
            area = Math.pow(shape.sideLength, 2);
            break;
        case ("triangle"):
            area = 0.5 * shape.base * shape.height;
            break;
        default:
            const _exhaustiveCheck = shape;
            // Type 'Triangle' is not assignable to type 'never'.
            throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
    }
    console.log("The area is " + area);
}
function describeAnimal(animal) {
    switch (animal.kind) {
        case ("elephant"):
            return `An ${animal.kind} weighs ${animal.weight}kg`;
            break;
        case ("tiger"):
            return `An ${animal.kind} runs ${animal.speed}kph`;
            break;
        case ("peacock"):
            return `An ${animal.kind} has feathers ${animal.featherLength}cm long`;
            // Type 'Giraffe' is not assignable to type 'never'
            break;
        default:
            let _exhaustiveCheck = animal;
            throw new Error(`Unknown animal: ${JSON.stringify(_exhaustiveCheck)}`);
    }
}
let result1 = describeAnimal({
    kind: "elephant",
    weight: 5200,
});
let result2 = describeAnimal({
    kind: "tiger",
    speed: 56,
});
let result3 = describeAnimal({
    kind: "peacock",
    featherLength: 86,
});
let result4 = describeAnimal({
    kind: "giraffe",
    neckLength: 12,
});
console.log(result1); // An elephant weighs 5200kg
console.log(result2); // An tiger runs 56kph
console.log(result3); // An peacock has feathers 86cm long
console.log(result4); // Error: Unknown animal: {"kind":"giraffe","neckLength":12}
