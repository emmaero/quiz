import { useQuiz } from "../states/QuizProvider";

export default function LifeLine() {
  const { quiz, dispatch } = useQuiz();
  const { takeTwoAway, plusTens } = quiz;
  return (
    <div className="lifeline-bar">
      <button
        onClick={() => {
          dispatch({ type: "TAKE_TWO_AWAY" });
        }}
        disabled={takeTwoAway}
      >
        50/50
      </button>
      <button
        onClick={() => {
          dispatch({ type: "PLUS_TENS" });
        }}
        disabled={plusTens}
      >
        +10 s
      </button>
    </div>
  );
}
