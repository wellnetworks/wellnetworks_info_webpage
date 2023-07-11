import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import "./css/App.css";
import styled, { css } from "styled-components";
import {
  Desktop,
  Laptop,
  LaptopBefore,
  LaptopAfter,
  Tablet,
  MobileGlobal,
  Mobile1,
  Mobile2,
  Mobile3,
  Default,
} from "./MediaQueryComponents";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import { Map, MapMarker } from "react-kakao-maps-sdk";

/// 이미지 import ///
import logoM from "./img/m/icon-logo-m.svg";
import closeM from "./img/m/icon-close-m.svg";
import logoWhiteM from "./img/m/icon-logoWhite-m.svg";
import ham from "./img/m/icon-ham-m.svg";
import mainM from "./img/m/icon-main-m.png";
import mainM1 from "./img/m/icon-main-m1.jpg";
import mainM2 from "./img/m/icon-main-m2.jpg";
import mainT from "./img/m/icon-main-t.jpg";
import mainL from "./img/m/icon-main-l.jpg";
import mainPC from "./img/m/icon-main-pc.jpg";

import wellM from "./img/m/image-wellpps-m.png";
import wellppsM1 from "./img/m/image-wellpps-m1.png";
import wellppsM2 from "./img/m/image-wellpps-m2.png";
import wellppsT from "./img/m/image-wellpps-t.png";
import wellppsL from "./img/common/image-wellpps-l.png";
import wellppsPC from "./img/pc/image-wellpps-pc.png";

import phoneissueM from "./img/m/image-phoneissue-m.png";
import phoneissueM1 from "./img/m/image-phoneissue-m1.png";
import phoneissueM2 from "./img/m/image-phoneissue-m2.png";
import phoneissueT from "./img/m/image-phoneissue-t.png";
import phoneissueL1 from "./img/common/image-phoneissue-l1.png";
import phoneissueL2 from "./img/common/image-phoneissue-l2.png";
import phoneissuePC1 from "./img/pc/image-phoneissue-pc1.png";
import phoneissuePC2 from "./img/pc/image-phoneissue-pc2.png";

import ppspayM from "./img/m/image-ppspay-m.png";
import ppspayM1 from "./img/m/image-ppspay-m1.png";
import ppspayM2 from "./img/m/image-ppspay-m2.png";
import ppspayT from "./img/m/image-ppspay-t.png";
import ppspayL1 from "./img/common/image-ppspay-l1.png";
import ppspayL2 from "./img/common/image-ppspay-l2.png";
import ppspayPC1 from "./img/pc/image-ppspay-pc1.png";
import ppspayPC2 from "./img/pc/image-ppspay-pc2.png";

import wellnanumM from "./img/m/image-wellnanum-m.png";
import wellnanumM1 from "./img/m/image-wellnanum-m1.png";
import wellnanumM2 from "./img/m/image-wellnanum-m2.png";
import wellnanumT from "./img/m/image-wellnanum-t.png";
import wellnanumL from "./img/common/image-wellnanum-l.png";
import wellnanumPC from "./img/pc/image-wellnanum-pc.png";

import labM from "./img/m/image-lab-m.png";
import labM1 from "./img/m/image-lab-m1.png";
import labM2 from "./img/m/image-lab-m2.png";
import labT from "./img/m/image-lab-t.png";
import labL from "./img/common/image-lab-l.png";
import labPC from "./img/pc/image-lab-pc.png";

import emoji1 from "./img/common/icon-emoji-1.png";
import emoji2 from "./img/common/icon-emoji-2.png";
import emoji3 from "./img/common/icon-emoji-3.png";
import emoji4 from "./img/common/icon-emoji-4.png";
import emoji5 from "./img/common/icon-emoji-5.png";
import emoji6 from "./img/common/icon-emoji-6.png";
import emoji7 from "./img/common/icon-emoji-7.png";
import emoji8 from "./img/common/icon-emoji-8.png";
import emoji9 from "./img/common/icon-emoji-9.png";
import emoji10 from "./img/common/icon-emoji-10.png";
import emoji11 from "./img/common/icon-emoji-11.png";

import workMethod1 from "./img/common/icon-workMethod-1.svg";
import workMethod2 from "./img/common/icon-workMethod-2.png";
import workMethod3 from "./img/common/icon-workMethod-3.svg";
import workMethod4 from "./img/common/icon-workMethod-4.svg";
import workMethod5 from "./img/common/icon-workMethod-5.svg";
import workMethod6 from "./img/common/icon-workMethod-6.svg";
import workMethod7 from "./img/common/icon-workMethod-7.svg";
import workMethod8 from "./img/common/icon-workMethod-8.svg";
import workMethod9 from "./img/common/icon-workMethod-9.png";

import history1 from "./img/m/icon-history1-m.svg";
import history2 from "./img/m/icon-history2-m.svg";
import history3 from "./img/m/icon-history3-m.svg";
import history4 from "./img/m/icon-history4-m.svg";
import history5 from "./img/m/icon-history5-m.svg";

import footerLogo from "./img/common/icon-footer-logo.svg";
import footerArrow from "./img/m/icon-footer_arrow-m.svg";

// Desktop = minWidth: 1400
// Laptop = minWidth: 1024, maxWidth: 1399
// Tablet = minWidth: 768, maxWidth: 1023
// Mobile3 = minWidth: 641,  maxWidth: 767
// Mobile2 minWidth: 452,  maxWidth: 640
// Mobile1 minWidth: 360,  maxWidth: 451
// MobileGlobal minWidth: 360,  maxWidth: 1399

/* 모바일 좌우 스크롤 금지하는 overflow가 있어서 sticky가 동작하지않습니다
    그래서 useEffect 함수를 사용하여 해결합니다. 2023.07.04 윤지석 */

function App() {
  //// 스크롤 시 탭메뉴 고정 ////
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const clientHeight = document.getElementById("header").clientHeight;
      console.log(clientHeight);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // const threshold = 690; // 고정시킬 위치의 임계값 (원하는 값으로 조정)

      setIsSticky(scrollTop >= clientHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 햄버거 메뉴 오픈 > 스크롤 방지
  const disableScroll = () => {
    document.body.style.position = "fixed";
  };

  const enableScroll = () => {
    document.body.style.position = "";
  };

  // 스크롤 시 메뉴 컬러 Active
  const [activeSection, setActiveSection] = useState(1);

  const handleSetActive = (to) => {
    const currentSection = Number(to.split("section")[1]);
    setActiveSection(currentSection);
  };

  // 이미지 슬라이더 - Service //
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay:true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          right: "20px",
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
  };

  // 이미지 슬라이더2 - 우리가 일하는 방식 //
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay:true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "26px",
          right: "20px",
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
  };

  // 스크롤 링크 (맨위로)
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setShowButton(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 스크롤 이벤트 감지
  window.addEventListener("scroll", handleScroll);

  // 전화 링크 (모바일용)
  const phoneNumber = "02-1566-0261";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // 카카오톡 - 준비중
  const openPopup = () => {
    alert("상담 채널 준비중입니다 🙏");
  };

  // 모바일 일때 설명문구 전환 State
  const [textPop, setTextPop] = useState(false);
  const handleTextPopOpen = () => {
    setTextPop(true);
  };
  const handleTextPopClose = () => {
    setTextPop(false);
  };

  const [textPop2, setTextPop2] = useState(false);
  const handleTextPopOpen2 = () => {
    setTextPop2(true);
  };
  const handleTextPopClose2 = () => {
    setTextPop2(false);
  };

  const [textPop3, setTextPop3] = useState(false);
  const handleTextPopOpen3 = () => {
    setTextPop3(true);
  };
  const handleTextPopClose3 = () => {
    setTextPop3(false);
  };

  const [textPop4, setTextPop4] = useState(false);
  const handleTextPopOpen4 = () => {
    setTextPop4(true);
  };
  const handleTextPopClose4 = () => {
    setTextPop4(false);
  };

  const [textPop5, setTextPop5] = useState(false);
  const handleTextPopOpen5 = () => {
    setTextPop5(true);
  };
  const handleTextPopClose5 = () => {
    setTextPop5(false);
  };

  // CONCTACT tab ui
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // // Contact labtop & desktop Step UI
  const [expand, setExpand] = useState(0);

  const handleExpandClick = (index) => {
    setExpand(index);
  };  

  console.log(expand);


  // 전화번호 하이픈 추가 기능 +(문자 /전화번호10자리 이상 X )
  const [phoneNumbering, setPhoneNumbering] = useState('');

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
    let formattedInput = '';

    if (sanitizedInput.length <= 3) {
      formattedInput = sanitizedInput;
    } else if (sanitizedInput.length <= 7) {
      formattedInput = `${sanitizedInput.slice(0, 3)}-${sanitizedInput.slice(3)}`;
    } else {
      formattedInput = `${sanitizedInput.slice(0, 3)}-${sanitizedInput.slice(3, 7)}-${sanitizedInput.slice(7, 11)}`;
    }

    setPhoneNumbering(formattedInput);
  };

  console.log(phoneNumbering);

  const ButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 24px;
    & button {
      height: 56px;
      margin-bottom: 12px;
      border-radius: 16px;
      border: none;
      text-align: center;
      font-family: NotoSansKR-Bold;
      font-size: 20px;
    }
    & .askBtn {
      color: #fff;
      background: #0077ed;
    }
    & .kakaoBtn {
      color: #293f52;
      background: #ffe034;
    }
  `;

  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {showButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <span className="arrow-up"></span>
        </button>
      )}
      <header id="header">
        {/* GNB 메뉴 시작 ------------------------------------------------*/}

        <MobileGlobal>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ x: 1500 }}
                animate={{ x: 0 }}
                exit={{ x: 1500 }}
                //transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100vw",
                  height: "100vh",
                  overflowY: "scroll",
                  background: "#fff",
                  zIndex: "999",
                  opacity: "0.98",
                }}
              >
                <nav id="moblie_global" className="side_menu">
                  <span>
                    <img className="logo" src={logoM} alt="로고" />
                  </span>
                  <div
                    onClick={() => {
                      setIsVisible(false);
                      enableScroll();
                    }}
                  >
                    <img className="ham" src={closeM} alt="닫기버튼" />
                  </div>
                </nav>
                <ul className="menu_wrap">
                  <Link
                    to="section1"
                    offset={-250}
                    smooth={true}
                    duration={300}
                    onClick={() => {
                      setIsVisible(false);
                      enableScroll();
                    }}
                    spy={true}
                    onSetActive={handleSetActive}
                  >
                    <li>Signatures</li>
                  </Link>
                  <Link
                    to="section2"
                    offset={-150}
                    smooth={true}
                    duration={300}
                    onClick={() => {
                      setIsVisible(false);
                      enableScroll();
                    }}
                    spy={true}
                    onSetActive={handleSetActive}
                  >
                    <li>How to work?</li>
                  </Link>
                  <Link
                    to="section3"
                    offset={-150}
                    smooth={true}
                    duration={300}
                    onClick={() => {
                      setIsVisible(false);
                      enableScroll();
                    }}
                    spy={true}
                    onSetActive={handleSetActive}
                  >
                    <li>Crew</li>
                  </Link>
                  <Link
                    to="section4"
                    offset={-150}
                    smooth={true}
                    duration={300}
                    onClick={() => {
                      setIsVisible(false);
                      enableScroll();
                    }}
                    spy={true}
                    onSetActive={handleSetActive}
                  >
                    <li>Journey</li>
                  </Link>
                  <Link
                    to="section5"
                    offset={-150}
                    smooth={true}
                    duration={300}
                    onClick={() => {
                      setIsVisible(false);
                      enableScroll();
                    }}
                    spy={true}
                    onSetActive={handleSetActive}
                  >
                    <li>Contact</li>
                  </Link>
                </ul>
                <ButtonWrap>
                  <button
                    className="call-button askBtn"
                    href={`tel:${phoneNumber}`}
                    onClick={handleCall}
                  >
                    1566-0261
                  </button>
                  <button className="kakaoBtn" onClick={openPopup}>
                    카카오톡 상담하기
                  </button>
                </ButtonWrap>
              </motion.div>
            )}
          </AnimatePresence>
          <nav id="moblie_global">
            <a>
              <img className="logo" src={logoWhiteM} alt="로고" />
            </a>
            <div
              onClick={() => {
                setIsVisible(true);
                disableScroll();
              }}
            >
              <img className="ham" src={ham} alt="햄버거버튼" />
            </div>
          </nav>
        </MobileGlobal>
        <Desktop>
          <div id="nav_box">
            <nav id="desktop">
              <span>
                <img className="logo" src={logoWhiteM} alt="로고" />
              </span>
              <Link
                to="section1"
                offset={-250}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span>Signatures</span>
              </Link>
              <Link
                to="section2"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span>How to work?</span>
              </Link>
              <Link
                to="section3"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span>Crew</span>
              </Link>
              <Link
                to="section4"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span>Journey</span>
              </Link>
              <Link
                to="section5"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span>Contact</span>
              </Link>
            </nav>
          </div>
        </Desktop>

        {/* GNB 메뉴 끝 ------------------------------------------------*/}
        <main className="main">
          <Mobile1>
            <img src={mainM} alt="메인 비주얼 (가장작은)" />
          </Mobile1>
          <Mobile2>
            <img src={mainM1} alt="메인 비주얼 (5번째 큰)" />
          </Mobile2>
          <Mobile3>
            <img src={mainM2} alt="메인 비주얼 (4번째 큰)" />
          </Mobile3>
          <Tablet>
            <img src={mainT} alt="메인 비주얼 (3번째 큰)" />
          </Tablet>
          <Laptop>
            <img src={mainL} alt="메인 비주얼 (2번째 큰)" />
          </Laptop>
          <Desktop>
            <img src={mainPC} alt="메인 비주얼 (제일큰)" />
          </Desktop>
          <div className="text_wrap">
            <p className="main_text">
              Your Best
              <br />
              Partners
              <br />
              Wellnetworks
            </p>
          </div>
        </main>
      </header>
      <MobileGlobal>
        <div
          id={isSticky ? "sticker" : ""}
          className={isVisible ? "opacity navigation" : "navigation"}
        >
          <div className="top_menu">
            <span className={`${activeSection === 1 ? "Active_menu" : ""}`}>
              <Link
                to="section1"
                offset={-250}
                smooth={true}
                duration={300}
                onClick={() => setIsVisible(false)}
                spy={true}
                onSetActive={handleSetActive}
              >
                Signatures
              </Link>
            </span>
          </div>
          <div className="top_menu">
            <span className={`${activeSection === 2 ? "Active_menu" : ""}`}>
              <Link
                to="section2"
                offset={-150}
                smooth={true}
                duration={300}
                onClick={() => setIsVisible(false)}
                spy={true}
                onSetActive={handleSetActive}
              >
                How to work?
              </Link>
            </span>
          </div>
          <div className="top_menu">
            <span className={`${activeSection === 3 ? "Active_menu" : ""}`}>
              <Link
                to="section3"
                offset={-150}
                smooth={true}
                duration={300}
                onClick={() => setIsVisible(false)}
                spy={true}
                onSetActive={handleSetActive}
              >
                Crew
              </Link>
            </span>
          </div>
          <div className="top_menu">
            <span className={`${activeSection === 4 ? "Active_menu" : ""}`}>
              <Link
                to="section4"
                offset={-150}
                smooth={true}
                duration={300}
                onClick={() => setIsVisible(false)}
                spy={true}
                onSetActive={handleSetActive}
              >
                Journey
              </Link>
            </span>
          </div>
          <div className="top_menu">
            <span className={`${activeSection === 5 ? "Active_menu" : ""}`}>
              <Link
                to="section5"
                offset={-150}
                smooth={true}
                duration={300}
                onClick={() => setIsVisible(false)}
                spy={true}
                onSetActive={handleSetActive}
              >
                Contact
              </Link>
            </span>
          </div>
        </div>
      </MobileGlobal>
      <Desktop>
        <div id="navigation-wrap" className={isSticky ? "sticky" : ""}>
          <div className="navigation">
            <div className="top_menu">
              <Link
                to="section1"
                offset={-250}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span className={`${activeSection === 1 ? "Active_menu" : ""}`}>
                  Signatures
                </span>
              </Link>
            </div>
            <div className="top_menu">
              <Link
                to="section2"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span className={`${activeSection === 2 ? "Active_menu" : ""}`}>
                  How to work?
                </span>
              </Link>
            </div>
            <div className="top_menu">
              <Link
                to="section3"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span className={`${activeSection === 3 ? "Active_menu" : ""}`}>
                  Crew
                </span>
              </Link>
            </div>
            <div className="top_menu">
              <Link
                to="section4"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span className={`${activeSection === 4 ? "Active_menu" : ""}`}>
                  Journey
                </span>
              </Link>
            </div>
            <div className="top_menu">
              <Link
                to="section5"
                offset={-150}
                smooth={true}
                duration={300}
                spy={true}
                onSetActive={handleSetActive}
              >
                <span className={`${activeSection === 5 ? "Active_menu" : ""}`}>
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Desktop>

      {/* 주요 서비스 내용 시작  ----------------------------------------------------------------*/}

      <Element name="section1">
        <section id="service">
          <p className="service_subText">Signatures</p>
          <p className="service_slogan">
            MVNO 서비스 유통,
            <br />
            플랫폼 개발 전문기업
          </p>
          <LaptopBefore>
            <div className="serviceBox">
              <div
                className="wellpps_background serviceBox_1"
                onClick={handleTextPopOpen}
                style={
                  textPop ? { background: "#1A1A1A", opacity: "0.88" } : null
                }
              >
                {textPop ? (
                  <span className="pop_text">
                    WELLPPS 솔루션을 파트너점에게 제공하여 고객의 MVNO
                    휴대전화 서비스를 더욱 쉽고 빠르게 처리 할 수 있게 합니다.
                    이와 같은 서비스는 사후 관리 측면에서도 비용 및 시간을 크게
                    절약 할 수 있는 장점을 가집니다.웰네트웍스는 MVNO 사업
                    뿐아니라, Top-up서비스(해외선불폰충전), MANGO(국제
                    전화카드충전)등 사업 확장의 연구와 개발에 몰두하고있습니다.
                  </span>
                ) : null}
                <div
                  className="wellpps_fontColor  service_subtext sub_style"
                  style={textPop ? { opacity: "0" } : null}
                >
                  MVNO 서비스 유통
                  <br />
                  통합 관리 시스템
                  <br />
                </div>

                <div
                  className="wellpps_fontColor  service_maintext main_style"
                  style={textPop ? { opacity: "0" } : null}
                >
                  WELLPPS 솔루션
                </div>
                <Mobile1>
                  <img
                    src={wellM}
                    alt="wellpps 솔루션 이미지"
                    style={textPop ? { opacity: "0" } : null}
                  />
                </Mobile1>
                <Mobile2>
                  <img
                    src={wellppsM1}
                    alt="wellpps 솔루션 이미지"
                    style={textPop ? { opacity: "0" } : null}
                  />
                </Mobile2>
                <Mobile3>
                  <img
                    src={wellppsM2}
                    alt="wellpps 솔루션 이미지"
                    style={textPop ? { opacity: "0" } : null}
                  />
                </Mobile3>
                <Tablet>
                  <img
                    src={wellppsT}
                    alt="wellpps 솔루션 이미지"
                    style={textPop ? { opacity: "0" } : null}
                  />
                </Tablet>
              </div>
              {textPop ? (
                <button className="textPop_close" onClick={handleTextPopClose}>
                  <img src={closeM} alt="텍스트 팝업창 닫기" />
                </button>
              ) : null}
            </div>
            <Slider {...settings}>
              <div>
                <div className="slider_box">
                  <div className="slider_child purple">
                    <div className="slider_info">
                      <div className="icon_box deep_purple">
                        <img
                          className="purple_1"
                          src={emoji1}
                          alt="개통서비스"
                        />
                      </div>
                      <div
                        className="main_text"
                        style={{ marginBottom: "12px" }}
                        >고객센터 운영
                      </div>
                      <div className="sub_text">
                        개통서비스
                        <br/>
                        MVNO 가입자 유치 전산 운영
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box">
                  <div className="slider_child green">
                    <div className="slider_info">
                      <div className="icon_box deep_green">
                        <img
                          className="green_1"
                          src={emoji2}
                          alt="충전서비스"
                        />
                      </div>
                      <div className="main_text"style={{ marginBottom: "4px" }}>24시간 충전서비스</div>
                      <div className="sub_text">
                        예치금 활용 자동 충전서비스 제공<br/>모든 통신사 선불폰 충전 /
                        국제전화카드 충전 /<br/>해외선불폰 충전(Top-up Service)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box">
                  <div className="slider_child yellow">
                    <div className="slider_info">
                      <div className="icon_box deep_yellow">
                        <img
                          className="yellow_1"
                          src={emoji3}
                          alt="대리점 업무지원"
                        />
                      </div>
                      <div className="main_text"style={{ marginBottom: "12px" }}>파트너점 업무지원</div>
                      <div className="sub_text">
                        개통 실적 조회 및 정산내역서 제공<br/>각종 서식지 및 홍보물,
                        유심 지원
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </LaptopBefore>
          <LaptopAfter>
            <div id="service_laptop">
              <div className="left_explainBox">
                <p className="main_text">WELLPPS 솔루션</p>
                <p className="sub_text">MVNO 서비스 유통 통합 관리 시스템</p>
                <p className="paragraph">
                  WELLPPS 솔루션을 파트너점에게 제공하여 고객의 MVNO
                  서비스를
                  <br /> 더욱 쉽고 빠르게 처리 할 수 있게 합니다.
                  <br />
                  <br />
                  이와 같은 서비스는 사후 관리 측면에서도 비용 및 시간을
                  <br />
                  크게 절약 할 수 있는 장점을 가집니다.
                  <br />
                  <br />
                  웰네트웍스는 MVNO 사업 뿐아니라,Top-up서비스(해외선불폰충전),
                  <br />
                  MANGO(국제 전화카드충전)등
                  <br />
                  사업 확장의 연구와 개발에 몰두하고있습니다.
                </p>
                <Laptop>
                  <div className="wellpps_img">
                  <a href="https://www.wellpps.com" rel="noreferrer" target="_blank">
                    <img
                      className="box_shadow"
                      src={wellppsL}
                      alt="well_laptop"
                    /></a>
                  </div>
                </Laptop>
                <Desktop>
                  <div className="wellpps_img">
                    <a href="https://www.wellpps.com" rel="noreferrer" target="_blank">
                    <img
                      className="box_shadow"
                      src={wellppsPC}
                      alt="well_laptop"
                    /></a>
                  </div>
                </Desktop>
              </div>
              <div className="right_explainBox">
                <div className="service_card purple">
                  <div className="icon_box deep_purple">
                    <img className="purple_1" src={emoji1} alt="개통 서비스" />
                  </div>
                  <div>
                    <p className="main_text">고객센터 운영</p>
                    <p className="sub_text">
                      개통서비스
                      <br />
                      MVNO 가입자 유치 전산 운영
                    </p>
                  </div>
                </div>
                <div className="service_card green">
                  <div className="icon_box deep_green">
                    <img className="green_1" src={emoji2} alt="충전 서비스" />
                  </div>
                  <div>
                    <p className="main_text">24시간 충전서비스</p>
                    <Laptop>
                      <p className="sub_text_1">
                        예치금 활용 자동 충전서비스 제공
                        <br />
                        모든 통신사 선불폰 충전 /국제전화 
                        <br />
                        카드 충전/해외선불폰 충전
                        <br />
                        (Top-up Service)
                      </p>
                    </Laptop>
                    <Desktop>
                      <p className="sub_text_1">
                        예치금 활용 자동 충전서비스 제공
                        <br />
                        모든 통신사 선불폰 충전 / 국제전화
                        <br />
                        카드 충전/ 해외선불폰 충전
                        <br />
                        (Top-up Service)
                      </p>
                    </Desktop>
                  </div>
                </div>
                <div className="service_card yellow">
                  <div className="icon_box deep_yellow">
                    <img
                      className="yellow_1"
                      src={emoji3}
                      alt="대리점 업무지원"
                    />
                  </div>
                  <div>
                    <p className="main_text">파트너점 업무지원</p>
                    <p className="sub_text_1">
                      개통 실적 조회 및 정산내역서 제공
                      <br />
                      각종 서식지 및 홍보물, 유심 지원
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="service_laptop">
              <div className="left_explainBox2">
                <p className="main_text">PHONEISSUE</p>
                <p className="sub_text">선불폰 충전, 개통 Hub & 쇼핑몰</p>
                <p className="paragraph">
                  현재 폰이슈 사이트는 협업중인 사이트(유통망)로 선불폰 개통,
                  충전
                  <br />
                  서비스를 연계하고 있으며, Research&Development 진행중입니다.
                  <br />
                  <br />
                  향후 다양한 상품과 서비스로 발전 시킬 예정입니다
                </p>
              </div>
              <div className="right_explainBox2">
                <Laptop>
                  <div className="phoneissue_img wellpps_img">
                    <a href="https://www.phoneissue.com" rel="noreferrer" target="_blank">
                      <img src={phoneissueL1} alt="phoneissue_pc" /></a>
                    <a className="pi_2" href="https://www.phoneissue.com" rel="noreferrer" target="_blank">
                      <img src={phoneissueL2} alt="phoneissue_pc" /></a>
                  </div>
                </Laptop>
                <Desktop>
                  <div className="phoneissue_img wellpps_img">
                    <a href="https://www.phoneissue.com" rel="noreferrer" target="_blank">
                      <img src={phoneissuePC1} alt="phoneissue_pc" /></a>
                    <a className="pi_2" href="https://www.phoneissue.com" rel="noreferrer" target="_blank">
                      <img src={phoneissuePC2} alt="phoneissue_pc" /></a>
                  </div>
                </Desktop>
                <div className="img_url">
                  <a  className="img_url_child" href="https://www.phoneissue.com" rel="noreferrer" target="_blank">
                  <span>phoneissue.com</span></a>
                </div>
              </div>
            </div>
            <div id="service_laptop">
              <div className="right_explainBox3">
                <Laptop>
                  <div className="wellpps_img ppspay_img">
                    <a href="https://www.ppspay.co.kr" rel="noreferrer" target="_blank">
                      <img src={ppspayL1} alt="well_laptop" /></a>
                    <a className="py_2" href="https://www.ppspay.co.kr" rel="noreferrer" target="_blank">
                    <img src={ppspayL2} alt="well_laptop" /></a>                      
                  </div>
                </Laptop>
                <Desktop>
                  <div className="wellpps_img ppspay_img">
                    <a href="https://www.ppspay.co.kr" rel="noreferrer" target="_blank">
                      <img src={ppspayPC1} alt="well_laptop" /></a>
                    <a className="py_2" href="https://www.ppspay.co.kr" rel="noreferrer" target="_blank">
                    <img src={ppspayPC2} alt="well_laptop" /></a>                      
                  </div>
                </Desktop>
                <div className="img_url" style={{ marginTop: "40px" }}>
                  <a  className="img_url_colorRed img_url_child" href="https://www.ppspay.co.kr" rel="noreferrer" target="_blank">
                  <span>ppspay.co.kr</span></a>
                </div>                
              </div>
              <div className="left_explainBox3">
                <p className="main_text">PPSPAY</p>
                <p className="sub_text">선불폰의 쉽고 빠른 충전</p>
                <p className="paragraph">
                  선불폰을 사용중인 고객 누구나 24시간 언제든 요금 충전
                  <br />
                  서비스를 제공합니다. 충전 서비스가상계좌/신용카드를 이용하여
                  충전 가능하며, 별도의 로그인 없이 휴대전화 번호만으로
                  <br />
                  요금제 충전 및 조회를 해소 할 수 있습니다.
                  <br />
                  <br />
                  충전 결과 조회 기능으로 충전상태조회 / 대체충전 시도 / 환불
                  신청을 가능하게 함으로써 고객 편의성을 증대하였습니다.
                </p>
              </div>
            </div>
            <div id="service_laptop">
              <div className="left_explainBox4">
                <p className="main_text">통신나눔</p>
                <p className="sub_text">통신 취약계층을 위한 최선의 선택</p>
                <p className="paragraph">
                  현대사회는 바야흐로 스마트 통신의 시대입니다.
                  <br />
                  하지만 모든 사람들이 그 혜택을 누리진 않습니다.
                  <br />
                  우리의 생각보다 통신을 이용하기 어려운 사람들이 많습니다.
                  <br />
                  <br />
                  <span className="blue">웰네트웍스</span>는 이러한 사람들에게 통신의 혜택을 나누고자 합니다.
                  <br />
                  통신나눔을 통해 기업의 사회적 책임을 이행하고
                  <br />
                  보다 많은 이들이 통신의 사각지대에서 벗어날 수 있도록 도울
                  것입니다.
                  <br />
                  <br />
                  복지 단체 및 시설과 협약하여 선불휴대전화 개통서비스를
                  제공합니다.
                </p>
              </div>
              <div className="right_explainBox4">
                <Laptop>
                  <div className="wellnanum_img wellpps_img">
                    <a href="https://wellnanum.com/" rel="noreferrer" target="_blank">
                    <img src={wellnanumL} alt="well_laptop" /></a>
                  </div>
                </Laptop>
                <Desktop>
                  <div className="wellnanum_img wellpps_img">
                    <a href="https://wellnanum.com/" rel="noreferrer" target="_blank">
                      <img src={wellnanumPC} alt="well_laptop" /></a>
                  </div>
                </Desktop>
                <div className="img_url">
                  <a  className="img_url_colorskyblue img_url_child" href="https://wellnanum.com/" rel="noreferrer" target="_blank">
                  <span>wellnanum.com</span></a>
                </div>                
              </div>
            </div>
            <div id="service_laptop">
              <div className="left_explainBox">
                <p
                  className="main_text"
                  style={{
                    position: "relative",
                    left: "100px",
                    marginTop: "80px",
                  }}
                >
                  기업부설연구소
                </p>
                <p
                  className="sub_text"
                  style={{ position: "relative", left: "100px" }}
                >
                  다양한 플랫폼&솔루션 개발을 위한 연구활동
                </p>
                <p
                  className="paragraph"
                  style={{ position: "relative", left: "100px" }}
                >
                  사업의 발전을 위해 기업부설연구소를 설립하였습니다.
                  <br />
                  현재 연구과제로 MVNO 사업 관련 연구를 진행하고있지만
                  <br />
                  추후 다양한 분야로 사업을 확장시킬 계획입니다.
                </p>
                <Laptop>
                  <div className="lab_img wellpps_img">
                    <img className="lab_img" src={labL} alt="well_laptop" />
                  </div>
                </Laptop>
                <Desktop>
                  <div className="lab_img wellpps_img">
                    <img className="lab_img" src={labPC} alt="well_laptop" />
                  </div>
                </Desktop>
              </div>
              <div className="right_explainBox">
                <div className="service_card purple">
                  <div className="icon_box deep_purple">
                    <img
                      className="purple_1"
                      src={emoji4}
                      alt="개통 서비스"
                      style={{ left: "18%" }}
                    />
                  </div>
                  <Laptop>
                    <div>
                      <p className="main_text" style={{ fontSize: "20px" }}>
                        MVNO 유통서비스<br/>전산시스템 개발
                      </p>
                      <p className="sub_text" style={{ fontSize: "14px" }}>
                        유통 및 판매관리를 위한<br />주문통합 전산 시스템 개발
                      </p>
                    </div>
                  </Laptop>
                  <Desktop>
                    <div>
                      <p className="main_text">
                        MVNO 유통서비스<br/>전산시스템 개발
                      </p>
                      <p className="sub_text">
                        유통 및 판매관리를 위한<br />주문통합 전산 시스템 개발
                      </p>
                    </div>
                  </Desktop>                  
                </div>
                <div className="service_card green">
                  <div className="icon_box deep_green">
                    <img className="green_1" src={emoji5} alt="충전 서비스" />
                  </div>
                  <div>
                    <p className="main_text">선불요금충전 API 개발</p>
                    <p className="sub_text_1">
                    MVNO 통신사 선불요금충전<br/>API 서버 개발
                    </p>
                  </div>
                </div>
                <div className="service_card yellow">
                  <div className="icon_box deep_yellow">
                    <img
                      className="yellow_1"
                      src={emoji6}
                      alt="대리점 업무지원"
                    />
                  </div>
                  <div>
                    <p className="main_text">데이터 분석 연구</p>
                    <p className="sub_text_1">
                      사례분석 및 사업 유입량 분석 등<br></br>데이터 분석 마케팅
                      연구
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </LaptopAfter>
          <LaptopBefore>
            <div className="serviceBox" style={{ marginTop: "46px" }}>
              <div
                className="phoneissue_background serviceBox_1"
                onClick={handleTextPopOpen2}
                style={
                  textPop2 ? { background: "#1A1A1A", opacity: "0.88" } : null
                }
              >
                {textPop2 ? (
                  <span className="pop_text">
                    현재 폰이슈 사이트는 협업중인 사이트(유통망)로 선불폰 개통,
                    충전 서비스를 연계하고 있으며, Research&Development
                    진행중입니다. <br />
                    향후 다양한 상품과 서비스로 발전 시킬 예정입니다
                  </span>
                ) : null}
                <div
                  className="phoneissue_fontColor service_subtext sub_style"
                  style={textPop2 ? { opacity: "0" } : null}
                >
                  선불폰 충전,
                  <br />
                  개통 Hub & 쇼핑몰
                  <br />
                </div>

                <div
                  className=" phoneissue_fontColor service_maintext main_style"
                  style={textPop2 ? { opacity: "0" } : null}
                >
                  PHONEISSUE
                </div>
                <Mobile1>
                  <img
                    src={phoneissueM}
                    alt="wellpps 솔루션 이미지"
                    style={textPop2 ? { opacity: "0" } : null}
                  />
                </Mobile1>
                <Mobile2>
                  <img
                    src={phoneissueM1}
                    alt="wellpps 솔루션 이미지"
                    style={textPop2 ? { opacity: "0" } : null}
                  />
                </Mobile2>
                <Mobile3>
                  <img
                    src={phoneissueM2}
                    alt="wellpps 솔루션 이미지"
                    style={textPop2 ? { opacity: "0" } : null}
                  />
                </Mobile3>
                <Tablet>
                  <img
                    src={phoneissueT}
                    alt="wellpps 솔루션 이미지"
                    style={textPop2 ? { opacity: "0" } : null}
                  />
                </Tablet>
              </div>
              {textPop2 ? (
                <button className="textPop_close" onClick={handleTextPopClose2}>
                  <img src={closeM} alt="텍스트 팝업창 닫기" />
                </button>
              ) : null}
            </div>
          </LaptopBefore>
          <LaptopBefore>
            <div className="serviceBox" style={{ marginTop: "46px" }}>
              <div
                className="ppspay_background serviceBox_1"
                onClick={handleTextPopOpen3}
                style={
                  textPop3 ? { background: "#1A1A1A", opacity: "0.88" } : null
                }
              >
                {textPop3 ? (
                  <span className="pop_text">
                    선불폰을 사용중인 고객 누구나 24시간 언제든 요금 충전
                    서비스를 제공합니다. 가상계좌/신용카드를 이용하여 충전
                    가능하며, 별도의 로그인 없이 휴대전화 번호만으로 요금제 충전
                    및 조회를 해소 할 수 있습니다. 충전 결과 조회 기능으로
                    충전상태조회 / 대체충전 시도 / 환불 신청을 가능하게 함으로써
                    고객 편의성을 증대하였습니다.
                  </span>
                ) : null}
                <div
                  className="ppspay_fontColor service_subtext sub_style"
                  style={textPop3 ? { opacity: "0" } : null}
                >
                  선불폰의
                  <br />
                  쉽고 빠른 충전
                  <br />
                </div>

                <div
                  className=" ppspay_fontColor service_maintext main_style"
                  style={textPop3 ? { opacity: "0" } : null}
                >
                  PPSPAY
                </div>
                <Mobile1>
                  <img
                    src={ppspayM}
                    alt="wellpps 솔루션 이미지"
                    style={textPop3 ? { opacity: "0" } : null}
                  />
                </Mobile1>
                <Mobile2>
                  <img
                    src={ppspayM1}
                    alt="wellpps 솔루션 이미지"
                    style={textPop3 ? { opacity: "0" } : null}
                  />
                </Mobile2>
                <Mobile3>
                  <img
                    src={ppspayM2}
                    alt="wellpps 솔루션 이미지"
                    style={textPop3 ? { opacity: "0" } : null}
                  />
                </Mobile3>
                <Tablet>
                  <img
                    src={ppspayT}
                    alt="wellpps 솔루션 이미지"
                    style={textPop3 ? { opacity: "0" } : null}
                  />
                </Tablet>
              </div>
              {textPop3 ? (
                <button className="textPop_close" onClick={handleTextPopClose3}>
                  <img src={closeM} alt="텍스트 팝업창 닫기" />
                </button>
              ) : null}
            </div>
          </LaptopBefore>
          <LaptopBefore>
            <div className="serviceBox" style={{ marginTop: "46px" }}>
              <div
                className="wellnanum_background serviceBox_1"
                onClick={handleTextPopOpen4}
                style={
                  textPop4 ? { background: "#1A1A1A", opacity: "0.88" } : null
                }
              >
                {textPop4 ? (
                  <span className="pop_text">
                    현대사회는 바야흐로 스마트 통신의 시대입니다. 하지만 모든
                    사람들이 그 혜택을 누리진 않습니다. 우리의 생각보다 통신을
                    이용하기 어려운 사람들이 많습니다.웰네트웍스는 이러한
                    사람들에게 통신의 혜택을 나누고자 합니다. 통신나눔을 통해
                    기업의 사회적 책임을 이행하고 보다 많은 이들이 통신의
                    사각지대에서 벗어날 수 있도록 도울 것입니다.복지 단체 및
                    시설과 협약하여 선불휴대 전화 개통서비스를 제공합니다.
                  </span>
                ) : null}
                <div
                  className="wellnanum_fontColor service_subtext sub_style"
                  style={textPop4 ? { opacity: "0" } : null}
                >
                  통신 취약계층을 위한
                  <br />
                  최선의 선택
                  <br />
                </div>

                <div
                  className=" wellnanum_fontColor service_maintext main_style"
                  style={textPop4 ? { opacity: "0" } : null}
                >
                  통신나눔
                </div>
                <Mobile1>
                  <img
                    src={wellnanumM}
                    alt="wellpps 솔루션 이미지"
                    style={textPop4 ? { opacity: "0" } : null}
                  />
                </Mobile1>
                <Mobile2>
                  <img
                    src={wellnanumM1}
                    alt="wellpps 솔루션 이미지"
                    style={textPop4 ? { opacity: "0" } : null}
                  />
                </Mobile2>
                <Mobile3>
                  <img
                    src={wellnanumM2}
                    alt="wellpps 솔루션 이미지"
                    style={textPop4 ? { opacity: "0" } : null}
                  />
                </Mobile3>
                <Tablet>
                  <img
                    src={wellnanumT}
                    alt="wellpps 솔루션 이미지"
                    style={textPop4 ? { opacity: "0" } : null}
                  />
                </Tablet>
              </div>
              {textPop4 ? (
                <button className="textPop_close" onClick={handleTextPopClose4}>
                  <img src={closeM} alt="텍스트 팝업창 닫기" />
                </button>
              ) : null}
            </div>
          </LaptopBefore>
          <LaptopBefore>
            <div className="serviceBox" style={{ marginTop: "46px" }}>
              <div
                className="lab_background serviceBox_1"
                onClick={handleTextPopOpen5}
                style={
                  textPop5 ? { background: "#1A1A1A", opacity: "0.88" } : null
                }
              >
                {textPop5 ? (
                  <span className="pop_text">
                    사업의 발전을 위해 기업부설연구소를 설립하였습니다. 현재
                    연구과제로 MVNO 사업 관련 연구를 진행하고있지만 추후 다양한
                    분야로 사업을 확장시킬 계획입니다.
                  </span>
                ) : null}
                <div
                  className="lab_fontColor service_subtext sub_style"
                  style={textPop5 ? { opacity: "0" } : null}
                >
                  다양한 플랫폼&솔루션
                  <br />
                  개발을 위한 연구활동
                  <br />
                </div>

                <div
                  className="lab_fontColor service_maintext main_style"
                  style={textPop5 ? { opacity: "0" } : null}
                >
                  기업부설연구소
                </div>
                <Mobile1>
                  <img
                    src={labM}
                    alt="wellpps 솔루션 이미지"
                    style={textPop5 ? { opacity: "0" } : null}
                  />
                </Mobile1>
                <Mobile2>
                  <img
                    src={labM1}
                    alt="wellpps 솔루션 이미지"
                    style={textPop5 ? { opacity: "0" } : null}
                  />
                </Mobile2>
                <Mobile3>
                  <img
                    src={labM2}
                    alt="wellpps 솔루션 이미지"
                    style={textPop5 ? { opacity: "0" } : null}
                  />
                </Mobile3>
                <Tablet>
                  <img
                    src={labT}
                    alt="wellpps 솔루션 이미지"
                    style={textPop5 ? { opacity: "0" } : null}
                  />
                </Tablet>
              </div>
              {textPop5 ? (
                <button className="textPop_close" onClick={handleTextPopClose5}>
                  <img src={closeM} alt="텍스트 팝업창 닫기" />
                </button>
              ) : null}
            </div>
            <Slider {...settings}>
              <div>
                <div className="slider_box">
                  <div className="slider_child purple">
                    <div className="slider_info">
                      <div className="icon_box deep_purple">
                        <img
                          className="purple_1_1"
                          src={emoji4}
                          alt="개통서비스"
                        />
                      </div>
                      <div className="main_text">
                        MVNO 유통서비스<br/>전산시스템 개발
                      </div>
                      <div className="sub_text">
                        유통 및 판매관리를 위한
                        <br />
                        주문통합 전산 시스템 개발
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box">
                  <div className="slider_child green">
                    <div className="slider_info">
                      <div className="icon_box deep_green">
                        <img
                          className="green_1"
                          src={emoji5}
                          alt="충전서비스"
                        />
                      </div>
                      <div className="main_text">선불요금충전 API 개발</div>
                      <div className="sub_text">
                      MVNO 통신사 선불요금충전<br/>API 서버 개발
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box">
                  <div className="slider_child yellow">
                    <div className="slider_info">
                      <div className="icon_box deep_yellow">
                        <img
                          className="yellow_1"
                          src={emoji6}
                          alt="대리점 업무지원"
                        />
                      </div>
                      <div className="main_text">데이터 분석 연구</div>
                      <div className="sub_text">
                        사례분석 및 사업 유입량 분석 등<br />
                        데이터 분석 마케팅 연구
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </LaptopBefore>
        </section>
      </Element>
      {/* 주요 서비스 내용 끝  ----------------------------------------------------------------*/}

      <Element name="section2">
        <section id="service">
          <p className="service_subText">How to work?</p>
          <p className="service_slogan">우리가 일하는 방식</p>
          <LaptopAfter>
            <div className="workflow_text">
              <p>
                웰네트웍스는 모든것에 우연은 없다는 일념으로 데이터 분석 기반
                업무에 초점을 두고 있습니다.
                <br />
                또한, 다양한 협업툴을 적극 활용하여 업무 집중도를 높이는 데에
                기여 하고 있으며, 짧은 주기의
                <br />
                계획, 실행, 피드백이 이루어지는 에자일 조직으로 성장중입니다.
              </p>
            </div>
            <div className="workflow_box">
              <div className="workflow_box_child">
                <img src={workMethod1} alt="1번슬라이드" />
                <div className="main_text">Agile</div>
              </div>
              <div className="workflow_box_child">
                <img src={workMethod2} alt="2번슬라이드" />
                <div className="main_text" style={{ marginTop: "20px" }}>
                  Kanban
                </div>
              </div>
              <div
                className="workflow_box_child"
                style={{ backgroundColor: "#0382FA" }}
              >
                <img src={workMethod3} alt="3번슬라이드" />
              </div>
              <div className="workflow_box_child">
                <img src={workMethod4} alt="4번슬라이드" />
              </div>
              <div className="workflow_box_child">
                <img src={workMethod5} alt="5번슬라이드" />
              </div>
              <div className="workflow_box_child">
                <img src={workMethod6} alt="6번슬라이드" />
              </div>
              <div
                className="workflow_box_child"
                style={{ backgroundColor: "#441949" }}
              >
                <img src={workMethod7} alt="7번슬라이드" />
              </div>
              <div className="workflow_box_child">
                <img src={workMethod8} alt="8번슬라이드" />
              </div>
              <div className="workflow_box_child">
                <img src={workMethod9} alt="9번슬라이드" />
              </div>
            </div>
          </LaptopAfter>
          <LaptopBefore>
            <Slider {...settings2}>
              <div>
                <div className="slider_box2">
                  <div className="slider_child">
                    <img
                      className="workflow_img"
                      src={workMethod1}
                      alt="1번슬라이드"
                    />
                    <div className="main_text">Agile</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child">
                    <img
                      className="workflow_img"
                      src={workMethod2}
                      alt="2번슬리이드"
                    />
                    <div className="main_text" style={{ marginTop: "30px" }}>
                      Kanban
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child slider_blueBack">
                    <img
                      className="workflow_img"
                      src={workMethod3}
                      alt="3번슬리이드"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child">
                    <img
                      className="workflow_img"
                      src={workMethod4}
                      alt="4번슬리이드"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child">
                    <img
                      className="workflow_img"
                      src={workMethod5}
                      alt="5번슬리이드"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child">
                    <img
                      className="workflow_img"
                      src={workMethod6}
                      alt="6번슬리이드"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child slider_purpleBack">
                    <img
                      className="workflow_img"
                      src={workMethod7}
                      alt="7번슬리이드"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child">
                    <img
                      className="workflow_img"
                      src={workMethod8}
                      alt="8번슬리이드"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="slider_box2">
                  <div className="slider_child">
                    <img
                      className="workflow_img"
                      src={workMethod9}
                      alt="9번슬리이드"
                    />
                  </div>
                </div>
              </div>
            </Slider>
            <div className="workflow_para">
              웰네트웍스는 모든것에 우연은 없다는 일념으로 데이터 분석 기반
              업무에 초점을 두고 있습니다. 또한, 다양한 협업툴을 적극 활용하여
              업무 집중도를 높이는 데에 기여 하고 있으며, 짧은 주기의 계획,
              실행, 피드백이 이루어지는 에자일 조직으로 성장중입니다.
            </div>
          </LaptopBefore>
        </section>
      </Element>
      <Element name="section3">
        <section id="service">
          <p className="service_subText">Crew</p>
          <p className="service_slogan">우리의 구성원들</p>
          <div className="team_card_bundle">
            <div className="team_card">
              <div className="team_wrap">
                <div className="emoji">
                  <img src={emoji7} alt="마케팅1팀" />
                </div>
                <div className="team_info">
                  <p className="team_main">마케팅 1팀(영업)</p>
                  <p className="team_sub">
                    분석 기반 오프라인 B2B 영업
                    <br />
                    파트너쉽 구축 활동
                  </p>
                </div>
              </div>
            </div>
            <div className="team_card">
              <div className="team_wrap">
                <div className="emoji">
                  <img src={emoji8} alt="마케팅1팀" />
                </div>
                <div className="team_info">
                  <p className="team_main">마케팅 2팀(기획분석)</p>
                  <p className="team_sub">
                    분석 기반 마케팅
                    <br />
                    데이터 수집 및 분석
                    <br />
                    데이터 기반 업무 효율성 분석
                  </p>
                </div>
              </div>
            </div>
            <div className="team_card">
              <div className="team_wrap">
                <div
                  className="emoji"
                  style={{ position: "relative", right: "22px" }}
                >
                  <img src={emoji9} alt="마케팅1팀" />
                </div>
                <div className="team_info">
                  <p
                    className="team_main"
                    style={{ position: "relative", right: "22px" }}
                  >
                    CMS팀<br/>(개통실&고객센터)
                  </p>
                  <p
                    className="team_sub"
                    style={{ position: "relative", right: "22px" }}
                  >
                    분석 기반 고객응대
                    <br />
                    고객응대 데이터 수집
                  </p>
                </div>
              </div>
            </div>
            <div className="team_card">
              <div className="team_wrap">
                <div className="emoji">
                  <img src={emoji10} alt="마케팅1팀" />
                </div>
                <div className="team_info">
                  <p className="team_main">기업 부설 연구소</p>
                  <p className="team_sub">
                    분석 기반 서비스 개발
                    <br />
                    업무 및 서비스 자동화 연구
                    <br />
                    인적 오류 제거 연구
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Laptop></Laptop>
        </section>
      </Element>
      <Element name="section4">
        <section id="service">
          <p className="service_subText">Journey</p>
          <p className="service_slogan">
            다양한 혁신과 서비스개선,
            <br />
            지속적인 성장을 해왔습니다.
          </p>
          <div id="history_wrap">
            <div className="year">
              <div className="year_text">2006</div>
              <div className="month_wrap">
                <span className="month">· 04</span>
                <span className="sub_text">폰이슈 창업</span>
              </div>
            </div>
            <div className="year">
              <div className="year_text">2014</div>
              <div className="month_wrap">
                <span className="month">· 03</span>
                <span className="sub_text">(주)웰네트웍스 법인 설립</span>
              </div>
              <div className="month_wrap">
                <span className="month">· 08</span>
                <span className="sub_text">
                  통신 취약 계층을 위한 통신나눔 프로젝트 시행 대리점용(B to B)
                  선불 전화 통합 요금 충전 및 대리점 관리 사이트 wellpps.com
                  서비스 개시
                </span>
                <div className="month_img">
                  <img src={history1} alt="통신나눔 아이콘" />
                </div>
              </div>
            </div>
            <div className="year">
              <div className="year_text">2015</div>
              <div className="month_wrap">
                <span className="month">· 11</span>
                <span className="sub_text">
                  휴대폰 유통 및 선불폰 충전서비스 Phoneissue 브랜드 상표 특허
                  등록 완료
                </span>
                <div className="month_img">
                  <img src={history2} alt="폰이슈 아이콘" />
                </div>
              </div>
            </div>
            <div className="year">
              <div className="year_text">2020</div>
              <div className="month_wrap">
                <span className="month">· 02</span>
                <span className="sub_text">
                  일반고객용(B to C) 선불 전화 통합 요금 충전 서비스 PPSPAY 개시
                </span>
                <div className="month_img">
                  <img src={history3} alt="ppspay 아이콘" />
                </div>
              </div>
            </div>
            <div className="year">
              <div className="year_text">2021</div>
              <div className="month_wrap">
                <span className="month">· 01</span>
                <span className="sub_text">
                  해외 Top-up 서비스 전문기업 DING 업무 협약 및 원격 충전서비스
                  개시
                </span>
                <div className="month_img">
                  <img src={history4} alt="ding 아이콘" />
                </div>
              </div>
            </div>
            <div className="year">
              <div className="year_text">2022</div>
              <div className="month_wrap">
                <span className="month">· 03</span>
                <span className="sub_text">기업 부설 연구소 설립</span>
              </div>
              <div className="month_wrap">
                <span className="month">· 08</span>
                <span className="sub_text">(주)한미포스트 업무 제휴 계약</span>
              </div>
            </div>
            <div className="year">
              <div className="year_text">2023</div>
              {/* <div className="month_wrap">
                <span className="month">· 02</span>
                <span className="sub_text">(주)PTSK 업무 제휴 계약</span>
                <div className="month_img">
                  <img
                    style={{ padding: "0 10px" }}
                    src={history5}
                    alt="ptsk 아이콘"
                  />
                </div>
              </div> */}
              <div className="month_wrap">
                <span className="month">· 03</span>
                <span className="sub_text">
                  일반 고객용 (B to C) 선불 전화 통합 요금 충전 서비스 특허 등록 완료
                </span>
                <div className="month_img">
                  <img src={history3} alt="ppspay 아이콘" />
                </div>
              </div>
              <div className="month_wrap">
                <span className="month">· 현재</span>
                <span className="sub_text">
                  국내 주요 MVNO 사업자와 계약 체결, 강력한 파트너십으로 탁월한
                  성과를 보여주고 있습니다.
                </span>
              </div>
            </div>
          </div>
        </section>
      </Element>
      <Element name="section5" style={{ marginBottom: "100px" }}>
        <section id="service">
          <p className="service_subText">Contact</p>
          <p className="service_slogan">우리와 함께 하는 방법</p>
          <LaptopBefore>
            <div className="tab_wrap">
              <div className="tab_bar">
                <motion.div
                  onClick={() => handleTabClick(0)}
                  whileTap={{ scale: 0.9 }}
                  className={activeTab === 0 ? "active" : ""}
                >
                  <span
                    className={
                      activeTab === 0
                        ? "active_tab active_margin"
                        : "active_margin"
                    }
                  >
                    오시는길
                  </span>
                </motion.div>
                <motion.div
                  onClick={() => handleTabClick(1)}
                  whileTap={{ scale: 0.9 }}
                  className={activeTab === 1 ? "active" : ""}
                >
                  <span
                    className={
                      activeTab === 1
                        ? "active_tab active_margin"
                        : "active_margin"
                    }
                  >
                    업무제휴
                  </span>
                </motion.div>
              </div>
              <div className="">
                {/* 각 탭에 해당하는 컨텐츠 */}
                {activeTab === 0 && (
                  <div className="address_box">
                    <div className="address_wrap">
                      <div className="address_list">
                        <span className="title">주소</span>
                        <span className="info">
                          경기도 고양시 일산동구 일산로67,명성프라자 5층
                        </span>
                      </div>
                      <div className="address_list">
                        <span className="title">Tel.</span>
                        <span className="info">1566-0261</span>
                      </div>
                      <div className="address_list">
                        <span className="title">운영시간</span>
                        <span className="info">10:00 ~ 20:00 (연중무휴)</span>
                      </div>
                      <Map
                        className="map"
                        center={{ lat: 37.6442802725939, lng: 126.789008621492 }}
                      >
                        <MapMarker
                          position={{ lat: 37.6442802725939, lng: 126.789008621492 }}
                        >
                          <div style={{
                              width:"130px",
                              textAlign:"center",
                              fontFamily: "NotoSansKR-Bold",
                              color: "#0077ed",
                          }}>(주)웰네트웍스</div>
                        </MapMarker>
                      </Map>                      
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="input_box">
                    <div className="input_wrap">
                      <div className="input_list">
                        <div>이름 입력</div>
                        <input
                          type="text"
                          placeholder="성함을 입력해주세요"
                        ></input>
                      </div>
                      <div className="input_list">
                        <div>연락처 입력</div>
                        <input
                          type="text"
                          value={phoneNumbering}
                          onChange={handlePhoneNumberChange}
                          maxLength={13} // 010-1234-5678 형식이므로 최대 길이는 13
                          className="input_text"
                          placeholder="연락처를 입력해주세요"
                        />
                      </div>
                      <div className="input_list">
                        <div>개인정보 수집 동의</div>
                        <div class="radio-container">
                          <input type="radio" id="option1" name="radio" />
                          <label for="option1">동의</label>

                          <input type="radio" id="option2" name="radio" />
                          <label for="option2">미동의</label>
                        </div>
                      </div>
                      <div className="input_list">
                        <div className="request_btn">요청</div>
                      </div>                     
                    </div>
                  </div>
                )}
              </div>
            </div>
          </LaptopBefore>
          <LaptopAfter>
            <div className="laptop_contact">
              <div className="address_wrap">
                <div className="address_child">
                  <span className="title address_margin">주소</span>
                  <span className="sub_text">
                    경기도 고양시 일산동구 일산로67, 명성프라자 5층
                  </span>
                </div>
                <div className="address_child">
                  <span className="title address_margin">Tel.</span>
                  <span className="sub_text">1566-0261</span>
                </div>
                <div className="address_child">
                  <span className="title address_margin">운영시간</span>
                  <span className="sub_text">10:00 ~ 20:00 (연중무휴)</span>
                </div>
                <Map
                  className={expand === 1 ? "map_Expand map" : "map"}
                  center={{ lat: 37.6442802725939, lng: 126.789008621492 }}
                >
                  <MapMarker
                    position={{ lat: 37.6442802725939, lng: 126.789008621492 }}
                  >
                    <div style={{
                        width:"130px",
                        textAlign:"center",
                        fontFamily: "NotoSansKR-Bold",
                        color: "#0077ed",
                    }}>(주)웰네트웍스</div>
                  </MapMarker>
                </Map>               
              </div>
              <div
                className={expand === 1 ? "request_wrap_Expand request_wrap" : "request_wrap"}
              >
                <div className="request_title">
                  <img src={emoji11} alt="업무제휴 아이콘" />
                  <div style={{ marginLeft: "12px" }}>업무제휴 신청하기</div>
                </div>
                <div className="input_box_labtop">
                  <span className="input_title">업체명</span>
                  <input
                    type="text"
                    className="input_text"
                    placeholder="업체명을 입력해주세요"
                  ></input>
                </div>
                <div className="input_box_labtop">
                  <span className="input_title">담당자 성함</span>
                  <input
                    type="text"
                    className="input_text"
                    placeholder="성함을 입력해주세요"
                  ></input>
                </div>                    
                <div className="input_box_labtop">
                  <span className="input_title">연락처 입력</span>
                  <input
                    type="text"
                    value={phoneNumbering}
                    onChange={handlePhoneNumberChange}
                    maxLength={13} // 010-1234-5678 형식이므로 최대 길이는 13
                    className="input_text"
                    placeholder="연락처를 입력해주세요"
                  />
                </div>

                <motion.div
                  onClick={() => handleExpandClick(0)}
                  whileTap={{ scale: 0.9 }}
                  className={activeTab === 0 ? "active" : ""}
                >
                  {expand === 1 ? (
                  <div className="open_writing">
                    <button className="opening_btn">-</button>                    
                  </div>) : null}
                </motion.div>
                <motion.div
                  onClick={() => handleExpandClick(1)}
                  whileTap={{ scale: 0.9 }}
                  className={activeTab === 1 ? "active" : ""}
                >
                  {expand === 0 ? (
                  <div className="open_writing">
                    <button className="opening_btn">+</button>
                  </div>) : null}
                </motion.div>
                { expand ? (       
                <div className="input_box_labtop">
                  <span className="input_title">비고내용(추가전달 사항)</span>
                  <textarea
                    type="textarea"
                    className="textarea input_text"
                    placeholder="추가로 전달하고 싶은 내용을 입력해주세요"
                  ></textarea>
                </div>): null }

                <div
                  className="input_title"
                  style={{ marginTop: "28px" }}
                  >
                    파트너 유형을 선택해주세요</div>
                <div class="checkbox-container">                  
                  <input type="checkbox" id="checkbox1" />
                  <label for="checkbox1">개인</label>
                  <input type="checkbox" id="checkbox2" />
                  <label for="checkbox2">기업</label>
                  <input type="checkbox" id="checkbox3" />
                  <label for="checkbox3">기술협력</label>
                  <input type="checkbox" id="checkbox4" />
                  <label for="checkbox4">투자자문</label>
                  <input type="checkbox" id="checkbox5" />
                  <label for="checkbox5">공급업체</label>
                  <input type="checkbox" id="checkbox6" />
                  <label for="checkbox6">봉사단체</label>
                  <input type="checkbox" id="checkbox7" />
                  <label for="checkbox7">기타</label>                                    
                </div>
                <div className="input_box_labtop">
                  <div className="title_wrap">
                    <span className="input_title">개인정보 수집 동의</span>
                    <span className="detail_info input_title">자세한 내용</span>
                  </div>
                  <div class="radio-container">
                    <input type="radio" id="option1" name="radio" />
                    <label for="option1" style={{ marginRight: "8px" }}>
                      동의
                    </label>
                    <input type="radio" id="option2" name="radio" />
                    <label for="option2" style={{ marginLeft: "8px" }}>
                      미동의
                    </label>
                  </div>
                </div>    
                <div className="input_list">
                  <div className="request_btn">신청</div>
                </div>                                           
              </div>
            </div>
          </LaptopAfter>
        </section>
      </Element>
      <footer id="footer">
        <div className="ask_us">
          <div className="ask_child">
            <a
              className="call-button"
              href={`tel:${phoneNumber}`}
              onClick={handleCall}
            >
              전화문의
            </a>
          </div>
          <div className="ask_child" onClick={openPopup}>
            카카오톡
          </div>
        </div>
        <div className="family_site">
          <div className="family_wrap">
            <div className="site_list">
              <span>
                <a href="https://wellpps.com/" rel="noreferrer" target="_blank">
                  WELLPPS.com
                </a>
              </span>
              <span>
                <img src={footerArrow} alt="패밀리사이트 화살표" />
              </span>
            </div>
            <div className="site_list">
              <span>
                <a
                  href="https://www.phoneissue.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  PHONEISSUE
                </a>
              </span>
              <span>
                <img src={footerArrow} alt="패밀리사이트 화살표" />
              </span>
            </div>
            <div className="site_list">
              <span>
                <a
                  href="https://www.ppspay.co.kr/"
                  rel="noreferrer"
                  target="_blank"
                >
                  PPSPAY
                </a>
              </span>
              <span>
                <img src={footerArrow} alt="패밀리사이트 화살표" />
              </span>
            </div>
            <div className="site_list" style={{ borderBottom: "none" }}>
              <span>
                <a
                  href="https://www.wellnanum.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  통신나눔
                </a>
              </span>
              <span>
                <img src={footerArrow} alt="패밀리사이트 화살표" />
              </span>
            </div>
          </div>
        </div>
        <div className="infomation_footer">
          <div className="footer_info">
            <br />
            <img src={footerLogo} alt="푸터 폰이슈 로고" />
            <br></br>
            본사 : (주) 웰네트웍스 ㅣ 대표 : 김형술
            <br />
            사업자등록번호 : 128-87-06924
            <br />
            통신판매업신고번호: 2020-고양일산동-0390호
            <br />
            <br />
            경기도 고양시 일산동구 일산로 67, 명성프라자 5층
            <br />
            대표전화 : 1566-0261
            <br />
            e-mail : thanks@wellpps.com
            <br />
            <br />
            Copyright(C)2023 by wellnetworks.co.kr
            <br />
            All rights reserved.
            <br />
            <br />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
