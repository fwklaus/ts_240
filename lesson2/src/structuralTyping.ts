// 1
// no, the code will not raise an error

// 2
// there is a type error
// `et` of type `Alien` does not contain "at least the same members" as type `Human`. `Alien` is not a valid subtype of `Human`, and as such, is not assignable to a variable of type `Human`

// 3
// there is a type error
// type `Square` is a valid subtype of `Shape`, so we can assign the `redSquare` object to `shape`, which is typed as `Shape` without a problem. When we try to access the `sideLength` property on `shape`, however, a type error is raised. Structural typing allows us to assign a subtype to another type, but any extra properties on that subtype not defined on the type its assigned to will no longer be accessible at compile-time

// the console.log statment outputs `5` at runtime because errors thrown at compile time have no affect on the code at runtime, and likewise, the type safety enforced by structural typing does not mutate the object. The `sideLength` property is accessible at runtime
