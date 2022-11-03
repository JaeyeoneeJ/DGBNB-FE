import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import FilterItem from "./elements/FilterItem";
import LogoItem from "./elements/LogoItem";
import LogoTextItem from "./elements/LogoTextItem";
import EarthItem from "./elements/EarthItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getLoginInfo } from "../redux/modules/loginSlice";

const Header = ({
	onShowSignup,
	setOnShowSignup,
	onShowLogin,
	setOnShowLogin,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const [isShowHamburgerMenu, setIsShowHamburgerMenu] = useState(false);
	const {loginInfo} = useSelector(state=>state.login)
	const isLogin = localStorage.getItem("token");
	
	const modalRef = useRef(null);

	useEffect(() => {
		// 이벤트 핸들러 함수
		const handler = (event) => {
			// mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				setIsShowHamburgerMenu(false);
			}
		};

		// 이벤트 핸들러 등록
		document.addEventListener("mousedown", handler);
		// document.addEventListener('touchstart', handler); // 모바일 대응

		return () => {
			// 이벤트 핸들러 해제
			document.removeEventListener("mousedown", handler);
			// document.removeEventListener('touchstart', handler); // 모바일 대응
		};
	});

	useEffect(() => {
		isLogin && dispatch(__getLoginInfo())
	}, [dispatch])

	return (
		<Ctn>
			<HeaderCtn>
				<Box>
					<Logo1150Up onClick={() => navigate("/")}>
						<LogoTextItem />
					</Logo1150Up>
					<Logo1150Down onClick={() => navigate("/")}>
						<LogoItem />
					</Logo1150Down>
				</Box>
				<SearchBar
					onClick={() => alert('"필터" 기능은 구현되지 않은 기능입니다.')}
				>
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

				{/* 로그인이 되었을 경우 */}
				{isLogin ? (
					<BoxRight>
						<HoverBtn
							onClick={() => {
								navigate("/account-setting/hosting/");
							}}
						>
							호스트 되기
						</HoverBtn>
						<HoverBtn
							onClick={() =>
								alert('"언어 선택" 기능은 구현되지 않은 기능입니다.')
							}
						>
							<EarthItem />
						</HoverBtn>
						{/* <Profile onClick={() => setOnShowSignup(true)}> */}
						<Profile
							ref={modalRef}
							onClick={() => setIsShowHamburgerMenu(!isShowHamburgerMenu)}
						>
							{isShowHamburgerMenu && (
								<HamburgerMenu>
									<MenuBox>
										<strong>메세지</strong>
									</MenuBox>
									<MenuBox>
										<strong>위시리스트</strong>
									</MenuBox>

									<MenuLine />
									<MenuBox>숙소 호스트 되기</MenuBox>
									<MenuBox onClick={() => navigate("/account-setting")}>
										계정
									</MenuBox>
									<MenuLine />
									<MenuBox>도움말</MenuBox>
									<MenuBox
										onClick={() => {
											setIsShowHamburgerMenu(false);
											if (window.confirm("로그아웃 하시겠습니까?")) {
												localStorage.clear();
												window.location.reload("/");
											}
										}}
									>
										로그아웃
									</MenuBox>
								</HamburgerMenu>
							)}
							<MenuItem>
								<GiHamburgerMenu size={16} />
							</MenuItem>
							<UserImg
								src={loginInfo?.loginInfo.memberImg}
								alt="userProfile"
							/>
							<Alarm>{loginInfo.notiCount}</Alarm>
						</Profile>
					</BoxRight>
				) : (
					<BoxRight>
						<HoverBtn
							onClick={() =>
								alert('"언어 선택" 기능은 구현되지 않은 기능입니다.')
							}
						>
							<EarthItem />
						</HoverBtn>
						{/* <Profile onClick={() => setOnShowSignup(true)}> */}
						<Profile
							ref={modalRef}
							onClick={() => setIsShowHamburgerMenu(!isShowHamburgerMenu)}
						>
							{isShowHamburgerMenu && (
								<HamburgerMenu>
									<MenuBox
										onClick={() => {
											setIsShowHamburgerMenu(false);
											setOnShowLogin(true);
										}}
									>
										<strong>로그인</strong>
									</MenuBox>
									<MenuBox
										onClick={() => {
											setIsShowHamburgerMenu(false);
											setOnShowSignup(true);
										}}
									>
										회원가입
									</MenuBox>
									<MenuLine />
									<MenuBox
										onClick={() => {
											window.confirm(
												"로그인이 필요한 기능입니다. 로그인 하시겠습니까?"
											) && setOnShowLogin(true);
											setIsShowHamburgerMenu(false);
										}}
									>
										숙소 호스트 되기
									</MenuBox>
									<MenuBox
										onClick={() => {
											window.confirm(
												"로그인이 필요한 기능입니다. 로그인 하시겠습니까?"
											) && setOnShowLogin(true);
											setIsShowHamburgerMenu(false);
										}}
									>
										체험 호스팅 하기
									</MenuBox>
									<MenuBox>도움말</MenuBox>
								</HamburgerMenu>
							)}
							<MenuItem>
								<GiHamburgerMenu size={16} />
							</MenuItem>
							<UserImg
								src="https://a0.muscache.com/defaults/user_pic-50x50.png?v=3"
								alt="userProfile"
							/>
						</Profile>
					</BoxRight>
				)}
			</HeaderCtn>
		</Ctn>
	);
};

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
  @media screen and (max-width: 800px) {
    padding: 14px 24px 0 24px;
    border-bottom: none;
  }
`;
const HeaderCtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const Box = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  min-width: 216px;
  @media screen and (max-width: 1000px) {
    min-width: 40px;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Logo1150Up = styled.div`
  display: flex;
  cursor: pointer;
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
const Logo1150Down = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1150px) {
    display: flex;
  }
`;
const BoxRight = styled.div`
  display: flex;
  gap: 10px;
  min-width: 216px;
  align-items: center;
  justify-content: right;
  /* @media screen and (max-width: 800px) {
    display: none;
  } */
  @media screen and (max-width: 800px) {
    min-width: auto;
  }

`;
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
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`;
const SearchBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Icon = styled.div`
  display: flex;
  border: ${(props) => props.border};
  padding: 10px;
  align-items: center;
  border-radius: 50%;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const SearchTitle = styled.h4``;
const SearchContent = styled.p`
  font-size: 12px;
  color: #717171;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const HoverBtn = styled.button`
  padding: 10px;
  border: none;
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
  @media screen and (max-width: 800px) {
    display: none;
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
const UserImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
`;
const MenuItem = styled.div`
  display: flex;
  padding: 10px;
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
const HamburgerMenu = styled.div`
  position: absolute;
  top: 50px;
  padding: 8px 0;
  right: 0;
  border: none;
  border-radius: 8px;
  background-color: white;
  width: 200px;
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.1);
`;
const MenuLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
  margin: 8px 0;
`;
const MenuBox = styled.div`
  padding: 12px;
  &:hover {
    background-color: #ebebeb;
  }
`;

export default Header;
