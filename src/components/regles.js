import React, { Component } from 'react';



import {
  NavLink
} from "react-router-dom";
import './global.css';
class Regles extends Component {

  render() {

    return (
        <div className="container">
        <h4 className="text-primary margin">Regles du jeux Juniper Green </h4>
        <NavLink to="/">
        <button type="button" className="btn btn-info margin width_button ">Revenir à la page principale</button>
        </NavLink>
        <div className="margin">
            Le jeu possède trois règles !<br/><br/>

            Le Joueur 1 choisit un nombre entre 1 et 100. À tour de rôle, 
            chaque joueur doit choisir un nombre parmi les multiples ou les diviseurs du nombre choisi précédemment par son adversaire et inférieur à 100. <br/><br/>
      
            Un nombre ne peut être joué qu’une seule fois. <br/><br/>
            Le perdant étant le joueur qui ne trouve plus de multiples ou de diviseurscommuns au nombre précédemment choisi. <br/><br/>
  
        
        </div>
        
      </div>
    )
  }
}
export default Regles;
