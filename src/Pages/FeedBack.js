import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FeedbackAnswears from '../components/FeedbackAnswers';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ redirectLogin: false, redirectRanking: false });
  }

  render() {
    const { redirectGame, redirectRanking } = this.state;
    const { playerAssertions, playerScore } = this.props;
    if (redirectGame) { return <Redirect to="/" />; }
    if (redirectRanking) { return <Redirect to="/ranking" />; }

    return (
      <div>
        <Header />
        <FeedbackAnswears assertions={playerAssertions} score={playerScore} />
        <button
          type="button" onClick={() => this.setState({ redirectLogin: true })}
          data-testid="btn-play-again"
        >
          Jogar novamente
          </button>
        <button
          type="button" onClick={() => this.setState({ redirectRanking: true })}
          data-testid="btn-ranking"
        >
          Ver Ranking
          </button >
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  playerScore: state.answers.player.score,
  playerAssertions: state.answers.player.assertions,
});

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  playerAssertions: PropTypes.string.isRequired,
  playerScore: PropTypes.number.isRequired,
};
