import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Ctn>
      <Wrap>
        
      </Wrap>
    </Ctn>
  )
}

const Ctn = styled.div`
  margin: 10px auto 0 auto;
  height: 2000px;
  background-color: red;
  @media screen and (max-width: 1200px){
    
  }
  @media screen and (max-width: 800px){
    margin-top: 150px;
  }
`
const Wrap = styled.div`
  
`

export default Home