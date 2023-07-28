// 1

// 2
type User = Map<number, string>;

const obj: User = new Map();
obj.set(1, "a");
obj.set(2, "b");
obj.set(3, "c");

console.log(Object.keys(obj).every(key => typeof key === 'number')); // true
