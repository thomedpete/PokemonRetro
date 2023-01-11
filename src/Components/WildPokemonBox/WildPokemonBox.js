import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './WildPokemonBox.css'
import pMap from 'p-map';
import axios from 'axios';

const WildPokemonBox = ({all151}) => {

  // const setCurrentWild = (array) =>  {
  //   let currentWildArray = [];
  //   array.forEach(item => {
  //     if (currentWildArray.length < 6) {
  //       let randomIndex = Math.floor(Math.random() * array.length);
  //       let randomObject = array[randomIndex];
  //       if (!currentWildArray.some(x => x === randomObject)) {
  //         currentWildArray.push(randomObject);
  //       }
  //     }
  //   });
  //   return currentWildArray;
  // }
  
  // setCurrentWild(all151)
  const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon.map((monster) => {
      return (
        <li className="card">
          <img className="card-image" src={monster.image} />
        </li>
      )
    })
    return pokemonHTMLString
  };
 
    
  return (
  <div className='wild'>
       {displayPokemon(all151)}
  </div>
  )
}

export default WildPokemonBox;