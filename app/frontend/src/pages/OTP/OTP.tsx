import React from "react";
import { Title } from "../../component/StyleComponent/StyledForm";
import message from "../../constant/message";
import AuthenLayout from "../../component/AuthenLayout/AuthenLayout";
import OtpForm from "./OtpForm";
import NotificationMessage from "../../component/NotificationMessage/NotificationMessage";

const Otp = () => {
  return (
    <AuthenLayout background="/imgs/signup.jpg">
      <Title>Verification</Title>
      <NotificationMessage>{message.otpMessage}</NotificationMessage>
      <OtpForm />
    </AuthenLayout>
  );
};

export default Otp;
