// 1
interface User {
  name: string;
  email: string;
  age: number;
}

type NameOnly = Pick<User, "name1">;
type WithoutName = Omit<User, "name1">;

// type error in the case of `Pick` on `line 7`
// `line 8` executes without any issues and return a new type with all the propertes of `User`

// in the `Pick` expression we specify a property `name1` that doesn't exist on the `User` interface, so a type error is raised
// in the `Omit` expresssion, since `name1` doesn't exist on `User`, the compiler simply ignores the property and returns a new type containing all the propeties of `User`
