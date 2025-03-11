### 1번 퀘스트 예상 답안

오류발생
Hello ES6

### 이유

A
오류가 발생하는 이유
showMessage 내부에 있는 message이 호이스팅 되면서 블록 스코프 내에서 message를 참조할 경우
TDZ 상태이기 때문에 오류가 발생한다.

B
B는 블록 스코프 내부에 있는 message 값이 정상적으로 출력됩니다.
