import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import FeedBack from './Pages/FeedBack';
import GameDisplay from './Pages/GameDisplay';
import SettingsPage from './Pages/SettingsPage';
import RankingTable from './Pages/RankingTable';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/game" component={GameDisplay} />
        <Route path="/game/feedback" component={FeedBack} />
        <Route path="/game/settings" component={SettingsPage} />
        <Route path="/game/ranking" component={RankingTable} />
      </Switch>
    </div>
  );
}
