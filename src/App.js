import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Header from './components/Header';
import GameDisplay from './Pages/GameDisplay';
import SettingsPage from './Pages/SettingsPage';
import RankingTable from './components/RankingTable';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/game/settings" component={SettingsPage} />
        <Route path="/game" component={GameDisplay} />
        <Route path="/ranking" component={RankingTable} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}
