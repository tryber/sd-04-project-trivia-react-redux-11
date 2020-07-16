import React, { Component } from 'react';
import from  PropTypes 'prop-types';

export default class Header extends Component {
class Header extends Component {
  render() {
    const { userData, score } = this.props;
    return (
      <div>
        <p>teste</p>
      <div className="questions-header">
        {userData && (
        <img
          src={`https://www.gravatar.com/avatar/${userData.avatar}`}
          data-testid="header-profile-picture"
          alt="avatar"
        />
        )}
        {userData && <p data-testid="header-player-name">{`Jogador: ${userData.name}`}</p>}
        <p data-testid="header-score">{`Pontos: ${score}`}</p>
      </div>
    );
  }
}


Header.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  score: PropTypes.number.isRequired,
};
