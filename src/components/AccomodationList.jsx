import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { __getAccomodationList } from '../redux/modules/accomodationSlice'
import Accomodation from './Accomodation'

const AccomodationList = () => {
    const dispatch = useDispatch()
    const {getAccomodationList} = useSelector((state)=>state.accomodation)

    useEffect(() => {
        // dispatch(__getAccomodationList())
    })

    return (
        <Ctn>
            {getAccomodationList.map((acc)=>(
                <Accomodation key={acc.accId} acc={acc}/>
            ))}
        </Ctn>
    )
}

const Ctn = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.4%;
    @media screen and (max-width: 1800px){
        gap: 1.5%;
    }
    @media screen and (max-width: 1600px){
        gap: 1.6%;
    }
    @media screen and (max-width: 1200px){
        gap: 1.7%;
    }
    @media screen and (max-width: 950px){
        gap: 2%;
    }
    @media screen and (max-width: 550px){
        gap: 0%;
    }
`

export default AccomodationList