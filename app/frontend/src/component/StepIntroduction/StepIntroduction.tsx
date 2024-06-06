import React from "react";
import {
  CommonStyledBox,
  CommonStyledFlex,
  StyledTextP,
} from "../StyleComponent";
import { colors } from "../../constant";

type Props = {
  id: number;
  title: string;
  demonstration: string;
  isActive?: boolean;
};

const StepIntroduction = ({ id, title, demonstration, isActive }: Props) => {
  return (
    <CommonStyledFlex $alignItems="center">
      <CommonStyledBox
        $borderRadius="50%"
        $border={isActive ? `1px solid ${colors.primary400}` : "none"}
        $backgroundColor={isActive ? colors.primary200 : colors.secondary100}
        $paddingLeft="1rem"
        $paddingRight="1rem"
        $paddingTop="0.7rem"
        $paddingBottom="0.7rem"
        $color={isActive ? colors.primary400 : colors.secondary400}
        $marginRight="1rem"
      >
        {id}
      </CommonStyledBox>
      <CommonStyledBox>
        <StyledTextP $lineHeight="1.5" $fontWeight="600">
          {title}
        </StyledTextP>
        <StyledTextP $lineHeight="1.5">{demonstration}</StyledTextP>
      </CommonStyledBox>
    </CommonStyledFlex>
  );
};

export default StepIntroduction;
