import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  width: 470px;
  overflow: hidden;
  background-color: white;
  padding-left: 20px;
  padding-right: 2 0px;
  display: flex;
  flex-flow: column;
  height: 440px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export const SemiBold = styled.p`
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const NormalFont = styled.p`
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const Normal = styled.p`
  font-size: 14px;
`;

export const NormalBold = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const Medium = styled.p`
  font-size: 65px;
  font-weight: 600;
  color: black;
`;

export const Bold = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: black;
`;
export const SmallCard = styled.div`
  overflow: hidden;
  background-color: white;
  padding-left: 15px;
  padding: 10px;
  display: flex;
  flex-flow: column;
  height: 104px;
  width: 570px;
`;
export const Temp = styled.div`
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const BoldFont = styled.div`
  font-size: 16px;
  font-weight: bold;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const BtnForm = styled.button`
  width: 189px;
  height: 48px;
  border-radius: 8px;
  background-color: #1c88ff;
  color: white;
  border: none;
  margin-left: 200px !important;
  @media (max-width: 768px) {
    margin-left: 200px !important;
  }
  @media (max-width: 992px) {
    margin-left: 225px !important;
  }
  @media (max-width: 576px) {
    margin-left: 130px !important;
  }
  @media (min-width: 1200px) {
    margin-left: 140px !important;
  }
  @media (max-width: 365px) {
    margin-left: 55px !important;
  }
  @media (max-width: 295px) {
    margin-left: 20px !important;
  }
`;
export default BtnForm;




export const FontSizingBold = styled.p`
  font-size: 42px;
  color: white;
  font-weight: 600;
`;

