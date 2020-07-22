import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Image from '../components/ultilityComponents/Image';
import Button from '../components/ultilityComponents/Button';

const RankingTable = ({ ranking }) => (
  <div>
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
      <Button test="btn-go-home" name="jogar-novamente" />
    </Link>
  </div>
);
const mapState = (state) => ({
  ranking: state.answers.ranking,
});

export default connect(mapState)(RankingTable);

RankingTable.propTypes = { ranking: PropTypes.arrayOf(PropTypes.object).isRequired };
