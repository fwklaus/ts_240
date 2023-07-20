// 1
// results in a type error - "Duplicate Identifier"
// types are "closed"
// we cannot declare a second type with the same name as another type

// 2 
// Code executes without any issues
// Regarding assignability, TS's structural type system is concerned with the shape an object has
// An object created from an interface can be assigned to a type that describes the same shape