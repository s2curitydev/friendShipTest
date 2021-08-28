import React from "react";
import img from "./janmang.png";
import { useDispatch, useSelector } from "react-redux";
import { addUserName } from "./redux/modules/rank";

const Start = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);
  const input_text = React.useRef(null);

  return (
    <div className="container">
      <div className="outter">
        <img className="scc-img" src={img} />
        <h1>
          <span>{name}</span>와 나의 우정점수는?
        </h1>
        <input
          ref={input_text}
          className="text-box"
          type="text"
          placeholder="내이름"
        />
        <button
          className="button"
          onClick={() => {
            dispatch(addUserName(input_text.current.value));
            props.history.push("/quiz");
          }}
        >
          시작하기
        </button>
      </div>
    </div>
  );
};

export default Start;
