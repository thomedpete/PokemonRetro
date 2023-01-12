import { Box } from '@mui/material';
import React from 'react';
import './Pokedex.css'




const Pokedex = ({favs}) => {

  
  return (
    <Box  className='favsPage' sx={(theme) => ({
      backgroundColor: 'red',
      height: '50vh',
      width: '80%',
      zIndex:'2',
      margin:'6%',
      marginLeft:'8%'
      
    })} >
      <h2 className='favsHeading'>Pokemon You Saved!</h2>
      {favs.map((mon) => {
        return (
      <div className='singleFavMon'>
        <h3 className='favName'>{mon.name}</h3>
        <img className='pokeImage' src={mon.image}/>
        <h4 className='pokeType'>{mon.type}</h4>
      </div>
        )
      })}
    </Box>
  );
}

export default Pokedex;