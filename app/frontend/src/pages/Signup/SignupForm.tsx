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
import message from "../../constant/message";
import { useNavigate } from "react-router-dom";
import { label } from "../../constant/label";

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
              return true;
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
      <StyledAuthenForm>
        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="fullName">{label.FULL_NAME}</Label> <br />
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Tran Huynh Van Anh"
          />
          <FormErrorMessage inputName="fullName" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="phoneNumber">{label.PHONE_NUMBER}</Label> <br />
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="0792908142"
          />
          <FormErrorMessage inputName="phoneNumber" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="email">{label.EMAIL}</Label> <br />
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="khoa.nguyen@gmail.com"
          />
          <FormErrorMessage inputName="email" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="password">{label.PASSWORD}</Label> <br />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />
          <FormErrorMessage inputName="password" />
        </CommonStyledBox>

        <CommonStyledBox $marginBottom="1.3rem">
          <Label htmlFor="confirmPassword">{label.CONFIRM_PASSWORD}</Label>{" "}
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
