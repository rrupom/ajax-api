const doSomethingWithFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const domeSomethingWithAxios = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => console.log(response.data));
};

const postSomethingWithFetch = () => {
  const postData = {
    title: "Rupom is Coding",
    body: "Very working hard",
    userId: 1,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const postSomethingWithAxios = () => {
  const postData = {
    title: "Coding is Fun",
    body: "Coding is also hard",
    userId: 1,
  };

  axios
    .post("https://jsonplaceholder.typicode.com/posts", postData)
    .then((response) => console.log(response.data));
};
