// 1
// We rely on type inference here for our function parameters `a` and `b`
// In this case, both calls work as expected, concatenating the strings and adding the numbers for the invokcations on lines `8` and `9`, respectively. 
// If we were to provide arguments of data types other than `string` and `number`, however, or if the arguments weren't both of the same type, the parameters will still be typed as `any`, which could result in errors or unexpected behavior
// the function parameters should be explicitly typed

