import React, { useState } from "react";
import { NavbarMain, List, ListItem } from "./Navbar.styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Logout } from "../../../redux/actions/userActions";

function Navbar({ Logout }) {
  const history = useHistory();
  const [hover, setHover] = useState(false);
  const pathname = history.location.pathname;

  const onClick = () => {
  //   window.zipy.identify("test", {
  //     firstName: "John",
  //     lastName: "Doe"
  //  });
  }

  return (
    <NavbarMain>
      <List>
        <ListItem highlight={pathname === "/home/patient"} onClick={() => history.push("/home/patient")}>
          View All Slots
        </ListItem>
        <ListItem highlight={pathname === "/bookings"} onClick={() => history.push("/bookings")}>
          Your Bookings
        </ListItem>
        <ListItem>Settings</ListItem>
        <ListItem onClick={onClick}>Contact</ListItem>
        <ListItem onClick={() => Logout()}>Sign Out</ListItem>
      </List>
    </NavbarMain>
  );
}

export default connect(null, { Logout })(Navbar);
