import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import './global.css';

class Home extends Component {

  render() {

    return (
      <div className="container">
        <h4 className="text-primary margin">Bienvenue voici le Jeu Juniper Green</h4>

        <Link to="/regles">
        <button type="button" className="btn btn-info margin width_button ">Les règles du jeu</button>
        </Link>
     
        <Link to="/jeu">
        <button type="button" className="btn btn-success margin width_button ">Commencer une partie
        </button>
        </Link>
        
      </div>
    )
  }
}
export default Home;
