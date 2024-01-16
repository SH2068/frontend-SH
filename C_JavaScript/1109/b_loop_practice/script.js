// //! 반복문 연습 예제

// let fruits = ['apple', 'banana', 'cherry'];

// //? 1. 배열의 모든 요소를 출력

// for문
console.log('---for문---');
for (let index = 0; index <  fruits.length; index++) {
//  // 배열 요소 가져오기
//  // 배열명[요소 인덱스 번호]
  console.log(fruits[index]);
}

// while문
console.log('---while문---');

let index = 0;
while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}


// do-while문
console.log('---do-while문---');

let index2 = 0;

do {
  console.log(fruits[index2]);
  index++;
} while (index2 < fruits.length);

//! 반복문 사용하기 실습

// 사용자로부터 입력 받기 (do while문)
// userInput 변수에 prompt('Enter a numbere greater than '10')
// userInput 변수가 10을 초과하는 수가 아닌 경우 반복 

let userInput;
do {
  userInput = prompt('Enter a number greater than 10');
} while (userInput <= 10);

//! prompt창
// prompt 함수는 항상 문자열을 반환

let input = prompt('Enter a number')
let numberInput = Number(input); //명시적으로 숫자로 변환
let sum = numberInput + 10;