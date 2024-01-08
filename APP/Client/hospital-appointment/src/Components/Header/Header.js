import React from "react";
import { HeaderCont, Hospital, LogoImage } from "../LandingPageHeader/Header.styles";
import Avatar from "../Avatar/Avatar";
import Logo from "../../images/logo.png";

function Header() {
  return (
    <HeaderCont>
      <Hospital>
        {" "}
        <LogoImage src={Logo} alt="logo" sty /> Hospital
      </Hospital>
      <Avatar />
    </HeaderCont>
  );
}

export default Header;
