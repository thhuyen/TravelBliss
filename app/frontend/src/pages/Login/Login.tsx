import React, { useMemo } from "react";
import * as Yup from "yup";
import Header from "../../component/Header/Header";
import {
  $backgroundImage,
  StyledBox,
  StyledLink,
  StyledTextP,
  StyledTextSpan,
} from "../../component/StyleComponent";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import {
  Input,
  Label,
  Button,
  LabelForCheckbox,
} from "../../component/StyleComponent/StyledForm";
import { label } from "../../constant/label";
import message from "../../constant/message";
import { routes } from "../../constant/route";
import { useNavigate } from "react-router-dom";
import FormErrorMessage from "../../component/FormErrorMessage/FormErrorMessage";

const CustomBackgroundImage = styled($backgroundImage)`
  width: 100%;
  position: fixed;
  top: -6rem;
  left: 0;
  bottom: 0;
  z-index: -10;
`;

const LoginBox = styled(StyledBox)`
  width: 25rem;
  height: fit-content;
  background-color: white;
  padding: 1rem;
  position: absolute;
  top: 40%;
  right: 10%;
  border-radius: 0.5rem;
`;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const validations = useMemo(
    () => ({
      initialValues: {
        password: "",
        phoneNumber: "",
      },
      validationSchema: Yup.object({
        password: Yup.string().required(message.requiredPassword),

        phoneNumber: Yup.string().required(message.requiredPhoneNumber),
      }),
      onSubmit: (values: any) => {
        navigate(routes.home, { state: { values } });
      },
    }),
    []
  );
  return (
    <>
      <Header authenticated={false} />
      <CustomBackgroundImage
        $backgroundImage="https://trithucxanh.vn/storage/post/7/0-anh144.jpg"
        $backgroundPosition="center"
        $backgroundSize="cover"
      >
        <LoginBox>
          <StyledTextP
            $fontSize="2rem"
            $textAlign="center"
            $marginBottom="1rem"
          >
            Sign in
          </StyledTextP>
          <Formik {...validations}>
            <Form>
              <StyledBox $marginBottom="1rem">
                <Label htmlFor="phoneNumber">{label.PHONE_NUMBER}</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="123456789"
                ></Input>
                <FormErrorMessage inputName="phoneNumber" />
              </StyledBox>

              <StyledBox $marginBottom="1rem">
                <Label htmlFor="password">{label.PASSWORD}</Label> <br />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                />
                <FormErrorMessage inputName="password" />
              </StyledBox>

              <StyledBox
                $marginBottom="1rem"
                display="flex"
                $alignItems="center"
                $justifyContent="space-between"
              >
                <StyledBox>
                  <Field id="remember" type="checkbox" name="remember" />
                  &nbsp;
                  <LabelForCheckbox htmlFor="remember">
                    Remember me
                  </LabelForCheckbox>
                  <FormErrorMessage inputName="acceptance" />
                </StyledBox>

                <StyledBox>
                  <StyledLink to="/" $fontSize="smaller">
                    Forgot password?
                  </StyledLink>
                </StyledBox>
              </StyledBox>

              <Button width="100%">sign up</Button>

              <StyledTextSpan
                display="flex"
                $alignItems="center"
                $justifyContent="center"
                $marginTop="1rem"
              >
                <StyledTextSpan $fontSize="smaller" $marginRight="0.5rem">
                  Not a member
                </StyledTextSpan>
                <StyledLink to={routes.signUp} $fontSize="smaller">
                  Sign up
                </StyledLink>
              </StyledTextSpan>
            </Form>
          </Formik>
        </LoginBox>
      </CustomBackgroundImage>
    </>
  );
};

export default Login;
