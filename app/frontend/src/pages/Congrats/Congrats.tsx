import React from "react";
import { Button, Title } from "../../component/StyleComponent/StyledForm";
import message from "../../constant/message";
import AuthenLayout from "../../component/AuthenLayout/AuthenLayout";
import NotificationMessage from "../../component/NotificationMessage/NotificationMessage";
import { label } from "../../constant/label";
import { useNavigate } from "react-router-dom";

const Congrats = () => {
  const navigate = useNavigate();
  return (
    <AuthenLayout background="/imgs/signup.jpg">
      <Title>Verification</Title>
      <NotificationMessage>{message.congratsMessage}</NotificationMessage>
      <Button width="70%" onClick={() => navigate("/", { replace: true })}>
        {label.TO_SIGN_IN_PAGE}
      </Button>
    </AuthenLayout>
  );
};

export default Congrats;
