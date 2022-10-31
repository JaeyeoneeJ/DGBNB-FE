import React from 'react'
import { ReactComponent as Logo } from '../assets/logo.svg'


const LogoItem = ({fill='#ff385c', size='30'}) => {
    return (
        <div>
            <Logo
                fill={fill}
                width={size}
                height={size}
            >
                
            </Logo>
        </div>
    )
}

export default LogoItem