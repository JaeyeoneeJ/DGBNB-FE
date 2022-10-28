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
    padding: 0 20px;
`
export default Layout