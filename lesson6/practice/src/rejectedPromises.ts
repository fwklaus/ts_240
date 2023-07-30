// 1 
async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.log(`Error message: ${e.message}`);
    } else {
      console.log("An unknown error occurred");
    }
  }
}
