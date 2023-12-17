import React from "react";
import AuthenLayout from "../../component/AuthenLayout/AuthenLayout";
import SignupForm from "./SignupForm";
import styled from "styled-components";
import { color } from "../../constant/styles";
import { Title } from "../../component/StyleComponent";

const Brand = styled.span`
  color: ${color.primary500};
`;
const Signup: React.FC = () => {
  return (
    <>
      <AuthenLayout background="/imgs/signup.jpg">
        <Title>
          Welcome to <Brand>TravelBliss</Brand>
        </Title>

        <SignupForm />
      </AuthenLayout>
    </>
  );
};

export default Signup;
