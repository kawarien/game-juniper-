import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import './global.css';

class Score extends Component {

  render() {

    return (
        <div className="container">
        <h4 className="text-primary margin">Game Juniper Green </h4>
        <NavLink to="/">
        <button type="button" className="btn btn-primary margin width_button ">Revenir à la page principale</button>
        </NavLink>
        <NavLink to="/jeu">
        <button type="button" className="btn btn-success margin width_button ">Rejouer ?</button>
        </NavLink>

        <h4 className="text-primary margin">Le jeu est terminé, vous avez gagné en 19 tours. </h4>
        <div className="margin">
        <table className="table margin">
            <thead>
                <tr>
                <th scope="col">Vos choix</th>
                <th scope="col">Choix du computer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                </tr>
            </tbody>
            </table>
          
        </div>
        
      </div>
    )
  }
}
export default Score;
