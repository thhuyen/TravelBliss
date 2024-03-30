import get from "lodash/get";
import React, { useEffect, useMemo, useState } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import {
  Label,
  Input,
  StyledAuthenForm,
  Button,
} from "../../component/StyleComponent/StyledForm";
import message from "../../constant/message";
import { label } from "../../constant/label";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormErrorMessage from "../../component/FormErrorMessage/FormErrorMessage";
import { StyledBox } from "../../component/StyleComponent";
import { color } from "../../constant/styles";
import { useCreateUser } from "../../hooks/useCreateUser";

type FormValues = {
  otp: string;
};

const ReSendButton = styled(Button)`
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  text-transform: capitalize;
`;

const OtpForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { createUser } = useCreateUser();
  const [counter, setCounter] = useState<number>(10);
  const [validOtpCounter, setValidOtpCounter] = useState<number>(90);

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter((counter) => counter - 1);
      }
      if (validOtpCounter > 0) {
        setValidOtpCounter((counter) => counter - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, setCounter, validOtpCounter, setValidOtpCounter]);

  const validations = useMemo(
    () => ({
      initialValues: {
        otp: "",
      },
      validationSchema: Yup.object({
        otp: Yup.string().required(message.requiredOtp),
      }),
      onSubmit: async (
        values: FormikValues,
        { setSubmitting, setErrors }: FormikHelpers<FormValues>
      ) => {
        const { otp } = values as FormValues;
        if (otp !== "123456") {
          setErrors({ otp: message.invalidOtp });
          setSubmitting(false);
          return;
        }

        const { values: userInfo } = state;
        const result = await createUser(userInfo);

        if (get(result, "data")) {
          navigate("/congrats", { replace: true });
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleClick = () => {
    setCounter(10);
    setValidOtpCounter(90);
  };

  return (
    <Formik {...validations}>
      <StyledAuthenForm method="post">
        <Label htmlFor="otp">{label.VERIFICATION_CODE}</Label> <br />
        <StyledBox display="flex">
          <Input id="otp" name="otp" type="text" placeholder="123456" />
          <ReSendButton
            type="button"
            width="30%"
            disabled={counter !== 0}
            onClick={handleClick}
          >
            {label.RE_SEND_BTN + " (" + counter + "s)"}
          </ReSendButton>
        </StyledBox>
        <FormErrorMessage inputName="otp" />
        <StyledBox $marginTop="0.5rem" $marginLeft="0.5rem">
          <StyledBox color={color.primary500}>
            OTP valid {"(" + validOtpCounter + "s)"}
          </StyledBox>
        </StyledBox>
        <StyledBox $marginTop="1.5rem">
          <Button width="100%" type="submit">
            submit
          </Button>
        </StyledBox>
      </StyledAuthenForm>
    </Formik>
  );
};

export default OtpForm;
