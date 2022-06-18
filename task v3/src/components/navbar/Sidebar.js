import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { sidebarLink } from '../../utils.js/data'
import { MdAddBusiness } from 'react-icons/md'
import { toggleSideMenu } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'
const Sidebar = () => {
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleSideMenu())
  }
  return (
    <Wrapper>
      <div className='logo'>
        <MdAddBusiness />
        <div className='title-underline'></div>
        <p className='px1'>klassen</p>
        <p className='px2'>klassen bronze ltd</p>
      </div>
      <div className='sidebar-container'>
        {sidebarLink.map((item) => {
          const { id, icon, name, path } = item
          return (
            <NavLink
              onClick={handleToggle}
              className='sidebar-nav'
              key={id}
              to={path}
            >
              {icon}
              {name}
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: fixed;
  background-color: var(--primary-1);
  width: 200px;

  @media (min-width: 768px) {
    width: 300px;
  }
  top: 0;
  height: 100vh;
  .title-underline {
    margin-top: 0px;
  }
  .logo {
    text-align: center;
    svg {
      font-size: 5rem;
      color: var(--primary-6);
      margin: 0 auto;
    }
    .px1 {
      font-size: 2rem;
      margin: 0;
      color: var(--primary-8);
    }
    .px2 {
      margin: 0;
      color: var(--primary-8);
    }
    background-color: var(--grey-1);
  }
  .sidebar-container {
    display: grid;

    a {
      padding: 0.4rem;
      @media (min-width: 768px) {
        padding: 0.7rem;
      }
      transition: var(--transition);
      font-size: var(--large);

      svg {
        margin-right: 5px;
        font-size: 1rem;
        @media (min-width: 768px) {
          margin-right: 10px;
          font-size: 1.4rem;
        }
      }
      :hover {
        padding-left: 1.3rem;
        background-color: var(--primary-3);
        color: var(--white);
      }
    }
  }
  .active {
    background-color: var(--primary-4);
    color: var(--white);
  }
`

export default Sidebar
