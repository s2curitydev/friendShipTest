import React from "react";
import styled from "styled-components";
import Score from "./Score";
import SwipeItem from "./SwipeItem";

import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";
import Progress from "./Progress";

const Quiz = (props) => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const quiz = useSelector((state) => state.quiz.quiz);

  const num = answers.length;

  const onSwipe = (direction) => {
    let _answer = direction === "left" ? "O" : "X";

    if (_answer === quiz[num].answer) {
      // 정답일 경우,
      dispatch(addAnswer(true));
    } else {
      // 오답일 경우,
      dispatch(addAnswer(false));
    }
  };

  if (num > quiz.length - 1) {
    return <Score {...props} />;
    // return <div>퀴즈 끝!</div>;
  }

  return (
    <QuizContainer>
      <Progress />
      <p>
        <span>{num + 1}번문제</span>
      </p>

      {quiz.map((l, idx) => {
        if (num === idx) {
          return <Question key={idx}>{l.question}</Question>;
        }
      })}

      <AnswerZone>
        <Answer>{"O "}</Answer>
        <Answer>{" X"}</Answer>
      </AnswerZone>

      {quiz.map((l, idx) => {
        if (idx === num) {
          return <SwipeItem key={idx} onSwipe={onSwipe} />;
        }
      })}
    </QuizContainer>
  );
};

const QuizContainer = styled.div`
  margin-top: 3rem;
  text-align: center;
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    border-radius: 30px;
  }
`;

const Question = styled.h1`
  font-size: 1.5em;
`;

const AnswerZone = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10em;
  font-weight: 500;
  color: #dadafc77;
`;

const DragItem = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    background-color: #ffd6aa;
    border-radius: 150px;
  }
  & img {
    max-width: 150px;
  }
`;

export default Quiz;
