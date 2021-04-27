import React, { Component } from 'react';



import {
  NavLink
} from "react-router-dom";
import './global.css';
class Jeu extends Component {

  render() {

    return (
        <div className="container">
        <h4 className="text-primary margin">Game Juniper Green </h4>
        <NavLink to="/">
        <button type="button" className="btn btn-primary margin width_button ">Revenir à la page principale</button>
        </NavLink>
        <NavLink to="/regles">
        <button type="button" className="btn btn-info margin width_button ">Les regles du jeu</button>
        </NavLink>
        <NavLink to="/score">
        <button type="button" className="btn btn-secondary margin width_button ">reset</button>
        </NavLink>
        <div className="margin">
            <form>
                <label> 
                    <input type="text" name="number" placeholder="Votre choix ici" className="form-control"/>
                </label>
            </form>
            
            <button type="button" className="btn btn-primary margin  ">Valider</button>
          
        </div>
        
      </div>
    )
  }
}
export default Jeu;
