import React, { useEffect } from "react";
import { useQuiz } from "../states/QuizProvider";
import { DECREASE_TIMER } from "../data/constants";

export default function QuizStatus() {
  const { quiz, dispatch } = useQuiz();
  const { questions, quizIndex, timer } = quiz;
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: DECREASE_TIMER });
    }, 1000);
  }, []);
  return (
    <div className="quiz-status">
      <p className="left">
        Question {quizIndex + 1}/{questions.length}
      </p>
      <p className="right">
        Time left: <span>{timer}s</span>
      </p>
    </div>
  );
}
