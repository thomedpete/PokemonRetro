import { Box, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import React from 'react';
import './Pokedex.css'




const Pokedex = ({favs, allMons}) => {

  
  return (
    <div  className='favsPage' >
      <h2 className='favsHeading'>Pokedex</h2>
      <Button className='home-button' variant='contained'> <Link className='home-link' to='/'>HOME</Link></Button>
      <div className='dex'>
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
    </div>
  );
}

export default Pokedex;