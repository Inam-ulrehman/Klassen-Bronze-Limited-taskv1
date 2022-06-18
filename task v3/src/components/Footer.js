import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className='title'>
      CopyRight <FaRegCopyright /> {new Date().getFullYear()} Sania @ klassen
      bronze ltd publishers All rights reserved.
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--primary-1);
`

export default Footer
