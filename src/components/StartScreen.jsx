import { useQuiz } from "../states/QuizProvider";
import { START } from "../data/constants";

export default function StartScreen() {
  const { dispatch } = useQuiz();

  return (
    <div className="start-screen">
      <h1>Click on start button to begin begin test</h1>
      <button data-testid="start" onClick={() => dispatch({ type: START })}>
        Start
      </button>
    </div>
  );
}
