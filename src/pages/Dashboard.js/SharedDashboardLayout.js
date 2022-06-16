import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Sidebar } from '../../components/navbar'

const SharedDashboardLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <div className='container-dashboard-outlet'>
        <Sidebar />
        <div className='outlet'>
          <Outlet />
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .outlet {
    margin-left: 170px;
  }
`
export default SharedDashboardLayout
