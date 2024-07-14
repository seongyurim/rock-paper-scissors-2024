import { useState } from 'react';
import './App.css';
import Box from './component/box.js';

// Images
import rockImg from '../src/asset/rock.png';
import paperImg from '../src/asset/paper.png';
import scissorImg from '../src/asset/scissor.png';
import resetImg from '../src/asset/reset.png'

// 1. 박스 2개: 타이틀, 사진, 게임결과
// 2. 가위바위보 아이콘
// 3. 아이콘을 클릭하면 클릭한 값이 박스에 나타난다.
// 4. 컴퓨터는 랜덤하게 아이템이 선택된다.
// 5. 3~4의 과정을 통해 누가 이겼는지 승패를 따진다.
// 6. 결과에 따라 테두리 색 변경: win-green, lose-red, tie-black

const choice = {
  rock: {
    name: "ROCK",
    img: rockImg
  },
  paper: {
    name: "PAPER",
    img: paperImg
  },
  scissor: {
    name: "SCISSOR",
    img: scissorImg
  }
}

// const initialState = {
//   userSelect: null,
//   comSelect: null,
//   result: null
// }

function App() {
  let [userSelect, setUserSelect] = useState(null); // USER's state value
  let [comSelect, setComSelect] = useState(null); // COMPUTER's state value
  let [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    
    let comChoice = randomChoice();
    setComSelect(comChoice);

    setResult(judgement(choice[userChoice], comChoice));
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 key값만을 추출하여 배열로 생성하는 함수
    // console.log("*item array: " + itemArray);

    let randomItem = Math.floor(Math.random() * itemArray.length); // 배열 인덱스 이하의 난수 생성
    // console.log("*random value: " + randomItem);

    let final = itemArray[randomItem];
    // console.log("*final: " + final);

    return choice[final];
  }

  const judgement = (user, com) => {
    // console.log("*user: " + user + ", computer: " + com);

    if (user.name === com.name) {
      return "TIE";
    }
    else if (user.name === "ROCK") return (com.name === "SCISSOR") ? "WIN" : "LOSE";
    else if (user.name === "PAPER") return (com.name === "ROCK") ? "WIN" : "LOSE";
    else return (com.name === "PAPER") ? "WIN" : "LOSE";
  }

  const resetGame = () => {
    setUserSelect(null);
    setComSelect(null);
    setResult("");
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">Beat The Computer</div>

        <div className="btn-list">
          <button onClick={() => play("rock")} >
            <img src={rockImg} className="btnImg" alt="Rock Image"/>
            </button>
          <button onClick={() => play("paper")}>
            <img src={paperImg} className="btnImg" alt="Paper Image"/>
            </button>
          <button onClick={() => play("scissor")}>
            <img src={scissorImg} className="btnImg" alt="Scissor Image"/>
            </button>
            <button onClick={resetGame}>
            <img src={resetImg} className="btnImg" alt="Refresh Game"/>
            </button>
          {/* 그냥 play("rock")이라고만 하면 함수 실행 형태이므로 코드를 읽으면서 즉시 실행된다.
          따라서 함수를 전달하는 콜백 형태로 작성하여야 필요한 순간에 실행시킬 수 있다. */}
        </div>

        <div className="box-list">
          <Box who="USER" item={userSelect} result={result}/>
          <Box who="COMPUTER" item={comSelect} result={result} />
        </div>
      </div>

    </div>
  );
}

export default App;
