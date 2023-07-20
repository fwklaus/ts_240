// 1 
// The code will raise an error
// We are trying to assign a number result to the `result` variable which is declared as a `string` type

// 2
// The code will not raise an error
// JS performs implicit type coercion, and the result of the operation is a string "22", which doesn't violate the explicit `string` type declaration

// 3
// The code raises an error because we are comparing types for equality that cannot be equal

// 4
// No, the code does not raise an error

// 5
// Yes, the code will raise an error. TS infers the resulting type of the operation as a union of the two types, which it cannot assign to boolean

// 6
// Yes, the code raises an error

