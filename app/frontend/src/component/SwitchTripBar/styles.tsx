import { Field, Form } from "formik";
import styled from "styled-components";

export const StyledInput = styled(Field)`
  padding: 0 1rem;
  border: none;
  outline: none;
  height: 100%;
`;

export const StyledForm = styled(Form)`
  height: 100%;
`;

export const AutoSuggestWrapper = styled.div`
  .react-autosuggest__container {
    position: relative;
    max-height: 100px;
  }

  .react-autosuggest__input {
    padding: 1rem;
    border: none;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__suggestions-container {
    display: block;
  }

  .react-autosuggest__suggestions-container--open {
    display: block;
    position: absolute;
    top: 100%;
    width: 100%;
    max-height: 13rem;
    overflow-y: auto;
    border: none;
    box-shadow: 0 3px 5px #aaaeb6;
    background-color: white;
    z-index: 2;
  }

  .react-autosuggest__suggestions-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .react-autosuggest__suggestion {
    cursor: pointer;
    padding: 0.5rem 1rem;
  }

  .react-autosuggest__suggestion--highlighted {
    background-color: #e4e5e9;
  }
`;
