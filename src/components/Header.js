import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from './ultilityComponents/Image';
import '../App.css';

const Header = ({ name, email, score }) => (
  <div className="App-header">
    <Image
      src={`https://www.gravatar.com/avatar/${email}`} // não consegui fazer o criptoJS funcionar
      test="header-profile-picture"
      alt={`${name}-avatar`}
      width={`${5}%`}
    />
    <p data-testid="header-player-name">{`Jogador: ${name}`}</p>
    <div>
      <span>Pontos:</span>
      <span data-testid="header-score">{score}</span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  name: state.login.name,
  email: state.login.email,
  score: state.answers.player.score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
Header.defaultProps = {
  userData: [],
};
