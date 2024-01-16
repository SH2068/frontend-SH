//! 반복문 실습
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

// 버튼에 클릭 이벤트 리스터 추가
btn.addEventListener('click', function() {
// 클릭 시 출력 단락의 텍스트를 초기화
  para.textContent = "Output: ";
  // 입력 필드에서 값을 가져와 num 변수에 저장
  let num = inputNumber.value;
  // 입력 필드 초기화(비움)
  inputNumber.value = '';
  // 입력 필드에 다시 포커스
  inputNumber.focus();
   
  // 1부터 사용자가 입력한 숫자(num)까지 반복
  for (let index = 1; index <= num; index++) {
    // 현재 숫자의 제곱근을 계산
  let sqRoot = Math.sqrt(index); 
  // 현재 숫자의 제곱근을 계산 - 16
  // 해당 제곱근이 정수가 아닌 경우 반복을 계속
  // index 8의 제곱근 2.828
  // >> index가 완전제곱수가 아닐 경우 건너뛰기
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
   }

   // index가 완전제곱수인 경우 현재 숫자를 단락의 텍스트에 추가
   para.textContent += index + " ";
  }
})