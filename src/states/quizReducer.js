import { shuffled } from "../scripts/listManager";

import {
  NEXT_QUESTION,
  CHOOSE_ANSWER,
  TAKE_TWO_AWAY,
  PLUS_TENS,
  DECREASE_TIMER,
  START,
  LOAD
} from "../data/constants";
function quizReducer(state, action) {
  switch (action.type) {
    case NEXT_QUESTION:
      return nextQuestion(state);

    case CHOOSE_ANSWER:
      return chooseAnswer(state, action);
    case TAKE_TWO_AWAY:
      return takeTwoAway(state);
    case PLUS_TENS:
      return plusTens(state);
    case DECREASE_TIMER:
      return decreaseTimer(state);
    case START:
      return start(state);
    case LOAD:
      return load(state,action);
    default:
      throw new Error("Action not found");
  }
}
function start(state) {
  return { ...state, isStarted: true };
}
function load(state, action) {
  const loadState = action.payload;
  return { ...loadState};
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
  const currentQuestion = { ...state.questions[state.quizIndex] };
  const option = currentQuestion.options.find((option) => option.isCorrect);
  const incorrectOptions = currentQuestion.options.filter(
    (option) => !option.isCorrect
  );
  const shuffledAnswers = shuffled([{ ...option }, { ...incorrectOptions[0] }]);

  state.questions[state.quizIndex].options = shuffledAnswers;
  return { ...state, takeTwoAway: true };
}
function decreaseTimer(state) {
  if (state.timer === 1) return nextQuestion(state);
  return { ...state, timer: state.timer - 1 };
}
function plusTens(state) {
  return { ...state, plusTens: true, timer: state.timer + 10 };
}
function isEnd(state) {
  return state.quizIndex === state.questions.length - 1;
}

export default quizReducer;
