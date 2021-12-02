
export function shuffled(list) {
  const shuffled = list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffled;
}
export function quizState(list) {
  const SIZE = 10;

  const quizQuestions = [...list];

  const shuffledQuestions = shuffled(quizQuestions);
  const randomQuestions = shuffledQuestions.slice(0, SIZE);
  const initialState = {
    questions: [...randomQuestions],
    quizIndex: 0,
    isStarted: false,
    showSummary: false,
    rightAnswersCount: 0,
    answeredCount: 0,
    takeTwoAway: false,
    plusTens: false,
    timer: 15,
  };
  return initialState;
}
