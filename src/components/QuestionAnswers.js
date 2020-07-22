import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseAnswer, nextQuestion } from '../action';
import sortAnswers from '../services/sortAnswers';
import Button from './ultilityComponents/Button';
import Header from './Header';
import Timer from './Timer';
import '../App.css';

class QuestionAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = ({ answers: [] });
    this.setAnswers = this.setAnswers.bind(this);
  }

  componentDidMount() {
    const { triviaData, selected } = this.props;
    const actualTrivia = triviaData[selected % triviaData.length];
    const concatArr = actualTrivia.incorrect_answers.concat(
      actualTrivia.correct_answer,
    );
    this.setAnswers(concatArr);
  }
  setAnswers(concatArr) {
    const answers = sortAnswers(concatArr);
    this.setState({ answers });
  }

  render() {
    const {
      selectAnswer,
      isAnswered,
      nextButton,
      feedback,
      triviaData,
      selected,
      time } = this.props;
    const { answers } = this.state;
    if (feedback) return <Redirect to="/game/feedback" />;
    let index = -1;
    const actualTrivia = triviaData[selected % triviaData.length];

    return (
      <div className="questions-container">
        {<Header />}
        <div className="question-card">
          <h3 data-testid="question-category">{actualTrivia.category}</h3>
          <h2 data-testid="question-text">{actualTrivia.question}</h2>
          {answers.map((answer) => {
            if (answer === actualTrivia.correct_answer) {
              return (
                <div key={answer}>
                  <Button
                    className={isAnswered ? 'green-border' : ''}
                    onClick={() => selectAnswer('correct')}
                    isDisabled={isAnswered || time === 0}
                    data-testid="correct-answer"
                    name={actualTrivia.correct_answer}
                  />
                </div>
              );
            }
            index += 1;
            return (
              <div key={answer}>
                <Button
                  className={isAnswered ? 'red-border' : ''}
                  onClick={() => selectAnswer('wrong')}
                  isDisabled={isAnswered || time === 0}
                  data-testid={`wrong-answer-${index}`}
                  name={answer}
                />
              </div>
            );
          })}

          {(isAnswered || time === 0) && (
            <Button
              onClick={() => {
                nextButton();
              }}
              className="nextButton"
              data-testid="btn-next"
              name="Próxima"
            />
          )}
        </div>
        <Timer />
      </div>
    );
  }
}

const mapState = (state) => ({
  triviaData: state.apiRequest.triviaData,
  answerType: state.answers.answerType,
  isAnswered: state.answers.isAnswered,
  selected: state.answers.selected,
  feedback: state.answers.feedback,
  time: state.answers.timer.time,
});

const mapDispatch = {
  selectAnswer: chooseAnswer,
  nextButton: nextQuestion,
};

export default connect(mapState, mapDispatch)(QuestionAnswers);

QuestionAnswers.propTypes = {
  triviaData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  selectAnswer: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  nextButton: PropTypes.func.isRequired,
  feedback: PropTypes.bool.isRequired,
};
