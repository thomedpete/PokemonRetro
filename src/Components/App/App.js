import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import Home from '../Home/Home';

const App = () => {
  const [e, setError] = useState('')
  const [allGen1, setGen1] = useState([])

  const getGen1 = async () => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setGen1(response.data.results);
    } catch (e) {
      setError(e)
      console.log(e);
    }
  }
  useEffect(() => {
    getGen1()
  }, [])
 
  return (
    <Home allMons={allGen1}></Home>
  )
}

export default App;