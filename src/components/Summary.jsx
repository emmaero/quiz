import React from 'react'
import { useQuiz } from '../states/QuizProvider';

export default function Summary() {
      const { quiz, dispatch} = useQuiz();
      const { rightAnswersCount } = quiz;
    return (
      <div className="question-container">
        <h1>Quiz summary</h1>
        <p>Correct answers {rightAnswersCount}</p>
        <button onClick={() => dispatch({ type: "RESTART" })}>Reset</button>
      </div>
    );
}
