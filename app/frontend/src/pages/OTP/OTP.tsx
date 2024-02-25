import React, { useMemo } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import FormErrorMessage from "../../component/FormErrorMessage/FormErrorMessage";
import { StyledAuthenForm, StyledBox } from "../../component/StyleComponent";
import {
  Label,
  Input,
  Button,
  LabelForCheckbox,
} from "../../component/StyleComponent/StyledForm";
import message from "../../constant/message";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();
  const validations = useMemo(
    () => ({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phoneNumber: "",
        acceptance: false,
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .required(message.requiredEmail)
          .email(message.invalidEmail),
        password: Yup.string()
          .required(message.requiredPassword)
          .min(8, message.minPassword)
          .max(20, message.maxPassword)
          .matches(/[0-9]/, message.noMatchPassword)
          .matches(/[a-z]/, message.lowerCaseLetterPassword)
          .matches(/[A-Z]/, message.upperCaseLetterPassword)
          .matches(/[^\w]/, message.symbolPassword),
        confirmPassword: Yup.string()
          .required(message.confirmPassword)
          .oneOf([Yup.ref("password"), ""], message.noMatchPassword),
        fullName: Yup.string()
          .required(message.requiredFullName)
          .min(5, message.minFullName),
        phoneNumber: Yup.string()
          .required(message.requiredPhoneNumber)
          .min(10, message.minPassword)
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            message.notValidPhoneNumber
          )
          .test(
            "Unique phoneNumber",
            message.existedPhoneNumber, // <- key, message
            function (value) {
              //   const newUsers = users.filter((acc) => acc.Username === value);
              //   return newUsers.length < 1;
            }
          ),
        acceptance: Yup.bool().oneOf([true], message.acceptance),
      }),
      onSubmit: (values: any) => {
        navigate("/otp", { state: { values } });
      },
    }),
    []
  );
  return (
    <Formik {...validations}>
      <StyledAuthenForm></StyledAuthenForm>
    </Formik>
  );
};

export default OTP;
