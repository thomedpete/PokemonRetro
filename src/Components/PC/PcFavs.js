import {  Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './PcFavs.css'


const PcFavs = ({ favs, setFav }) => {

  const deletePokemon = (monToDelete) => {
    setFav(favs.filter(pokemon => pokemon.name !== monToDelete.name));
  }

  return (
    <div className='wholePc'>
      <h1 className='pcPageHeader'>Your PC</h1>
      <h4 className='subHeader'>The Pokemon you caught live here!</h4>
      <Link className='home-link' to='/'><Button className='home-button-pc' variant='contained'> HOME</Button></Link>
      <div className='pcBox'>
        {favs.map((mon) => {
          return (
            <div key={mon.id} className='favMonCard'>
              <h3 className='pcName'>{mon.name}</h3>
              <img className='pcImage' src={mon.image} alt={mon.name} />
              <h5 className='weight'>Weight: {mon.weight}</h5>
              <h4 className='pcType'>Type: {mon.type}</h4>
              <Button variant="contained" color="primary" onClick={() => deletePokemon(mon)}>Release From PC</Button>
            </div>
          )
        })}
      </div>
    </div>)
}

export default PcFavs;