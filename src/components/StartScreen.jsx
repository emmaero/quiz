import { useQuiz } from "../states/QuizProvider";

export default function StartScreen() {
  const { dispatch } = useQuiz();

  return (
    <div className="start-screen">
      <h1>Click on start button to begin begin test</h1>
      <button onClick={() => dispatch({ type: "START" })}>Start</button>
    </div>
  );
}
