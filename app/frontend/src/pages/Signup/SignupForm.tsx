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
      <StyledAuthenForm>
        <StyledBox mb="1.3rem">
          <Label htmlFor="fullName">Full Name</Label> <br />
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Tran Huynh Van Anh"
          />
          <FormErrorMessage inputName="fullName" />
        </StyledBox>

        <StyledBox mb="1.3rem">
          <Label htmlFor="phoneNumber">Phone number</Label> <br />
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="0792908142"
          />
          <FormErrorMessage inputName="phoneNumber" />
        </StyledBox>

        <StyledBox mb="1.3rem">
          <Label htmlFor="email">Email</Label> <br />
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="khoa.nguyen@gmail.com"
          />
          <FormErrorMessage inputName="email" />
        </StyledBox>

        <StyledBox mb="1.3rem">
          <Label htmlFor="password">Password</Label> <br />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="********"
          />
          <FormErrorMessage inputName="password" />
        </StyledBox>

        <StyledBox mb="1.3rem">
          <Label htmlFor="confirmPassword">Confirm password</Label> <br />
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="********"
          />
          <FormErrorMessage inputName="confirmPassword" />
        </StyledBox>

        <StyledBox mb="1.3rem">
          <Field id="acceptance" type="checkbox" name="acceptance" />
          &nbsp;
          <LabelForCheckbox htmlFor="acceptance">
            I agree to the <a href="/">Terms and Conditions</a>
          </LabelForCheckbox>
          <FormErrorMessage inputName="acceptance" />
        </StyledBox>
        <StyledBox mb="1.3rem">
          <Button>sign up</Button>
        </StyledBox>
        <StyledBox display="flex" justifyContent="center">
          Already have an account? &nbsp;<a href="/signin">Sign in</a>
        </StyledBox>
      </StyledAuthenForm>
    </Formik>
  );
};

export default SignupForm;
