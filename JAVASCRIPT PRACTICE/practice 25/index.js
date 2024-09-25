function makeAPICall(url, callback) {
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => callback(data))
    .catch((err) => console.error("Error during API call: ", err.message));
}

function handleData(data) {
  console.log("processed Data", data);
}

function main() {
  const apiUrl1 = "https://jsonplaceholder.typicode.com/posts/1";
  const apiUrl2 = "https://jsonplaceholder.typicode.com/posts/2";

  makeAPICall(apiUrl1, handleData);
  makeAPICall(apiUrl2, handleData);
}

main();
