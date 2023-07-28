// 1
interface Alien {
  age: number;
  name: string;
}

function getProperty<Obj, Key extends keyof Obj>(obj: Obj, prop: Key) {
  return obj[prop];
}

let bud: Alien = {
  age: 64,
  name: "Buddy",
}

console.log(getProperty(bud, "name")); // Buddy
