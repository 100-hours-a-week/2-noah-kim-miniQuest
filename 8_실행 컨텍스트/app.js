const message = "Hello, JavaScript!";

const showMessage = () => {
  console.log(message); // A
  let message = "Hello, ES6!";
  console.log(message); // B
};

showMessage();
