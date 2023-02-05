import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import './WildPokemonBox.css'


const WildPokemonBox = ({ all151, setFav, setCaught, setCatch }) => {


  const handleClick = (event, pokemonList) => {
    const elementId = event.target.className;
    const pokeID = Number(elementId);
    const selectedPokemon = pokemonList.find(mon => {
      return mon.id === pokeID
    })
    setFav(selectedPokemon);
    setCaught([selectedPokemon]);
    setCatch(true)
    setTimeout(() => {
      setCatch(false)
    }, "3000");
  }


  const setCurrentWild = (array) => {
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
        <div className={`card card-${monster.id}`} data-testid={`pokemons`} key={monster.id} id={counter}>
          <Link className='current-link' data-testid={`pokemon-${counter}`} to='/caught'>
            <Button className={`wild-pokemon card-${counter}`} key={monster.id} onClick={(event) => {
              handleClick(event, all151)
            }} variant="outlined" sx={{ border: 0, borderRadius: 25, color: 'red' }} >
              <img className={`${monster.id}`} src={monster.image} alt={monster.name}/>
            </Button>
          </Link>
        </div>
      )
    })
    return pokemonHTMLString
  };


  return (
    <div className='wild' data-testid={`pokemons-lists`}>
      {displayPokemon(setCurrentWild(all151))}
    </div>
  )
}

export default WildPokemonBox;
WildPokemonBox.propTypes = {
  all151: PropTypes.array, 
  setFav: PropTypes.func, 
  setCaught: PropTypes.func, 
  setCatch: PropTypes.func
}