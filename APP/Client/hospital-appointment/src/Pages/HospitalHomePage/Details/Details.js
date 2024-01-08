import React from "react";
import { Content, Text, ButtoContainer } from "./Details.styles";
import { Button } from "../../../Components/Buttons/Buttons.styles";

function Details(props) {
  const displayGender = (gender) => {
    if (gender === "M") return "Male";
    else if (gender === "F") return "Female";
    else return "Other";
  };
  return (
    <Content>
      <Text>Name: {props.data.name}</Text>
      <Text>Contact: {props.data.contact}</Text>
      <Text>Age: {props.data.age}</Text>
      <Text>Gender: {displayGender(props.data.gender)}</Text>
      <Text>Address: {props.data.address}</Text>
      <ButtoContainer>
        <Button onClick={() => props.onClick()} style={{ width: 40, textAlign: "center" }}>
          OK
        </Button>
      </ButtoContainer>
    </Content>
  );
}

export default Details;
