import React, { ReactNode } from "react";
import { LeftSide, RightSide, StyledBox } from "../StyleComponent";

type AuthenProps = {
  background: string;
  children: ReactNode;
};

const AuthenLayout: React.FC<AuthenProps> = ({ background, children }) => {
  return (
    <StyledBox display="flex">
      <LeftSide background={background} />
      <RightSide>{children}</RightSide>
    </StyledBox>
  );
};

export default AuthenLayout;
