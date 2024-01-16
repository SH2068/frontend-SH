//! 문서 객체 생성
// : creatElement()메소드 사용

//? 문서 객체 생성 방법
// document.creatElement(문서객체명);

// 문저 객체 생성 후에 '배치'
// 배치는 트리구조로 전달
// : , 어떤 문서 객체가 있을 때 위에 있는 것을 '부모'
// : , 아래에 있는 것을 '자식'이라고 부른다.

// appendChild()메소드
// : 지정한 부모 객체 아래에 자식 객체 추가
//  부모객체.appendChild(자식객체)

document.addEventListener('DOMContentLoaded', () => {
  // 문서 객체 생성
  const header = document.createElement('h1');

  // 생성한 태그를 조작
  header.textContent = '문서 객체 동적으로 생성';
  header.setAttribute('data-custom', '사용자 정의 속성');
  header.style.color = 'white';
  header.style.backgroundColor = 'black';

  // h1태그를 body태그 아래에 추가(자식요소)
  document.body.appendChild(header);
})

//! 문서 객체 이동
// : appenChild()메소드를 사용하여 문서 객체 이동
// : 문서 객체의 부모는 반드시 하나여야 한다.
// : 따라서, 문서 객체를 다른 문서 객체에 추가할 경우 문서 객체가 이동
document.addEventListener('DOMContentLoaded', () => {
  const divA = document.querySelector('#first');
  const divB = document.querySelector('#second');
  const h1 = document.createElement('h1');
  h1.textContent = '이동하는 h1태그';

  // 서로 번갈아가면서 실행하는 함수 구현
  const toFirst = () => {
    divA.appendChild(h1);
    setTimeout(toSecond, 1000)
  }

  toFirst();
})