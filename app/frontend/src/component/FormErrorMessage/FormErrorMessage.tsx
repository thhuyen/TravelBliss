import React from "react";
import { ErrorMessage } from "../StyleComponent/StyledForm";

type errorMessageProps = {
  inputName: string;
};
const FormErrorMessage: React.FC<errorMessageProps> = ({ inputName }) => {
  return <ErrorMessage component="div" name={inputName} />;
};

export default FormErrorMessage;
