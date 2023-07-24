"use strict";
function displayUserInfo(userInfo) {
    let email = userInfo.email || "N/A";
    let age = userInfo.age || "unknown";
    return `name:${userInfo.name}, age:${age}, email:${email}`;
}
let janie = {
    name: "Janie",
    email: "janie@msn.com",
    age: 65,
};
let drew = {
    name: "Drew",
};
console.log(displayUserInfo(janie));
console.log(displayUserInfo(drew));
