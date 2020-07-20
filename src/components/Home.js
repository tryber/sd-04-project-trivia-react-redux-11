import React, { Component } from 'react';
import logo from '../trivia.png';
import Image from './ultilityComponents/Image';
import Button from './ultilityComponents/Button';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
          <p>SUA VEZ</p>
          <Button />
        </header>
      </div>
    );
  }
}
