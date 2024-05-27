import React from "react";
import AuthenLayout from "../../component/AuthenLayout/AuthenLayout";
import SignupForm from "./SignupForm";
import styled from "styled-components";
import { colors } from "../../constant";
import { Title } from "../../component/StyleComponent/StyledForm";

const Brand = styled.span`
  color: ${colors.primary500};
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
