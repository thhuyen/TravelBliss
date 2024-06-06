import React from "react";
import { TicketDetails, TicketWrapper } from "./styles";
import {
  CommonStyledFlex,
  StyledTextP,
  StyledTextSpan,
} from "../StyleComponent";
import { Button } from "../StyleComponent/StyledForm";

type Props = {};

const Ticket = (props: Props) => {
  return (
    <TicketWrapper>
      <TicketDetails>
        <StyledTextP $lineHeight="1.5" $fontWeight="600">
          Departure
        </StyledTextP>
        <StyledTextP $lineHeight="1.5" $fontWeight="600">
          6:10
        </StyledTextP>
        <StyledTextP $lineHeight="1.5">May 11</StyledTextP>
        <StyledTextP $lineHeight="1.5">Ha Noi</StyledTextP>
      </TicketDetails>

      <TicketDetails className="arrow">
        <CommonStyledFlex
          $alignItems="center"
          $height="100%"
          $justifyContent="center"
        >
          <img src="/imgs/arrow.png" alt="logo" width={200} height={20} />
        </CommonStyledFlex>
      </TicketDetails>

      <TicketDetails>
        <StyledTextP $fontWeight="600">Arrival</StyledTextP>
        <StyledTextP $fontWeight="600">17:58</StyledTextP>
        <StyledTextP>May 12</StyledTextP>
        <StyledTextP>Sai Gon</StyledTextP>
      </TicketDetails>

      <TicketDetails>
        <StyledTextP $fontWeight="600">Train</StyledTextP>
        <StyledTextP $fontWeight="600">SE07</StyledTextP>
        <StyledTextP>231 available seats</StyledTextP>
      </TicketDetails>

      <TicketDetails>
        <StyledTextP $fontWeight="600">Price</StyledTextP>
        <StyledTextP>
          <StyledTextSpan $display="inline-block" $marginRight="0.5rem">
            from
          </StyledTextSpan>
          <StyledTextSpan
            $display="inline-block"
            $fontWeight="600"
            $fontSize="1.2rem"
          >
            895.000
          </StyledTextSpan>
        </StyledTextP>
      </TicketDetails>

      <Button>Choose seat</Button>
    </TicketWrapper>
  );
};

export default Ticket;
