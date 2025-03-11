/** 1번 퀘스트 */
const myFirstPromise = new Promise((resolve, reject) => {
  resolve("Hello, Promise!");
});

// 아래 코드는 수정하지 마세요.
myFirstPromise.then((message) => {
  console.log(message);
});

/** 2번 퀘스트 */
const waitForMessage = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, Async/Await!");
    }, 1000);
  });
};

const displayMessage = async () => {
  const message = await waitForMessage();
  console.log(message);
};

displayMessage();
