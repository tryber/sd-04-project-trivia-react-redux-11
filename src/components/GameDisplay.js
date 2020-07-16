import React from 'react';
import { connect } from 'react-redux';
import { getAPI } from '../action';

class GameDisplay extends React.Component {
  componentDidMount() {
    const { requestTrivia, triviaData, loading } = this.props;
    if (!loading) requestTrivia();
  }

  render() {
    const { loading, triviaData } = this.props;
    if (loading || !triviaData) return <p>Loading</p>;
    return triviaData.map((question, index) => (
      <div>
        <h2 data-testid="question-text">{question.question}</h2>
        <p data-testid="correct-answer">{question.correct_answer}</p>
        {question.incorrect_answers.map((incorrectQuestion) => (
          <p data-testid={`wrong-answer-${index}`}>{incorrectQuestion}</p>
        ))}
      </div>
    ));
  }
}

const mapState = (state) => ({
  token: state.apiRequest.token,
  loading: state.apiRequest.loading,
  triviaData: state.apiRequest.triviaData,
});

const mapDispatch = {
  requestTrivia: getAPI,
};

export default connect(mapState, mapDispatch)(GameDisplay);
