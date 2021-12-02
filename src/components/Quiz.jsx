import { useEffect } from "react";
import { useQuiz } from "../states/QuizProvider";
import Summary from "./Summary";

export default function Quiz() {
  const { quiz, dispatch } = useQuiz();
  const { questions, quizIndex, showSummary, timer } = quiz;
  const currentQuiz = questions[quizIndex];
  const answerOptions = currentQuiz.options.map((item) => (
    <button
      onClick={() =>
        dispatch({
          type: "CHOOSE_ANSWER",
          payload: item,
        })
      }
      key={item.id}
    >
      {item.text}
    </button>
  ));
  useEffect(() => {
    // setTimeout(()=>{dispatch({ type: "DECREASE_TIMER" });}, 1000)
    let timerId = setInterval(() => {
        dispatch({ type: "DECREASE_TIMER" });
    }, 1000);
  }, []);
  return (
    <div className="question">
      <p>
        Question {quizIndex + 1}/{questions.length}
      </p>
      <p>Time left: {timer}</p>
      <div className="question-container">
        {!showSummary ? (
          <>
            {" "}
            <h2>{currentQuiz.text}</h2>
            <div className="answers">{answerOptions}</div>
          </>
        ) : (
          <Summary />
        )}
      </div>
      <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>Next</button>
    </div>
  );
}
