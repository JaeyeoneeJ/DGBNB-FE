import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { __postAccommodations } from "../redux/modules/accommodationSlice";
import styled from "styled-components";
import { HiChevronRight } from "react-icons/hi";
import Button from "./elements/Button";
import { useNavigate } from "react-router-dom";
import { TbGridDots } from "react-icons/tb";
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

    console.log(postAccommodationItems)
    (window.confirm(
      `입력하신 정보는 다음과 같습니다.\n
      숙소 이름: "${postAccommodationItems.accName}",\n
      숙소 주소: ,\n
      숙소 가격: ,\n
      숙소 설명: ,\n
      제공하는 편의시설: ,\n
      최대 인원 수: ,\n
      침대: ,\n
      방: ,\n
      화장실: ,\n
      사진: ,\n

      위 사항이 맞으시다면 확인 버튼을 눌러주세요.

    `)) ? dispatch(__postAccommodations(postAccommodationItems)) : alert('신중하게 입력해주세요.')
  };

  ///// 이미지프리뷰
  const [fileImage, setFileImage] = useState("");

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
    setFileImage(fileImage.map(img=>
      "https://user-images.githubusercontent.com/77138259/199446108-5d3ed884-5071-4440-bc29-c52c6c604738.png"
      ))
  };

  useEffect(()=> {

  })

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
            <FlexRow justifyContent="space-between">
              <Text fontSize="14px" color="#B0B0B0">
                사진을 최소 5장 선택해주세요.
              </Text>
              <Button
                onClick={() => deleteFileImage()}
                
                color="tomato"
                fontSize="14px"
                fontWeight="600"
                width="auto"
                border="1px solid tomato"
              >
                Reset to Pictures
              </Button>
            </FlexRow>

            <AccPictureBox>
              <MainPic>
                <ImgTagBox>
                  <ImgTag 
                    src={fileImage ? fileImage[0] : "https://user-images.githubusercontent.com/77138259/199446108-5d3ed884-5071-4440-bc29-c52c6c604738.png"}
                  />
                </ImgTagBox>
              </MainPic>
              <OtherPic>
                <OtherPicBox>
                  <ImgTagBox>
                  <ImgTag 
                    src={fileImage ? fileImage[1] : "https://user-images.githubusercontent.com/77138259/199446108-5d3ed884-5071-4440-bc29-c52c6c604738.png"}
                  />
                  </ImgTagBox>
                  <ImgTagBox>
                  <ImgTag 
                    src={fileImage ? fileImage[2] : "https://user-images.githubusercontent.com/77138259/199446108-5d3ed884-5071-4440-bc29-c52c6c604738.png"}
                  />
                  </ImgTagBox>
                </OtherPicBox>
                <OtherPicBox>
                  <ImgTagBox>
                  <ImgTag 
                    src={fileImage ? fileImage[3] : "https://user-images.githubusercontent.com/77138259/199446108-5d3ed884-5071-4440-bc29-c52c6c604738.png"}
                  />
                  </ImgTagBox>
                  <ImgTagBox>
                  <ImgTag 
                    src={fileImage ? fileImage[4] : "https://user-images.githubusercontent.com/77138259/199446108-5d3ed884-5071-4440-bc29-c52c6c604738.png"}
                  />
                  </ImgTagBox>
                </OtherPicBox>
              </OtherPic>
            </AccPictureBox>
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
/////
const AccPictureBox = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const MainPic = styled.div`
  width: 50%;
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const OtherPic = styled.div`
  display: flex;
  gap: 5px;
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const OtherPicBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const ImgTagBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
`;
const ImgTag = styled.img`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border: 1px solid #ebebeb;
  transition: all, 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

/////
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
  white-space: pre-wrap;
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
