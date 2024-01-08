import React from "react";
import { CardContainer } from "../../PatientHomePage/SlotsCard/SlotsCard.styles";
import { Button } from "../../../Components/Buttons/Buttons.styles";
import { CardLeft, Time, Name, Divider } from "./SlotCards.styles";

function SlotsCard(props) {
  return (
    <CardContainer>
      <CardLeft>
        <Time>{props.details.slot}</Time>
        <Divider />
        <Name>{props.details.name}</Name>
      </CardLeft>
      <div style={{ display: "flex" }}>
        <Button style={{ marginRight: 10 }} onClick={() => props.onDetailsClick(props.details)}>
          Details
        </Button>
      </div>
    </CardContainer>
  );
}

export default SlotsCard;
