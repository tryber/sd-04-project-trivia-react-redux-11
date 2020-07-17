const sortAnswers = (questionAnswers) => {
  const correctAnswer = questionAnswers.correct_answer;
  const restOfAnswers = questionAnswers.incorrect_answers;
  const randomIndex = Math.floor(Math.random() * 4);
  restOfAnswers.splice(randomIndex, 0, correctAnswer);
  return restOfAnswers;
};

export default sortAnswers;
