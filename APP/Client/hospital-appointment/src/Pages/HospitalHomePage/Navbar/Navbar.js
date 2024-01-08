import React from "react";
import { NavbarMain, List, ListItem } from "../../PatientHomePage/Navbar/Navbar.styles";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <NavbarMain>
      <List>
        <ListItem>Settings</ListItem>
        <ListItem onClick={() => history.push("/")}>Sign Out</ListItem>
      </List>
    </NavbarMain>
  );
}

export default Navbar;
