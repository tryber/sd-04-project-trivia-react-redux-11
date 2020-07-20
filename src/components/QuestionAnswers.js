import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseAnswer, nextQuestion, timerOver } from '../action';
import sortAnswers from '../services/sortAnswers';
import Button from './ultilityComponents/Button';
import Timer from './Timer';
import '../App.css';

const QuestionAnswers = ({
  triviaData,
  selectAnswer,
  selected,
  isAnswered,
  nextButton,
  timerOverProps,
  feedback,
  timeOver,
}) => {
  if (feedback) return <Redirect to="/feedback" />;
  let index = -1;
  const actualTrivia = triviaData[selected % triviaData.length];
  const concatArr = actualTrivia.incorrect_answers.concat(actualTrivia.correct_answer);
  const answers = sortAnswers(concatArr);
  return (
    <div className="questions-container">
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
                  isDisabled={isAnswered}
                  test="correct-answer"
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
                isDisabled={isAnswered}
                test={`wrong-answer-${index}`}
                name={answer}
              />
            </div>
          );
        })}
        {(isAnswered || timeOver) && (
          <Button
            onClick={async () => {
              await timerOverProps();
              await nextButton();
            }}
            className="nextButton"
            test="btn-next"
            name="Próxima"
          />
        )}
      </div>
      <Timer />
    </div>
  );
};

const mapState = (state) => ({
  triviaData: state.apiRequest.triviaData,
  answerType: state.answers.answerType,
  isAnswered: state.answers.isAnswered,
  selected: state.answers.selected,
  feedback: state.answers.feedback,
  timeOver: state.answers.timer.timeOver,
});

const mapDispatch = {
  selectAnswer: chooseAnswer,
  nextButton: nextQuestion,
  timerOverProps: timerOver,
};

export default connect(mapState, mapDispatch)(QuestionAnswers);

QuestionAnswers.propTypes = {
  triviaData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  selectAnswer: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  nextButton: PropTypes.func.isRequired,
  feedback: PropTypes.bool.isRequired,
  timeOver: PropTypes.bool.isRequired,
};
