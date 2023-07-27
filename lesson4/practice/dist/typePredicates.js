"use strict";
// 1
// we have types Vehicle, Motorcycle, and Car
// parameter vehicle is typed as a union between the three types
// we need to determine if the argument is a Car
// the property that makes a Car unique is doors
// if doors is in vehicle, return true
function isCar(vehicle) {
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
