import { useQuiz } from "../states/QuizProvider";
import QuizStatus from "./QuizStatus";
import Summary from "./Summary";
import { CHOOSE_ANSWER } from "../data/constants";

export default function Quiz() {

  const { quiz, dispatch } = useQuiz();
  const { questions, quizIndex, showSummary } = quiz;
  const currentQuiz = questions[quizIndex];
  const answerOptions = currentQuiz.options.map((item) => (
    <button
      onClick={() =>
        dispatch({
          type: CHOOSE_ANSWER,
          payload: item,
        })
      }
      key={item.id}
    >
      {item.text}
    </button>
  ));

  return (
    <div className="question">
      {!showSummary ? (
        <>
          <QuizStatus />

          <div className="question-container">
            {currentQuiz.imageURL !== "" && (
              <img src={currentQuiz.imageURL} alt="quiz" />
            )}
            <h2>{currentQuiz.text}</h2>
            <div className="answers">{answerOptions}</div>
          </div>
        </>
      ) : (
        <Summary />
      )}
    </div>
  );
}
