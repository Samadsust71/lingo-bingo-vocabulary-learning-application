import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    
  return (
    <div id="error-page" className='flex flex-col justify-center items-center min-h-screen space-y-4'>
    <h1 className='text-gray-800 font-semibold'>Oops!</h1>
    <p className='text-gray-600'>Sorry, an unexpected error has occurred.</p>
    <p>{error?.status} </p>
    <p>
      <i>{error?.statusText || error?.message}</i>
    </p>
    <Link to={'/'} className='btn btn-warning'>Back to Home</Link>
  </div>
  )
}

export default ErrorPage
