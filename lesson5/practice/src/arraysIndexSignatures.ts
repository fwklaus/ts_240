// 1
// CustomArray describes both arrays and objects
// function takes CustomArray argument
// returns an array containing only the string elements in uppercase
type CustomArray = {
  [index: number]: string | number;
};

const customArray: CustomArray = ["apple", 42, "banana"];

function processCustomArray(arr: CustomArray) {
  let returnArr = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (typeof element === 'string') {
        returnArr.push(element.toUpperCase());
      } else {
        continue;
      }
    }    
  }
  return returnArr;
}

console.log(processCustomArray(customArray));

