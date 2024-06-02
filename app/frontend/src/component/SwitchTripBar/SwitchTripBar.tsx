import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Autosuggest, {
  ChangeEvent,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest";

import { labels } from "../../constant";
import { AutoSuggestWrapper, StyledForm, StyledInput } from "./styles";
import { CommonStyledBox, CommonStyledFlex } from "../StyleComponent";
import { stations } from "./data";

type Props = {};

const SwitchTripBar = (props: Props) => {
  const validations = useMemo(
    () => ({
      initialValues: {
        departure: "",
        arrival: "",
      },
      validationSchema: Yup.object({
        //  password: Yup.string().required(messages.requiredPassword),
        //  phoneNumber: Yup.string().required(messages.requiredPhoneNumber),
      }),
      onSubmit: (values: any) => {},
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const getSuggestionList = (value: string): string[] => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : stations.filter(
          (station) =>
            station.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestion = (suggestion: string): string => suggestion;

  const renderSuggestion = (suggestion: string): JSX.Element => (
    <p>{suggestion}</p>
  );

  const [value, setValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onChange = (
    event: React.FormEvent<HTMLElement>,
    { newValue }: ChangeEvent
  ) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({
    value,
  }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestionList(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: labels.CHOOSE_DEPARTURE,
    value,
    onChange,
  };

  return (
    <Formik {...validations}>
      <StyledForm>
        <CommonStyledFlex
          $alignItems="center"
          $backgroundColor="white"
          $height="100%"
        >
          <CommonStyledBox $position="relative">
            <AutoSuggestWrapper>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                getSuggestionValue={getSuggestion}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
            </AutoSuggestWrapper>
          </CommonStyledBox>

          <CommonStyledBox
            $marginLeft="1rem"
            $marginRight="1rem"
            $cursor="pointer"
          >
            <FontAwesomeIcon icon={faRightLeft} />
          </CommonStyledBox>
          <StyledInput
            id="arrival"
            name="arrival"
            type="text"
            placeholder={labels.CHOOSE_ARRIVAL}
          />
        </CommonStyledFlex>
      </StyledForm>
    </Formik>
  );
};

export default SwitchTripBar;
