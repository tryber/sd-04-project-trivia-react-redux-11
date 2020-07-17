import React from 'react';
import { connect } from 'react-redux';
import sortAnswers from '../services/sortAnswers';
import { chooseAnswer } from '../action';
import '../App.css';
import Button from './ultilityComponents/Button';

class QuestionAnswers extends React.Component {
  // constructor(props) {
  //   super(props) {
  //     this.state = {isAnswered: false}
  //   }
  // }
  render() {
    const { triviaData, selectAnswer } = this.props;
    return (
      <div className="questions-container">
        {triviaData.map((question) => {
          let index = -1;
          return (
            <div className="question-card">
              <h3 data-testid="question-category">{question.category}</h3>
              <h2 data-testid="question-text">{question.question}</h2>
              {sortAnswers(question).map((answer) => {
                if (answer === question.correct_answer) {
                  console.log('deu map no certo', answer);
                  return (
                    <Button
                      onClick={() => {
                        selectAnswer('correct');
                      }}
                      test="correct-answer"
                      name={question.correct_answer}
                    />
                  );
                }
                index += 1;
                console.log('deu map no errado', answer);
                return (
                  <Button
                    onClick={() => {
                      selectAnswer('wrong');
                    }}
                    test={`wrong-answer-${index}`}
                    name={answer}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => ({
  answerType: state.answers.answerType,
})

const mapDispatch = {
  selectAnswer: chooseAnswer,
};

export default connect(mapState, mapDispatch)(QuestionAnswers);
