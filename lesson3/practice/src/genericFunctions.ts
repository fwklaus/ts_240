// 1
function pair<T>(x: T, y: T): Array<T> {
  return [x, y];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
console.log(pairOfNumbers);
console.log(pairOfStrings);