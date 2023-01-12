import React, { useEffect, useState } from 'react';
import './App.css'
import Home from '../Home/Home';
import theme from '../../theme';
import { ThemeProvider } from '@mui/material/styles';
import Pokedex from '../Pokedex/Pokedex';
const App = () => {
  const [e, setError] = useState('')
  const [allPokemon, setAllPokemon] = useState([])
  const [favPokemon, setFavPokemon] = useState([])

  const addPokemon = (pokemon) => {
    console.log(pokemon)
      setFavPokemon([...favPokemon, pokemon]);
  }
  
  
  
  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
      const pokemon = results.map((result) => ({
        name: result.name,
        image: result.sprites['front_default'],
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
      }));
      setAllPokemon(pokemon);
    });
  };
  useEffect(() => {
    fetchPokemon()
  }, [])



  return (
    <ThemeProvider theme={theme}>
    <Home allMons={allPokemon} setFavMons={addPokemon}></Home>
    <Pokedex favs={favPokemon}></Pokedex>
    </ThemeProvider>
  )
}

export default App;