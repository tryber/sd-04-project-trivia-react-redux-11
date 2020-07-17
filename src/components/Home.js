import React from 'react';
import logo from '../trivia.png';
import Image from './ultilityComponents/Image';
import '../App.css';

const Home = () => (
  <header className="App-header">
    <Image src={logo} alt="logo-trivia" width={`${20}%`} />
  </header>
);

export default Home;
