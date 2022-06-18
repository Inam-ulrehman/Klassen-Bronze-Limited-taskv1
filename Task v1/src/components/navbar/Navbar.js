import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const { storeUser } = useSelector((state) => state.user)
  return (
    <Wrapper>
      <div className='navbar'>
        <p>Welcome {storeUser?.name}</p>
        <p>profile</p>
        <button type='button' className='btn'>
          <Link to='/'>LogOut</Link>
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  margin-left: 170px;
  margin-right: 170px;
  .navbar {
    text-align: center;
  }
`
export default Navbar
