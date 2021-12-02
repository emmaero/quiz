import { shuffled } from "../scripts/listManager";
import quizData from "../data/quizData.json";

const SIZE = 10;

const quizQuestions = [...quizData];

const shuffledQuestions = shuffled(quizQuestions);
const randomQuestions = shuffledQuestions.slice(0, SIZE);
const initialState = {
  questions: [...randomQuestions],
  quizIndex: 0,
  showSummary: false,
  rightAnswersCount: 0,
  answeredCount: 0,
  takeTwoAway: false,
  plusTens: false,
  timer: 15,
};
function quizReducer(state, action) {
  switch (action.type) {
    case "NEXT_QUESTION":
      return nextQuestion(state);
    case "RESTART":
      return initialState;
    case "CHOOSE_ANSWER":
      return chooseAnswer(state, action);
    case "TAKE_TWO_AWAY":
      return takeTwoAway(state);
    case "PLUS_TENS":
      return plusTens(state);
    case "DECREASE_TIMER":
      return decreaseTimer(state);
    case "START":
      return initialState;
    default:
      throw new Error("Action not found");
  }
}
function start(state) {
  return { ...state };
}
function nextQuestion(state) {
  const { quizIndex } = state;
  if (isEnd(state)) return { ...state, showSummary: isEnd(state) };
  return {
    ...state,
    quizIndex: quizIndex + 1,
    showSummary: isEnd(state),
    timer: 15,
  };
}
function chooseAnswer(state, action) {
  const answer = action.payload;
  if (answer.isCorrect) {
    const newState = nextQuestion(state);
    return {
      ...newState,
      rightAnswersCount: state.rightAnswersCount + 1,
      answeredCount: state.answeredCount + 1,
    };
  } else {
    const newState = nextQuestion(state);
    return { ...newState, answeredCount: state.answeredCount + 1 };
  }
}
function takeTwoAway(state) {
  return { ...state, takeTwoAway: false };
}
function decreaseTimer(state) {
  if (state.timer === 0) return nextQuestion(state);
  return { ...state, timer: state.timer - 1 };
}
function plusTens(state) {
  return { ...state, plusTens: true, timer: state.timer + 10 };
}
function isEnd(state) {
  return state.quizIndex === state.questions.length - 1;
}

export default quizReducer;
