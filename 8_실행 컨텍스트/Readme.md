# 미니퀘스트

---

### 1번 퀘스트

```jsx
const message = "Hello, JavaScript!";

const showMessage = () => {
  console.log(message); // A
  let message = "Hello, ES6!";
  console.log(message); // B
};

showMessage();
```

<aside>
👉 다음 코드를 실행했을 때, 콘솔에 출력되는 결과를 예측하고 설명하세요.

</aside>

### 2번 퀘스트

```jsx
const color = "blue";

const firstLevel = () => {
  let color = "red";

  const secondLevel = () => {
    let color = "green";
    console.log(color); // (1)
  };

  secondLevel();
  console.log(color); // (2)
};

firstLevel();
console.log(color); // (3)
```

<aside>
👉 다음 코드를 실행했을 때, 각각의 **`console.log`**에서 출력되는 결과를 예측하고,
왜 그런 결과가 나왔는지 설명하세요.

</aside>
