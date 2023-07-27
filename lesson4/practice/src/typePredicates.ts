// 1
// we have types Vehicle, Motorcycle, and Car
// parameter vehicle is typed as a union between the three types
  // we need to determine if the argument is a Car
    // the property that makes a Car unique is doors
    // if doors is in vehicle, return true

type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
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
