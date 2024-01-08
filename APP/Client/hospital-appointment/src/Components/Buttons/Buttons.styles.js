import styled from "styled-components";

export const Button = styled.div`
  border: ${(props) => (props.disabled ? "2px solid lightgray" : "2px solid #7783ea")};
  height: fit-content;
  border-radius: 30px;
  padding: 8px;
  color: ${(props) => (props.disabled ? "lightgray" : "#7783ea")};
  font-weight: 700;
  cursor: pointer;
  font-family: sans-serif;
  width: fit-content;
  &:hover {
    background: ${(props) => (props.disabled ? "" : "#7783ea")};
    border-color: ${(props) => (props.disabled ? "" : "#8e8eff")};
    color: ${(props) => (props.disabled ? "" : "white")};
  }
`;
