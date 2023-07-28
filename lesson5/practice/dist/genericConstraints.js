"use strict";
function getProperty(obj, prop) {
    return obj[prop];
}
let bud = {
    age: 64,
    name: "Buddy",
};
console.log(getProperty(bud, "name"));
