// 1
interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  let email = userInfo.email || "N/A"; 
  let age =  userInfo.age || "unknown";

  return `name:${userInfo.name}, age:${age}, email:${email}`;
}

let janie: UserInfo = {
  name: "Janie",
  email: "janie@msn.com",
  age: 65,
}

let drew: UserInfo = {
  name: "Drew",
}

console.log(displayUserInfo(janie));
console.log(displayUserInfo(drew));
