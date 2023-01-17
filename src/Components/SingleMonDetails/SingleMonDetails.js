import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './SingleMonDetails.css'
import logo from '../../Assets/pokeLogo.png'




const SingleMonDetails = ({ current }) => {
  return (
    
    <div className='single-mon-page'>
      <Box className='logo-cont' zIndex={3} ><img className='logo'
        src={logo}
        alt="Pokemon Logo" /></Box>
          <Link className='home-button' to='/'><Button className='home-button' variant='contained'> Back To Wild Area</Button></Link>
      {current.map((mon) => {
        return <div key={mon.id} className='caughtMon' >
          <h2 className='caughtHeading'>You Caught {mon.name}!</h2>
          <h3 className='caughtHeading'>{mon.name} will be added to your PC</h3>
          <div className='monInfo'>
            <h3 className='caughtName'>{mon.name}</h3>
            <img className='caughtImage' src={mon.image} />
            <h4 className='caughtType'>{mon.type}</h4>
          </div>
        </div>
      })}
    </div>
  )
}



export default SingleMonDetails;