import React from "react";
import {
  CommonStyledBox,
  CommonStyledFlex,
  StyledTextP,
} from "../StyleComponent";
import { StyledFooter } from "./styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <CommonStyledBox $fontWeight="600">
        Copyright 2023 TravelBliss. All rights reserved.
      </CommonStyledBox>

      <CommonStyledFlex>
        <StyledTextP $marginRight="0.5rem" $fontWeight="600" $cursor="pointer">
          Privacy Policy
        </StyledTextP>

        <StyledTextP $marginRight="0.5rem" $fontWeight="600" $cursor="pointer">
          Terms of Service
        </StyledTextP>

        <StyledTextP $marginRight="0.5rem" $fontWeight="600" $cursor="pointer">
          Contact
        </StyledTextP>

        <StyledTextP $fontWeight="600" $cursor="pointer">
          About
        </StyledTextP>
      </CommonStyledFlex>
    </StyledFooter>
  );
};

export default Footer;
