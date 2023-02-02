import styled from "styled-components";

export const SemiBold42 = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: #fcfcfc;
  color: white;

  @media (max-width: 575px) {
    font-size: 28px;
    padding-bottom: 24px;
    
  }
  @media (max-width: 360px) {
    font-size: 22px;
  }
`;
export const SemiBold32 = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #0c1f33;

  @media (max-width: 575px) {
    font-size: 24px;
    line-height: 30px !important;
  }
`;

export const Regular16 = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #0c1f33;
  @media (max-width: 575px) {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const SemiBold18 = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #0c1f33;
  @media (max-width: 575px) {
    font-size: 18px;
  }
`;

export const Regular14 = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #0c1f33;
  line-height: 27px;
`;

export const Regular24=styled.div`
font-size: 24px;
font-weight: 400;
line-height: 30px;

@media (max-width:576px){
  font-size: 18px;
  line-height:21px
  
}
@media(min-width:576px) and (max-width:768px)
{
  font-size: 18px;
}
`

export const SemiBold16 = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #0c1f33;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

export const SemiBold14 = styled.div`
  font-size: 14px;
  font-weight: 600;
  
  @media (max-width: 575px) {
    font-size: 12px;
  }
`;
export const BlueTag = styled.p`
  color: #1c88ff;
`;

export const B5 = styled.div`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.5;
  color: inherit;
  font-size: 16px;
  word-spacing: 0.1rem;
  letter-spacing: -0.01rem;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

export const B7 = styled.div`
  margin-top: 0;
  /* margin-bottom: 0.5rem; */
  font-weight: 600;
  line-height: 1.2;
  color: inherit;
  font-size: 14px;
  word-spacing: 0.1rem;
  letter-spacing: -0.01rem;
`;

export const Ahvr = styled.div`
  font-size: 14px;
  /* width: 50%; */
  font-style: inherit;
  line-height: inherit;
  color: #5f6c7b;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: #1c88ff;
  }
`;

export const Ahvr1 = styled.div`
  font-size: 16px;
  font-style: inherit;
  line-height: inherit;
  color: #0c1f33;
  transition: 0.2s all ease-in-out;
`;
export const Plast = styled.div`
  margin-bottom: -10px;
  margin-top: -10px;
  line-height: 0.5rem;
  color: inherit;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 10px;
  }
`;