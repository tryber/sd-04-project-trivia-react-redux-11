import React from 'react';
import { connect } from 'react-redux';
import { getAPI } from '../action';

class GameDisplay extends React.Component {
  componentDidMount() {
    const { requestTrivia, token } = this.props;
    requestTrivia(`https://opentdb.com/api.php?amount=5&token=${token}`);
  }

  render() {
    const { loading, triviaData } = this.props;
    if (loading || !triviaData) return <p>Loading</p>;
    return triviaData.map((question) => (
      <div>
        <h2 data-testid="question-text">{question.question}</h2>
        <p data-testid="correct-answer">{question.correct_answer}</p>
        {question.incorrect_answers.map((incorrectQuestion) => (
          <p>{incorrectQuestion}</p>
        ))}
      </div>
    ));
  }
}

const mapState = (state) => ({
  token: state.tokenRequest.token,
  loading: state.triviaRequest.loading,
  triviaData: state.triviaRequest.triviaData,
});

const mapDispatch = {
  requestTrivia: getAPI,
};

export default connect(mapState, mapDispatch)(GameDisplay);
