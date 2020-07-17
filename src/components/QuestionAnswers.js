import React from 'react';
import { connect } from 'react-redux';
import sortAnswers from '../services/sortAnswers';
import { chooseAnswer, nextQuestion } from '../action';
import '../App.css';
import Button from './ultilityComponents/Button';

const QuestionAnswers = ({
  triviaData,
  selectAnswer,
  selected,
  isAnswered,
  nextButton,
}) => {
  let index = -1;
  const actualTrivia = triviaData[selected % triviaData.length];
  const concatArr = actualTrivia.incorrect_answers.concat(
    actualTrivia.correct_answer
  );
  const answers = sortAnswers(concatArr);
  return (
    <div className="questions-container">
      <div className="question-card">
        <h3 data-testid="question-category">{actualTrivia.category}</h3>
        <h2 data-testid="question-text">{actualTrivia.question}</h2>
        {answers.map((answer) => {
          console.log(answers.length, 'tamanho array');
          if (answer === actualTrivia.correct_answer) {
            return (
              <Button
                className={isAnswered ? 'green-border' : ''}
                onClick={() => selectAnswer('correct')}
                isDisabled={isAnswered}
                test="correct-answer"
                name={actualTrivia.correct_answer}
              />
            );
          }
          index += 1;
          return (
            <Button
              className={isAnswered ? 'red-border' : ''}
              onClick={() => selectAnswer('wrong')}
              isDisabled={isAnswered}
              test={`wrong-answer-${index}`}
              name={answer}
            />
          );
        })}
        {isAnswered && (
          <Button
            onClick={() => nextButton()}
            className="nextButton"
            test="btn-next"
            name="Próxima"
          />
        )}
      </div>
    </div>
  );
};

const mapState = (state) => ({
  triviaData: state.apiRequest.triviaData,
  answerType: state.answers.answerType,
  isAnswered: state.answers.isAnswered,
  selected: state.answers.selected,
});

const mapDispatch = {
  selectAnswer: chooseAnswer,
  nextButton: nextQuestion,
};

export default connect(mapState, mapDispatch)(QuestionAnswers);
