import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import './App.css'
import Home from '../Home/Home';
import theme from '../../theme';
import { ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Pokedex from '../Pokedex/Pokedex';

// const Copyright = () => {
//   return (
//     <Typography variant="body2" color="#FFCB5F" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://github.com/thomedpete/PokemonRetro">
//         Pokemon Retro
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const App = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const [favPokemon, setFavPokemon] = useState([])
  const [currentCaughtPokemon, setCurrentCaught] = useState([])
  const [isCaught, setCatch] = useState(false)

  const addPokemon = (pokemon) => {
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
      
    <Routes>
      <Route path='/' element={(<Home allMons={allPokemon} setFavMons={addPokemon} current={currentCaughtPokemon} caught={isCaught} setCatch={setCatch} setCurrent={setCurrentCaught}></Home>)}/>
      <Route path="/pokedex" element={(<Pokedex favs={favPokemon} allMons={allPokemon}></Pokedex>)} />
      {/* <Route path='/*' element={()} /> */}
    </Routes>
      
    </ThemeProvider>
  )
}

export default App;