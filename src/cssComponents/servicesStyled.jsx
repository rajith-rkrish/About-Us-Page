import styled from "styled-components";

export const Ccontainer = styled.div`
  width: 100%;
  padding-right: 0.9375rem !important;
  padding-left: 0.9375rem !important;
  margin-right: auto;
  margin-left: auto;

  /* @media (min-width: 375px) {
    margin-left: 17px;
    margin-right: 17px;
  } */
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

export const SearchBarr = styled.input`
  padding: 2.5px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: rgba(12, 31, 51, 0.02);
  border: 1px solid rgba(12, 31, 51, 0.3);
  /* width: 453px; */
  width: 77%;
  height: 59px;
  outline: none;
  font-size: 16px;
  font-weight: 400;
  color: #5f6c7b;
  border-radius: 8px 0 0 8px;
`;

export const SearchSend = styled.button`
  padding: 3px;
  height: 59px;
  /* width: 117px; */
  width: 20%;
  border-radius: 0 8px 8px 0;
  background-color: rgba(12, 31, 51, 0.12);
  color: #5f6c7b;
  font-weight: 600;
  font-size: 14px;
  border: 1px solid rgba(12, 31, 51, 0.3);
  border-left: transparent;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: #fcfcfc;
    background-color: #1c88ff;
  }
`;
