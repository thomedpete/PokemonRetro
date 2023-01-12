import React, { useRef } from 'react'
import { Box, Button, Fab } from '@mui/material';
import logo from '../../Assets/pokeLogo.png'
import pokePhone from '../../Assets/pokePhoneIcon.png'
import './Home.css'
import WildPokemonBox from '../WildPokemonBox/WildPokemonBox';



const Home = ({ allMons }) => {
  return (
    <div className='home'>
      <Fab color='secondary'></Fab>
      <Box className='logo-cont' ><img className='logo'
        src={logo}
        alt="Pokemon Logo"/></Box>
      <WildPokemonBox all151={allMons}></WildPokemonBox>
    </div> 
  )
}


export default Home;