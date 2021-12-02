import React, { useEffect } from "react";
import { useQuiz } from "../states/QuizProvider";

export default function QuizStatus() {
  const { quiz, dispatch } = useQuiz();
  const { questions, quizIndex, timer } = quiz;
  useEffect(() => {
    let timerId = setInterval(() => {
      dispatch({ type: "DECREASE_TIMER" });
    }, 1000);
  }, []);
  return (
    <div>
      <p>
        Question {quizIndex + 1}/{questions.length}
      </p>
      <p>Time left: {timer}</p>
    </div>
  );
}
