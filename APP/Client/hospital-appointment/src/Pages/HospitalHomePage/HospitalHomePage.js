import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Navbar from "./Navbar/Navbar";
import {
  Main,
  TitleMain,
  SlotBookingMain,
  MainRight,
  SlotText,
  DateInput,
} from "../PatientHomePage/PatientHomePage.styles";
import SlotCard from "./SlotCards/SlotCards";
import Modal from "../../Components/Modal/Modal";
import Details from "./Details/Details";
import { getFormattedCurrentDate, formateDate } from "../../utils";
import { getAppointments } from "../../Network/appointments";

function HospitalHomePage() {
  const [open, setOpen] = useState(false);
  const [appointmentList, setAppointmentList] = useState([]);
  const [date, setDate] = useState(Date.parse(new Date().toLocaleDateString()));
  const [selectedAppointment, setSelectedAppointment] = useState();

  const handleDateChange = (e) => {
    const DateTimeStamp = Date.parse(formateDate(e.target.value));
    setDate(DateTimeStamp);
  };

  const getData = (date) => {
    getAppointments(date)
      .then((res) => {
        setAppointmentList(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(date);
  }, [date]);

  const handleDetailsClick = (details) => {
    setSelectedAppointment(details);
    setOpen(true);
  };

  return (
    <div>
      <Header />
      <Main>
        <Navbar />
        <MainRight>
          <TitleMain>Appointments</TitleMain>
          <SlotBookingMain>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <SlotText>Slots</SlotText>
              <DateInput type="date" defaultValue={getFormattedCurrentDate()} onChange={handleDateChange} />
            </div>
            {appointmentList.map((i, index) => (
              <SlotCard details={i} onDetailsClick={handleDetailsClick} />
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
        <Modal open={open} onClose={() => setOpen(false)}>
          <Details data={selectedAppointment} onClick={() => setOpen(false)} />
        </Modal>
      </Main>
    </div>
  );
}

export default HospitalHomePage;
