import React from 'react'
import styled from 'styled-components'

const Layout = (props) => {
  return (
    <LayoutCtn>
      {props.children}
    </LayoutCtn>
  )
}

const LayoutCtn = styled.div`
  max-width: 2100px;
  width: 100%;
  margin: 0 auto;
  padding: 14px 50px 0 50px;
  box-sizing: border-box;
  @media screen and (max-width: 800px){
    padding: 14px 24px 0 24px;
  }
`
export default Layout