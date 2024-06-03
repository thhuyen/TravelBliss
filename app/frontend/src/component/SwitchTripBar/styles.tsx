import styled from "styled-components";

export const AutoSuggestWrapper = styled.div`
  .react-autosuggest__container {
    position: relative;
    max-height: 100px;
  }

  .react-autosuggest__input {
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 0.9rem;
  }

  .react-autosuggest__input--focused {
    outline: none;
  }

  .react-autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
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
    font-size: 0.9rem;
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
