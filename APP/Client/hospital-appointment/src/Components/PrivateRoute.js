import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ Component, authenticated, ...rest }) {
  console.log(authenticated);
  return <Route {...rest} render={(props) => (authenticated ? <Component {...props} /> : <Redirect to="/" />)} />;
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});
export default connect(mapStateToProps)(PrivateRoute);
