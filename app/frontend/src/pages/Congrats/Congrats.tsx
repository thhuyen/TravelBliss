import React from "react";
import { Button, Title } from "../../component/StyleComponent/StyledForm";
import AuthenLayout from "../../component/AuthenLayout/AuthenLayout";
import NotificationMessage from "../../component/NotificationMessage/NotificationMessage";
import { texts, messages } from "../../constant";
import { useNavigate } from "react-router-dom";

const Congrats = () => {
  const navigate = useNavigate();
  return (
    <AuthenLayout background="/imgs/signup.jpg">
      <Title>Verification</Title>
      <NotificationMessage>{messages.congratsMessage}</NotificationMessage>
      <Button width="70%" onClick={() => navigate("/", { replace: true })}>
        {texts.TO_SIGN_IN_PAGE}
      </Button>
    </AuthenLayout>
  );
};

export default Congrats;
