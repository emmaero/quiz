import Quiz from "./components/Quiz";
import { useQuiz } from "./states/QuizProvider";
import "./styles/style.scss";

function App() {
  const { quiz, dispatch } = useQuiz();
  const { takeTwoAway, plusTens } = quiz;
  return (
    <div className="app">
      <div className="container">
        <div className="lifeline-bar">
          <button disabled={takeTwoAway}>50/50</button>
          <button onClick={()=>{dispatch({ type: "PLUS_TENS" });}} disabled={plusTens}>+10 s</button>
        </div>
        <Quiz />
      </div>
    </div>
  );
}

export default App;
