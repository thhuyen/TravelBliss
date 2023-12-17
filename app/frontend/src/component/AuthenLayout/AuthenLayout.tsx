import React, { ReactNode } from "react";
import { LeftSide, RightSide, FlexContainer } from "../StyleComponent";

type AuthenProps = {
  background: string;
  children: ReactNode;
};

const AuthenLayout: React.FC<AuthenProps> = ({ background, children }) => {
  return (
    <FlexContainer>
      <LeftSide background={background} />
      <RightSide>{children}</RightSide>
    </FlexContainer>
  );
};

export default AuthenLayout;
