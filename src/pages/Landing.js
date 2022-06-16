import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'animate.css'
import landing from '../images/landing.svg'

const Landing = () => {
  return (
    <Wrapper>
      <h3 className='animate__animated animate__bounce animate__repeat-2 title'>
        klassen bronze
      </h3>
      <div className='title-underline '></div>
      <div className='img-container'>
        <img className='img' src={landing} alt='' />
      </div>
      <div className='title animate__rubberBand'>
        <Link to='/login' className='btn '>
          Login/Register
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .img-container {
    height: 400px;
    width: 400px;
    margin: 2rem auto;

    overflow: hidden;
    .img {
      max-width: 100%;
      display: block;
      object-fit: cover;
    }
  }
`

export default Landing
