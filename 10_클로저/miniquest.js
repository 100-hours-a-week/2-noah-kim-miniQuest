/** 1번 퀘스트 */
function createCounter() {
  let count = 0;

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
  };
}

/** 2번 퀘스트 */
function messageMaker(prefix) {
  function makeMessage(suffix) {
    return `${prefix} ${suffix}`;
  }
  return { makeMessage };
}
