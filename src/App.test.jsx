import { render, screen, fireEvent } from "@testing-library/react";
import { QuizProvider } from "./states/QuizProvider";
import { quizState} from "./scripts/listManager";
import quizData from "./data/quizData.json";
import App from "./App";


test("Should render on start screen", () => {
  // Arrange
  const data = quizState(quizData);
  render(
    <QuizProvider state={data}>
      <App />
    </QuizProvider>
  );
  const title = screen.queryByText(
    /Click on start button to begin begin test/i
  );
  expect(title).toBeInTheDocument();
});
test("Should start quiz", () => {
  // Arrange
  const data = quizState(quizData);
  
  render(
    <QuizProvider state={data}>
      <App />
    </QuizProvider>
  );

  // Act
  const button = screen.getByTestId("start");
 const title = screen.queryByText(/Click on start button to begin begin test/i);
  fireEvent.click(button);
 
  //Assert
  expect(title).not.toBeInTheDocument();
});