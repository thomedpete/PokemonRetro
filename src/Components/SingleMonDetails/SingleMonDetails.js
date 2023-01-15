import { Box } from '@mui/material';
import React from 'react';
import './SingleMonDetails.css'




const SingleMonDetails = ({ current }) => {
  console.log(current)
  return (
    <div className='single-mon-page'>
      {current.map((mon) => {
        return <div key={mon.id} className='caughtMon' >
          <h2 className='caughtHeading'>You Caught {mon.name}!</h2>
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