import styled from "styled-components";

export const NavbarMain = styled.div`
  height: 100%;
  width: 240px;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 43px;
  padding-left: 25px;
`;

export const ListItem = styled.li`
  margin: 35px 0;
  font-family: sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.highlight ? "#7783ea" : "")};
  &:hover {
    color: #7783ea;
  }
`;
