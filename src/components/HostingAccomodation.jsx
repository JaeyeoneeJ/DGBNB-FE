import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { __postAccomodations } from "../redux/modules/accomodationSlice";
import NavBar from "./NavBar";
import Layout from "./Layout";
import styled from "styled-components";
import logo from "../components/airbnb_logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

// req.body ( formData에 담아서)
// {
//     accName: "숙소 이름",
//     accAddr: “숙소 주소”,
//     price: 80000,
//     facilities: [’드라이기’, ‘수영장’],
//     maxPerson: 10,
//     bed: 3,
//     room: 3,
//     toilet: 2,
//     category: 1,
//     accImg: [
//        "/images/acc1.png",
//        "/images/acc2.png",
//        "/images/acc3.png",
//        "/images/acc4.png"
//     ]
// }

const HostingAccomodation = ({ setOnShowSignup }) => {
  const accNameRef = useRef();
  const accAddrRef = useRef();
  const priceRef = useRef();
  const facilitiesRef = useRef();
  const maxPersonRef = useRef();
  const bedRef = useRef();
  const roomRef = useRef();
  const toiletRef = useRef();
  const accImgRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();

  const onClickHandler = () => {
    const selectedEl = document.querySelectorAll(
      "input[name='facilities']:checked"
    );
    const selectedElArray = Array.prototype.slice.call(selectedEl);
    const facilityItems = selectedElArray.map((item) => item.id);
    const postAccomodationItems = {
      accName: accNameRef.current.value,
      accAddr: accAddrRef.current.value,
      price: Number(priceRef.current.value),
      facilities: facilitiesRef.current,
      maxPerson: Number(maxPersonRef.current.value),
      bed: Number(bedRef.current.value),
      room: Number(roomRef.current.value),
      toilet: Number(toiletRef.current.value),
      facilities: facilityItems,
      accImg: accImgRef.current.value,
      description: descriptionRef.current.value,
    };
    dispatch(__postAccomodations(postAccomodationItems));
  };
  return (
    <>
      <Header>
        <HostingText>
          <LogoBox>
            <Logo src={logo} />
            숙소 호스팅
          </LogoBox>
        </HostingText>
        <SearchArea>이용 방법 및 기타 정보 검색</SearchArea>
        <Profile onClick={() => setOnShowSignup(true)}>
          <MenuItem>
            <GiHamburgerMenu size={16} />
          </MenuItem>
          <UserImg
            src="https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
            alt="userProfile"
          />
          <Alarm>1</Alarm>
        </Profile>
      </Header>
      <Layout>
        <div>
          <div>
            <label>숙소이름</label>
            <input type="text" name="accName" ref={accNameRef} required />
          </div>
          <div>
            <label>숙소 주소</label>
            <input type="text" name="accAddr" ref={accAddrRef} required />
          </div>
          <div>
            <label>가격 </label>
            <input type="text" name="price" ref={priceRef} required />
          </div>
          <div>
            <label>숙소 상세설명을 적어주세요 </label>
            <textarea type="text" name="price" ref={descriptionRef} required />
          </div>

          <fieldset>
            <legend>제공하는 편의시설을 골라주세요</legend>

            <div>
              <input type="checkbox" id="drier" name="facilities" />
              <label htmlFor="drier">헤어드라이어</label>
            </div>

            <div>
              <input type="checkbox" id="shampoo" name="facilities" />
              <label htmlFor="lotion">샴푸</label>
            </div>

            <div>
              <input type="checkbox" id="bath" name="facilities" />
              <label htmlFor="lotion">욕조</label>
            </div>

            <div>
              <input type="checkbox" id="warmWater" name="facilities" />
              <label htmlFor="lotion">온수</label>
            </div>
          </fieldset>

          <div>
            최대 인원 수 : <input type="text" ref={maxPersonRef} required />
          </div>

          <div>
            침대 갯수 : <input type="text" ref={bedRef} required />
          </div>

          <div>
            방 갯수 : <input type="text" ref={roomRef} required />
          </div>

          <div>
            화장실 갯수 : <input type="text" ref={toiletRef} required />
          </div>

          <div>
            사진을 최소 5장 선택해주세요
            <input
              type="file"
              accept="image/*"
              ref={accImgRef}
              multiple
              required
            />
          </div>
          <button onClick={onClickHandler}>제출!</button>
        </div>
      </Layout>
    </>
  );
};

const Header = styled.div`
  z-index: 2;
  max-width: 1425px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
  padding: 14px 50px 14px 50px;
  display: flex;
  align-items: center;
`;

const HostingText = styled.div``;

const SearchArea = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #ebebeb;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
`;

const Logo = styled.img`
  width: 20px;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

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
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`;

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
`;

const MenuItem = styled.div`
  display: flex;
  padding: 10px;
`;

const UserImg = styled.img`
  width: 30px;
  height: auto;
  border-radius: 50%;
`;

export default HostingAccomodation;
