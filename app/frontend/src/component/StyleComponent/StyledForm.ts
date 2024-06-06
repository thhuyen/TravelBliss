import { Form } from "formik";
import styled from "styled-components";
import { colors } from "../../constant";

import { Field, ErrorMessage as error } from "formik";

export const StyledAuthenForm = styled(Form)`
  width: 70%;
  text-align: left;
  display: inline-block;
`;

export const Input = styled(Field)`
  width: 100%;
  font-size: smaller;
  padding: 0.625rem;
  margin-top: 0.3rem;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid ${colors.secondary300};
`;
export const Button = styled.button<{ width?: string; disabled?: boolean }>`
  width: ${(props) => props.width ?? "inherit"};
  height: fit-content;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  background-color: ${(props) => props.disabled ? colors.secondary300 : colors.primary500};
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: ${(props) => props.disabled ? '' : 'pointer'};

  &:hover {
    opacity: 0.9;
  }
`;
export const Title = styled.h2`
  margin-bottom: 2rem;
  font-family: "Lato", sans-serif;
`;
export const Label = styled.label`
  font-weight: 600;
  font-size: smaller;
`;
export const LabelForCheckbox = styled(Label)`
  font-weight: 500;
`;
export const ErrorMessage = styled(error)`
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  color: ${colors.primary500};
  font-size: small;
`;
