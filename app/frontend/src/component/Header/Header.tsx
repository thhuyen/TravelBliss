import React from "react";
import { StyledBox } from "../StyleComponent";

const Header = () => {
  return (
    <StyledBox display="flex" height="5rem" boxShadow="0 0 5px #ccc">
      <img src="/imgs/logo.svg" alt="logo" width={50} height={50} />
    </StyledBox>
  );
};

export default Header;
