/** 1번 퀘스트 */
/**
 1번 퀘스트: 자바스크립트 코드가 웹 페이지에서 실행되는 과정

1. HTML 파싱 & DOM 생성
- 브라우저는 HTML을 위에서 아래로 읽으며 DOM(Document Object Model)을 생성g한다.

2. CSS 파싱 & 렌더 트리(Render Tree) 생성 (<link> 태그의 stylesheet를 만났을때 다운로드 후 진행하는 과정)
- CSS 파일을 로드하고 스타일을 적용한 후 렌더 트리를 만든다.

3. 자바스크립트 다운로드 및 실행 (<script> 태그의 자바스크립트 파일을 만났을때 다운로드 후 진행하는 과정)
- 자바스크립트 엔진이 코드를 실행하며, 엔진 내부의 콜 스택(Call Stack)과 이벤트 루프(Event Loop)를 활용하여 동작을 처리합니다.

4. 자바스크립트 실행 과정 (엔진 내부)
- 파싱 (Parsing): 코드를 토큰화(Tokenizing)하고 추상 구문 트리(AST)를 생성합니다.
- 컴파일 (Compilation): 최신 엔진(V8 등)은 JIT(Just-In-Time) 컴파일을 통해 빠르게 변환합니다.
- 실행 (Execution): 변수 선언, 함수 실행, DOM 조작 등이 수행됩니다.

5. 비동기 처리 (이벤트 루프 & 콜백 큐)
- setTimeout, fetch 같은 비동기 함수는 웹 API를 활용하며, 완료된 작업은 이벤트 루프를 통해 실행됩니다.


 */
/** 2번 퀘스트 */
// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); // Error
let messageLet = "Hello with let!";

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); // Error
const messageConst = "Hello with const!";

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // Error
const greet = () => "Hello, Arrow Function!";
