import styled from "styled-components";

export const HeaderCont = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 2px solid #ebecf0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hospital = styled.div`
  margin-left: 25px;
  font-size: 25px;
  font-family: sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const HospitalLogin = styled.div`
  border: 2px solid #7783ea;
  height: fit-content;
  border-radius: 30px;
  padding: 8px;
  color: #7783ea;
  font-weight: 700;
  margin-right: 25px;
  cursor: pointer;
  font-family: sans-serif;
  &:hover {
    background: #7783ea;
    border-color: #8e8eff;
    color: white;
  }
`;

export const LogoImage = styled.img`
  height: 50px;
  margin-right: 16px;
`;
