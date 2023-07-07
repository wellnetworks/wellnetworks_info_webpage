import React from 'react'
import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1400 });
  return isDesktop ? children : null;
};

export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1399 });
  return isLaptop ? children : null;
};

export const LaptopBefore = ({ children }) => {
  const isLaptopBefore = useMediaQuery({ minWidth: 360,  maxWidth: 1023 });
  return isLaptopBefore ? children : null;
};

export const LaptopAfter = ({ children }) => {
  const isLaptopAfter = useMediaQuery({ minWidth: 1023 });
  return isLaptopAfter ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

export const Mobile3 = ({ children }) => {
  const isMobile3 = useMediaQuery({ minWidth: 641,  maxWidth: 767 });
  return isMobile3 ? children : null;
};

export const Mobile2 = ({ children }) => {
  const isMobile2 = useMediaQuery({ minWidth: 452,  maxWidth: 640 });
  return isMobile2 ? children : null;
};

export const Mobile1 = ({ children }) => {
  const isMobile1 = useMediaQuery({ minWidth: 360,  maxWidth: 451 });
  return isMobile1 ? children : null;
};

export const MobileGlobal = ({ children }) => {
  const isMobileGlobal = useMediaQuery({ minWidth: 360,  maxWidth: 1399 });
  return isMobileGlobal ? children : null;
};

// mobile이 아닐 때만 출력되는 컴포넌트
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768  });
  return isNotMobile ? children : null;
};