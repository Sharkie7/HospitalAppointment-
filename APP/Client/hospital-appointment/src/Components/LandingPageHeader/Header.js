import React from "react";
import { HeaderCont, Hospital, LogoImage } from "./Header.styles";
import { Button } from "../../Components/Buttons/Buttons.styles";
import { useHistory } from "react-router";
import Logo from "../../images/logo.png";

function Header(props) {
  const history = useHistory();
  return (
    <HeaderCont>
      <Hospital>
        <LogoImage src={Logo} alt="logo" /> Hospitals
      </Hospital>
      <div style={{ display: "flex" }}>
        <Button style={{ marginRight: 25 }} onClick={() => history.push("/signup")}>
          Patient Signup
        </Button>
        <Button style={{ marginRight: 25 }} onClick={props.onButtonClick}>
          {props.buttonText}
        </Button>
      </div>
    </HeaderCont>
  );
}

export default Header;
