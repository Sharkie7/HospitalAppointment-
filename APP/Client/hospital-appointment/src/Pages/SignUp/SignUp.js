import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HeaderCont, Hospital, LogoImage } from "./SignUp.styles";
import { MainCont, SignIn, Welcome, SignInText, Error } from "../LandingPage/LandingPage.styles";
import InputBoxes from "../../Components/InputBoxes/InputBoxes";
import { connect } from "react-redux";
import { SignupPatient } from "../../redux/actions/userActions";
import { Button } from "../../Components/Buttons/Buttons.styles";
import Logo from "../../images/logo.png";

function SignUp(props) {
  const history = useHistory();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleSignUp = (data) => {
    setLoading(true);
    setError();
    const credentials = {
      email: data.email,
      name: data.name,
      password: data.password,
    };
    props
      .SignupPatient(credentials)
      .then((res) => {
        setLoading(false);
        history.push("/home/patient");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div style={{ width: "100%" }}>
      <HeaderCont>
        <Hospital>
          <LogoImage src={Logo} alt="logo" /> Hospitals
        </Hospital>
        <Button style={{ marginRight: 25 }} onClick={() => history.push("/")}>
          Back
        </Button>
      </HeaderCont>
      <MainCont>
        <SignIn>
          <Welcome>Welcome</Welcome>
          <SignInText>Sign Up for new account</SignInText>
          {error && <Error>{error}</Error>}
          <InputBoxes signUp onClick={handleSignUp} loading={loading} />
        </SignIn>
      </MainCont>
    </div>
  );
}

export default connect(null, { SignupPatient })(SignUp);
