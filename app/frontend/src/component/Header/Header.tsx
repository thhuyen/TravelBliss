import React from "react";
import {
  StyledBox,
  StyledLink,
  StyledTextP,
  StyledTextSpan,
} from "../StyleComponent";
import { color } from "../../constant/styles";
import styled from "styled-components";
import { routes } from "../../constant/routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 0 5px #ccc;
  background: white;
  z-index: 10;
`;

const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
`;

type HeaderProps = {
  authenticated: boolean;
};

const Header: React.FC<HeaderProps> = ({ authenticated }) => {
  const NavItemPaths = [routes.home, "/guide", "/contact", "/about"];

  const mapPathContent = (path: string) => {
    switch (path) {
      case routes.home:
        return "Home";
      case "/guide":
        return "Guide";
      case "/contact":
        return "Contact";
      default:
        return "About";
    }
  };

  return (
    <StyledHeader>
      <StyledBox id="logo" display="flex" $alignItems="center">
        <img src="/imgs/logo.svg" alt="logo" width={30} height={30} />
        <StyledTextSpan
          color={color.primary500}
          $fontSize="1.5rem"
          $marginLeft="0.5rem"
          $fontWeight="600"
        >
          TravelBliss
        </StyledTextSpan>
      </StyledBox>

      {authenticated && (
        <NavigationBar>
          {NavItemPaths.map((path, index) => (
            <StyledTextSpan key={index} $marginRight="1rem">
              <StyledLink
                to={path}
                $textDecoration="none"
                color={color.primary500}
              >
                {mapPathContent(path)}
              </StyledLink>
            </StyledTextSpan>
          ))}

          <StyledTextSpan
            $marginRight="1rem"
            color={color.primary500}
            cursor="pointer"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </StyledTextSpan>

          {/* User Dialog */}
          <StyledBox
            display="flex"
            $alignItems="center"
            $paddingLeft="1rem"
            $paddingRight="1rem"
            $paddingTop="0.5rem"
            $paddingBottom="0.5rem"
            border={`0.125rem solid ${color.primary500}`}
            $borderRadius="3.125rem"
            cursor="pointer"
          >
            <StyledTextSpan
              $marginRight="0.5rem"
              cursor="pointer"
              color={color.primary500}
            >
              Hello, Anh
            </StyledTextSpan>
            <img
              src="/imgs/avatarUser.svg"
              alt="avatar"
              width={30}
              height={30}
            />
          </StyledBox>
        </NavigationBar>
      )}

      {!authenticated && (
        <StyledTextP
          color={color.primary500}
          cursor="pointer"
          $fontSize="1.2rem"
          $textAlign="center"
          $lineHeight="1.5"
        >
          <FontAwesomeIcon icon={faGlobe} />
          <StyledTextP cursor="pointer">English</StyledTextP>
        </StyledTextP>
      )}
    </StyledHeader>
  );
};

export default Header;
