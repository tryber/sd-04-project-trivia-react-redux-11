import { setLocal } from './setGetLocalStorage';

const calculatePoints = (
  answerType,
  time,
  difficulty,
  score,
  assertions,
  name,
  email,
) => {
  if (answerType === 'correct') {
    const newScore = score + 10 + time * difficulty;
    setLocal('state', {
      player: {
        name,
        assertions: assertions + 1,
        score: newScore,
        gravatarEmail: email,
      },
    });
    return score + 10 + time * difficulty;
  }
  return score;
};

export default calculatePoints;
