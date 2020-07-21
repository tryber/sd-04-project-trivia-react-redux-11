import { setLocal } from './setGetLocalStorage';

const calculatePoints = (
  answerType,
  timer,
  difficulty,
  score,
  assertions,
  name,
  email,
) => {
  if (answerType === 'correct') {
    const newScore = score + 10 + timer * difficulty;
    setLocal('state', {
      player: {
        name,
        assertions: assertions + 1,
        score: newScore,
        gravatarEmail: email,
      },
    });
    return score + 10 + timer * difficulty;
  }
  return score;
};

export default calculatePoints;
