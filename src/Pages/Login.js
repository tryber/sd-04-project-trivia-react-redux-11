import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../components/ultilityComponents/Input';
import Button from '../components/ultilityComponents/Button';
import { onChange, getAPI, playButton } from '../redux/actions';
import configIcon from '../images/config-icon.png';
import Image from '../components/ultilityComponents/Image';

const Login = ({ playButtonProps, onChangeProps, name, email, fecthAPI }) => (
  <div>
    <Input
      onChange={(e) => onChangeProps(e.target.name, e.target.value)}
      name="name"
      test="input-player-name"
    />
    <Input
      onChange={(e) => onChangeProps(e.target.name, e.target.value)}
      name="email"
      test="input-gravatar-email"
    />
    <Link to="/game">
      <Button
        onClick={() => {
          fecthAPI();
          playButtonProps(name, email);
        }}
        isDisabled={!(name && email)}
        test="btn-play"
        name="Jogar"
      />
    </Link>
    <Link to="game/settings" data-testid="btn-settings" name="Configurações">
      <Image src={configIcon} alt="ícone de engrenagem" width="40px" />
    </Link>
  </div>
);

const mapState = (state) => ({
  name: state.login.name,
  email: state.login.email,
});

const mapDispatch = {
  onChangeProps: onChange,
  fecthAPI: getAPI,
  playButtonProps: playButton,
};

export default connect(mapState, mapDispatch)(Login);

Login.propTypes = {
  onChangeProps: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fecthAPI: PropTypes.func.isRequired,
  playButtonProps: PropTypes.func.isRequired,
};
