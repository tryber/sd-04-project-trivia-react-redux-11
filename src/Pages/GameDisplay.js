import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPI, chooseAnswer } from '../action';
import QuestionAnswers from '../components/QuestionAnswers';

class GameDisplay extends React.Component {
  componentDidMount() {
    const { requestTrivia, loading } = this.props;
    if (!loading) requestTrivia();
  }

  render() {
    const { loading, triviaData } = this.props;
    if (loading || triviaData.length === 0) return <p>Loading</p>;
    return <QuestionAnswers />;
  }
}

const mapState = (state) => ({
  token: state.apiRequest.token,
  loading: state.apiRequest.loading,
  triviaData: state.apiRequest.triviaData,
  selected: state.answers.selected,
});

const mapDispatch = {
  requestTrivia: getAPI,
  selectAnswer: chooseAnswer,
};

export default connect(mapState, mapDispatch)(GameDisplay);

GameDisplay.propTypes = {
  requestTrivia: PropTypes.func.isRequired,
  triviaData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  loading: PropTypes.bool.isRequired,
};
