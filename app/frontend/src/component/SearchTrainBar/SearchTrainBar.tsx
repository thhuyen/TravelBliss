import React from "react";
import { CommonStyledBox, CommonStyledFlex } from "../StyleComponent";
import DatePicker from "../DatePicker";
import SwitchTripBar from "../SwitchTripBar/SwitchTripBar";
import { labels } from "../../constant";

type Props = {};

const SearchTrainBar = (props: Props) => {
  return (
    <CommonStyledFlex
      $position="absolute"
      $bottom="5%"
      $left="50%"
      $transform="translateX(-50%)"
      $height="3.5rem"
    >
      <CommonStyledBox $marginRight="1rem" $height="100%">
        <DatePicker />
      </CommonStyledBox>

      <CommonStyledBox $marginRight="1rem">
        <SwitchTripBar />
      </CommonStyledBox>

      <button>{labels.SEARCH_TRAIN}</button>
    </CommonStyledFlex>
  );
};

export default SearchTrainBar;
