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
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 411px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: NotoSansKR-Bold;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  font-family: NotoSansKR-Regular;
  line-height: 20px;
`;

const CloseButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 22px;
  margin: 30px 0 20px 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: NotoSansKR-Bold;
  font-size: 16px;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
const Row = styled.tr`
  &.title {
    font-family: NotoSansKR-Bold;
    font-size: 14px;
    color: #1a1a1a;
    background-color: rgba(240,240,240, 1.0);
  }
  &.child {
    font-family: NotoSansKR-Regular;
    font-size: 14px;
    color: #1a1a1a;
  }
`;

const Cell = styled.td`
  padding: 6px;
  border: 1px solid #ccc;
  width: 20%;
`;

const SemiText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  margin-top: 20px;
  font-family: NotoSansKR-Regular;
  font-size: 14px;

  & .title {
  font-family: NotoSansKR-bold;
  margin-bottom: 4px;
  }
  & .explain {
    
  }  
`;

const SemiText2 = styled.div`
  margin-top: 40px;
  font-family: NotoSansKR-Regular;
  font-size: 14px;  
  text-align: left;
`;

// 1.수집항목: 업체명 , 성함, 이메일, 연락처
// 2.수집목적: (주)웰네트웍스 업무제휴 상담
// 3.보유기간: 상담완료 후 또는 계약 성사시 계약 만료시점

const PopupComponent = ({ open, close }) => {

  return (
    <div>
      {open && (
        <PopupContainer>
          <PopupContent>
            <Title>개인정보 수집 동의</Title>
            {/* <Text>(주)웰네트웍스의 업무제휴 상담요청을<br/>받기 위해 개인정보를 수집하는것에 동의합니다.<br/></Text> */}
            <Text>(주)웰네트웍스와의 업무제휴 상담 요청을 위한<br/>개인정보 수집에 동의합니다.</Text>
            <Table>
              <Row className='title'>
                <Cell>수집목적</Cell>
                <Cell>선택항목</Cell>
                <Cell>필수항목</Cell>
                {/* <Cell>보유<br/>이용<br/>기간</Cell> */}
              </Row>
              <Row className='child'>
                <Cell>업무제휴<br/>상담</Cell>
                <Cell>업체명</Cell>
                <Cell>성함<br/>이메일<br/>연락처</Cell>
                {/* <Cell>행 2, 열 4</Cell> */}
              </Row>
            </Table>
            <SemiText>
              <span className="title">보유 · 이용기간<span style={{ color: "red" }}> *</span></span>
              <span className="explain">상담완료 후 또는 계약 성사시 계약 만료시점</span>
            </SemiText>
            <SemiText2>
              개인정보 수집에 동의하시는 것은 업무 제휴 서비스 이용에 필수입니다. 동의하지 않을 경우, 상담 요청이 불가하오니 이점 양해 부탁드립니다.
            </SemiText2>
            <CloseButton onClick={close}>닫기</CloseButton>
          </PopupContent>
        </PopupContainer>
      )}
    </div>
  );
};

export default PopupComponent;