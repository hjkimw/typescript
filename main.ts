// 기본 타입 지정
let text: string = "hello";
let num: number = 3;
let isFemale: boolean = true;
let empty: null = null;
let errors: undefined = undefined;

// 배열 타입 지정
let like: string[] = ["game", "music", "movie"];
let dislike: Array<string> = ["아무거나", "아무거나", "아무거나"];
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];
// like.push(3); <= 타입이 다르기에 오류가발생한다.

// 튜플 타입 지정
let arr1: [string, number] = ["test", 2];
// arr1[0].toUpperCase(); index0인 문자열 요소에는 해당 메서드를 사용할 수 있지만 index1인 요소에는 문자열이 아니기에 오류가 발생한다.

// 함수의 리턴값 타입지정
// 리턴하는 값이 없음
function noReturn(): void {
  console.log("hello");
}

// 해당 함수가 리턴하는 자료형을 타입을 적용해줌
function returnNumber(): number {
  return 5;
}

//에러 객체를 반환하거나 무한루프 함수에서는 리턴값을 never로 지정
function returnErr(): never {
  throw new Error();
}

function infinit(): never {
  while (true) {}
}
