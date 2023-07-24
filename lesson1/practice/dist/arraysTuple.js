"use strict";
// 1
// yes, the code will raise an error
// we are trying to append a value of type number to an array typed as string
// let arr: string[] = ["hello", "world"];
// arr.push(5); // Argument of type 'number' is not assignable to parameter of type 'string'.
// 2
// yes, the code will raise a type error
// we have a fixed-length tuple with a number at index 0 and index 1
// we try to add a string number using push, which violates the type constraints of the tuple
// let tuple: [number, number] = [1, 2];
// tuple.push("3"); // Argument of type 'string' is not assignable to parameter of type 'number'.
// 3
// No, the code does not raise an error
// A tuple is, essentially, an array, which gives us access to mutating methods like push
// even though the tuple is supposed to be a fixed length array, the compiler will not raise an warning when we mutate the array using a method like push, so long as we add an assignable type to the array, which we do
// let tuple: [number, number] = [1, 2];
// tuple.push(3);
// 4
// yes, the code will raise an error
// index 0 of the tuple is typed as number, so the string value 1 is unassignable to that index
// let tuple: [number, string] = [1, "2"];
// tuple[0] = "1"; //  Type 'string' is not assignable to type 'number'.
// 5
// const myArray: Array<string | boolean> = [
//   "is",
//   "launch school",
//   "awesome",
//   true,
//   "or",
//   false,
// ]
