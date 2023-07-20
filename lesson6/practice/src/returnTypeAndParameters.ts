// ReturnType
function createPerson(name: string, age: number) {
  return { name, age };
}

type CreatePersonFunction = typeof createPerson; // (name: string, age: number) => { name: string; age: number; }

type Person = ReturnType<CreatePersonFunction>; // { name: string; age: number; }

function greetPerson(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

// Parameters
type AddFunction = (x: number, y: number) => number;
type AddParameters = Parameters<AddFunction>; // Equivalent to [number, number]
const params: AddParameters = [1, 2];

// W/ Rest Parameters 
function sum(prefix: string, ...numbers: number[]): string {
  const total = numbers.reduce((total, n) => total + n, 0);
  return `${prefix}${total}`;
}

type SumParameters = Parameters<typeof sum>;
// [string, ...number[]]

const input: SumParameters = ["The total is: ", 1, 2, 3, 4];
const result = sum(...input);

console.log(result); // Output: The total is: 10

// 1
function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbersParams = Parameters<typeof addNumbers>;
type AddNumbersReturnType = ReturnType<typeof addNumbers>;

type AddNumbersFunction = (...args: AddNumbersParams) => AddNumbersReturnType;

// In both cases, we should be passing a type, but instead are passing functions, which throws an error
