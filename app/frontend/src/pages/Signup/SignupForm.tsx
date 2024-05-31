import React, { useMemo } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";

import FormErrorMessage from "../../component/FormErrorMessage/FormErrorMessage";
import {
  CommonStyledBox,
  CommonStyledFlex,
} from "../../component/StyleComponent";
import {
  Label,
  Input,
  Button,
  LabelForCheckbox,
  StyledAuthenForm,
} from "../../component/StyleComponent/StyledForm";
import { useNavigate } from "react-router-dom";
import { labels, messages } from "../../constant";

const SignupForm = () => {
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
          .required(messages.requiredEmail)
          .email(messages.invalidEmail),
        password: Yup.string()
          .required(messages.requiredPassword)
          .min(8, messages.minPassword)
          .max(20, messages.maxPassword)
          .matches(/[0-9]/, messages.noMatchPassword)
          .matches(/[a-z]/, messages.lowerCaseLetterPassword)
          .matches(/[A-Z]/, messages.upperCaseLetterPassword)
          .matches(/[^\w]/, messages.symbolPassword),
        confirmPassword: Yup.string()
          .required(messages.confirmPassword)
          .oneOf([Yup.ref("password"), ""], messages.noMatchPassword),
        fullName: Yup.string()
          .required(messages.requiredFullName)
          .min(5, messages.minFullName),
        phoneNumber: Yup.string()
          .required(messages.requiredPhoneNumber)
          .min(10, messages.minPassword)
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            messages.notValidPhoneNumber
          )
          .test(
            "Unique phoneNumber",
            messages.existedPhoneNumber, // <- key, message
            function (value) {
              //   const newUsers = users.filter((acc) => acc.Username === value);
              return true;
            }
          ),
        acceptance: Yup.bool().oneOf([true], messages.acceptance),
      }),
      onSubmit: (values: any) => {
        navigate("/otp", { state: { values } });
      },
    }),
    []
  );
  return (
    <Formik {...validations}>
      <StyledAuthenForm>
        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="fullName">{labels.FULL_NAME}</Label> <br />
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Tran Huynh Van Anh"
          />
          <FormErrorMessage inputName="fullName" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="phoneNumber">{labels.PHONE_NUMBER}</Label> <br />
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="0792908142"
          />
          <FormErrorMessage inputName="phoneNumber" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="email">{labels.EMAIL}</Label> <br />
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="khoa.nguyen@gmail.com"
          />
          <FormErrorMessage inputName="email" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="password">{labels.PASSWORD}</Label> <br />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />
          <FormErrorMessage inputName="password" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="confirmPassword">{labels.CONFIRM_PASSWORD}</Label>{" "}
          <br />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="********"
          />
          <FormErrorMessage inputName="confirmPassword" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Field id="acceptance" type="checkbox" name="acceptance" />
          &nbsp;
          <LabelForCheckbox htmlFor="acceptance">
            I agree to the <a href="/">Terms and Conditions</a>
          </LabelForCheckbox>
          <FormErrorMessage inputName="acceptance" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Button width="100%">sign up</Button>
        </CommonStyledBox>

        <CommonStyledFlex $justifyContent="center">
          Already have an account? &nbsp;<a href="/signin">Sign in</a>
        </CommonStyledFlex>
      </StyledAuthenForm>
    </Formik>
  );
};

export default SignupForm;
