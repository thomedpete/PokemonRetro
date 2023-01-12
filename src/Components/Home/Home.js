import React from 'react'
import { Box } from '@mui/material';
import logo from '../../Assets/pokeLogo.png'
import './Home.css'
import WildPokemonBox from '../WildPokemonBox/WildPokemonBox';



const Home = ({ allMons }) => {
  return (
    <div className='home'>
      <Box className='logo-cont' ><img className='logo'
        src={logo}
        alt="Pokemon Logo"/></Box>
      <WildPokemonBox all151={allMons}></WildPokemonBox>
    </div> 
  )
}


export default Home;