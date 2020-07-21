import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import FeedBack from './Pages/FeedBack';
// import Header from './components/Header';
import GameDisplay from './Pages/GameDisplay';
import SettingsPage from './Pages/SettingsPage';

export default function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch>
        <Route path="/game/feedback" component={FeedBack} />
        <Route path="/game/settings" component={SettingsPage} />
        <Route exact path="/game" component={GameDisplay} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}
