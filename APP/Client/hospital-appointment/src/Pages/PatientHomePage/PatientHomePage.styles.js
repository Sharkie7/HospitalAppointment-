import styled from "styled-components";

export const Main = styled.div`
  height: 100%;
  display: flex;
  width: 100vw;
`;

export const MainRight = styled.div`
  width: 100%;
  overflow-y: auto;
`;

export const TitleMain = styled.div`
  margin-top: 40px;
  font-family: sans-serif;
  font-size: 25px;
  font-weight: bold;
`;

export const SlotBookingMain = styled.div`
  border: 2px solid #ebecf0;
  width: 90%;
  background: white;
  border-radius: 15px;
  margin-top: 20px;
  padding: 30px;
  overflow-y: auto;
  margin-bottom: 100px;
`;

export const SlotText = styled.div`
  font-family: sans-serif;
  font-size: 20px;
`;

export const DateInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  font-family: sans-serif;
`;
