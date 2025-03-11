/** 1번 퀘스트 */
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((sum, elm) => sum + elm);

console.log(`배열의 합: ${sum}`);

/** 2번 퀘스트 */
const newArray = array.map((elm) => elm * 2);

console.log(`2배수 배열: [${newArray}]`);
