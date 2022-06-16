import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h3 className='title'>404 page not found...</h3>
      <Link to='/' className='btn'>
        Back to home page
      </Link>
    </div>
  )
}

export default Error
