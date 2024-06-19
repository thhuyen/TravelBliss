import React, { useEffect } from "react";
import { Title } from "../../component/StyleComponent/StyledForm";
import { messages } from "../../constant";
import AuthenLayout from "../../component/AuthenLayout/AuthenLayout";
import OtpForm from "./OtpForm";
import { useLocation, useNavigate } from "react-router-dom";

import NotificationMessage from "../../component/NotificationMessage/NotificationMessage";

const Otp = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!state) {
    return null; // Render nothing or a loading indicator while redirecting
  }

  return (
    <AuthenLayout background="/imgs/signup.jpg">
      <Title>Verification</Title>
      <NotificationMessage>{messages.otpMessage}</NotificationMessage>
      <OtpForm userInfo={state.values} />
    </AuthenLayout>
  );
};

export default Otp;
