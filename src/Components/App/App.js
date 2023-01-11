import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [e, setError] = useState('')
  const [currentWild, setWild] = useState([])
  const [allGen1, setGen1] = useState([])

  const getGen1 = async () => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setGen1(response.data);
    } catch (e) {
      setError(e)
      console.log(e);
    }
  }
  useEffect(() => {
    getGen1()
  }, [])

  return 
}

export default App;