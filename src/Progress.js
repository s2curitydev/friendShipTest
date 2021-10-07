import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
// import { deleteBucket, updateBucket } from "./redux/modules/bucket";

const Progress = (props) => {
  const answers = useSelector((state) => state.quiz.answers);
  const quiz_list = useSelector((state) => state.quiz.quiz);
  // 답 리스트 갯수 세기
  let count = answers.length;

  return (
    <ProgressBar>
      <HighLight width={(count / quiz_list.length) * 100 + "%"} />
      <Dot />
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 80vw;
  min-width: auto;
  margin: 20px auto;
  height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const HighLight = styled.div`
  background: #e37a52;
  height: 20px;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #e37a52;
  box-sizing: border-box;
  margin: 0px 0px 0px -10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
export default Progress;
