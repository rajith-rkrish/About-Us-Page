import styled from "styled-components";
// import cards from "../../Assets/photos/svg/cards.svg";
export const DiffCard = styled.div`
  height: 270px;
  width: 270px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  background-color: transparent;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ServiceMainCard = styled.div`
  width: 380px;
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 35px;
  padding-bottom: 35px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.16);

  &:hover {
    box-shadow: 0px 1px 3px 1px rgb(28 136 255 / 30%);
    /* 0px 2px 1px 0px rgba(28, 136, 255, 0.5); */
  }
  @media (max-width: 375px) {
    width: 100%;
    margin-left: 6px;
  }
  @media (min-width: 375px) {
    width: 100%;
    margin-left: 6px;
  }
  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1200px) {
    height: 586px;
  }
  @media (min-width: 1400px) {
    height: auto;
  }
`;

export const Nave = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  flex-wrap: wrap;
`;

export const Seperater = styled.div`
  border-right: 1.7px solid;
  border-right-color: rgba(255, 255, 255, 0.333);
`;

export const CaseMainCard = styled.div`
  width: 270px;
  background-color: white;
  padding-left: 19px;
  padding-right: 17px;
  padding-top: 79.5px;
  padding-bottom: 63px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.16);

  /* &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 1px 0px rgba(28, 136, 255, 0.5);
  } */

  @media (max-width: 375px) {
    width: 100%;
    margin-left: 6px;
  }

  @media (min-width: 375px) {
    width: 100%;
    margin-left: 6px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CaseCard1 = styled.div`
  width: 100%;
  background-color: white;
  padding-left: 19px;
  padding-right: 17px;
  padding-top: 79.5px;
  padding-bottom: 63px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.16);
  height: 215px;

  /* &:hover {
   
    box-shadow: 0px 2px 1px 0px rgba(28, 136, 255, 0.5);
    background-image: url({cards}) !important;
    width: 270px;
    height: 304px;
  } */

  @media (max-width: 375px) {
    width: 100%;
    margin-left: 6px;
    margin-top: 100px;
  }

  @media (min-width: 375px) {
    width: 100%;
    margin-left: 6px;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
