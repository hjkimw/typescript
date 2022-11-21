// 초기 세팅 명령어
// 1.설치:  sudo npm i -g typescript
// 2.버전확인: tsc -v
// 3.설정파일 생성: tsc --init
// 4.컴파일(ts로 변환할 js파일): tsc -w main.ts
// 5.버전변경(es6): ts -w main.ts --target es6
// 변수에 타입을 지정하지 않으면 any이며 Typescript에서는 any는 오류라고 인식한다.
const add = (num1, num2) => {
    console.log(num1 + num2);
};
add(2, 3);
