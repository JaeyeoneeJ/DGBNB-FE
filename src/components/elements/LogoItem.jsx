import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'


const LogoItem = ({fill='#ff385c', size='30'}) => {
    return (
        <Logo>
            fill={fill}
            width={size}
            height={size}
        </Logo>
    )
}

export default LogoItem