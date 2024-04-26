import React, { ReactNode } from "react";
import { LeftSide, RightSide, CommonStyledFlex } from "../StyleComponent";

type AuthenProps = {
  background: string;
  children: ReactNode;
};

const AuthenLayout: React.FC<AuthenProps> = ({ background, children }) => {
  return (
    <CommonStyledFlex>
      <LeftSide background={background} />
      <RightSide>{children}</RightSide>
    </CommonStyledFlex>
  );
};

export default AuthenLayout;
