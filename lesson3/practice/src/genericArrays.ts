// generic array
const numbers: Array<number> = [1, 2, 3];

// generic array with multiple types using type union
const numsAndStrings: Array<string | number> = [1,  "2"];

// nested array
const matrix: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];

// 1
// yes

// 2
// yes

// 3
// no

// 4
// Yes the code uses the generic array type correctly. It uses a union type to set which values are valid in the fruits array. In this case, a type error is thrown since the array contains an element that isn't defined in the FruitNames type