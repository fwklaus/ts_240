// 1


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

  move(): void {
    console.log(`The car is moving at ${this.speed}mph.`);
  }
}

let fit = new Car(46);
fit.move(); // The car is moving at 46mph.
