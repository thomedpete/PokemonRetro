import {  Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import './Pokedex.css'
import SearchBar from '../SearchBar/SearchBar'





const Pokedex = ({ allMons }) => {


  return (
    <div className='favsPage' >
      <h2 className='favsHeading'>Pokedex</h2>
      <Link className='home-link' to='/'><Button className='home-button' variant='contained'> Back To Wild Area</Button></Link>
      <SearchBar allMons={allMons}></SearchBar>
      <div className='dex' >
        {allMons.map((mon) => {
          return (
            <div key={mon.id} className='singleFavMon'>
              <h3 className='favName'>{mon.name}</h3>
              <img className='pokeImage' src={mon.image} alt={mon.name} />
              <h4 className='pokeType'>Type: {mon.type}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Pokedex;
Pokedex.propTypes = {
  allMons: PropTypes.array
}