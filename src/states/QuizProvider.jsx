import { createContext, useContext, useReducer } from "react";
import { quizState } from "../scripts/listManager";
import quizReducer from "./quizReducer";
import quizData from "../data/quizData.json";

const initialState = quizState(quizData);
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
