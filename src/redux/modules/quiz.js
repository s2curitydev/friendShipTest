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
    { question: "잔망이는 2차 백신까지 접종했다!", answer: "O" },
    { question: "커스텀때 팀원이 욕하면 경찰에 신고한다.", answer: "X" },
    { question: "팀데스전때는 꼭 베릴만 사용해야한다.", answer: "X" },
    { question: "잔망이는 모배2 테스터에 당첨됐다!", answer: "O" },
    { question: "생방송은 3일에 한번 한다. ", answer: "X" },
    { question: "숨박꼭질할때는 부캠으로만 뛰어야한다.", answer: "X" },
    { question: "음악신청은 방송중에 채팅창을 통해서 하면된다.", answer: "X" },
    { question: "잔망클랜은 아무때나 가입할 수 있다.", answer: "X" },
    { question: "게시판에 글 자주쓰면 친추의 기회가 온다.", answer: "O" },
    { question: "잔망크래프트가 이번주부터 시작했다.", answer: "O" },
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
