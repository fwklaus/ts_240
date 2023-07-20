// 1
// call the sqrt function from a separate function inside a try block
// if the sqrt function throws an error, function should return `-1`

function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

function safeSqrt(x: number): number {
  try {
    return sqrt(x);
  } catch (e: unknown) {
    if (e instanceof Error) {
      return - 1;
    } else {
      throw e;
    }    
  }
}

console.log(safeSqrt(-1)); // - 1
console.log(safeSqrt(4)); // 2
