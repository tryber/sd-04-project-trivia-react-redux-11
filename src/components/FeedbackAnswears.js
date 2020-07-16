import React from 'react';

const FeedbackAnswers = ({ acertos }) => {
  let pontos = Number(acertos * 10);

if (acertos >= 3) {
  return (
    <div data-testid='feedback-tex'>
    <div data-testid="feedback-tex">
      <h2>Mandou bem!</h2>
      <p>Você acertou {acertos} questões!</p>
      <p>Um total de {pontos} pontos</p>
    </div>
  );
}
return (
  <div data-testid='feedback-tex'>
  <div data-testid="feedback-tex">
    <h2>Podia ser melhor...!</h2>
    <p>Você acertou {acertos} questões!</p>
    <p>Um total de {pontos} pontos</p>
    </div>
    );
  }
};

export default FeedbackAnswers;
