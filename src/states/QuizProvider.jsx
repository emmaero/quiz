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
};

const QuizContext = createContext(initialState);
export function QuizProvider({ children }) {
    const [quiz, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ quiz }}>{children}</QuizContext.Provider>
  );
}
export function useQuiz() {
  return useContext(QuizContext);
}
