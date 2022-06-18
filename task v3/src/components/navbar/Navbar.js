import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { toggleSideMenu, toggleTaskBar } from '../../features/user/userSlice'
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {
  const dispatch = useDispatch()
  const { storeUser, isTaskOpen } = useSelector((state) => state.user)

  // handle sideBar
  const handleToggle = () => {
    dispatch(toggleSideMenu())
  }
  // handle TaskBar
  const handleTaskBarToggle = () => {
    dispatch(toggleTaskBar())
  }
  return (
    <Wrapper>
      <div className='nav-bar'>
        <ul className='nav-container'>
          <li>
            Welcome, <span>{storeUser?.name}</span>{' '}
          </li>
          <li>
            <button className='btn' type='button' onClick={handleTaskBarToggle}>
              {isTaskOpen ? 'Hide TaskBar' : 'Show TaskBar'}
            </button>
          </li>

          <li>
            <button type='button' className='btn'>
              <Link to='/'>LogOut</Link>
            </button>
          </li>
          <li>
            <button className='btn' type='button' onClick={handleToggle}>
              <GiHamburgerMenu />
            </button>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--primary-1);
  .nav-container {
    display: flex;
    @media (max-width: 678px) {
      justify-content: space-between;
    }
    @media (min-width: 678px) {
      flex-direction: row-reverse;
    }
    li {
      @media (min-width: 678px) {
        margin-right: 2rem;
      }
      span {
        color: var(--primary-7);
      }
    }
  }
`
export default Navbar
