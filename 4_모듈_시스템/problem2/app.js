import User from "./userProfile.js";

const noah = new User("noah", 26);
const kevin = new User("kevin", 28);

console.log(`두 사람 ${noah.getName()}와 ${kevin.getName()}가 있습니다.`);

console.log(
  `두 사람의 나이의 차는 ${Math.abs(noah.getAge() - kevin.getAge())}`
);
