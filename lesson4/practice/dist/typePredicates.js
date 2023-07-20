"use strict";
// type Shape = Circle | Square;
function isCircle(shape) {
    return "radius" in shape;
}
let redShape = {
    kind: "circle",
    color: 'red',
    radius: 5,
};
function sayShapeColor(shape) {
    if (isCircle(shape)) {
        console.log(`The circle is ${shape.color}`);
        return;
    }
    console.log(`Shape is a square`);
}
function isCar(vehicle) {
    // Implement this function
    // if ("type" in vehicle) {
    //   return vehicle.type === 'car';
    // } else {
    //   return false;
    // }
    return "doors" in vehicle;
}
// Usage
let myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    type: "car",
    doors: 4,
};
if (isCar(myCar)) {
    console.log(myCar.doors); // 4
}
