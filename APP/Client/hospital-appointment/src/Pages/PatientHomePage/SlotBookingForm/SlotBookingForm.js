import React, { useEffect, useState } from "react";
import { Content, Text, Input, ButtonContainer, Dropdown, TextArea } from "./SlotBookingForm.styles";
import { Button } from "../../../Components/Buttons/Buttons.styles";
import { Error } from "../../LandingPage/LandingPage.styles";

function SlotBookingHome(props) {
  const [details, setDetails] = useState({
    name: "",
    contact: "",
    age: "",
    gender: "",
    address: "",
  });
  const [error, setError] = useState();

  useEffect(() => {
    setError(props.networkError);
  }, [props.networkError]);

  const handleBooking = () => {
    setError();
    const { name, contact, age, gender } = details;
    if (name === "" || contact === "" || age === "" || gender === "") {
      setError("Please enter all information");
    } else {
      const patientDetails = {
        name: details.name,
        age: details.age,
        contact: details.contact,
        gender: details.gender,
        address: details.address,
        slotStart: props.appointmentDetails.slotStart,
        slot: props.appointmentDetails.slot,
        date: props.date,
      };

      props.onButtonClick(patientDetails);
    }
  };

  return (
    <Content>
      {error && <Error style={{ marginBottom: 10 }}>{error}</Error>}
      <Text>Name</Text>
      <Input
        type="text"
        required
        onChange={(e) => {
          setDetails({
            ...details,
            name: e.target.value,
          });
        }}
      />
      <Text>Contact</Text>
      <Input
        type="tel"
        onChange={(e) => {
          setDetails({
            ...details,
            contact: e.target.value,
          });
        }}
      />
      <Text>Age</Text>
      <Input
        type="number"
        onChange={(e) => {
          setDetails({
            ...details,
            age: e.target.value,
          });
        }}
      />
      <Text>Gender</Text>
      <Dropdown
        onChange={(e) => {
          setDetails({
            ...details,
            gender: e.target.value,
          });
        }}
      >
        <option value={null}>Select</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
      </Dropdown>
      <Text>Address</Text>
      <TextArea
        onChange={(e) => {
          setDetails({
            ...details,
            address: e.target.value,
          });
        }}
      />
      <ButtonContainer>
        <Button onClick={handleBooking}>Book</Button>
      </ButtonContainer>
    </Content>
  );
}

export default SlotBookingHome;
