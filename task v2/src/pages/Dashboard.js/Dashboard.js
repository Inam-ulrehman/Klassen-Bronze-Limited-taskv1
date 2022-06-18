import React from 'react'
import styled from 'styled-components'
import dashboard from '../../images/dashboard.svg'

const Dashboard = () => {
  return (
    <Wrapper>
      <div>
        <div className='img-container'>
          <img src={dashboard} alt='' />
        </div>
        <hr />
        <div>
          <h3 className='title'> Klassen Bronze ltd </h3>
          <div className='title-underline'></div>
          <h5 className='title'>about us</h5>
          <p className='title' style={{ margin: '2rem auto' }}>
            About Us Established in 1950, many years of exceptional service and
            experience have made Klassen Bronze a world leader in the
            manufacture, distribution, import and export of letters, numbers and
            signs. We're suppliers to national and international hardware
            chains, do-it-yourself stores, building centres and independent
            retailers. We serve an impressive list of countries, including the
            United States, England, Spain, Germany, Austria, Denmark, Finland,
            Portugal, and Australia -- just to name a few.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 200vh;

  .img-container {
    img {
      margin: 2rem auto;
      height: 200px;
      width: 100%;
      @media (min-width: 768px) {
        height: 400px;
      }
    }
  }
`

export default Dashboard
