// JSX 예제

import { useState } from "react";
import test1 from "../assets/20250424160303_00004.jpg";

const Exam5 = () => {
  return <Exam5_5 />;
};

// JSX 예제 1 : 자바스크립트 변수로 사용하기
const Exam5_1 = () => {
  const name = "React";
  const element = <h1>Hello, {name}</h1>;

  return element;
};

// JSX 예제 2 : img 태그 이미지 사용
const Exam5_2 = () => {
  const [userImg, setUserImg] = useState(
    "https://www.google.com/imgres?q=%EB%AA%A8%EC%BD%94%EC%BD%A9&imgurl=https%3A%2F%2Fcdn-lostark.game.onstove.com%2Fuploadfiles%2Fuser%2F2022%2F09%2F07%2F637981137443174977.png&imgrefurl=https%3A%2F%2Fm-lostark.game.onstove.com%2FContestBoard%2FViews%2F3300%3Fpage%3D1%26boardType%3D102%26parentNo%3D1&docid=KYsJDII3pQkGuM&tbnid=mlpIVbZevLnZ6M&vet=12ahUKEwijxfzWsrONAxUrja8BHaDcNI0QM3oECEoQAA..i&w=642&h=834&hcb=2&ved=2ahUKEwijxfzWsrONAxUrja8BHaDcNI0QM3oECEoQAA"
  );

  return <img src={test1} />;
};

// JSX 예제 3 : 로그인 여부에 따라 화면 다르게 보이기
const Exam5_3 = ({ isLogin }) => {
  // 조건문 사용!
  if (isLogin) {
    return <h1>환영합니다</h1>;
  } else {
    return <h1>로그인 해주세요 </h1>;
  }
};

// JSX 예제 4 : 로그인 여부에 따라 화면 다르게 보이기(삼항 연산자)
const Exam5_4 = (props) => {
  return <h1>{props.isLogin ? "환영합니다" : "로그인하라고"}</h1>;
};

export default Exam5;

// JSX 예제 5 : 배열을 이용한 화면 렌더링 방법 (***중요***)
// - 클라이언트(React) <-> 서버(SpringBoot)
// - 서버에서 응답받은 데이터는 대부분 배열 형태
const Exam5_5 = () => {
  // 서버에서 아래 배열을 응답 받았다고 가정
  const members = ["짱구", "유리", "철수", "훈이", "맹구"];

  // JS 내장 함수 중 배열을 하나씩 순차접근해서 콜백함수 내에있는 내용 수행 후
  // 새로운 배열을 만들어 반환 => map // filter랑 reduce도 map이랑 같이 공부하기
  // [<li>짱구</li>,<li>유리</li>,<li>철수</li>,<li>훈이</li>,<li>맹구</li>]

  // React에서는 map의 각 요소마다 고유한 key값이 필요하다
  const listItems = members.map((mem, index) => <li key={index}>{mem}</li>);

  // Each child in a list should have a upique "key" prop
  // -> React에서 동적인 리스트를 렌더링 할 때
  // 각 자식 컴포넌트가 고유한 key 속성을 가져야 한다는 규칙 위배시 발생하는 경고
  // 고유한 key값 작성하면 경고 해결 -> 보통 key 값은 index 값으로 사용한다.

  return <ul>{listItems}</ul>;
};
