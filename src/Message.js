import React from "react";
import img from "./janmang.png";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addRank, addRankFB } from "./redux/modules/rank";
import { addUserName } from "./redux/modules/rank";

import './message.scss';

const Message = (props) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.quiz.name);

  const answers = useSelector((state) => state.quiz.answers);
  const user_name = useSelector((state) => state.rank.user_name);

  const input_text = React.useRef(null);
  // 정답만 걸러내기
  let correct = answers.filter((answer) => {
    return answer;
  });

  // 점수 계산하기
  let score = (correct.length / answers.length) * 100;

  return (
    <div className="messageContainer">
      <div className="messageOutter">
        <img className="scc-img" src={img} />
        <h1>
          <span>{name}</span>에게 한마디
        </h1>
        {/* <input className="text-box" type="text" placeholder="한 마디 적기" /> */}
        <input
          ref={input_text}
          type="text"
          style={{
            padding: "10px",
            margin: "24px 0px",
            border: "1px solid #dadafc",
            borderRadius: "30px",
            width: "100%",
          }}
          placeholder="한 마디 적기"
        />
        <button
          className="button"
          onClick={() => {
            let rank_info = {
              score: parseInt(score),
              name: user_name,
              message: input_text.current.value,
              current: true,
            };
            // 랭킹 정보 넣기
            dispatch(addRankFB(rank_info));
            // 주소 이동
            window.setTimeout(() => {
              props.history.push("/ranking");
            }, 1000);
          }}
          // style={{}}
        >
          남기고 랭킹 보러가기
        </button>
      </div>
    </div>
  );
};

export default Message;
