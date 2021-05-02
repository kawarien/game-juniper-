import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import { browserHistory } from 'react-router'
import {useEffect} from 'react';

import {
  NavLink
} from "react-router-dom";
import './global.css';

  const initialState = {
    Choixjoueur: '', // controle
    Choixcomputer: (Math.floor(Math.random() * 100) + 1),
    divisor: [],
    multiple : [],
    message : '',
    score : []
  }

  const reducer = (state, action) => {
    switch (action.type) {

        case "Choixjoueur":

            return {
                ...state,
                [action.name] : action.value,
                message : '',
                result : null
            }

        case "Valider":

            if(state.Choixjoueur.trim() === ''){
              
                return {
                    ...state,
                    message : 'Attention votre champ est vide',
                    Choixcomputer: (Math.floor(Math.random() * 100) + 1)
                }
            }

            if(parseInt(state.Choixjoueur) != state.Choixjoueur ){

                return {
                    ...state,
                    message : 'Veuillez saisir un nombre  svp !',
                    Choixjoueur: '',
                    Choixcomputer: (Math.floor(Math.random() * 100) + 1)
                    
                }
            }

            if(parseInt(state.Choixjoueur) <= 0 || parseInt(state.Choixjoueur) > 100) {
              return {
                ...state,
                message : `Veuillez saisir un nombre > 0 et < 100 svp !`,
                Choixjoueur: '',
                Choixcomputer: (Math.floor(Math.random() * 100) + 1)
                
              }
      
            }

            return {
              
                ...state,
                message : '',
                Choixjoueur : state.Choixjoueur,
                Choixcomputer: (Math.floor(Math.random() * 100) + 1)
            }
    
        default:
            return state;
    }
  }

export function Jeu(props) {
  const history = useHistory();

  const [state, dispatch] = React.useReducer(reducer, initialState);


  const handleSubmit = (evt) => {
    evt.preventDefault();
      // let i = 1, multiple = 0, divisor = 0;

      // while(true) {
      //   multiple = i * parseInt(this.Choixjoueur);

      //   if(multiple >= 100 || multiple === 0) break;

      //   this.tables.push(multiple);
      //   i = i+1;
      // }
    dispatch({type : "Valider"})

    // history.push('/score')
    
   
  }

   


  return (
      <div className="container">
      <h4 className="text-primary margin">Game Juniper Green </h4>

      <NavLink to="/">
      <button type="button" className="btn btn-primary margin width_button ">Revenir à la page principale</button>
      </NavLink>
      <NavLink to="/regles">
      <button type="button" className="btn btn-info margin width_button ">Les regles du jeu</button>
      </NavLink>
      <NavLink to="/">
      <button type="button" className="btn btn-secondary margin width_button ">reset</button>
      </NavLink>
      <h6 className="text-info margin">C'est à vous </h6>
        <div  className="margin">
        <div className=" text-danger margin ">Computer : {state.Choixcomputer}</div>
          <input
            placeholder="Votre choix ici" 
            className="form-control input-width margin"
            type="text"
            name="Choixjoueur"
            onChange={(e) => dispatch({
              type: "Choixjoueur", 
              value : e.target.value,
              name : e.target.name

            })}

            value={state.Choixjoueur}
          />
          {state.message && <p className="margin" style={{color: "red"}}>{state.message}</p>}
          
          <button className="btn btn-primary margin" onClick={handleSubmit}> Valider </button>
      </div>
      
    </div>
    
  )
  

}

export default Jeu;
