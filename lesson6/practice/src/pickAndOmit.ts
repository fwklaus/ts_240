// Pick
interface User {
  name: string;
  email: string;
  age: number;
}

// Pick can select one property from a defined type
type NameOnly = Pick<User, "name">;
const user1: NameOnly = {name: "Forrest"};

// or multiple properties
type NameAndAge = Pick<User, "name" | "age">;
const user2: NameAndAge = { name: "John", age: 35 };

// Omit

// omitting a single property
type WithoutEmail = Omit<User, "email">;
const user3: WithoutEmail = { name: "John", age: 35 };

// omitting multiple properties
type EmailOnly = Omit<User, "name" | "age">;
const user4: EmailOnly = { email: "john@example.com" };

// 1
// The code results in a type error
// In both cases we specify a property that doesn't exist on the User interface
// In the case of `Pick`, a compile-time error is thrown
