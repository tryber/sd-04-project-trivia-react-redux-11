import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const InfoHeader = ({ userData, score }) => {
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
        {userData && (
          <p data-testid="header-player-name">{`Jogador: ${userData.name}`}</p>
        )}
        <p data-testid="header-score">{`Pontos: ${score}`}</p>
      </div>
      <p data-testid="header-score">{`Pontos: ${score}`}</p>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   userData: state.loginReducer[0],
//   score: state.scoreReducer.points,
// });

export default connect(null)(InfoHeader);

InfoHeader.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object),
  score: PropTypes.number.isRequired,
};
InfoHeader.defaultProps = {
  userData: [],
};
