import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '../components/ultilityComponents/Image';
import Button from '../components/ultilityComponents/Button';
import { resetGame } from '../redux/actions';

const Ranking = ({ ranking, reseteGameProps }) => (
  <div>
    <h2 data-testid="ranking-title"> Ranking</h2>
    <table>
      {ranking.map(({ name, score, picture }, index) => (
        <tr>
          <td data-testid={`player-name-${index}`}>{name}</td>
          <td data-testid={`player-score-${index}`}>{score}</td>
          <td>
            <Image src={`https://www.gravatar.com/avatar/${picture}`} />
          </td>
        </tr>
      ))}
    </table>
    <Link to="/">
      <Button
        onClick={() => reseteGameProps()}
        test="btn-go-home"
        name="jogar-novamente"
      />
    </Link>
  </div>
);
const mapState = (state) => ({
  ranking: state.answers.ranking,
});

const mapDispatch = {
  reseteGameProps: resetGame,
};

export default connect(mapState, mapDispatch)(Ranking);

Ranking.propTypes = {
  ranking: PropTypes.arrayOf(PropTypes.object).isRequired,
  reseteGameProps: PropTypes.func.isRequired,
};
