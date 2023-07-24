// 1
interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  return {
    x: point.x + dx,
    y: point.y + dy,
  }
}

let coordinates: Point = {
  x: 3,
  y: 4,
}

console.log(movePoint(coordinates, 2, 2)); // { x: 5, y: 6 }
