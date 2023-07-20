// 1 
// Type inference does not apply to parameters
// In this case, a and b are both inferred as "any" since type annotations are not given, and all values passed to the method are accepted
// In the case that both arguments are numbers or both string types, concatenation is valid, but if the arguments are of different types, expect the unexpected
// Explicit typing would be better for the function parameters