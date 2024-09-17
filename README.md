![Header](https://capsule-render.vercel.app/api?type=rect&height=200&color=1e235a&text=Rock%20Paper%20Scissor&textBg=false&reversal=true&fontColor=fff&fontAlign=50&fontSize=60&desc=seongyurim&descAlignY=85&descSize=20&descAlign=50)


# Overview
컴퓨터와 대결! 가위바위보 게임 미니 프로젝트


# Period
2024.07.15 (a Day)


# Tech Stack
React, CSS


# Overall Features
## 기본로직
1. 가위, 바위, 보 아이콘 중에서 하나를 선택한다.
2. play 함수가 실행되면서 세개의 상태를 저장한다.
3. 즉 유저의 선택, 컴퓨터의 선택, 게임 결과에 대한 상태를 저장한다.
4. 컴퓨터의 선택은 경우의 수 범위의 난수를 생성하여 랜덤으로 대응된다.
5. 게임 결과는 judgement 함수를 통해 저장된다.
6. 함수에서는 유저의 선택과 컴퓨터의 선택이 동일하면 tie를 반환한다.
7. 유저의 선택에 대한 경우의 수를 삼항연산자를 통해 반환한다.
8. 리셋 버튼을 클릭하면 play 함수에서 저장했던 상태들을 초기화시킨다.


## 박스 컴포넌트로 속성 전달
+ 유저에게 보여주는 '유저의 선택', '컴퓨터의 선택'을 렌더링해야 한다.
+ 이 박스는 동일한 구조로 구성되어 있으므로 컴포넌트화한다.
+ 박스 컴포넌트의 속성으로 '주체', '선택', '결과'를 전달한다.
	+ 주체: 유저 혹은 컴퓨터
 	+ 선택: 유저의 선택 혹은 컴퓨터의 선택
	+ 결과: 유저의 결과


## 박스 컴포넌트 내부
주체가 컴퓨터인 경우 유저의 결과를 반전시킨다.
주체가 유저인 경우는 건네받은 결과를 그대로 보여준다.
게임 결과에 따라 이미지 색상을 변경하는 클래스를 부여한다.
