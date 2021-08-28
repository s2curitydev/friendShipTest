const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
  name: "잔망이",
  score_texts: {
    60: "선넘네~! ",
    80: "괜츈~ 괜츈~",
    100: "나이뚜!",
  },
  answers: [],
  quiz: [
    { question: "잔망이 생일은 7월21일이다.", answer: "X" },
    { question: "화이어링은 잔망님이 좋아하는 간식이다.", answer: "O" },
    { question: "좋아하는 삼각김밥은 전주비빔밥이다.", answer: "O" },
    { question: "선넘네~는 잔망이가 잘쓰는 유행어다", answer: "O" },
    { question: "잔망이는 앵글손잡이를 가장 좋아한다.", answer: "X" },
    { question: "가장 좋아하는 치킨은 노랑통닭이다.", answer: "O" },
    { question: "가장 좋아하는 라면은 안성탕면이다.", answer: "O" },
    { question: "근접전은 하루에 두판만한다.", answer: "X" },
    { question: "잔망이는 16, 18시즌 정복자다.", answer: "X" },
    { question: "잔망이와 슈퍼데디는 친구다", answer: "O" },
  ],
};

// Action creator
export const getQuiz = (quiz_list) => {
  return { type: GET_QUIZ, quiz_list };
};

export const addAnswer = (answer) => {
  return { type: ADD_ANSWER, answer };
};

export const resetAnswer = () => {
  return { type: RESET_ANSWER };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "quiz/GET_QUIZ": {
      return { ...state, quiz: action.quiz_list };
    }

    case "quiz/ADD_ANSWER": {
      return { ...state, answers: [...state.answers, action.answer] };
    }

    case "quiz/RESET_ANSWER": {
      return { ...state, answers: [] };
    }

    default:
      return state;
  }
}
