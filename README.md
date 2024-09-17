![Header](https://capsule-render.vercel.app/api?type=rect
&color=1e235a
&text=Rock%20Paper%20Scissor
&desc=컴퓨터와%20대결!%20가위바위보%20게임%20미니%20프로젝트
&section=header
&height=250
&fontColor=ffffff
&fontSize=60
&fontAlignY=45
&descAlignY=67
&descSize=30
)
<br><br>
<img 
src="https://capsule-render.vercel.app/api? //이 물음표 뒤에 붙는 인자들을 바꿔주면 된다.
type=wave	//헤더의 모양이다.
&color=auto	//헤더의 색을 어떻게 할건지 
&reversal=true //default=false, 색의 방향을 바꿔줌 (gradient일 경우)
&height=300	//헤더의 높이
&section=header	//헤더인지 푸터인지, 만약 footer인 경우 맨 아래 출력됨
&text=capsule%20render	   //헤더의 메인 텍스트 (%20은 띄어쓰기를 나타냄)
&desc=안녕하세요 반갑습니다. // description 텍스트
&textBg=true	//메인 텍스트의 배경화면
&fontSize=90 	//헤더의 폰트사이즈
&fontColor=ffee00  //폰트 컬러 : hexa값으로 적어두되, #은 뺄것!
&animation=fadeIn" //애니메이션 효과
/>

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
