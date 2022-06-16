import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { sidebarLink } from '../../utils.js/data'

const sidebar = () => {
  return (
    <Wrapper>
      <div className='logo'>Logo</div>
      <div className='sidebar-container'>
        {sidebarLink.map((item) => {
          const { id, icon, name, path } = item
          return (
            <NavLink className='sidebar-nav' key={id} to={path}>
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
  width: 150px;
  top: 0;
  height: 100vh;

  .logo {
    height: 100px;
    background-color: var(--primary-2);
  }
  .sidebar-container {
    display: grid;

    a {
      padding: 1rem;
      transition: var(--transition);
      font-size: var(--large);

      svg {
        margin-right: 10px;
        font-size: 1.4rem;
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

export default sidebar
