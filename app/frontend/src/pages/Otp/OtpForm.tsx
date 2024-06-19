import get from "lodash/get";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import {
  Label,
  Input,
  StyledAuthenForm,
  Button,
} from "../../component/StyleComponent/StyledForm";
import { useNavigate } from "react-router-dom";
import FormErrorMessage from "../../component/FormErrorMessage/FormErrorMessage";
import {
  CommonStyledFlex,
  CommonStyledBox,
} from "../../component/StyleComponent";
import { colors, messages, labels, figures } from "../../constant";
import { useCreateUser } from "../../hooks/useCreateUser";
import { ReSendButton } from "./styles";
import { UserInfo } from "../Signup/types";
import useSessionStorage from "../../hooks/useSessionStorage";

type FormValues = {
  otpInput: string;
};

type OtpFormProps = {
  userInfo: UserInfo;
};

const OtpForm = ({ userInfo }: OtpFormProps) => {
  const { createUser } = useCreateUser();
  const { setSessionStorageWithExpiry, getSessionStorageWithExpiry } =
    useSessionStorage();
  const [counter, setCounter] = useState<number>(figures.resendTime);
  const [expiredOtpCounter, setExpiredOtpCounter] = useState<number>(
    figures.expiredOtp
  );

  const otpValueRef = useRef<string>(
    Math.floor(100000 + Math.random() * (figures.expiredOtp * 10000)).toString()
  );

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 0) {
        setCounter((counter) => counter - 1);
      }

      if (expiredOtpCounter > 0) {
        setExpiredOtpCounter((counter) => counter - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter, expiredOtpCounter]);

  useEffect(() => {
    const templateParams = {
      name: userInfo?.fullName,
      message: "The OTP to verify you is " + otpValueRef.current,
      email: userInfo?.email,
    };

    emailjs.init({
      publicKey: "vSaB3z3rdQWSPNQ8P",
    });

    emailjs.send("service_r969bxl", "template_yjj5wgf", templateParams).then(
      (response) => {
        setSessionStorageWithExpiry("expiredOtp", "false", figures.expiredOtp);
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpValueRef.current]);

  const validations = useMemo(
    () => ({
      initialValues: {
        otpInput: "",
      },
      validationSchema: Yup.object({
        otpInput: Yup.string()
          .required(messages.requiredOtp)
          .max(6, messages.invalidFormat)
          .min(6, messages.invalidFormat),
      }),
      onSubmit: async (
        values: FormikValues,
        { setSubmitting, setErrors }: FormikHelpers<FormValues>
      ) => {
        const { otpInput } = values as FormValues;
        const isValid = getSessionStorageWithExpiry("expiredOtp");
        if (otpInput !== otpValueRef.current || !isValid) {
          setErrors({ otpInput: messages.invalidOtp });
          setSubmitting(false);
          return;
        }

        const result = await createUser(userInfo);

        if (get(result, "data")) {
          navigate("/congrats", { replace: true });
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleResend = () => {
    setCounter(figures.resendTime);
    setExpiredOtpCounter(figures.expiredOtp);
    setSessionStorageWithExpiry("expiredOtp", "false", 90);
    otpValueRef.current = Math.floor(
      100000 + Math.random() * (figures.expiredOtp * 10000)
    ).toString();
  };

  return (
    <Formik {...validations}>
      <StyledAuthenForm method="post">
        <Label htmlFor="otpInput">{labels.VERIFICATION_CODE}</Label> <br />
        <CommonStyledFlex>
          <Input
            id="otpInput"
            name="otpInput"
            type="text"
            placeholder="123456"
          />
          <ReSendButton
            type="button"
            width="30%"
            disabled={counter !== 0}
            onClick={handleResend}
          >
            {labels.RE_SEND_BTN + " (" + counter + "s)"}
          </ReSendButton>
        </CommonStyledFlex>
        <FormErrorMessage inputName="otpInput" />
        <CommonStyledBox $marginTop="0.5rem" $marginLeft="0.5rem">
          <CommonStyledBox $color={colors.primary500}>
            OTP valid {"(" + expiredOtpCounter + "s)"}
          </CommonStyledBox>
        </CommonStyledBox>
        <CommonStyledBox $marginTop="1.5rem">
          <Button width="100%" type="submit">
            submit
          </Button>
        </CommonStyledBox>
      </StyledAuthenForm>
    </Formik>
  );
};

export default OtpForm;
