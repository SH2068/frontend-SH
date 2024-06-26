// 함수형 컴포넌트 구현
// rfc를 사용하여 기본 구현(emmet 기능)

/*
! 리액트 동작원리
? CRP 정의
: 웹 브라우저가 HTML, CSS, JS 등의 리소스를 받아서 픽셀로 변화하여 화면에 렌더링하는 과정

- 문서 파싱 및 DOM 생성 (HTML)
  : 브라우저는 HTML 문서를 받아 파싱하고, 이를 DOM 트리로 변환
  : JSX가 Babel을 통해 JS로 변환되어 실행

- CSSOM 생성
  : CSS 파일과 스타일 태그 CSSOM 트리로 변환

- JS 처리
  : 컴포넌트 로직과 상태 관리가 이루어짐

- 렌더 트리 형성
  : DOM과 CSSOM이 결합되어 렌더 트리가 형성 (화면에 실제 표시될 요소 포함)

- 레이아웃(Reflow)
  : 렌더 트리를 기반으로 각 요소의 크기와 위치를 계산

- 페인트
  : 계산된 레이아웃에 따라 요소들을 화면에 그림

- 합성
  : 여러 레이어를 합성하여 최종 화면을 사용자에게 보여줌.

! 리액트와 CRP
리액트는 가상DOM을 사용하여 실제 DOM의 변경을 최소화
: Reflow와 Paint 과정의 비용을 줄여서 성능을 향상

! 가상 DOM
: 실제 DOM을 추상화한 메모리 기반의 경량 DOM 표현

? 작동 원리
- 초기 렌더링: 컴포넌트 초기 렌더링 시 실제 DOM과 동일한 가상 DOM을 메모리에 생성
- 상태 변경: 컴포넌트의 상태가 변경, 새로운 가상 DOM 트리를 생성
- Diff 알고리즘: 새로운 가상 DOM과 이전 가상 DOM을 비교하여 차이를 계산
- 최소 업데이트: 계산된 차이 만큼 실제 DOM을 업데이트
*/

export default function React01() {
  return (
    <div>React</div>
  )
}
