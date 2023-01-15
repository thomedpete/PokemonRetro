import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './PcFavs.css'


const PcFavs = ({favs}) => {
  return ( 
<div className='wholePc'>
  <h1 className='pcPageHeader'>Your PC</h1>
    <h4 className='subHeader'>The Pokemon you caught live here!</h4>
    <Button className='home-button-pc'  variant='contained'> <Link className='home-link' to='/'>HOME</Link></Button>
  <div className='pcBox'>
    {favs.map((mon) => {
      return (
        <div key={mon.id} className='favMonCard'>
          <h3 className='pcName'>{mon.name}</h3>
          <img className='pcImage' src={mon.image} />
          <h5 className='weight'>Weight: {mon.weight}</h5>
          <h4 className='pcType'>Type: {mon.type}</h4>
        </div>
      )
    })}
  </div>
</div>)
}

export default PcFavs;