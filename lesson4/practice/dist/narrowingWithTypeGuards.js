"use strict";
// 1
// no, there are no type errors
// 2
// results in a type error
// since `length` is now a property defined on the `Video` type, the `if` clause will evaluate to true if `videoOrVideos` is an object or an array
// objects don't have `forEach` defined, so if the argument is an object, a type error is thrown
