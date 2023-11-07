// 자바스크립트의 구성 요소
// 조건문, 반복문, 함수, 이벤트 등

//! 자바스크립트 조건문

// 조건문
// : 프로그램에게 특정 조건을 검사하고
// : , 그 결과에 따라 다른 행동을 하도록 명령하는 방식

// JS 조건문의 종류
// : if문, else if문, else문, switch문

//! 1. if문
// 가장 기본적인 조건문: 특정 조건이 참이면 코드 블럭이 실행

// if문의 기보적인 문법
// if (조건) {
// 조건이 참일 때 실행되는 코드 
// }

// 조건은 보통 비교 연산자를 사용해 표현
// (==, !=, ===, !==, <, >, <=, >=)
// 리턴값(결과값)은 boolean타입(true, false)

// if문은 주어진 조건이 참(true)일 때만 코드 블럭을 실행
// 만약 조건이 거짓(false)이면 코드 블럭은 무시

let number = 10;

if(number > 0) {
  console.log("The number is positive");
}

//! 2. if else문
// else문은 if문과 함께 사용
// , if의 조건이 거짓(false)일 경우 else 뒤의 코드 블록이 실행

// if-else문의 기본적인 문법

// if (조건) {
// 조건이 참일 때 실행되는 코드
// } else {
// 조건이 거짓일 때 실행되는 코드
// }

// else문은 if문의 조건이 거짓일 때 실행
// 즉 , if문의 조건을 만족하지 않는 모든 경우에 대해
//      else문의 코드 블럭이 실행

number = -10;

if(number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

// if-else문의 코드 축약
// 실행될 코드 블럭이 한 줄일 경우 코드 축약이 가능
if(number > 0) console.log("The number is positive");
 else console.log("The number is not positive");

 // if-else문 예시
 let shoggingDone = false;
 let childsAllowance;

 // 쇼핑을 완료 한 경우: 용돈을 10
 // 완료하지 않은 경우: 용돈을 5

 if (shoggingDone === false) {
  childsAllowance = 5;
 } else {
  childsAllowance = 10;
 }

//! 3. else if문
// if와 else 사이에 여러 개의 조건을 추가

// if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

// else if문의 기본적인 문법

// if (조건1) {
// 조건1이 참일 때 실행되는 코드
// } else if (조건2) {
// 조건1이 거짓이고 조건2가 참일 때 실행되는 코드
// } else {
// 모든 조건이 거짓일 때 실행되는 코드
// }

// else if문은 if문의 조건이 거짓이고
// , else if문의 조건이 참일 때 실행

number = 0;

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// else if문의 예시
// 나이가 8살 미만 '어린이 입니다.' 출력
// 나이가 8살 이상 20살 미만 '청소년 입니다.' 출력
// 나이가 20살 이상 '성인입니다.' 출력

let age = 20;

if (age < 13) {
  console.log("어린이 입니다.");
} else if (age >= 13 && age < 20) {
  console.log("청소년 입니다.");
} else {
  console.log("성인 입니다.");
}