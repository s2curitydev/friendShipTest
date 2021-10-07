import React from "react";
import Score from "./Score";
import SwipeItem from "./SwipeItem";

import { useSelector, useDispatch } from "react-redux";
import { addAnswer } from "./redux/modules/quiz";
import Progress from "./Progress";

import './quiz.scss';

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
    <div className="quizContainer">
      <Progress />
      <div>
        <p>
          <span>{num + 1}번문제</span>
        </p>
      </div>
      <div>
        {quiz.map((l, idx) => {
          if (num === idx) {
            return <h1 className="question" key={idx}>{l.question}</h1>;
          }
        })}
      </div>
      <div className="answerZone">
        <div className="answer">{"O "}</div>
        <div className="answer">{" X"}</div>
      </div>

      {quiz.map((l, idx) => {
        if (idx === num) {
          return <SwipeItem key={idx} onSwipe={onSwipe} />;
        }
      })}
    </div>
  );
};

export default Quiz;
