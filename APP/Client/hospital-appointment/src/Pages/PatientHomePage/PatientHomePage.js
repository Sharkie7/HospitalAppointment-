import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import Navbar from "./Navbar/Navbar";
import { Main, MainRight, TitleMain, SlotBookingMain, SlotText, DateInput } from "./PatientHomePage.styles";
import SlotsCard from "./SlotsCard/SlotsCard";
import CustomModal from "../../Components/Modal/Modal";
import SlotBookingForm from "./SlotBookingForm/SlotBookingForm";
import { getSlotsList } from "../../Network/appointments";
import { getFormattedCurrentDate, formateDate } from "../../utils";
import { bookAppointment } from "../../Network/appointments";
import { connect } from "react-redux";

function PatientHomePage(props) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(Date.parse(new Date().toLocaleDateString()));
  const [slotList, setSlotList] = useState([]);
  const [bookinDetails, setBookingDetails] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({});
  const [networkError, setNetworkError] = useState();

  const getData = (date) => {
    getSlotsList(date)
      .then((res) => {
        setSlotList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(date);
    console.error('new Error')
  }, [date]);

  const handleBookClick = (patientDetails) => {
    setNetworkError();
    let data = {
      ...patientDetails,
      patientId: props.userDetails._id,
    };
    bookAppointment(data)
      .then((res) => {
        setSlotList(res);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setNetworkError("Something went wrong. Try again");
      });
  };

  const handleDateChange = (e) => {
    const DateTimeStamp = Date.parse(formateDate(e.target.value));
    setDate(DateTimeStamp);
  };

  const handleCardClick = (slotData) => {
      let data = slotData.data.filter(i => i.x === '1')
    setOpen(true);
    setSelectedSlot(slotData);
  };
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Main>
        <Navbar />
        <MainRight>
          <TitleMain>Book your slot</TitleMain>
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
            {slotList.map((i, index) => (
              <>
                <SlotsCard slotData={i} onClick={handleCardClick} key={index} />
              </>
            ))}
            <CustomModal open={open} onClose={() => setOpen(false)}>
              <SlotBookingForm
                onButtonClick={handleBookClick}
                appointmentDetails={selectedSlot}
                networkError={networkError}
                date={date}
              />
            </CustomModal>
          </SlotBookingMain>
        </MainRight>
      </Main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
});

export default connect(mapStateToProps)(PatientHomePage);
