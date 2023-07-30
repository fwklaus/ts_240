// 1
// function getData(url) {
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }


async function getData(url: string): Promise<void> {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}