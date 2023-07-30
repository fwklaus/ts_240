// 1
function sqrt(x: number): number {
  if (x < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(x);
}

function safeSqrt(x: number): number {
  try {
    return sqrt(x);
  } catch(e: unknown) {
    if (e instanceof Error) {
      return -1;
    } else {
      throw e;
    }
  }
}


console.log(safeSqrt(5)); // 2.23606797749979
console.log(safeSqrt(0)); // 0 
console.log(safeSqrt(-5)); // -1
