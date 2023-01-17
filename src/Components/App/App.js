import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../Home/Home';
import theme from '../../theme';
import { ThemeProvider } from '@mui/material/styles';
import Pokedex from '../Pokedex/Pokedex';
import PcFavs from '../PC/PcFavs';
import ErrorPage from '../ErrorPage/ErrorPage'
import SingleMonDetails from '../SingleMonDetails/SingleMonDetails';


const stringFormat = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const [favPokemon, setFavPokemon] = useState([])
  const [currentCaughtPokemon, setCurrentCaught] = useState([])
  const [isCaught, setCatch] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const addPokemon = (pokemon) => {
      setFavPokemon([...favPokemon, pokemon]);
  }
  
 
  
  const fetchPokemon =  async () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }
    try {
      const results = await Promise.all(promises);
      const pokemon = results.map((result) => ({
        name: stringFormat(result.name),
        image: result.sprites['front_default'],
        weight: result.weight + 'kg',
        type: result.types.map((type) => type.type.name).join(', '),
        id: result.id
      }));
      setAllPokemon(pokemon);
    } catch (error) {
      setFetchError(true)
      setErrorMessage('Sorry, the Pokemon API is down at the moment please try again later.')
    }
  }
  
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      fetchPokemon();
      didMountRef.current = true;
    }
  }, []);
      



  return (
    <ThemeProvider theme={theme}>
      {fetchError && <p className='fetchError'>{errorMessage}</p>}
    <Routes>
      <Route path='/' element={(<Home allMons={allPokemon} setFavMons={addPokemon} current={currentCaughtPokemon} caught={isCaught} setCatch={setCatch} setCurrent={setCurrentCaught}></Home>)}/>
      <Route path="/pokedex" element={(<Pokedex favs={favPokemon} allMons={allPokemon}></Pokedex>)} />
      <Route path="/caught" element={(<SingleMonDetails current={currentCaughtPokemon}></SingleMonDetails>)} />
      <Route path='/pc' element={(<PcFavs favs={favPokemon} setFav={setFavPokemon} ></PcFavs>)} />
      <Route path='/*' element={(<ErrorPage></ErrorPage>)} />
    </Routes>
      
    </ThemeProvider>
  )
}

export default App;