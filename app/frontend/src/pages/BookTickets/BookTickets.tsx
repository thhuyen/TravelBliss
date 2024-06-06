import React, { useState } from "react";
import Ticket from "../../component/Ticket";
import Header from "../../component/Header";
import {
  CommonStyledBox,
  CommonStyledFlex,
} from "../../component/StyleComponent";
import { tickets } from "./data";
import SearchTrainBar from "../../component/SearchTrainBar";
import { StyledBanner } from "../Home/styles";
import StepIntroduction from "../../component/StepIntroduction";
import { colors } from "../../constant";
import { Button } from "./styles";

type Props = {};

const BookTickets = (props: Props) => {
  const [step, setStep] = useState<number>(1);
  const steps = [
    {
      id: 1,
      title: "First step",
      demonstration: "Choose your route",
    },
    {
      id: 2,
      title: "Second step",
      demonstration: "Choose your seat",
    },
    {
      id: 3,
      title: "Third step",
      demonstration: "Passenger info",
    },
    {
      id: 4,
      title: "Final",
      demonstration: "Payment",
    },
  ];
  return (
    <>
      <Header isAuthenticated={true} />
      <StyledBanner>
        <SearchTrainBar />
      </StyledBanner>

      <CommonStyledBox
        $marginTop="3rem"
        $width="70rem"
        $marginLeft="auto"
        $marginRight="auto"
      >
        <CommonStyledFlex
          $justifyContent="space-between"
          $paddingBottom="3rem"
          $alignItems="center"
        >
          <Button>Back</Button>
          <CommonStyledFlex $alignItems="center">
            {steps.map((information) => (
              <>
                <StepIntroduction
                  {...information}
                  isActive={information.id === step}
                />

                {/* lines */}
                {information.id !== 4 && (
                  <CommonStyledBox
                    $width="3rem"
                    $height="2px"
                    $backgroundColor={colors.primary500}
                    $marginLeft="1.5rem"
                    $marginRight="1.5rem"
                  ></CommonStyledBox>
                )}
              </>
            ))}
          </CommonStyledFlex>
        </CommonStyledFlex>

        {tickets.map((ticketDetails) => (
          <Ticket {...ticketDetails} />
        ))}
      </CommonStyledBox>
    </>
  );
};

export default BookTickets;
