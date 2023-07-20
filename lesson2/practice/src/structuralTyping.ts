// 1
// The code will not raise an error

// 2 
// There is one type error. We're assigning a Alien type to a Human Type, but the Alien type doesn't have the same shape as the Human type (it lacks all of the same members), so a Type Error is raised

// 3
// There is a type error. We're trying to access a property on the `shape` object that the compiler considers inaccessible from the `shape` object which has `Shape` as its type, even though the object originally had `Square` as its type, which contains the `sideLength` property in its shape. 
