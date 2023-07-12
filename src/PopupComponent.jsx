import React, { useState } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
  box-sizing: border-box;
  padding: 20px;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  font-family: NotoSansKR-Bold;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  font-family: NotoSansKR-Regular;
  line-height: 24px;
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 22px;
  margin: 10px 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: NotoSansKR-Bold;
  font-size: 16px;
`;

const PopupComponent = ({ open, close }) => {

  return (
    <div>
      {open && (
        <PopupContainer>
          <PopupContent>
            <Title>개인정보 수집동의</Title>
            <Text>(주)웰네트웍스는 업무제휴 상담요청을<br/>받기 위해 개인정보를 수집하는것에 동의합니다.<br/><br/>
            1.수집항목: 업체명 , 성함, 이메일, 연락처<br/>
            2.수집목적: (주)웰네트웍스 업무제휴 상담<br/>
            3.보유기간: 상담완료 후 또는 계약 성사시 계약 만료시점</Text>
            <CloseButton onClick={close}>닫기</CloseButton>
          </PopupContent>
        </PopupContainer>
      )}
    </div>
  );
};

export default PopupComponent;