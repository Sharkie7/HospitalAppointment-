import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import HospitalLogin from "./Pages/HospitalLogin/HospitalLogin";
import PatientHomePage from "./Pages/PatientHomePage/PatientHomePage";
import HospitalHomePage from "./Pages/HospitalHomePage/HospitalHomePage";
import PatientBookings from "./Pages/PatientBookings/PatientBookings";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import PrivateRoute from "./Components/PrivateRoute";
import SignUp from "./Pages/SignUp/SignUp";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <div className="App">
          <Router>
            <Switch>
              <PrivateRoute path="/bookings" Component={PatientBookings} />
              <PrivateRoute path="/home/hospital" Component={HospitalHomePage} />
              <PrivateRoute path="/home/patient" Component={PatientHomePage} />
              <Route path="/login/hospital">
                <HospitalLogin />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
