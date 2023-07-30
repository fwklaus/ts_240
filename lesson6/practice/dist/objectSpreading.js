"use strict";
const person = {
    name: "John",
    age: 30,
};
const address = {
    street: "123 Main St",
    city: "Tokyo",
    country: "Japan",
};
const combined = Object.assign(Object.assign(Object.assign({}, person), address), { phone: "555-1234" });
// executes without any issues
