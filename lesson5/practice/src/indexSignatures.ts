// basic syntax
// interface Accounts {
//   [username: string]: string;
// }

interface Accounts {
  [username: string]: UserProfile;
}

type UserProfile = {
  name: string;
  age: number;
  email: string;
}

const userAccounts: Accounts = {
  tomatoTomato: {
    name: "Tom",
    age: 76,
    email: "tomTomatoes@aol.com",
  },

  liz1234: {
    name: "Lizzy Stein",
    age: 48,
    email: "izzyStreet4ever@gmail.com",
  }, 
}

// 1
// false
// even though we set the key as number in the index signature, when we reference the keys, a string value will be returned

// 2
// Use Map - a built-in JS data strucutre that allows keys of any type, including numbers
