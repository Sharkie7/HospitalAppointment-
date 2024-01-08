import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Components/LandingPageHeader/Header";
import { MainCont, SignIn, Welcome, SignInText, Error } from "./LandingPage.styles";
import InputBoxes from "../../Components/InputBoxes/InputBoxes";
import { connect } from "react-redux";
import { Login } from "../../redux/actions/userActions";
import root from 'react-shadow'

function LandingPage(props) {
  const history = useHistory();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const [color, setColor] = useState('red')

  const handleHospitalLoginClick = () => {
    history.push("/login/hospital");
  };

  const handleLogin = (data) => {
    setLoading(true);
    setError();
    const loginCredentials = {
      email: data.email,
      password: data.password,
    };
    props
      .Login(loginCredentials)
      .then((res) => {
        setLoading(false);
        history.push("/home/patient");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError("Invalid Credentials");
      });
  };


  const handleClick = () => {
    console.log('working')

    setColor((prevColor) => {
      if(prevColor === 'red') {
        return 'green'
      } else {
        return 'red'
      }
    })
  }

  return (
    <div style={{ width: "100%" }}>
      <Header buttonText="Hospital Login" onButtonClick={handleHospitalLoginClick} />
      {/* <root.div>
        <div style={{width: 250, height: 200, background: color}}>
          <h1>Test Test Test</h1>
          <button onClick={handleClick}>Click Me</button>
        </div>
      </root.div> */}
      <MainCont>
        <SignIn>
          <Welcome>Welcome</Welcome>
          <SignInText>Sign in for booking an appointment</SignInText>
          {error && <Error>{error}</Error>}
          <InputBoxes onClick={handleLogin} loading={loading} />
        </SignIn>
      </MainCont>
    </div>
  );
}

export default connect(null, { Login })(LandingPage);
