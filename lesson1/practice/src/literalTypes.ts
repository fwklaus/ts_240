// 1
// Rewrite function using literal types to make it more robust

// function calculate(operation: string, a: number, b: number) {
//   switch (operation) {
//     case "add":
//       return a + b;
//     case "subtract":
//       return a - b;
//     case "multiply":
//       return a * b;
//     case "divide":
//       return a / b;
//     default:
//       throw new Error("Invalid operation");
//   }
// }

function calculate(
  operation: "add" | "subtract" | "multiply" | "divide",
  a: number, 
  b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}
