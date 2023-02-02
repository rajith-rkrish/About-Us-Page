import styled from "styled-components";

// import First from "./bgimg.jpg";
// import second from "./second.svg";
// import { ShareForward } from "styled-icons/remix-fill";

export const Btn1 = styled.button`
  border-radius: 8px;
  border: 2px solid #1c88ff;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 600;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;
  position: absolute;
  top: 57%;
  left: 22%;

  &:hover {
    /* background-color: #0c1f33; */
    background-color: #1c88ff;
  }
`;

// button large without icon
export const BtnLg = styled.button`
  border-radius: 8px;
  border: 2px solid #1c88ff;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 400;
  height: 56px;
  padding-left: 24px;
  padding-right: 24px;

  &:hover {
    background-color: #1c88ff;
  }
`;

// button medium without icon
export const BtnMd = styled.button`
  border-radius: 8px;
  border: 2px solid #1c88ff;
  background-color: transparent;
  color: white;
  font-size: 16px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    background-color: #1c88ff;
  }
`;

// export const Who1 = styled.div`
//   background-image: url(${First});
//   background-repeat: no-repeat;
//   position: relative;
//   overflow: hidden;
//   height: 771px;
// `;
// export const Who2 = styled.div`
//   background-image: url(${second});
//   background-repeat: no-repeat;
//   position: relative;
//   left: 39%;
//   overflow: hidden;
//   height: 771px;
// `;

export const Head1 = styled.div`
  font-size: 42px;
  font-weight: 600;
`;

export const Head2 = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

export const Head3 = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const CaseCards = styled.div`
  height: 304px;
  width: 270px;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.16);

  &:hover {
    box-shadow: 0 1px 2px 0 #1c88ff;
  }
  @media (max-width: 1400px) {
    width: 450px;
  }
  @media (max-width: 1200px) {
    width: 800px;
  }
  @media (max-width: 992px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const CaseContent = styled.div`
  padding-left: 30px;
`;
export const Font14 = styled.div`
  font-size: 14px;
`;
export const CaseRead = styled.div`
  padding-top: 15px;
  font-size: 12px;
  font-weight: 600;
  color: #1c88ff;
  cursor: pointer;

  &hover {
    color: #0c1f33;
  }
`;
export const BgNum = styled.div`
  position: relative;
  left: 10px;
  bottom: 10px;
  font-size: 89px;
  color: rgba(12, 31, 51, 0.3);
`;

export const BlogCards = styled.div`
  height: 480px;
  width: 370px;
  background-color: white;
  border-radius: 8px;
`;

export const Ccontainer = styled.div`
  --bs-gutter-x: 1.875rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 528px;
  }
  @media (min-width: 768px) {
    max-width: 682px;
  }
  @media (min-width: 992px) {
    max-width: 825px;
  }
  @media (min-width: 1200px) {
    max-width: 962.5px;
  }
  @media (min-width: 1400px) {
    max-width: 1170px;
  }
`;

export const BlogContent = styled.div`
  padding-left: 40px;
  padding-right: 40px;
`;
export const Font12 = styled.div`
  font-size: 12px;
  color: rgba(95, 108, 123, 0.6);
`;
export const BlogRead = styled.div`
  padding-top: 30px;
  font-size: 12px;
  font-weight: 600;
  color: #1c88ff;
  cursor: pointer;

  &hover {
    color: #0c1f33;
  }
`;

export const Shared = styled.button`
  padding: 2px;
  background-color: transparent;
  color: #0c1f33;
  border: none;

  &:hover {
    color: #1c88ff;
  }
`;

// export const Sendd = styled(ShareForward)`
//   height: 30px;
//   width: 30px;
//   padding: 2px;
// `;
