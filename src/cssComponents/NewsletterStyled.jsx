import styled from "styled-components";
import {Send} from "styled-icons/material";

export const Sendd = styled(Send)`
  width: 25px;
  height: 25px;
  padding: 2px;
`;
export const Foorm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: transparent;
  border-radius: 10px;
`;
export const Div = styled.div`
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const Input = styled.input`
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  width: 85%;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: #b7c4cf;
  border-radius: 5px;
`;
export const Btn = styled.button`
  padding: 2px;
  width: 15%;
  border-radius: 0 5px 5px 0;
  background-color: transparent;
  color: white;
  border: transparent;
  &:hover {
    color: #1c88ff;
  }
`;
