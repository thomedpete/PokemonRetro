import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './PcFavs.css'


const PcFavs = ({favs}) => {
  return ( 
<div className='wholePc'>
  <h1 className='pcPageHeader'>Your PC</h1>
    <h4 className='subHeader'>The Pokemon you caught live here!</h4>
  <div className='pcBox'>
    {favs.map((mon) => {
      return (
        <div className='singleFavMon'>
          <h3 className='favName'>{mon.name}</h3>
          <img className='pokeImage' src={mon.image} />
          <h4 className='pokeType'>{mon.type}</h4>
        </div>
      )
    })}
  </div>
</div>)
}

export default PcFavs;