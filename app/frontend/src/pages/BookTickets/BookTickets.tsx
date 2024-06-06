import React from "react";
import Ticket from "../../component/Ticket.tsx";
import Header from "../../component/Header";
import { CommonStyledBox } from "../../component/StyleComponent";
import { tickets } from "./data";

type Props = {};

const BookTickets = (props: Props) => {
  return (
    <>
      <Header isAuthenticated={true} />
      <CommonStyledBox
        $marginTop="5rem"
        $width="80rem"
        $marginLeft="auto"
        $marginRight="auto"
      >
        {tickets.map((ticketDetails) => (
          <Ticket {...ticketDetails} />
        ))}
      </CommonStyledBox>
    </>
  );
};

export default BookTickets;
