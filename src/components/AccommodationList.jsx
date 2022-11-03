import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { __getAccommodationList } from '../redux/modules/accommodationSlice'
import Accommodation from './Accommodation'

const AccommodationList = () => {
    const dispatch = useDispatch()
    const {getAccommodationList} = useSelector((state)=>state.accommodation)
    console.log(getAccommodationList)

    useEffect(() => {
        dispatch(__getAccommodationList())
    },[dispatch])

    return (
        <Ctn>
            {getAccommodationList.slice(0).reverse().map((acc)=>(
                <Accommodation key={acc.accId} acc={acc}/>
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

export default AccommodationList