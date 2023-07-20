// 1 
// The class definition results in a type error
// optional parameters must come after required parameters

// 2

interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;  
  }

  move() {
    console.log(`The car is moving at ${this.speed} speed`);
  }
}
