import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FeedbackAnswears from '../components/FeedbackAnswers'; // porque nao chama??

class Feedback extends React.Component {
  restartGame() {
    const { clearlogin } = this.props;
    clearlogin();
    // criar na action
  }

  newGame() {
    const { clearpoints } = this.props;
    clearpoints();
    // criar na action
  }

  tryAgain() {
    return (
      <Link to="/">
        <button type="button" onClick={() => this.newGame()}>Tentar novamente</button>
      </Link>
    );
  }

  render() {
    const { totalAnswears, scorePoints } = this.props;
    return (
      <div>
        <Header />
        <FeedbackAnswears totalAnswears={totalAnswears} />
        <div>
          <span>Você acertou</span>
          <span data-testid="feedback-total-question">{totalAnswears}</span>
          <span>questões</span>
        </div>
        <div>
          <span>Fez um total de</span>
          <span data-testid="feedback-total-score">{scorePoints}</span>
          <span>pontos</span>
        </div>
        {this.tryAgain()}
        <Link to="/">
          <button type="button" onClick={() => this.restartGame()} data-testid="btn-play-again">
            Jogar novamente
          </button>
        </Link>
        <Link to="/">
          <button type="button" onClick={() => this.restartGame()} data-testid="btn-ranking">
            Ver Ranking
          </button>
        </Link>
      </div>
    );
  }
}

export default connect()(Feedback);

Feedback.propTypes = {
  clearlogin: PropTypes.func.isRequired,
  clearpoints: PropTypes.func.isRequired,
  totalAnswears: PropTypes.string.isRequired,
  scorePoints: PropTypes.number.isRequired,
};
