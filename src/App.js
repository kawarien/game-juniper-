import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Regles from './components/regles';
import Jeu from './components/jeu';
import Score from './components/score';

const numberTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <Router >
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/regles" component={Regles} />
          <Route path="/jeu" component={Jeu} />
          <Route path="/score" component={Score} />
          <Route component={({ location }) => (<p>404 Page Not Found </p>)} />
        </Switch>
    </Router>
  );
}

export default App;
