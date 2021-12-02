import React from "react";
import { useQuiz } from "../states/QuizProvider";

export default function Summary() {
  const { quiz, dispatch } = useQuiz();
  const { rightAnswersCount, answeredCount, questions } = quiz;
  return (
    <div className="question-container">
      <h1>Quiz summary</h1>
      <p>Correct answers {rightAnswersCount}</p>
      <p>Unanswered questions {questions.length - answeredCount}</p>
      <p>Incorrect Answers {answeredCount - rightAnswersCount}</p>
      <button onClick={() => dispatch({ type: "RESTART" })}>Reset</button>
    </div>
  );
}
