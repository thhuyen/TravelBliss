import React from "react";
import { Title } from "../../component/StyleComponent/StyledForm";
import { messages } from "../../constant";
import AuthenLayout from "../../component/AuthenLayout/AuthenLayout";
import OtpForm from "./OtpForm";
import NotificationMessage from "../../component/NotificationMessage/NotificationMessage";

const Otp = () => {
  return (
    <AuthenLayout background="/imgs/signup.jpg">
      <Title>Verification</Title>
      <NotificationMessage>{messages.otpMessage}</NotificationMessage>
      <OtpForm />
    </AuthenLayout>
  );
};

export default Otp;
