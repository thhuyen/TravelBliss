import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "../../component/StyleComponent";
import styled from "styled-components";
import { StyledBox, Button, Label } from "../../component/StyleComponent";

const StyledSignUpForm = styled(Form)`
  width: 70%;
  text-align: left;
  display: inline-block;
`;

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phoneNumber: "",
        accept: false,
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Please fill out your email"),
        password: Yup.string()
          .required("Please fill out your password")
          .min(8, "Password must be at least 8 characters")
          .max(20, "Password must be less than 20 characters")
          .matches(/[0-9]/, "Password requires a number")
          .matches(/[a-z]/, "Password requires a lowercase letter")
          .matches(/[A-Z]/, "Password requires an uppercase letter")
          .matches(/[^\w]/, "Password requires a symbol"),
        confirmPassword: Yup.string()
          .required("Please confirm password")
          .oneOf([Yup.ref("password"), ""], "Passwords doesn't match"),
        fullName: Yup.string()
          .min(5, "Full name must be at least 5 characters")
          .required("Please fill out your full name"),

        phoneNumber: Yup.string()
          .required("Please fill out your phone number")
          .min(10, "phone number must consist of 10 numbers")
          .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
          )
          .test(
            "Unique phoneNumber",
            "Phone number already used in another account", // <- key, message
            function (value) {
              //   const newUsers = users.filter((acc) => acc.Username === value);
              //   return newUsers.length < 1;
            }
          ),
        accept: Yup.bool().oneOf(
          [true],
          "The terms and conditions must be accepted."
        ),
      })}
      onSubmit={(values) => {
        console.log({ values });
      }}
    >
      <StyledSignUpForm>
        <StyledBox mb="1rem">
          <Label htmlFor="fullName">Full Name</Label> <br />
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Tran Huynh Van Anh"
          />
          <ErrorMessage name="fullName" />
        </StyledBox>

        <StyledBox mb="1rem">
          <Label>Phone number</Label> <br />
          <Input name="phoneNumber" type="text" placeholder="0792908142" />
          <ErrorMessage name="phoneNumber" />
        </StyledBox>

        <StyledBox mb="1rem">
          <Label>Email</Label> <br />
          <Input name="email" type="text" placeholder="khoa.nguyen@gmail.com" />
          <ErrorMessage name="email" />
        </StyledBox>

        <StyledBox mb="1rem">
          <Label>Password</Label> <br />
          <Input name="password" type="password" placeholder="********" />
          <ErrorMessage name="password" />
        </StyledBox>

        <StyledBox mb="1rem">
          <Label>Confirm password</Label> <br />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="********"
          />
          <ErrorMessage name="confirmPassword" />
        </StyledBox>

        <StyledBox mb="1rem">
          <input type="checkbox" />
          &nbsp;
          <label>
            I agree to the <a href="/">Terms and Conditions</a>
          </label>
        </StyledBox>
        <StyledBox mb="1rem">
          <Button>sign up</Button>
        </StyledBox>
        <StyledBox display="flex" justifyContent="center">
          Already have an account &nbsp;<a href="/signin">Sign in</a>
        </StyledBox>
      </StyledSignUpForm>
    </Formik>
  );
};

export default SignupForm;
