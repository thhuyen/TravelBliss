import React from "react";
import { Formik, Form } from "formik";
import DatePicker from "../DatePicker";
import { labels } from "../../constant";
import { StyledButton } from "./styles";
import SwitchTripBar from "../SwitchTripBar/SwitchTripBar";
import { CommonStyledBox, CommonStyledFlex } from "../StyleComponent";

type Props = {};

const SearchTrainBar = (props: Props) => {
  return (
    <Formik
      initialValues={{ datePicker: "", departure: "", arrival: "" }}
      onSubmit={(values) => {
        const { departure, arrival } = values;
        // if (!departure || !arrival) {
        //   return alert("Please fill enough information");
        // }
        console.log("====values", values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <CommonStyledFlex
            $position="absolute"
            $bottom="5%"
            $left="50%"
            $transform="translateX(-50%)"
            $height="4rem"
          >
            <CommonStyledBox $marginRight="1rem">
              <DatePicker setFieldValue={setFieldValue} />
            </CommonStyledBox>

            <CommonStyledBox $marginRight="1rem">
              <SwitchTripBar values={values} setFieldValue={setFieldValue} />
            </CommonStyledBox>

            <StyledButton type="submit">{labels.SEARCH_TRAIN}</StyledButton>
          </CommonStyledFlex>
        </Form>
      )}
    </Formik>
  );
};

export default SearchTrainBar;
