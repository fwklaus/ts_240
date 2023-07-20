// 1
// extend the previous solution be adding try-catch logic to make the function more robust
  // use the type `unknown` to type the catch parameter
  // use type guards to narrow the type of the error and handle accordingly
    // if it's an error object, log the message
    // otherwise, log a string
// async function getData(url: string): Promise<void> {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);    
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('An uknown error occured');
    }
  }
}
