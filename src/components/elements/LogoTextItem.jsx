import React from 'react'
import { ReactComponent as LogoText } from '../assets/logoText.svg'


const LogoTextItem = ({fill='#ff385c', size='30'}) => {
    return (
        <LogoText>
            fill={fill}
            width={size}
            height={size}
        </LogoText>
    )
}

export default LogoTextItem