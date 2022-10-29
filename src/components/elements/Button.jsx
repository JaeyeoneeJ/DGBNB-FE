import React from "react"
import styled from "styled-components"

const Button = ({
    width="100px",
    border="1px solid black",
    bgColor="white",
    color="black",
    onClick,
    fontWeight="400",
    fontSize="12px",
    padding="4px 10px",
    borderRadius="10px",
    type='button',
    maxWidth='auto',
    background='inherit',
    children
}) => {
    // window.document.getElementsByClassName('box').on('mousemove',function(e){
  
    //     window.document.getElementsByClassName('box').styled.backgroundPosition(-e.pageX+"px "+ -e.pageY+"px")
    //     ;
    //   });
    return (
        <ButtonCtn
            // className="box"
            type={type}
            width={width}
            border={border}
            bgColor={bgColor}
            fontWeight = {fontWeight}
            color = {color}
            onClick = {onClick}
            fontSize = {fontSize}
            padding = {padding}
            borderRadius={borderRadius}
            maxWidth={maxWidth}
            background={background}
        >
           {children}
        </ButtonCtn>
    )
}

const ButtonCtn = styled.button`
    /* background-position: 0 0; */
    background: ${(props)=>props.background};
    max-width: ${(props)=>props.maxWidth};
    width: ${(props)=>props.width};
    color: ${(props)=>props.color};
    padding: ${(props)=>props.padding};
    border: ${(props)=>props.border};
    border-radius: ${(props)=>props.borderRadius};
    background-color: ${(props)=>props.bgColor};
    font-size: ${(props)=>props.fontSize};;
    font-weight: ${(props)=>props.fontWeight};
    &:hover {
        cursor: pointer;
    }
`
export default Button