import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import {
  Main,
  MainRight,
  TitleMain,
  SlotBookingMain,
  DateInput,
  SlotText,
} from "../PatientHomePage/PatientHomePage.styles";
import Navbar from "../PatientHomePage/Navbar/Navbar";
import { formateDate, getFormattedCurrentDate } from "../../utils";
import { getPatientAppointment, cancelAppointment } from "../../Network/appointments";
import { connect } from "react-redux";
import SlotCard from "./SlotCard";

function PatientBookings(props) {
  const [date, setDate] = useState(Date.parse(new Date().toLocaleDateString()));
  const [appointmentList, setAppointmentList] = useState([]);

  const handleDateChange = (e) => {
    const DateTimeStamp = Date.parse(formateDate(e.target.value));
    setDate(DateTimeStamp);
  };

  const getData = (date) => {
    const data = {
      patientId: props.userDetails._id,
      date: date,
    };
    getPatientAppointment(data)
      .then((res) => {
        setAppointmentList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(date);
  }, [date]);

  const handleCancel = (appointmentDetails) => {
    const data = {
      appointmentId: appointmentDetails._id,
      patientId: appointmentDetails.patientId,
      date: date,
    };
    console.log(appointmentDetails);
    cancelAppointment(data)
      .then((res) => {
        setAppointmentList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header />
      <Main>
        <Navbar />
        <MainRight>
          <TitleMain>Your Appointments</TitleMain>
          <SlotBookingMain>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <SlotText>Slots</SlotText>
              <DateInput defaultValue={getFormattedCurrentDate()} type="date" onChange={handleDateChange} />
            </div>
            {appointmentList.map((i, index) => (
              <SlotCard slotData={i} key={index} onClick={handleCancel} />
            ))}
            {appointmentList.length === 0 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 50,
                  fontSize: 25,
                }}
              >
                No Appointments
              </div>
            )}
          </SlotBookingMain>
        </MainRight>
      </Main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
});
export default connect(mapStateToProps)(PatientBookings);
