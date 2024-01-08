import React from "react";
import { CardContainer } from "../PatientHomePage/SlotsCard/SlotsCard.styles";
import { Button } from "../../Components/Buttons/Buttons.styles";

function SlotsCard(props) {
  return (
    <CardContainer>
      <div>{props.slotData.slot}</div>
      <Button onClick={() => props.onClick(props.slotData)}>
        Cancel
      </Button>
    </CardContainer>
  );
}

export default SlotsCard;
