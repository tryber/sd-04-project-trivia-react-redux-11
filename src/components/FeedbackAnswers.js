import React from 'react';
import PropTypes from 'prop-types';

const FeedbackAnswers = ({ assertions, score }) => {
  if (assertions >= 3) {
    return (
      <div>
        <h2 data-testid="feedback-text">Mandou bem!</h2>
        <p>
          Você acertou
          <strong>
            <span data-testid="feedback-total-question"> {assertions} </span>
          </strong>
          questões!
        </p>
        <p>
          Um total de
          <strong>
            <span data-testid="feedback-total-score"> {score} </span>
          </strong>
          pontos
        </p>
      </div>
    );
  }
  return (
    <div>
      <h2 data-testid="feedback-text">Podia ser melhor...!</h2>
      <p>
        Você acertou
        <strong>
          <span data-testid="feedback-total-question"> {assertions} </span>
        </strong>
        questões!
      </p>
      <p>
        Um total de
        <strong>
          <span data-testid="feedback-total-score"> {score} </span>
        </strong>
        pontos
      </p>
    </div>
  );
};

export default FeedbackAnswers;

FeedbackAnswers.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
