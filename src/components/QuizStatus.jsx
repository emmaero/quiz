import React, { useEffect, useState } from "react";
import { useQuiz } from "../states/QuizProvider";
import { DECREASE_TIMER } from "../data/constants";

export default function QuizStatus() {
  const [intervalId, setIntervalId] = useState();
  const { quiz, dispatch } = useQuiz();
  const { questions, quizIndex, timer } = quiz;

  useEffect(() => {
    clearInterval(intervalId);
    const id = setInterval(() => {
      dispatch({ type: DECREASE_TIMER });
    }, 1000);
    setIntervalId(id);
    // eslint-disable-next-line
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
