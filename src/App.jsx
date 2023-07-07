import React from "react";
import { useState, useEffect, useRef } from "react";
import "./index.css";
import "./css/App.css";
import styled, { css } from "styled-components";
import { Desktop, Laptop, LaptopBefore, LaptopAfter, Tablet, MobileGlobal, Mobile1, Mobile2, Mobile3, Default } from './MediaQueryComponents';
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';


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
      const clientHeight = document.getElementById('header').clientHeight;
      console.log(clientHeight);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
     // const threshold = 690; // 고정시킬 위치의 임계값 (원하는 값으로 조정)
    
      setIsSticky(scrollTop >= clientHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // 이미지 슬라이더 - 주요서비스 //
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
            position: 'absolute',
            bottom: '16px',
            right: '20px',
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
        position: 'absolute',
        bottom: '26px',
        right: '20px'
      }}
    >
      <ul>{dots}</ul>
    </div>
  ),
};    

  // 스크롤 링크 (맨위로)
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // 모바일 일때 설명문구 전환
  const [textPop, setTextPop] = useState(false);
  const handleTextPopOpen = () => {
    setTextPop(true);
  }
  const handleTextPopClose = () => {
    setTextPop(false);
  }

  const [textPop2, setTextPop2] = useState(false);
  const handleTextPopOpen2 = () => {
    setTextPop2(true);
  }
  const handleTextPopClose2 = () => {
    setTextPop2(false);
  }
  
  const [textPop3, setTextPop3] = useState(false);
  const handleTextPopOpen3 = () => {
    setTextPop3(true);
  }
  const handleTextPopClose3 = () => {
    setTextPop3(false);
  }
  
  const [textPop4, setTextPop4] = useState(false);
  const handleTextPopOpen4 = () => {
    setTextPop4(true);
  }
  const handleTextPopClose4 = () => {
    setTextPop4(false);
  }
  
  const [textPop5, setTextPop5] = useState(false);
  const handleTextPopOpen5 = () => {
    setTextPop5(true);
  }
  const handleTextPopClose5 = () => {
    setTextPop5(false);
  } 

  // tab ui 
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };



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
      color: #293F52;
      background: #FFE034;
    }
  `;

  const [isVisible, setIsVisible] = useState(false);
  return (
          <>
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
                        position:"absolute",
                        top: "0",
                        left: "0",
                        width: "100vw",
                        height: "100%",
                        overflowY: "hidden",
                        background: "#fff",
                        zIndex:"999",
                        opacity: "0.98",
                      }}
                    >
                      <nav id="moblie_global" className="side_menu">
                        <span><img className="logo" src="../img/m/icon-logo-m.svg" alt="로고"/></span>
                        <div onClick={() => setIsVisible(false)}><img className="ham" src="../img/m/icon-close-m.svg" alt="햄버거버튼"/></div>
                      </nav>
                      <ul className="menu_wrap">
                        <Link 
                          to="section1"
                          offset={-250}
                          smooth={true} duration={300}
                          onClick={() => setIsVisible(false)}
                        >
                          <li>주요서비스</li> 
                        </Link>     
                        <Link 
                          to="section2"
                          offset={-150}
                          smooth={true} duration={300}
                          onClick={() => setIsVisible(false)}
                        >
                          <li>업무방식</li>  
                        </Link>
                        <li>조직구성</li>  
                        <li>걸어온길</li>  
                        <li>CONTACNT</li>  
                      </ul>
                      <ButtonWrap>
                        <button className='askBtn'>1566-0261</button>
                        <button className='kakaoBtn'>카카오톡 상담하기</button>
                      </ButtonWrap>
                    </motion.div>
                  )}
                </AnimatePresence>                
                <nav id="moblie_global">
                  <a><img className="logo" src="../img/m/icon-logoWhite-m.svg" alt="로고"/></a>
                  <div onClick={() => setIsVisible(true)}><img className="ham" src="../img/m/icon-ham-m.svg" alt="햄버거버튼"/></div>
                </nav>
              </MobileGlobal>
              <Desktop>
                <div id="nav_box">
                  <nav id="desktop">
                    <span><img className="logo" src="../img/m/icon-logoWhite-m.svg" alt="로고"/></span>
                    <Link 
                      to="section1"
                      offset={-250}
                      smooth={true} duration={300}
                    >
                      <span>주요서비스</span>
                    </Link>
                    <Link 
                      to="section2"
                      offset={-150}
                      smooth={true} duration={300}
                      onClick={() => setIsVisible(false)}
                    >
                      <span>업무방식</span>
                    </Link>                    
                    <span>조직구성</span>
                    <span>걸어온길</span>
                    <span>CONTACT</span>
                  </nav>
                </div>
              </Desktop>

              {/* GNB 메뉴 끝 ------------------------------------------------*/}
              <main className="main">
                <Mobile1>
                  <img src="../img/m/icon-main-m.png" alt="메인 비주얼 (가장작은)"/>
                </Mobile1>
                <Mobile2>
                  <img src="../img/m/icon-main-m1.jpg" alt="메인 비주얼 (5번째 큰)"/>
                </Mobile2>
                <Mobile3>
                  <img src="../img/m/icon-main-m2.jpg" alt="메인 비주얼 (4번째 큰)"/>
                </Mobile3>
                <Tablet>
                  <img src="../img/m/icon-main-t.jpg" alt="메인 비주얼 (3번째 큰)"/>
                </Tablet>
                <Laptop>
                  <img src="../img/m/icon-main-pc.jpg" alt="메인 비주얼 (2번째 큰)"/>
                </Laptop> 
                <Desktop>
                  <img src="../img/m/icon-main-pc.jpg" alt="메인 비주얼 (제일큰)"/>
                </Desktop>
                <div className="text_wrap">
                  <p className="sub_text">(주)웰네트웍스 채용플랫폼</p>
                  <p className="main_text">Your Best<br/>Partners<br/>Wellnetworks</p>
                </div>                
              </main>
            </header>
            <MobileGlobal>
              <div
                id={isSticky ? "sticker" : ""}
                className={
                  isVisible ? "opacity navigation" : "navigation"}
              >
                <div className="top_menu">
                  <span>
                    <Link 
                      to="section1"
                      offset={-250}
                      smooth={true} duration={300}
                    >주요서비스
                    </Link>
                  </span>
                </div>
                <div className="top_menu">
                  <span>
                  <Link 
                    to="section2"
                    offset={-150}
                    smooth={true} duration={300}
                    onClick={() => setIsVisible(false)}
                  >
                    업무방식
                    </Link>
                  </span>
                </div>
                <div className="top_menu"><span>조직구성</span></div>
                <div className="top_menu"><span>걸어온길</span></div>
                <div className="top_menu"><span>CONTACT</span></div>
              </div> 
            </MobileGlobal>
            <Desktop>
              <div
                id="navigation-wrap"
                className={isSticky ? "sticky" : ""}
              >
                <div className="navigation">
                  <div className="top_menu">
                    <Link 
                      to="section1"
                      offset={-250}
                      smooth={true} duration={300}
                    >
                      <span>주요서비스</span>
                    </Link>
                  </div>
                  <div className="top_menu">
                    <span>
                    <Link 
                      to="section2"
                      offset={-150}
                      smooth={true} duration={300}
                      onClick={() => setIsVisible(false)}
                    >
                      업무방식
                      </Link>
                    </span>
                  </div>
                  <div className="top_menu"><span>조직구성</span></div>
                  <div className="top_menu"><span>걸어온길</span></div>
                  <div className="top_menu"><span>CONTACT</span></div>
                </div> 
              </div>            
            </Desktop>

            {/* 주요 서비스 내용 시작  ----------------------------------------------------------------*/}

            <Element name="section1">
              <section id="service">
                <p className="service_subText">주요 서비스</p>
                <p className="service_slogan">MVNO 서비스 유통,<br/>플랫폼 개발 전문기업</p>
                <LaptopBefore>
                  <div className="serviceBox">
                    <div
                      className="wellpps_background serviceBox_1"
                      onClick={handleTextPopOpen}
                      style={textPop ? ({ background: "#1A1A1A", opacity: "0.88" }) : null}
                    >
                      { textPop ? ( 
                      <span
                        className="pop_text"                        
                      >WELLPPS 솔루션을 대리점에게 일부 권한 이양하여 고객의 MVNO 휴대전화 서비스를 더욱 쉽고 빠르게 처리 할 수 있게 합니다. 이와 같은 서비스는 사후 관리 측면에서도 비용 및 시간을 크게 절약 할 수 있는 장점을 가집니다.웰네트웍스는 MVNO 사업 뿐아니라, Top-up서비스(해외선불폰충전), MANGO(국제 전화카드충전)등 사업 확장의 연구와 개발에 몰두하고있습니다.</span> ) : null }
                      <div
                        className="wellpps_fontColor  service_subtext sub_style"
                        style={textPop ? ({ opacity: "0" }) : null}
                      >MVNO 서비스 유통<br/>통합 관리 시스템<br/>
                      </div>

                      <div
                        className="wellpps_fontColor  service_maintext main_style"
                        style={textPop ? ({ opacity: "0" }) : null}
                      >WELLPPS 솔루션
                      </div>
                      <Mobile1>
                        <img
                          src="../img/m/image-wellpps-m.png"
                          alt="wellpps 솔루션 이미지" 
                          style={textPop ? ({ opacity: "0" }) : null}
                        />
                      </Mobile1>
                      <Mobile2>
                        <img
                          src="../img/m/image-wellpps-m1.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop ? ({ opacity: "0" }) : null}
                        />
                      </Mobile2>
                      <Mobile3>
                        <img
                          src="../img/m/image-wellpps-m2.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop ? ({ opacity: "0" }) : null}
                        />
                      </Mobile3>
                      <Tablet>
                        <img
                          src="../img/m/image-wellpps-t.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop ? ({ opacity: "0" }) : null}
                        />
                      </Tablet>
                    </div>
                      {textPop ? (
                    <button className="textPop_close" onClick={handleTextPopClose}>
                      <img src="../img/m/icon-close-m.svg" alt="텍스트 팝업창 닫기" />
                    </button>) : null
                    }                    
                  </div>         
                  <Slider {...settings}>
                    <div>
                      <div className="slider_box">
                        <div className="slider_child purple">
                          <div className="slider_info">
                            <div className="icon_box deep_purple">
                              <img className="purple_1" src="../img/common/icon-emoji-1.png" alt="개통서비스" />
                            </div>
                            <div className="main_text">개통 서비스</div>
                            <div className="sub_text">SK/KT/LG MVNO 고객센터 운영</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box">
                        <div className="slider_child green">
                          <div className="slider_info">
                            <div className="icon_box deep_green">
                              <img className="green_1" src="../img/common/icon-emoji-2.png" alt="충전서비스" />
                            </div>
                            <div className="main_text">충전 서비스</div>
                            <div className="sub_text">예치금 활용 충전서비스 제공
  모든 통신사 선불폰 충전 / 국제전화카드 충전 / 해외선불폰 충전(Top-up Service)</div>
                          </div>                        
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box">
                        <div className="slider_child yellow">
                        <div className="slider_info">
                            <div className="icon_box deep_yellow">
                              <img className="yellow_1" src="../img/common/icon-emoji-3.png" alt="대리점 업무지원" />
                            </div>
                            <div className="main_text">대리점 업무지원</div>
                            <div className="sub_text">개통 실적 조회 및 정산내역서 제공
  각종 서식지 및 홍보물, 유심 지원</div>
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
                      <p className="paragraph">WELLPPS 솔루션을 대리점에게 일부 권한 이양 하여 고객의 MVNO 서비스를<br/> 더욱 쉽고 빠르게 처리 할 수 있게 합니다.<br/><br/>이와 같은 서비스는 사후 관리 측면에서도 비용 및 시간을<br/>크게 절약 할 수 있는 장점을 가집니다.<br/><br/>웰네트웍스는 MVNO 사업 뿐아니라,Top-up서비스(해외선불폰충전),<br/>MANGO(국제 전화카드충전)등사업 확장의 연구와 개발에 몰두하고있습니다.</p>
                      <div className="wellpps_img"><img src="../img/common/image-wellpps-l.png" alt="well_laptop" /></div>
                    </div>
                    <div  className="right_explainBox">
                      <div className="service_card purple">
                        <div className="icon_box deep_purple">
                          <img className="purple_1" src="../img/common/icon-emoji-1.png" alt="개통 서비스" />
                        </div>
                        <div>
                          <p className="main_text">개통 서비스</p>
                          <p className="sub_text">SK/KT/LG MVNO<br/>고객센터 운영</p>
                        </div>
                      </div>
                      <div className="service_card green">
                        <div className="icon_box deep_green">
                          <img className="green_1" src="../img/common/icon-emoji-2.png" alt="충전 서비스" />
                        </div>
                        <div>
                          <p className="main_text">충전 서비스</p>
                          <p className="sub_text_1">예치금 활용 충전서비스 제공<br/>모든 통신사 선불폰 충전 /<br/>국제전화 카드 충전/ <br/>해외선불폰 충전<br/>(Top-up Service)</p>
                        </div>
                      </div>
                      <div className="service_card yellow">
                        <div className="icon_box deep_yellow">
                          <img className="yellow_1" src="../img/common/icon-emoji-3.png" alt="대리점 업무지원" />
                        </div>
                        <div>
                          <p className="main_text">대리점 업무지원</p>
                          <p className="sub_text_1">개통 실적 조회 및 정산내역서 제공<br/>각종 서식지 및 홍보물, 유심 지원</p>
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
                      style={textPop2 ? ({ background: "#1A1A1A", opacity: "0.88" }) : null}
                    >
                      { textPop2 ? ( 
                      <span
                        className="pop_text"                        
                      >현재 폰이슈 사이트는 협업중인 사이트(유통망)로 선불폰 개통, 충전 서비스를 연계하고 있으며, Research&Development 진행중입니다. <br/>향후 다양한 상품과 서비스로 발전 시킬
                      예정입니다</span> ) : null }
                      <div 
                        className="phoneissue_fontColor service_subtext sub_style"
                        style={textPop2 ? ({ opacity: "0" }) : null}
                      >선불폰 충전,
                      <br/>개통 Hub & 쇼핑몰<br/>
                      </div>

                      <div
                        className=" phoneissue_fontColor service_maintext main_style"
                        style={textPop2 ? ({ opacity: "0" }) : null}
                      >PHONEISSUE.COM
                      </div>
                      <Mobile1>
                        <img
                          src="../img/m/image-phoneissue-m.png"
                          alt="wellpps 솔루션 이미지" 
                          style={textPop2 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile1>
                      <Mobile2>
                        <img
                          src="../img/m/image-phoneissue-m1.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop2 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile2>
                      <Mobile3>
                        <img
                          src="../img/m/image-phoneissue-m2.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop2 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile3>
                      <Tablet>
                        <img
                          src="../img/m/image-phoneissue-t.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop2 ? ({ opacity: "0" }) : null}
                        />
                      </Tablet>
                    </div>
                      {textPop2 ? (
                    <button className="textPop_close" onClick={handleTextPopClose2}>
                      <img src="../img/m/icon-close-m.svg" alt="텍스트 팝업창 닫기" />
                    </button>) : null
                    }                    
                  </div>      
                </LaptopBefore>
                <LaptopBefore>
                  <div className="serviceBox" style={{ marginTop: "46px" }}>
                    <div
                      className="ppspay_background serviceBox_1"
                      onClick={handleTextPopOpen3}
                      style={textPop3 ? ({ background: "#1A1A1A", opacity: "0.88" }) : null}
                    >
                      { textPop3 ? ( 
                      <span
                        className="pop_text"                        
                      >선불폰을 사용중인 고객 누구나 24시간 언제든 요금 충전 서비스를 제공합니다.
                      가상계좌/신용카드를 이용하여 충전 가능하며, 별도의 로그인 없이 휴대전화 번호만으로 요금제 충전 및 조회를 해소 할 수 있습니다. 충전 결과 조회 기능으로 충전상태조회 / 대체충전 시도 / 환불 신청을 가능하게 함으로써 고객 편의성을 증대하였습니다.PPSPAY는 나날이 고객 사용/충전량이 꾸준히 증가하고 있는 추세로 지속성장하고있습니다</span> ) : null }
                      <div 
                        className="ppspay_fontColor service_subtext sub_style"
                        style={textPop3 ? ({ opacity: "0" }) : null}
                      >선불폰의
                      <br/>쉽고 빠른 충전<br/>
                      </div>

                      <div
                        className=" ppspay_fontColor service_maintext main_style"
                        style={textPop3 ? ({ opacity: "0" }) : null}
                      >PPSPAY
                      </div>
                      <Mobile1>
                        <img
                          src="../img/m/image-ppspay-m.png"
                          alt="wellpps 솔루션 이미지" 
                          style={textPop3 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile1>
                      <Mobile2>
                        <img
                          src="../img/m/image-ppspay-m1.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop3 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile2>
                      <Mobile3>
                        <img
                          src="../img/m/image-ppspay-m2.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop3 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile3>
                      <Tablet>
                        <img
                          src="../img/m/image-ppspay-t.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop3 ? ({ opacity: "0" }) : null}
                        />
                      </Tablet>
                    </div>
                      {textPop3 ? (
                    <button className="textPop_close" onClick={handleTextPopClose3}>
                      <img src="../img/m/icon-close-m.svg" alt="텍스트 팝업창 닫기" />
                    </button>) : null
                    }                    
                  </div>      
                </LaptopBefore>
                <LaptopBefore>
                  <div className="serviceBox" style={{ marginTop: "46px" }}>
                    <div
                      className="wellnanum_background serviceBox_1"
                      onClick={handleTextPopOpen4}
                      style={textPop4 ? ({ background: "#1A1A1A", opacity: "0.88" }) : null}
                    >
                      { textPop4 ? ( 
                      <span
                        className="pop_text"                        
                      >현대사회는 바야흐로 스마트 통신의 시대입니다. 하지만 모든 사람들이 그 혜택을 누리진 않습니다. 우리의 생각보다 통신을 이용하기 어려운 사람들이 많습니다.웰네트웍스는 이러한 사람들에게 통신의 혜택을 나누고자 합니다. 통신나눔을 통해 기업의 사회적 책임을 이행하고 보다 많은 이들이 통신의 사각지대에서 벗어날 수 있도록 도울 것입니다.복지 단체 및 시설과 협약하여 선불휴대
                      전화 개통서비스를 제공합니다.</span> ) : null }
                      <div 
                        className="wellnanum_fontColor service_subtext sub_style"
                        style={textPop4 ? ({ opacity: "0" }) : null}
                      >통신 취약계층을 위한
                      <br/>최선의 선택<br/>
                      </div>

                      <div
                        className=" wellnanum_fontColor service_maintext main_style"
                        style={textPop4 ? ({ opacity: "0" }) : null}
                      >통신나눔
                      </div>
                      <Mobile1>
                        <img
                          src="../img/m/image-wellnanum-m.png"
                          alt="wellpps 솔루션 이미지" 
                          style={textPop4 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile1>
                      <Mobile2>
                        <img
                          src="../img/m/image-wellnanum-m1.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop4 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile2>
                      <Mobile3>
                        <img
                          src="../img/m/image-wellnanum-m2.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop4 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile3>
                      <Tablet>
                        <img
                          src="../img/m/image-wellnanum-t.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop4 ? ({ opacity: "0" }) : null}
                        />
                      </Tablet>
                    </div>
                      {textPop4 ? (
                    <button className="textPop_close" onClick={handleTextPopClose4}>
                      <img src="../img/m/icon-close-m.svg" alt="텍스트 팝업창 닫기" />
                    </button>) : null
                    }                    
                  </div>      
                </LaptopBefore> 
                <LaptopBefore>
                  <div className="serviceBox" style={{ marginTop: "46px" }}>
                    <div
                      className="lab_background serviceBox_1"
                      onClick={handleTextPopOpen5}
                      style={textPop5 ? ({ background: "#1A1A1A", opacity: "0.88" }) : null}
                    >
                      { textPop5 ? ( 
                      <span
                        className="pop_text"                        
                      >사업의 발전을 위해 기업부설연구소를 설립하였습니다. 현재 연구과제로 MVNO 사업 관련 연구를 진행하고있지만 추후 다양한 분야로 사업을 확장시킬 계획입니다.</span> ) : null }
                      <div 
                        className="lab_fontColor service_subtext sub_style"
                        style={textPop5 ? ({ opacity: "0" }) : null}
                      >다양한 플랫폼 개발을 위한
                      <br/>연구소 설립<br/>
                      </div>

                      <div
                        className="lab_fontColor service_maintext main_style"
                        style={textPop5 ? ({ opacity: "0" }) : null}
                      >기업부설연구소
                      </div>
                      <Mobile1>
                        <img
                          src="../img/m/image-lab-m.png"
                          alt="wellpps 솔루션 이미지" 
                          style={textPop5 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile1>
                      <Mobile2>
                        <img
                          src="../img/m/image-lab-m1.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop5 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile2>
                      <Mobile3>
                        <img
                          src="../img/m/image-lab-m2.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop5 ? ({ opacity: "0" }) : null}
                        />
                      </Mobile3>
                      <Tablet>
                        <img
                          src="../img/m/image-lab-t.png"
                          alt="wellpps 솔루션 이미지"
                          style={textPop5 ? ({ opacity: "0" }) : null}
                        />
                      </Tablet>
                    </div>
                      {textPop5 ? (
                    <button className="textPop_close" onClick={handleTextPopClose5}>
                      <img src="../img/m/icon-close-m.svg" alt="텍스트 팝업창 닫기" />
                    </button>) : null
                    }                    
                  </div>
                  <Slider {...settings}>
                    <div>
                      <div className="slider_box">
                        <div className="slider_child purple">
                          <div className="slider_info">
                            <div className="icon_box deep_purple">
                              <img className="purple_1_1" src="../img/common/icon-emoji-4.png" alt="개통서비스" />
                            </div>
                            <div className="main_text">MVNO 선불폰 특화<br/>고객관리 전산 시스템 개발</div>
                            <div className="sub_text">선불폰 판매관리를 위한 주문통합<br/>관리 및 고객관리 전산 시스템 개발</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box">
                        <div className="slider_child green">
                          <div className="slider_info">
                            <div className="icon_box deep_green">
                              <img className="green_1" src="../img/common/icon-emoji-5.png" alt="충전서비스" />
                            </div>
                            <div className="main_text">충전 API 개발</div>
                            <div className="sub_text">MVNO 통신사 선불폰 충전 API 서버 개발</div>
                          </div>                        
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box">
                        <div className="slider_child yellow">
                        <div className="slider_info">
                            <div className="icon_box deep_yellow">
                              <img className="yellow_1" src="../img/common/icon-emoji-6.png" alt="대리점 업무지원" />
                            </div>
                            <div className="main_text">고객 분석 연구</div>
                            <div className="sub_text">사례분석 및 사업 유입량 분석 등<br/>고객 분석 마케팅 연구</div>
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
                <p className="service_subText">업무방식</p>
                <p className="service_slogan">우리가 일하는 방식</p>
                <LaptopBefore>
                  <Slider {...settings2}>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child">
                            <img className="workflow_img" src="../img/common/icon-workMethod-1.svg" alt="1번슬라이드" />
                            <div className="main_text">Agile</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child">
                            <img className="workflow_img" src="../img/common/icon-workMethod-2.png" alt="2번슬리이드" />
                            <div className="main_text" style={{ marginTop: "30px" }}>Kanban</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child slider_blueBack">
                            <img className="workflow_img" src="../img/common/icon-workMethod-3.svg" alt="3번슬리이드" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child">
                            <img className="workflow_img" src="../img/common/icon-workMethod-4.svg" alt="4번슬리이드" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child">
                            <img className="workflow_img" src="../img/common/icon-workMethod-5.svg" alt="5번슬리이드" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child">
                            <img className="workflow_img" src="../img/common/icon-workMethod-6.svg" alt="6번슬리이드" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child slider_purpleBack">
                            <img className="workflow_img" src="../img/common/icon-workMethod-7.svg" alt="7번슬리이드" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child">
                            <img className="workflow_img" src="../img/common/icon-workMethod-8.svg" alt="8번슬리이드" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="slider_box2">
                        <div className="slider_child">
                            <img className="workflow_img" src="../img/common/icon-workMethod-9.png" alt="9번슬리이드" />
                        </div>
                      </div>
                    </div>                                                                                
                  </Slider>
                  <div className="workflow_para">웰네트웍스는 모든것에 우연은 없다는 일념으로 데이터 분석 기반 업무에 초점을 두고 있습니다. 또한, 다양한 협업툴을 적극 활용하여 업무 집중도를 높이는 데에 기여 하고 있으며, 짧은 주기의 계획, 실행, 피드백이 이루어지는 에자일 조직으로 성장중입니다.</div>
                </LaptopBefore>       
              </section>      
            </Element>  
            <Element name="section3">
              <section id="service">
                <p className="service_subText">조직구성</p>
                <p className="service_slogan">우리의 구성원들</p>
                <LaptopBefore>
                  <div className="team_card team_card_margin">
                    <div className="team_wrap">
                        <div className="emoji"><img src="../img/common/icon-emoji-7.png" alt="마케팅1팀" /></div>                      
                        <div className="team_info">
                          <p className="team_main">마케팅 1팀(영업)</p>
                          <p className="team_sub">분석 기반 오프라인 B2B 영업<br/>영업 데이터 수집</p>
                        </div>
                     </div>
                  </div>
                  <div className="team_card">
                    <div className="team_wrap">
                        <div className="emoji"><img src="../img/common/icon-emoji-8.png" alt="마케팅1팀" /></div>                      
                        <div className="team_info">
                          <p className="team_main">마케팅 2팀(기획분석)</p>
                          <p className="team_sub">분석 기반 마케팅<br/>데이터 수집 및 분석<br/>데이터 기반 업무 효율성 분석</p>
                        </div>
                     </div>
                  </div>
                  <div className="team_card">
                    <div className="team_wrap">
                        <div className="emoji"><img src="../img/common/icon-emoji-9.png" alt="마케팅1팀" /></div>                      
                        <div className="team_info">
                          <p className="team_main">CMS팀</p>
                          <p className="team_sub">분석 기반 고객응대<br/>고객응대 데이터 수집</p>
                        </div>
                     </div>
                  </div>
                  <div className="team_card">
                    <div className="team_wrap">
                        <div className="emoji"><img src="../img/common/icon-emoji-10.png" alt="마케팅1팀" /></div>                      
                        <div className="team_info">
                          <p className="team_main">기업 부설 연구소</p>
                          <p className="team_sub">분석 기반 서비스 개발<br/>업무 및 서비스 자동화 연구<br/>인적 오류 제거 연구</p>
                        </div>
                     </div>
                  </div>                                                                         
                </LaptopBefore>                       
              </section>  
            </Element>  
            <Element name="section4">
              <section id="service">
                <p className="service_subText">걸어온길</p>
                <p className="service_slogan">다양한 혁신과 서비스개선,<br/>지속적인 성장을 해왔습니다.</p>
                <LaptopBefore>
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
                          통신 취약 계층을 위한 통신나눔 프로젝트 시행 대리점용(B to B) 선불 전화 통합 요금 충전 및 대리점 관리 사이트 wellpps.com 서비스 개시
                        </span>
                        <div className="month_img">
                          <img src="../img/m/icon-history1-m.svg" alt="통신나눔 아이콘" />
                        </div>
                      </div>                      
                    </div> 
                    <div className="year">
                      <div className="year_text">2015</div>
                      <div className="month_wrap">
                        <span className="month">· 11</span>
                        <span className="sub_text">휴대폰 유통 및 선불폰 충전서비스 Phoneissue 브랜드 상표 특허 등록 완료
                        </span>
                        <div className="month_img">
                          <img src="../img/m/icon-history2-m.svg" alt="폰이슈 아이콘" />
                        </div>
                      </div>                      
                    </div>  
                    <div className="year">
                      <div className="year_text">2020</div>
                      <div className="month_wrap">
                        <span className="month">· 02</span>
                        <span className="sub_text">일반고객용(B to C) 선불 전화 통합 요금 충전 서비스 PPSPAY 개시
                        </span>
                        <div className="month_img">
                          <img src="../img/m/icon-history3-m.svg" alt="ppspay 아이콘" />
                        </div>
                      </div>                      
                    </div>
                    <div className="year">
                      <div className="year_text">2021</div>
                      <div className="month_wrap">
                        <span className="month">· 01</span>
                        <span className="sub_text">해외 Top-up 서비스 전문기업 DING 업무 협약 및 원격 충전서비스 개시</span>
                        <div className="month_img">
                          <img src="../img/m/icon-history4-m.svg" alt="ding 아이콘" />
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
                      <div className="month_wrap">
                        <span className="month">· 02</span>
                        <span className="sub_text">(주)PTSK 업무 제휴 계약</span>
                        <div className="month_img">
                          <img style={{ padding: "0 10px" }} src="../img/m/icon-history5-m.svg" alt="ptsk 아이콘" />
                        </div>
                      </div>
                      <div className="month_wrap">
                        <span className="month">· 03</span>
                        <span className="sub_text">일반 고객용 (B to C) 선불 전화 통합 요금 충전 서비스 PPSPAY 특허 등록 완료</span>
                        <div className="month_img">
                          <img src="../img/m/icon-history3-m.svg" alt="ppspay 아이콘" />
                        </div>
                      </div>
                      <div className="month_wrap">
                        <span className="month">· 현재</span>
                        <span className="sub_text">국내 주요 MVNO 사업자와 계약 체결, 강력한 파트너십으로 탁월한 성과를 보여주고 있습니다.</span>
                      </div>                                                                  
                    </div>                            
                  </div>
                </LaptopBefore>
              </section>                   
            </Element>  
            <Element name="section5">
              <section id="service">
                <p className="service_subText">CONTACT</p>
                <p className="service_slogan">우리와 함께 하는 방법</p>
                <LaptopBefore>
                  <div className="tab_wrap">
                    <div className="tab_bar">
                      <motion.div
                        onClick={() => handleTabClick(0)}
                        whileTap={{ scale: 0.9 }}
                        className={activeTab === 0 ? 'active' : ''}
                      >
                        <span className={activeTab === 0 ? "active_tab active_margin" : "active_margin"}>오시는길</span>
                      </motion.div>
                      <motion.div
                        onClick={() => handleTabClick(1)}
                        whileTap={{ scale: 0.9 }}
                        className={activeTab === 1 ? 'active' : ''}
                      >
                        <span className={activeTab === 1 ? "active_tab active_margin" : "active_margin"}>업무제휴</span>
                      </motion.div>
                    </div>
                    <div className="">
                      {/* 각 탭에 해당하는 컨텐츠 */}
                      {activeTab === 0 && <div className="address_box">
                        <div className="address_wrap">
                          <div className="address_list">
                            <span className="title">주소</span>
                            <span className="info">경기도 고양시 일산동구 일산로67,명성프라자 502호</span>
                          </div>
                          <div className="address_list">
                            <span className="title">Tel.</span>
                            <span className="info">1566-0261</span>
                          </div>
                          <div className="address_list">
                            <span className="title">운영시간</span>
                            <span className="info">10:00 ~ 20:00 (연중무휴)</span>
                          </div>                                             
                        </div>
                      </div>}
                      {activeTab === 1 && <div>Tab 2 Content</div>}
                    </div>
                  </div>
                </LaptopBefore>                
              </section>
            </Element>       
          </>
  );
}

export default App;


