import { useQuiz } from "./states/QuizProvider";
import "./styles/style.scss"

function App() {
  const { quiz } = useQuiz();
  const { questions } = quiz;
  console.warn(quiz.questions);
  return (
    <div className="app">
      <div className="container">
        <h1>The size id {questions.length}</h1>
      </div>
    </div>
  );
}

export default App;
