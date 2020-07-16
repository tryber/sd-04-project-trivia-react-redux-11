import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './ultilityComponents/Input';
import Button from './ultilityComponents/Button';
import { onChange, getAPI } from '../action';
import configIcon from '../images/config-icon.png';
import Image from './ultilityComponents/Image';

const Login = ({ onChangeProps, name, email, fecthAPI }) => (
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
        onClick={() => fecthAPI()}
        isDisabled={!(name && email)}
        test="btn-play"
        name="Jogar"
      />
    </Link>
    <Link to="/settings" test="btn-settings" name="Configurações">
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
};

export default connect(mapState, mapDispatch)(Login);

Login.propTypes = {
  onChangeProps: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  requestToken: PropTypes.string.isRequired,
};
