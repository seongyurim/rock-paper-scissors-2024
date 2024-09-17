![Header](https://capsule-render.vercel.app/api?type=rect&height=250&color=1e235a&text=Rock%20Paper%20Scissor&fontColor=ffffff&fontSize=60&desc=컴퓨터와%20대결!%20가위바위보%20게임%20미니%20프로젝트&descAlignY=70&descSize=18)
<br><br>

## 프로젝트 소개
컴퓨터와 간단한 가위바위보 대결을 펼치는 리액트 기반 미니 게임 프로젝트입니다. 유저 선택과 컴퓨터 선택을 비교하여 게임 결과를 실시간으로 확인할 수 있습니다.

## 개발기간
2024.07.15 (1일)

## 기술스택
<div>
	<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
	<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=react&logoColor=white"> 
</div>

## 주요기능
- **상태 관리**: 렌더링할 요소를 상태로 관리하여 실시간으로 UI를 업데이트한다.
- **컴포넌트화**: 반복되는 구조의 요소를 컴포넌트로 분리하여 재사용성을 높인다.
- **속성 전달**: 컴포넌트에 속성(`props`)을 전달하여 동적인 UI를 구성한다.
- **유저 선택 렌더링**: 유저가 선택한 항목을 실시간으로 화면에 반영한다.
- **랜덤 대응**: 컴퓨터의 선택은 난수를 통해 결정되어 게임의 변동성을 유지한다.

## 상세기능
### 1) 기본로직
- 가위, 바위, 보 아이콘 중에서 하나를 선택한다.
- `play` 함수가 실행되면서 세개의 상태를 저장한다.
- 즉 유저의 선택, 컴퓨터의 선택, 게임 결과에 대한 상태를 저장한다.
- 컴퓨터의 선택은 경우의 수 범위의 난수를 생성하여 랜덤으로 대응된다.
- 게임 결과는 `judgement` 함수를 통해 저장된다.
- 함수에서는 유저의 선택과 컴퓨터의 선택이 동일하면 tie를 반환한다.
- 유저의 선택에 대한 경우의 수를 삼항연산자를 통해 반환한다.
- 리셋 버튼을 클릭하면 `play` 함수에서 저장했던 상태들을 초기화시킨다.

### 2) 박스 컴포넌트로 속성 전달
- 유저에게 '유저의 선택', '컴퓨터의 선택'을 렌더링해야 한다.
- 이 박스는 동일한 구조로 구성되어 있으므로 컴포넌트화한다.
- 박스 컴포넌트의 속성으로 '주체', '선택', '결과'를 전달한다.
	- 주체: 유저 혹은 컴퓨터
 	- 선택: 유저의 선택 혹은 컴퓨터의 선택
	- 결과: 유저의 결과

### 3) 박스 컴포넌트 내부
+ 주체가 컴퓨터인 경우: 유저의 결과를 반전시킨다.
+ 주체가 유저인 경우: 건네받은 결과를 그대로 보여준다.
+ 게임 결과에 따라 이미지 색상을 변경하는 클래스를 부여한다.
