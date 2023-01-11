import React, { useRef } from 'react'
import { Box } from '@mui/material';
import logo from '../../Assets/pokeLogo.png'
import './Home.css'




const Home = () => {
  return (
    <Box className='logo-cont' ><img className='logo'
      src={logo}
      alt="Pokemon Logo"/></Box>
  )
}


export default Home;