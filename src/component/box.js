import React from 'react'

const Box = (props) => {
  console.log("props: " + props);

let result;
let resultImg;

// 유저의 결과값을 반전 컴퓨터의 결과값 부여
if ((props.who === "COMPUTER") && // 변경하려는 대상이 컴퓨터인가?
    (props.result !== "TIE") && // 결과가 비긴 것은 아닌가?
    (props.result !== "")) { // 결과 값이 비어있지는 않은가?
  result = (props.result === "WIN") ? "LOSE" : "WIN";
}
else {
    result = props.result;
}

// 결과값에 따라 이미지 색상을 변경하는 클래스 부여
if (result === "WIN") {
  resultImg = "win-img";
}
else if (result === "LOSE") {
  resultImg = "lose-img";
}
else {
  resultImg = "tie-img";
}

  return (
    <div className={`box ${result}`}>
        <div className="who-txt">{props.who}</div>
        <div className="result-txt">{result}</div>      
        <img className={`item-img ${resultImg}`} src={props.item && props.item.img}/>
        {/* 오류를 방지하기 위해 props.item이라는 guard값을 &&연산자 처리해야 한다. */}
    </div>
  )
}

export default Box;
