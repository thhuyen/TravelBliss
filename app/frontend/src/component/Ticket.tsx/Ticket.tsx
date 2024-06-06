import React from "react";
import { TicketDetailsWrapper, TicketWrapper, TicketDetails } from "./styles";
import { CommonStyledFlex, StyledTextSpan } from "../StyleComponent";
import { Button } from "../StyleComponent/StyledForm";

type Props = {
  id: number;
  departureTime: string;
  arrivalTime: string;
  departurePlace: string;
  arrivalPlace: string;
  train: { trainCode: string; availableSeatTotal: string };
  price: string;
};

const Ticket = ({
  id,
  departureTime,
  arrivalTime,
  departurePlace,
  arrivalPlace,
  train: { trainCode, availableSeatTotal },
  price,
}: Props) => {
  const [departureDate, departureSpecificTime] = departureTime.split(" ");
  const [arrivalDate, arrivalSpecificTime] = arrivalTime.split(" ");
  return (
    <TicketWrapper key={id}>
      <TicketDetailsWrapper className="departure">
        <TicketDetails $fontWeight="600">Departure</TicketDetails>
        <TicketDetails $fontWeight="600">
          {departureSpecificTime.slice(0, 5)}
        </TicketDetails>
        <TicketDetails>{departureDate}</TicketDetails>
        <TicketDetails>{departurePlace}</TicketDetails>
      </TicketDetailsWrapper>

      <TicketDetailsWrapper className="arrow">
        <CommonStyledFlex
          $alignItems="center"
          $height="100%"
          $justifyContent="center"
        >
          <img src="/imgs/arrow.png" alt="logo" width={200} height={20} />
        </CommonStyledFlex>
      </TicketDetailsWrapper>

      <TicketDetailsWrapper className="arrival">
        <TicketDetails $fontWeight="600">Arrival</TicketDetails>
        <TicketDetails $fontWeight="600">
          {arrivalSpecificTime.slice(0, 5)}
        </TicketDetails>
        <TicketDetails>{arrivalDate}</TicketDetails>
        <TicketDetails>{arrivalPlace}</TicketDetails>
      </TicketDetailsWrapper>

      <TicketDetailsWrapper>
        <TicketDetails $fontWeight="600">Train</TicketDetails>
        <TicketDetails $fontWeight="600">{trainCode}</TicketDetails>
        <TicketDetails>{`${availableSeatTotal} available seats`}</TicketDetails>
      </TicketDetailsWrapper>

      <TicketDetailsWrapper>
        <TicketDetails $fontWeight="600">Price</TicketDetails>
        <TicketDetails>
          <StyledTextSpan $display="inline-block" $marginRight="0.5rem">
            from
          </StyledTextSpan>
          <StyledTextSpan
            $display="inline-block"
            $fontWeight="600"
            $fontSize="1.2rem"
          >
            {price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </StyledTextSpan>
        </TicketDetails>
      </TicketDetailsWrapper>

      <CommonStyledFlex
        $alignItems="center"
        $height="100%"
        $justifyContent="center"
      >
        <Button width="70%" type="button">
          Choose seat
        </Button>
      </CommonStyledFlex>
    </TicketWrapper>
  );
};

export default Ticket;
