// 1
// The code raises an error since the return value is typed as `void`, but we return the value of `sum` on `line 7` which is of type `number`

function logSum(a: number, b: number): void {
  const sum = a + b;
  console.log("The sum of", a, "and", b, "is", sum);
  return sum; // Type 'number' is not assignable to type 'void'.
}

logSum(3, 4);
