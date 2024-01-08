import styled from "styled-components";

export const MainCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SignIn = styled.div`
  border: 2px solid #ebecf0;
  height: fit-content;
  margin-top: 200px;
  padding: 20px;
  width: 400px;
  background: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Welcome = styled.div`
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
`;
export const SignInText = styled.div`
  font-family: sans-serif;
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const Error = styled.div`
  display: flex;
  background: #da5b70d6;
  padding: 10px;
  align-items: center;
  border-radius: 10px;
  font-family: sans-serif;
`;
