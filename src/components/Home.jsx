import React from 'react'
import styled from 'styled-components'
import AccomodationList from './AccomodationList'

const Home = () => {
  return (
    <Ctn>
      <Wrap>
        <AccomodationList />
      </Wrap>
    </Ctn>
  )
}

const Ctn = styled.div`
  margin: 10px auto 0 auto;
  /* border: 1px solid red; */
  @media screen and (max-width: 1200px){
    
  }
  @media screen and (max-width: 800px){
    margin-top: 150px;
  }
`
const Wrap = styled.div`
  
`

export default Home