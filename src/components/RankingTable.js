import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class RankingTable extends Component {
  render() {
    const { ranking } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">RANKING</h1>
        {ranking.sort(function (a, b) { return b.score - a.score; }).map((e, i) => (
          <div>
            <img src={`https://www.gravatar.com/avatar/${e.avatar}`} alt="avatar" />
            <span data-testid={`player-name-${i}`}>{e.name}</span>
            <span data-testid={`player-score-${i}`}>{e.score}</span>
          </div>
        ))}
        <Link to="/">
          <button
            type="button"
            data-testid="btn-go-home"
          >
            Início
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ranking: state.rankingReducer,
});

export default connect(mapStateToProps)(RankingTable);

RankingTable.propTypes = {
  ranking: PropTypes.shape({
    name: PropTypes.string,
    score: PropTypes.number,
    avatar: PropTypes.string,
  }).isRequired,
};
