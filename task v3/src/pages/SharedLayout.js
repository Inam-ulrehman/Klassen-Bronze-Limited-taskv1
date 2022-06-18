import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'

const SharedLayout = () => {
  return (
    <Wrapper>
      <Outlet />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  margin-bottom: 4rem;
`
export default SharedLayout
