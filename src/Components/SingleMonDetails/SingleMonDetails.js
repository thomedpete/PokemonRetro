import { Box } from '@mui/material';
import React from 'react';



//maybe pass down favorites and leverage the fav array by grabbing index 0 every time, or set up a use state hook for the 
//currrent caught pokemon whos data we can use  to display on page 
const SingleMonDetails = ({current}) => {
  console.log(current)
  return ( 
<div>
   {current.map((mon) => {
 return <div key={mon.id} className='caughtPage' >
          <h2 className='caughtHeading'>You Caught {mon.name}!</h2> 
          <div className='singleFavMon'>
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