import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exam1 from "./components/Exam1";
import Exam2 from "./components/Exam2";
import Exam3 from "./components/Exam3";
import Exam4 from "./components/Exam4";
import Exam5 from "./components/Exam5";

function App() {
  // 상태(state)
  const [showExam, setShowExam] = useState(true);

  return (
    // <></> : fragment
    // <>
    //   <h1>Hello world</h1>
    //     {/**/} : jsx용 주석석
    //   <h1>Hello world</h1>
    // </>
    // <>
    //   <button onClick={() => setShowExam(!showExam)}>클릭</button>
    //   {/* showExam이 true면 화면에 Exam1 컴포넌트를 호출하여 렌더링하겠다 */}
    //   {showExam && <Exam2 aaa="우가우가" />}
    // </>

    // <Exam3/>
    // <Exam4 />
    <Exam5 />
  );
}

export default App;
