import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { __getMessages } from '../redux/modules/messageSlice'

const Message = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(__getMessages())
    },[])

    return (
        <Ctn>
            <Text fontSize="30px" fontWeight="600">메세지 - 총 {'getLikedAccommodationList?.length'}개</Text>
        </Ctn>
    )
}
const FlexRow = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justifyContent};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};

  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  width: 100%;
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  border-left: ${(props) => props.borderLeft};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  max-height: ${(props) => props.maxHeight};
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
`;
const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
`;
const Ctn = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto 0 auto;
  padding: 0 24px;
`;

export default Message