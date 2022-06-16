import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Sidebar } from '../../components/navbar'

const SharedDashboardLayout = () => {
  const { isMenuOpen } = useSelector((state) => {
    return state.user
  })
  return (
    <Wrapper>
      <Navbar />
      <div className='container-dashboard-outlet'>
        {isMenuOpen && <Sidebar />}
        <div className='outlet'>
          <Outlet />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section``
export default SharedDashboardLayout
