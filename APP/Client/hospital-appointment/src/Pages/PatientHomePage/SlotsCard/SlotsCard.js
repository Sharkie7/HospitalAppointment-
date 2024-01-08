import React from "react";
import { CardContainer } from "./SlotsCard.styles";
import { Button } from "../../../Components/Buttons/Buttons.styles";

function SlotsCard(props) {
  return (
    <CardContainer>
      <div>{props.slotData.slot}</div>
      <Button disabled={props.slotData.booked} onClick={() => !props.slotData.booked && props.onClick(props.slotData)}>
        Book
      </Button>
    </CardContainer>
  );
}

export default SlotsCard;
