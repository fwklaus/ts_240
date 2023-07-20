// 1
// define a new interface, Shape, that encapsulates the shared properties of the interfaces
// implement a function , displayShapeInfo, that accepts a Shape object
  // returns a string with information about the shape
  // verify the function works with both Rectangle and Circle objects

// since interface Rectangle and Circle are both subtypes of Shape, due to structural typing, both types can be assigned to function parameter shape of type Shape at invocation
// must narrow the Shape to access properties unique to Rectangle and Circle
  
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

function isRectangle(obj: any): obj is Rectangle {
  return obj.length;
}

function isCircle(obj: any): obj is Circle {
  return obj.radius; 
}

function displayShapeInfo(shape: Shape) {
  if (isRectangle(shape)) {
    console.log(`The ${shape.color} rectangle is ${shape.length}cm long by ${shape.width}cm wide.`);
  } else if (isCircle(shape)) {
    console.log(`The ${shape.color} circle has a radius of ${shape.radius}cm.`);
  }
}

let circle: Circle = {
  radius: 20,
  color: "red",
}

let rectangle: Rectangle = {
  length: 10,
  width: 5,
  color: "blue",
}

displayShapeInfo(circle);
displayShapeInfo(rectangle);
