import * as React from 'react';
import Link from '@mui/material/Link';
import './ErrorPage.css'




const ErrorPage = () => {
  return (
    <div className='error-container'>
      <h2 className='error-heading'>Oh No!</h2>
      <article className='error-message-cont'>
        <p className='error-message'>
          404 This URL seems to be incorect please try again later 404 <Link color="#F00000" href="/">Back To Wild Area</Link>!
        </p>
      </article>
    </div>
  )
}


export default ErrorPage;