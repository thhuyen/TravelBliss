import React, { useState, useMemo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Autosuggest, {
  ChangeEvent,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest";

import { labels } from "../../constant";
import { AutoSuggestWrapper } from "./styles";
import { CommonStyledBox, CommonStyledFlex } from "../StyleComponent";
import { stations } from "./data";

type Props = {
  values: { departure: string; arrival: string };
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};

const SwitchTripBar = ({
  values: { departure, arrival },
  setFieldValue,
}: Props) => {
  const departureRef = useRef<HTMLInputElement>(null);
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

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onSuggestionsFetchRequested = ({
    value,
  }: SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestionList(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputPropsDeparture = {
    id: "departure",
    name: "departure",
    placeholder: labels.CHOOSE_DEPARTURE,
    value: departure,
    onChange: (
      event: React.FormEvent<HTMLElement>,
      { newValue }: ChangeEvent
    ) => {
      if (arrival) {
        setFieldValue("arrival", "");
      }
      setFieldValue("departure", newValue);
    },
    ref: departureRef,
  };

  const inputPropsArrival = {
    id: "arrival",
    name: "arrival",
    placeholder: labels.CHOOSE_ARRIVAL,
    value: arrival,
    onClick: () => {
      if (!departure) {
        alert("Please choose departure first!");
        if (departureRef && departureRef.current) {
          departureRef.current.focus();
        }
      }
    },
    onChange: (
      event: React.FormEvent<HTMLElement>,
      { newValue }: ChangeEvent
    ) => {
      setFieldValue("arrival", newValue);
    },
    onBlur: () => {
      if (departure === arrival && !!departure) {
        alert("Arrival must be different from department");
        setFieldValue("arrival", "");
      }
    },
  };

  const handleSwitchPlace = () => {
    setFieldValue("departure", arrival);
    setFieldValue("arrival", departure);
  };
  return (
    <CommonStyledFlex
      $alignItems="center"
      $backgroundColor="white"
      $height="100%"
      $borderRadius="0.5rem"
    >
      <AutoSuggestWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestion}
          renderSuggestion={renderSuggestion}
          inputProps={inputPropsDeparture}
        />
      </AutoSuggestWrapper>

      <CommonStyledBox
        $marginLeft="1rem"
        $marginRight="1rem"
        $cursor="pointer"
        onClick={handleSwitchPlace}
      >
        <FontAwesomeIcon icon={faRightLeft} />
      </CommonStyledBox>

      <AutoSuggestWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestion}
          renderSuggestion={renderSuggestion}
          inputProps={inputPropsArrival}
        />
      </AutoSuggestWrapper>
    </CommonStyledFlex>
  );
};

export default SwitchTripBar;
