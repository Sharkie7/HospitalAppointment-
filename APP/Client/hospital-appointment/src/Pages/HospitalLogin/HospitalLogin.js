import React, { useState } from "react";
import Header from "../../Components/LandingPageHeader/Header";
import { useHistory } from "react-router-dom";
import { MainCont, SignIn, LoginText } from "./HospitalLogin.styles";
import InputBoxes from "../../Components/InputBoxes/InputBoxes";
import { connect } from "react-redux";
import { LoginHospital } from "../../redux/actions/userActions";

function HospitalLogin({ LoginHospital }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handlePatientLoginClick = () => {
    history.push("/");
  };

  const handleLogin = (data) => {
    setLoading(true);
    const credentials = {
      email: data.email,
      password: data.password,
    };
    LoginHospital(credentials)
      .then((res) => {
        setLoading(false);
        history.push("/home/hospital");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div style={{ width: "100%" }}>
      <Header buttonText="Patient Login" onButtonClick={handlePatientLoginClick} />
      <MainCont>
        <SignIn>
          <LoginText>Login</LoginText>
          <InputBoxes onClick={handleLogin} loading={loading} />
        </SignIn>
      </MainCont>
    </div>
  );
}

export default connect(null, { LoginHospital })(HospitalLogin);
