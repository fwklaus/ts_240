// 1
// the `myPair` object uses generic objects correctly, but `yourPair` is not typed correctly
// the first property is typed as `numbe`, but is assigned a `string`, and the `second` property is assigned a `number` but is typed as `string`

// 2
// again, `yourPairs` violates type safety
// the generic object is typed `KeyValuePairs<number, string>` so that the `key` property takes a number, and the `values` property references an array of `string` values. The `values` array, however, contains a `number` value at index `2`, so a type error is thrown 