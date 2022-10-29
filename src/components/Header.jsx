import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import FilterItem from './elements/FilterItem';
import LogoItem from './elements/LogoItem';
import LogoTextItem from './elements/LogoTextItem';
import EarthItem from './elements/EarthItem';
import { useNavigate } from 'react-router-dom';

const Header = ({onShowSignup, setOnShowSignup}) => {
  const navigate = useNavigate()
  return (
    <Ctn>
      <HeaderCtn>
        <Box>
          <Logo1150Up><LogoTextItem /></Logo1150Up>
          <Logo1150Down><LogoItem /></Logo1150Down>
        </Box>
        <SearchBar>
          <SearchBarLeft>
            <Icon border="none">
              <BiSearch size={20} />
            </Icon>
            <SearchBox>
              <SearchTitle>어디로 여행가세요?</SearchTitle>
              <SearchContent>
                어디든지 • 언제든 일주일 • 게스트 추가
              </SearchContent>
            </SearchBox>
          </SearchBarLeft>
          <Icon border="1px solid #ebebeb">
            <FilterItem />
          </Icon>
        </SearchBar>
        <BoxRight>
          <HoverBtn>
            호스트 되기
          </HoverBtn>
          <HoverBtn>
            <EarthItem />
          </HoverBtn>
          <Profile onClick={()=>setOnShowSignup(true)}>
            <MenuItem>
              <GiHamburgerMenu size={16} />
            </MenuItem>
            <UserImg src="https://a0.muscache.com/im/pictures/user/97a6a4be-a817-410e-a1d3-211781706179.jpg?aki_policy=profile_medium" alt="userProfile" />
            <Alarm>1</Alarm>
          </Profile>
        </BoxRight>
      </HeaderCtn>
    </Ctn>
  )
}

const Ctn = styled.div`
  position: fixed;
  z-index: 2;
  background-color: white;
  top: 0;
  max-width: 2100px;
  width: 100%;
  padding: 14px 50px 14px 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
  @media screen and (max-width: 800px){
    padding: 14px 24px 0 24px;
    border-bottom: none;
  }
`
const HeaderCtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`
const Box = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 216px;
  @media screen and (max-width: 1000px){
    min-width: 40px;
  }
  @media screen and (max-width: 800px){
    display: none;
  }
`
const Logo1150Up = styled.div`
  display:flex;
  @media screen and (max-width: 1150px){
    display: none;
  }
`
const Logo1150Down = styled.div`
  display: none;
  @media screen and (max-width: 1150px){
    display: flex;
  }
`
const BoxRight = styled.div`
  display: flex;
  gap: 10px;
  min-width: 216px;
  align-items: center;
  @media screen and (max-width: 800px){
    display: none;
  }
`
const SearchBar = styled.div`
  width: 100%;
  max-width: 800px;
  height: 56px;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ebebeb;
  border-radius: 50px;
  transition: all, 0.3s;
  box-shadow: 0 1px 2px rgb(0 0 0 / 8%);
  &:hover {
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  }
`
const SearchBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const Icon = styled.div`
  display: flex;
  border: ${(props) => props.border};
  padding: 10px;
  align-items: center;
  border-radius: 50%;
`
const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`
const SearchTitle = styled.h4``
const SearchContent = styled.p`
  font-size: 12px;
  color: #717171;
`
const HoverBtn = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  border-radius: 50px;
  &:hover {
    background-color: #ebebeb;
  }
`
const Profile = styled.div`
    position: relative;
    padding: 5px;
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
    margin: 0;
    text-align: inherit;
    border: 1px solid #ebebeb;
    border-radius: 50px;
    height: 42px;
    transition: box-shadow 0.2s ease;
    &:hover {
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    }
`
const UserImg = styled.img`
  width: 30px;
  height: auto;
  border-radius: 50%;
`
const MenuItem = styled.div`
  display: flex;
  padding: 10px;
`
const Alarm = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  color: white;
  background-color: #ff385c;
  width: 17px;
  height: 17px;
`
export default Header