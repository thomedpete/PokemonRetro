import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './WildPokemonBox.css'


const WildPokemonBox = ({all151}) => {

  const setCurrentWild = (array) =>  {
    let currentWildArray = [];
    array.forEach(item => {
      if (currentWildArray.length < 6) {
        let randomIndex = Math.floor(Math.random() * array.length);
        let randomObject = array[randomIndex];
        if (!currentWildArray.some(x => x === randomObject)) {
          currentWildArray.push(randomObject);
        }
      }
    });
    return currentWildArray;
  }
  
  const displayPokemon = (pokemon) => {
    let counter = 0;
  
    const pokemonHTMLString = pokemon.map((monster) => {
      counter++;
      return (
        <div className="card" id={counter}>
          <Button onClick={() => {
            alert('clicked');//Add open pokedex view for selected pokemon 
          }} variant="outlined" sx={{border:0,borderRadius:25,color:'red'}} >
          <img className="card-image" src={monster.image} />
          </Button>
       </div>
      )
    })
    return pokemonHTMLString
  };
 
    
  return (
  <div className='wild'>
      {displayPokemon(setCurrentWild(all151))}
  </div>
  )
}

export default WildPokemonBox;