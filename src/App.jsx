import LifeLine from "./components/LifeLine";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import { useQuiz } from "./states/QuizProvider";
import "./styles/style.scss";

function App() {
  const { quiz } = useQuiz();
  const { isStarted } = quiz;
  return (
    <div className="app">
      {isStarted ? (
        <div className="container">
          <LifeLine />
          <Quiz />
        </div>
      ) : (
        <StartScreen />
      )}
    </div>
  );
}

export default App;
