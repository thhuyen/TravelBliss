import get from "lodash/get";
import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import Autosuggest, {
  ChangeEvent,
  SuggestionSelectedEventData,
  SuggestionsFetchRequestedParams,
} from "react-autosuggest";

import { labels, messages } from "../../constant";
import { AutoSuggestWrapper } from "./styles";
import { CommonStyledBox, CommonStyledFlex } from "../StyleComponent";
import { stations } from "./data";

type Props = {
  values: { selectedDeparture: string; selectedArrival: string };
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
};

const SwitchTripBar = ({
  values: { selectedDeparture, selectedArrival },
  setFieldValue,
}: Props) => {
  const [departure, setDeparture] = useState<string>("");
  const [arrival, setArrival] = useState<string>("");
  const departureRef = useRef<HTMLInputElement>(null);
  const arrivalRef = useRef<HTMLInputElement>(null);
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
    ref: departureRef,
    onChange: (
      event: React.FormEvent<HTMLElement>,
      { newValue }: ChangeEvent
    ): void => {
      if (arrival) {
        setArrival("");
        setFieldValue("arrival", "");
      }
      setFieldValue("selectedDeparture", "");
      setDeparture(newValue);
    },
  };

  const inputPropsArrival = {
    id: "arrival",
    name: "arrival",
    ref: arrivalRef,
    placeholder: labels.CHOOSE_ARRIVAL,
    value: arrival,
    onClick: (): void => {
      if (!selectedDeparture) {
        alert(messages.SELECT_DEPARTURE);
        departureRef?.current?.focus();
        return;
      }
    },
    onChange: (
      event: React.FormEvent<HTMLElement>,
      { newValue }: ChangeEvent
    ): void => {
      setFieldValue("selectedArrival", "");
      setArrival(newValue);
    },
    onBlur: (): void => {
      if (selectedDeparture === selectedArrival && !!selectedDeparture) {
        alert(messages.DEPARTURE_DIFFER_ARRIVAL);
        setArrival("");
        setFieldValue("selectedArrival", "");

        setTimeout(() => {
          arrivalRef?.current?.focus();
        }, 0);
        return;
      }
    },
  };

  const handleSwitchPlace = () => {
    if (!!selectedDeparture && !!selectedArrival) {
      setDeparture(arrival);
      setArrival(departure);
      setFieldValue("departure", arrival);
      setFieldValue("arrival", departure);
    }
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
          onSuggestionSelected={(
            event: React.FormEvent<HTMLElement>,
            data: SuggestionSelectedEventData<string>
          ): void => setFieldValue("selectedDeparture", data.suggestionValue)}
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
          onSuggestionSelected={(
            event: React.FormEvent<HTMLElement>,
            data: SuggestionSelectedEventData<string>
          ): void => setFieldValue("selectedArrival", data.suggestionValue)}
          getSuggestionValue={getSuggestion}
          renderSuggestion={renderSuggestion}
          inputProps={inputPropsArrival}
        />
      </AutoSuggestWrapper>
    </CommonStyledFlex>
  );
};

export default SwitchTripBar;
