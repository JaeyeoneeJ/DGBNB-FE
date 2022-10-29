import React from 'react'
import { ReactComponent as Filter } from '../assets/filter.svg'


const FilterItem = ({fill='white', size='30'}) => {
    return (
        <Filter>
            fill={fill}
            width={size}
            height={size}
        </Filter>
    )
}

export default FilterItem