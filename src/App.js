import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import GameDisplay from './components/GameDisplay';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/game" component={GameDisplay} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}
