"use strict";
function movePoint(point, dx, dy) {
    return {
        x: point.x + dx,
        y: point.y + dy,
    };
}
let coordinates = {
    x: 3,
    y: 4,
};
console.log(movePoint(coordinates, 2, 2)); // { x: 5, y: 6 }
