// 1
interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function isRectangle(shape: Shape): shape is Rectangle {
  return "width" in shape;
}

function isCircle(shape: Shape): shape is Circle {
  return "radius" in shape;
}

function displayShapeInfo(object: Shape): string {
  if (isCircle(object)) {
    let circumference = (2 * Math.PI * object.radius).toFixed(2);
    return `The ${object.color} circle has a circumference ${circumference}cm`;
  } else if (isRectangle(object)) {
    return `The ${object.color} rectangle has an area of ${object.length * object.width}cm`;
  } else {
    throw new Error("Invalid Shape");
  }
}

let circle: Circle = {
  color: "red",
  radius: 5,
}

let rectangle: Rectangle = {
  color: "blue",
  length: 4,
  width: 2,
}

console.log(displayShapeInfo(circle)); 
// The red circle has a circumference of 31.42cm

console.log(displayShapeInfo(rectangle));
// The blue rectangle has an area of 8cm
