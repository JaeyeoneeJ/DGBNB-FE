import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearIsSuccess, __deleteMessage, __getMessages } from '../redux/modules/messageSlice'
import { FiX } from "react-icons/fi";

const Message = () => {
    const dispatch = useDispatch()
    const {messages, isSuccess, isLoading} = useSelector(state=>state.messages)
    console.log(messages)
    console.log(isSuccess)

    const deleteMessage = (notificationId) => {
        return window.confirm('정말 메세지를 삭제하시겠습니까?') ? dispatch(__deleteMessage(notificationId)) : null
    }

    useEffect(()=> {
        dispatch(__getMessages())
    },[])

    useEffect(()=> {
        isSuccess && alert('메세지가 성공적으로 삭제되었습니다.')
        dispatch(clearIsSuccess())
    },[isLoading, isSuccess])

    return (
        <Ctn>
            <Text fontSize="30px" fontWeight="600">메세지 - 총 {messages?.length}개</Text>
            <FlexCol>
                <FlexCol>
                    {messages
                    .map((item) => {
                    return (
                        <>
                        <BorderBox
                            key={item?.notiId}
                        >
                            <FlexRow gap="10px" justifyContent="space-between">
                                <Text fontSize="16px">
                                    {item?.content}
                                </Text>
                                <ClickBtnArea>
                                    <ClickBtn
                                        bgColor="tomato"
                                        onClick={() => {
                                            deleteMessage(item?.notiId);
                                        }}
                                    >
                                    <FiX size={20} stroke="white" />
                                </ClickBtn>
                                </ClickBtnArea>
                            </FlexRow>
                            <FlexRow justifyContent="flex-end">
                                <Text color='gray'>
                                    {item?.createdAt}
                                </Text>
                            </FlexRow>
                        </BorderBox>
                        <Liner margin="20px 0" />
                        </>
                    );
                    })}
                </FlexCol>
            </FlexCol>
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
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const BorderBox = styled.div`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    background-color: #ebebeb;
    padding: 12px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;

`
const Liner = styled.div`
  width: ${(props) => props.width};
  height: ${(props)=> {
    if (props.height===undefined) {
      return "1px"
    } else {
      return props.height
    }
  }};
  margin: ${(props)=> {
    if (props.margin===undefined) {
      return "10px 0"
    } else {
      return props.margin
    }
  }};
  background-color: #ebebeb;
`
const ClickBtnArea = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  
  /* background-color: tomato; */
`
const ClickBtn = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0px;
  display: flex;
  background-color: ${props=>props.bgColor};
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

export default Message