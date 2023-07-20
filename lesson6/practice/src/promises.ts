// Promises
const myPromise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(7);
  }, 1000);
});

myPromise.then((result) => {
  // (parameter) result: number
  console.log(`The answer is ${result}`);
});


// async function
async function retrieveString(): Promise<string> {
  const stringPromise: Promise<string> = new Promise((resolve) =>
    setTimeout(() => resolve("Launch School"), 1000)
  );
  const stringResult: string = await stringPromise;
  return stringResult;
}

// 1
// convert the function that uses promises to TS by adding proper types
// rewrite the function using the async/await syntax

async function getData(url: string): Promise<void> {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}
