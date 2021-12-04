import { useEffect } from "react";
import LifeLine from "./components/LifeLine";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import { useQuiz } from "./states/QuizProvider";
import { quizState} from "./scripts/listManager";
import quizData from "./data/quizData.json";
import "./styles/style.scss";
import { LOAD } from "./data/constants";

function App() {
  const initialState = quizState(quizData);
  const { quiz, dispatch } = useQuiz();
  const { isStarted } = quiz;
  useEffect(() => {
    dispatch({ type: LOAD, payload: initialState });
    // eslint-disable-next-line
  },[]);
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
