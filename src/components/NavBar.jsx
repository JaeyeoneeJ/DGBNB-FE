import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Ctn>
      <ItemBox>
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="24" height="24" />
        <ItemText>최고의 전망</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24" />
        <ItemText>국립공원</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="24" height="24" />
        <ItemText>한적한 시골</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" alt="" width="24" height="24" />
        <ItemText>창작 공간</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" width="24" height="24" />
        <ItemText>북극</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg" alt="" width="24" height="24" />
        <ItemText>셰어하우스</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" width="24" height="24" />
        <ItemText>해변 바로 앞</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg" alt="" width="24" height="24" />
        <ItemText>료칸</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" width="24" height="24" />
        <ItemText>기상천외한 숙소</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" width="24" height="24" />
        <ItemText>멋진 수영장</ItemText>
      </ItemBox>
      <ItemBox>
        <HoverWhite />
        <img class="i1wps9q8 dir dir-ltr" src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg" alt="" width="24" height="24" />
        <ItemText>캠핑카</ItemText>
      </ItemBox>
    </Ctn>
  )
}

const Ctn = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(auto);
    grid-gap: 10px;
    max-width: 2100px;
    width: 100%;
    margin-top: 30px;
    /* border: 1px solid red; */
    box-sizing: border-box;
`
const ItemBox = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border: none;
  background-color: white;
  height: 53px;
  &:hover p {
    border-bottom: 2px solid gray;
  }
  &:hover div {
    background-color: rgba(255,255,255,0.0);
  }
`
const ItemText = styled.p`
  font-size: 12px;
  padding-bottom: 7px;
  width: auto;
  border-bottom: 2px solid white;
  transition: all, 0.2s;
`
const HoverWhite = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 53px;
  background-color: rgba(255,255,255,0.5);
  transition: all, 0.3s;
`
export default NavBar