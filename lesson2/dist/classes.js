"use strict";
// 1
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    move() {
        console.log(`The car is moving at ${this.speed}mph.`);
    }
}
let fit = new Car(46);
fit.move();
