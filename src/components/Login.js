import React from 'react';
import { connect } from 'react-redux';
import Input from './ultilityComponents/Input';
import Button from './ultilityComponents/Button';
import { onChange } from '../action';
import { Link } from 'react-router-dom';
import configIcon from '../images/config-icon.png';

const Login = ({ onChangeProps, name, email }) => {
  return (
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
        <Button isDisabled={!(name && email)} test="btn-play" name="Jogar" />
      </Link>
      <Link to="/settings"test="btn-settings" name="Configurações">
        <img src={configIcon}  alt="ícone de engrenagem que redireciona para a pagina de configurações"/>
      </Link>
    </div>
  );
};

const mapState = (state) => ({
  name: state.login.name,
  email: state.login.email,
});

const mapDispatch = {
  onChangeProps: onChange,
};

export default connect(mapState, mapDispatch)(Login);