// the contstraint tells us the function will accept an item argument of any type as long as it contains an `age` property with a value of type number
function describeItem<T extends { age: number }>(item: T) {
  if (item.age < 10) {
    console.log(
      `This item is ${item.age} years old. It's still got that fresh style!`
    );
  } else if (item.age < 100) {
    console.log(
      `This item is ${item.age} years old, giving it that touch of character!`
    );
  } else {
    console.log(
      `Wow! This item is ${item.age} years old. This is a true antique, with a history that speaks volumes!`
    );
  }
}

// 1
// rewrite the function in TS by adding types and generic constraints to make the function safer

// function getProperty(obj, key) {
//   return obj[key];
// }
