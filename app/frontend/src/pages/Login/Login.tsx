import React, { useMemo } from "react";
import Header from "../../component/Header/Header";
import {
  CommonStyledBackgroundImages,
  CommonStyledBox,
  CommonStyledFlex,
  StyledLink,
  StyledTextP,
  StyledTextSpan,
} from "../../component/StyleComponent";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  Input,
  Label,
  Button,
  LabelForCheckbox,
} from "../../component/StyleComponent/StyledForm";
import { labels, routes, messages, texts } from "../../constant";
import { useNavigate } from "react-router-dom";
import FormErrorMessage from "../../component/FormErrorMessage/FormErrorMessage";
import { CustomBackgroundImage, LoginBox } from "./styles";
import Footer from "../../component/Footer";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const validations = useMemo(
    () => ({
      initialValues: {
        password: "",
        phoneNumber: "",
      },
      validationSchema: Yup.object({
        password: Yup.string().required(messages.requiredPassword),

        phoneNumber: Yup.string().required(messages.requiredPhoneNumber),
      }),
      onSubmit: (values: any) => {
        navigate(routes.home, { state: { values } });
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      <Header isAuthenticated={false} />

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
            {labels.SIGN_IN}
          </StyledTextP>
          <Formik {...validations}>
            <Form>
              <CommonStyledBox $marginBottom="1rem">
                <Label htmlFor="phoneNumber">{labels.PHONE_NUMBER}</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="123456789"
                ></Input>
                <FormErrorMessage inputName="phoneNumber" />
              </CommonStyledBox>

              <CommonStyledBox $marginBottom="1rem">
                <Label htmlFor="password">{labels.PASSWORD}</Label> <br />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                />
                <FormErrorMessage inputName="password" />
              </CommonStyledBox>

              <CommonStyledFlex
                $marginBottom="1rem"
                $alignItems="center"
                $justifyContent="space-between"
              >
                <CommonStyledBox>
                  <Field id="remember" type="checkbox" name="remember" />
                  &nbsp;
                  <LabelForCheckbox htmlFor="remember">
                    Remember me
                  </LabelForCheckbox>
                  <FormErrorMessage inputName="acceptance" />
                </CommonStyledBox>

                <CommonStyledBox>
                  <StyledLink to="/" $fontSize="smaller">
                    Forgot password?
                  </StyledLink>
                </CommonStyledBox>
              </CommonStyledFlex>

              <Button width="100%">{labels.SIGN_IN}</Button>

              <CommonStyledFlex
                $alignItems="center"
                $justifyContent="center"
                $marginTop="1rem"
              >
                <StyledTextSpan $fontSize="smaller" $marginRight="0.5rem">
                  {texts.NOT_MEMBER}
                </StyledTextSpan>
                <StyledLink to={routes.signUp} $fontSize="smaller">
                  {labels.SIGN_UP}
                </StyledLink>
              </CommonStyledFlex>
            </Form>
          </Formik>
        </LoginBox>
      </CustomBackgroundImage>

      <Footer />
    </>
  );
};

export default Login;
