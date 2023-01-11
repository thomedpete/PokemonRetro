import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import Home from '../Home/Home';

const App = () => {
  const [e, setError] = useState('')
  const [allPokemon, setAllPokemon] = useState([])


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

 


  // const getGen1 = async () => {
  //   let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
  //   try {
  //     const rez = await axios(url, {
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });
  //     setGen1(rez.data.results);
  //   } catch (e) {
  //     setError(e)
  //     console.log(e);
  //   }
  // }
  
 
  return (
    <Home allMons={allPokemon} ></Home>
  )
}

export default App;