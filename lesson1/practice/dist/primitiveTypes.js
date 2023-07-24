"use strict";
// 1
// yes, this will raise a type error
// we are attempting to assign a number to a variable of type string
// let x: number = 2;
// let y: number = 2;
// let result: string = x + y; // Type 'number' is not assignable to type 'string'.
// 2
// no, there is no error
// the result of 2 + '2' is '22' due to JS's implementation of type coercion
// let x: number = 2;
// let y: string = "2";
// let result: string = x + y;
// 3
// yes, there is an error
// we cannot use '===' to compare values of different types
// let x: number = 2;
// let y: string = "2";
// let result: boolean = x === y; // This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
// 4
// no, there is no error
// with short-circuiting, the OR || operator evaluates the truthiness of each of its operands
// when it encounters a truthy value, it "short-circuits" and returns the value without evaluating the rest of the expressions in the statement
// in this case, x evaluates to true, and the short-circuit syntax returns the value of x, true, which is assigned to the boolean result variable
// let x: boolean = true;
// let y: number = 2;
// let z: string = "";
// let result: boolean = x || y || z;
// 5
// yes, there is a type error
// with the AND && operator, if each operand is truthy, the expression returns the value to the right of &&, which is the number 2, in the case of the expression to the left of the OR || operator
// TypeScript then infers the resulting return type for the remaining two operands as a union of the two types: `string|number`
// let x: boolean = true;
// let y: number = 2;
// let z: string = "";
// let result: boolean = (x && y) || z; // Type 'string | number' is not assignable to type 'boolean'.
// Type 'string' is not assignable to type 'boolean'.
// 6
// yes, there is a type error
// x is typed as undefined
// we cannot assigned a number to undefined
// let x: undefined;
// x = 1; //  Type '1' is not assignable to type 'undefined'.
