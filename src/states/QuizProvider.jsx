import { createContext, useContext, useReducer } from "react";
import { shuffled } from "../scripts/listManager";
import quizData from "../data/quizData.json";
import quizReducer from "./quizReducer";

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
  takeTwoAway: true,
  plusTens: true,
  timer: 15,
};

const QuizContext = createContext(initialState);
export function QuizProvider({ children }) {
  const [quiz, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ quiz, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}
export function useQuiz() {
  return useContext(QuizContext);
}
