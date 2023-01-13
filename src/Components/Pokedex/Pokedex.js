import { Box } from '@mui/material';
import React from 'react';
import './Pokedex.css'




const Pokedex = ({favs, allMons}) => {

  
  return (
    <div  className='favsPage' >
      <h2 className='favsHeading'>Pokemon You Saved!</h2>
      {allMons.map((mon) => {
        return (
      <div className='singleFavMon'>
        <h3 className='favName'>{mon.name}</h3>
        <img className='pokeImage' src={mon.image}/>
        <h4 className='pokeType'>{mon.type}</h4>
      </div>
        )
      })}
    </div>
  );
}

export default Pokedex;