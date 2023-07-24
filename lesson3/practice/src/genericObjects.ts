// Generic Object
type User<T> = {
  name: string;
  age: T;
};

const user1: User<number> = {
  name: "John Doe",
  age: 25,
};

const user2: User<string> = {
  name: "Jane Doe",
  age: "thirty",
};

// Generic Object with multiple generic types

type User2<T1, T2> = {
  name: string;
  age: T1;
  id: T2;
};

const user3: User2<number,string> = {
  name: "John Doe",
  age: 25,
  id: "4d747fb8-bdb3-11ed-afa1-0242ac120002",
};

const user4: User2<string, number> = {
  name: "Jane Doe",
  age: "thirty",
  id: 1,
};
