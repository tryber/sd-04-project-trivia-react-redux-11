import React from 'react';
import PropTypes from 'prop-types';

const FeedbackAnswers = ({ assertions, score }) => {
  if (assertions >= 3) {
    return (
      <div data-testid="feedback-tex">
        <h2>Mandou bem!</h2>
        <p>Você acertou <strong>{assertions}</strong> questões!</p>
        <p>Um total de <strong>{score}</strong> pontos</p>
      </div>
    );
  }
  return (
    <div data-testid="feedback-tex">
      <h2>Podia ser melhor...!</h2>
      <p>Você acertou <strong>{assertions}</strong> questões!</p>
      <p>Um total de <strong>{score}</strong> pontos</p>
    </div>
  );
};

export default FeedbackAnswers;

FeedbackAnswers.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
