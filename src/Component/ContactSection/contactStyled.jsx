import styled from "styled-components";

export const FormSpacings = styled.div`
  padding-bottom: 100px;

  @media (max-width: 375px) {
    padding-bottom: 100px;
    padding-left: 0px;
  }
  @media (min-width: 375px) {
    padding-bottom: 100px;
    padding-left: 0px;
  }
  @media (min-width: 768px) {
    padding-bottom: 90px;
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: 992px) {
    padding-bottom: 80px;
    padding-top: 80px;
    padding-left: 25px;
  }
  @media (min-width: 1200px) {
    padding-bottom: 70px;
    padding-top: 70px;
    padding-left: 55px;
  }
  @media (min-width: 1400px) {
    padding-bottom: 60px;
    padding-top: 60px;
    padding-left: 160px;
  }
`;

export const Texxt = styled.div`
  color: #fcfcfc;
  padding-top: 100px;
  /* padding-bottom: 352px; */
  /* width: 45%; */

  @media (max-width: 375px) {
    padding-top: 100px;
  }
  @media (min-width: 375px) {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @media (min-width: 768px) {
    padding-bottom: 100px;
  }
  @media (min-width: 992px) {
    padding-top: 180px;
    padding-bottom: 200px;
  }
  @media (min-width: 1200px) {
    padding-top: 210px;
    padding-bottom: 250px;
  }
  @media (min-width: 1400px) {
    padding-top: 260px;
    padding-bottom: 320px;
  }
`;

export const Head = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: #fcfcfc;
`;

export const SubHead = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #fcfcfc;
`;

export const FormCard = styled.div`
  background-color: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.3px);
  -webkit-backdrop-filter: blur(4.3px);
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  height: 643px;
  padding: 30px;

  @media (min-width: 375px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
  @media (min-width: 1400px) {
    width: 420px;
  }
`;

export const FrmName = styled.input`
  height: 40px;
  /* width: 350px; */
  width: 100%;
  font-size: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fcfcfc;
  padding-left: 25px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 4px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  /* border: 1px solid rgba(255, 255, 255,1); */
  border: transparent;
`;

export const Heading = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #fcfcfc;
`;

export const FrmBtn = styled.button`
  width: 150px;
  /* height: 36px; */
  padding-top: 7px;
  padding-bottom: 9px;
  padding-left: 16px;
  padding-right: 12px;
  background-color: #1c88ff;
  color: #fcfcfc;
  font-size: 14px;
  font-weight: 400;
  border-radius: 4px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #1c88ff;
    background-color: transparent;
    box-shadow: 0 1px 10px #0c1f3383;
  }
`;
