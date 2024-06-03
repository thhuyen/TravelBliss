import React from "react";
import {
  CommonStyledBox,
  CommonStyledFlex,
  StyledTextSpan,
} from "../StyleComponent";
import { StyledOverlay } from "../../pages/Home/styles";

type Props = {
  value?: string;
  onClick?: () => void;
};

const CustomDatePicker = ({ value = "", onClick }: Props) => {
  const [month, day] = value.split(" ");
  return (
    <CommonStyledFlex
      $width="4rem"
      $height="4rem"
      onClick={onClick}
      $backgroundColor="white"
      $borderRadius="0.5rem"
      $paddingLeft="1rem"
      $paddingRight="1rem"
      $flexDirection="column"
      $justifyContent="center"
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
    </CommonStyledFlex>
  );
};

export default CustomDatePicker;
