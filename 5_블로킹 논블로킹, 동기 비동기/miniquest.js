/** 1번 퀘스트 */
console.log("------1번 퀘스트------");

console.log("Start");
console.log("Processing");
console.log("End");

/** 2번 퀘스트 */
console.log("------2번 퀘스트------");
console.log("Start");
setTimeout(() => {
  console.log("Async Operation Complete");
}, 1);
setTimeout(() => {
  console.log("End");
}, 0);
