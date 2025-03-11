/** 1번 퀘스트 */
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(`2와 3의 합: ${addTwoNumbers(2, 3)}`);

/** 2번 퀘스트 */
const sumOfArray = (array) => {
  const len = array.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(`배열 요소의 합: ${sumOfArray([1, 2, 3, 4, 5])}`);
