import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <h3>Wellcom, Landing Page</h3>
      <Link to='/login' className='btn'>
        Login/Register
      </Link>
    </div>
  )
}

export default Landing
