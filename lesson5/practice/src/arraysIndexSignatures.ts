// 1
type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(array: CustomArray): string[] {
  if (Array.isArray(array)) {
    return array.map(el => {
      if (typeof el === 'string') {
        return el.slice(0, 1).toUpperCase() + el.slice(1);
      } else {
        return el;
      }
    });
  }

  return [];
}

console.log(processCustomArray(customArray)); // ["Apple", 42, "Banana"];
