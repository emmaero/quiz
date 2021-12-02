import Quiz from "./components/Quiz";
import { useQuiz } from "./states/QuizProvider";
import "./styles/style.scss"

function App() {
  const { quiz } = useQuiz();
  const { questions } = quiz;
  return (
    <div className="app">
      <div className="container">
        <div className="lifeline-bar">
          <button>50/50</button>
          <button>+10 s</button>
        </div>
        <Quiz />
      </div>
    </div>
  );
}

export default App;
