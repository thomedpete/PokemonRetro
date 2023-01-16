import * as React from 'react';
import Link from '@mui/material/Link';




const ErrorPage = () => {
  return (
    <div className='error-container'>
      <h2 className='error-heading'>Oh No!</h2>
      <article className='error-message-cont'>
        <p className='error-message'>
          You don't have any Pokemon in your PC yet...Go catch'em! <Link color="#9966cc" href="/">Back To Wild Area</Link>!
        </p>
      </article>
    </div>
  )
}


export default Whoopsie;