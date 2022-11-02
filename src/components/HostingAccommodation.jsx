import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { __postAccommodations } from "../redux/modules/accommodationSlice";
import styled from "styled-components";
import { HiChevronRight } from "react-icons/hi";
import Button from "./elements/Button";
import { useNavigate } from "react-router-dom";

// req.body ( formData에 담아서)
// {
//     accName: "숙소 이름",
//     accAddr: “숙소 주소”,
//     price: 80000,
//     facilities: [’드라이기’, ‘수영장’],
//     maxPerson: 10,
//     bed: 3,
//     room: 3,
//     bathroom: 2,
//     category: 1,
//     accImg: [
//        "/images/acc1.png",
//        "/images/acc2.png",
//        "/images/acc3.png",
//        "/images/acc4.png"
//     ]
// }

const HostingAccommodation = ({ setOnShowSignup }) => {
  const navigate = useNavigate();

  const accNameRef = useRef();
  const accAddrRef = useRef();
  const priceRef = useRef();
  const facilitiesRef = useRef();
  const maxPersonRef = useRef();
  const bedRef = useRef();
  const roomRef = useRef();
  const bathroomRef = useRef();
  const accImgRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();

  const onClickHandler = () => {
    const selectedEl = document.querySelectorAll(
      "input[name='facilities']:checked"
    );
    const selectedElArray = Array.prototype.slice.call(selectedEl);
    const facilityItems = selectedElArray.map((item) => item.id);
    // formDataImg.append('accImg', accImgs)
    const postAccommodationItems = {
      accName: accNameRef.current.value,
      accAddr: accAddrRef.current.value,
      price: Number(priceRef.current.value),
      facilities: facilitiesRef.current,
      maxPerson: Number(maxPersonRef.current.value),
      bed: Number(bedRef.current.value),
      room: Number(roomRef.current.value),
      bathroom: Number(bathroomRef.current.value),
      facilities: facilityItems,
      accImg: accImgRef.current.files,
      description: descriptionRef.current.value,
    };
    
    dispatch(__postAccommodations(postAccommodationItems));
  };

  ///// 이미지프리뷰
  const [fileImage, setFileImage] = useState("");
  const fileRef = useRef();

  ///files 변환

  const saveFileImage = (e) => {
    const entriesFiles = Object.entries(e.target.files);
    const filesArray = entriesFiles.map((item) => {
      return item[1];
    });
    const filesArrayUrls = filesArray.map((item) => {
      return URL.createObjectURL(item);
    });
    setFileImage(filesArrayUrls);
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <>
      {/* 컨텐츠 영역 시작 */}
      <ContentCtn>
        <FlexCol gap="10px">
          <FlexRow gap="10px">
            <Text fontWeight="600">계정</Text>
            <HiChevronRight size={17} />
            <Text fontWeight="600">호스팅</Text>
          </FlexRow>
          <Text fontSize="32px" fontWeight="800">
            호스팅
          </Text>
        </FlexCol>

        <FlexCol gap="20px">
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              숙소 이름
            </Text>
            <InputArea
              type="text"
              name="accName"
              ref={accNameRef}
              placeholder="숙소 이름"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              숙소 주소
            </Text>
            <InputArea
              type="text"
              name="accAddr"
              ref={accAddrRef}
              placeholder="숙소 주소"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              숙소 가격
            </Text>
            <InputArea
              type="text"
              name="price"
              ref={priceRef}
              placeholder="숙소 가격"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              숙소 설명
            </Text>
            <InputTextArea
              type="text"
              name="description"
              ref={descriptionRef}
              placeholder="숙소에 대한 상세설명을 적어주세요."
              rows="3"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              제공하는 편의시설을 골라주세요
            </Text>
            <BorderBox>
              <FlexRow
                gap="10px"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                <CheckBoxItem>
                  <InputArea type="checkbox" id="drier" name="facilities" />
                  <TextLabel htmlFor="drier">헤어드라이어</TextLabel>
                </CheckBoxItem>
                <CheckBoxItem>
                  <InputArea type="checkbox" id="shampoo" name="facilities" />
                  <TextLabel htmlFor="shampoo">샴푸</TextLabel>
                </CheckBoxItem>
                <CheckBoxItem>
                  <InputArea type="checkbox" id="bath" name="facilities" />
                  <TextLabel htmlFor="bath">욕조</TextLabel>
                </CheckBoxItem>
                <CheckBoxItem>
                  <InputArea type="checkbox" id="warmWater" name="facilities" />
                  <TextLabel htmlFor="warmWater">온수</TextLabel>
                </CheckBoxItem>
              </FlexRow>
            </BorderBox>
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              최대 인원 수
            </Text>
            <InputArea
              type="text"
              name="maxPerson"
              ref={maxPersonRef}
              placeholder="00명"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              침대
            </Text>
            <InputArea
              type="text"
              name="bed"
              ref={bedRef}
              placeholder="00개"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              방
            </Text>
            <InputArea
              type="text"
              name="room"
              ref={roomRef}
              placeholder="00개"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              화장실
            </Text>
            <InputArea
              type="text"
              name="bathroom"
              ref={bathroomRef}
              placeholder="00개"
              required
            />
          </FlexCol>
          <Liner />
          <FlexCol gap="10px">
            <Text fontSize="16px" fontWeight="600">
              사진
            </Text>
            <Text fontSize="14px" color="#B0B0B0">
              사진을 최소 5장 선택해주세요.
            </Text>

            {fileImage &&
              fileImage.map((item) => {
                return (
                  <img
                    alt="sample"
                    src={item}
                    style={{ width: "200px", margin: "auto" }}
                  />
                );
              })}

            <button
              style={{
                backgroundColor: "gray",
                color: "white",
                width: "55px",
                height: "40px",
                cursor: "pointer",
              }}
              onClick={() => deleteFileImage()}
            ></button>
            <InputArea
              type="file"
              id="input-file"
              accept="image/*"
              ref={accImgRef}
              onChange={saveFileImage}
              // onChange={accImghandleChange}
              multiple
              required
            />
          </FlexCol>
          <Liner />
          <Button
            onClick={onClickHandler}
            background="linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)"
            // bgColor='#ff385c'
            color="white"
            border="none"
            fontSize="16px"
            width="100%"
            padding="14px"
          >
            호스팅하기
          </Button>
        </FlexCol>
      </ContentCtn>
    </>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize}; // 기본: 14px
  font-weight: ${(props) => props.fontWeight}; // 기본: 300
  color: ${(props) => props.color}; // 기본: #222222
  border: ${(props) => props.border}; // 기본: none
  border-radius: ${(props) => props.borderRadius}; // 기본: none
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize}; // 기본: 14px
  font-weight: ${(props) => props.fontWeight}; // 기본: 300
  color: ${(props) => props.color}; // 기본: #222222
  border: ${(props) => props.border}; // 기본: none
  border-radius: ${(props) => props.borderRadius}; // 기본: none
`;
const Text = styled.p`
  font-size: ${(props) => props.fontSize}; // 기본: 14px
  font-weight: ${(props) => props.fontWeight}; // 기본: 300
  color: ${(props) => props.color}; // 기본: #222222
`;

const HeaderCtn = styled.div`
  width: 100%;
  display: block;
  position: fixed;
  z-index: 2;
  background-color: white;
  border-bottom: 1px solid #ebebeb;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;
const Header = styled.div`
  max-width: 1400px;
  width: 100%;
  justify-content: space-between;

  margin: 0 auto;
  box-sizing: border-box;
  padding: 14px 50px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    padding: 14px 24px;
  }
`;
const Box = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;
const Logo1150Up = styled.div`
  display: flex;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
const Logo1150Down = styled.div`
  display: none;
  @media screen and (max-width: 1150px) {
    display: flex;
  }
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
const ContentCtn = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 120px 50px 30px 50px;
  @media screen and (max-width: 800px) {
    padding: 120px 24px 20px 24px;
  }
`;
const Liner = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
`;
const InputArea = styled.input`
  border: 1px solid #ebebeb;
  border-radius: 5px;
  font-size: 14px;
  padding: 8px 12px;
`;
const InputTextArea = styled.textarea`
  border: 1px solid #ebebeb;
  border-radius: 5px;
  font-size: 14px;
  padding: 8px 12px;
`;
const BorderBox = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 5px;
  padding: 20px;
`;
const CheckBoxItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 0;
`;
const TextLabel = styled.label``;

export default HostingAccommodation;
