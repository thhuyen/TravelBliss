import React from "react";
import { CommonStyledBox, StyledTextSpan } from "../StyleComponent";
import { StyledOverlay } from "../../pages/Home/styles";

type Props = {
  value?: string;
  onClick?: () => void;
};

const CustomDatePicker = ({ value = "", onClick }: Props) => {
  const [month, day] = value.split(" ");
  return (
    <CommonStyledBox
      $width="4rem"
      $height="100%"
      onClick={onClick}
      $backgroundColor="white"
      $borderRadius="0.5rem"
      $paddingLeft="1rem"
      $paddingRight="1rem"
      $paddingTop="0.5rem"
      $paddingBottom="0.5rem"
    >
      <StyledTextSpan
        $fontWeight="700"
        $textAlign="center"
        $marginBottom="0.3rem"
      >
        {+day < 10 ? `0${day}` : day}
      </StyledTextSpan>
      <StyledTextSpan $textAlign="center">{month.slice(0, 3)}</StyledTextSpan>
      <StyledOverlay $borderRadius="0.5rem" $background="transparent" />
    </CommonStyledBox>
  );
};

export default CustomDatePicker;
