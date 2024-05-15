import React from "react";
import {
  CommonStyledFlex,
  StyledLink,
  StyledTextP,
  StyledTextSpan,
} from "../StyleComponent";
import { routes, colors } from "../../constant";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { StyledHeader, NavigationBar } from "./styles";

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
      <StyledLink to={authenticated ? "/home" : "/"} $textDecoration="none">
        <CommonStyledFlex id="logo" $alignItems="center">
          <img src="/imgs/logo.svg" alt="logo" width={30} height={30} />
          <StyledTextSpan
            $color={colors.primary500}
            $fontSize="1.5rem"
            $marginLeft="0.5rem"
            $fontWeight="600"
          >
            TravelBliss
          </StyledTextSpan>
        </CommonStyledFlex>
      </StyledLink>

      {authenticated && (
        <NavigationBar>
          {NavItemPaths.map((path, index) => (
            <StyledTextSpan key={index} $marginRight="1rem">
              <StyledLink
                to={path}
                $textDecoration="none"
                $color={colors.primary500}
              >
                {mapPathContent(path)}
              </StyledLink>
            </StyledTextSpan>
          ))}

          <StyledTextSpan
            $marginRight="1rem"
            $color={colors.primary500}
            $cursor="pointer"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </StyledTextSpan>

          {/* User Dialog */}
          <CommonStyledFlex
            $alignItems="center"
            $paddingLeft="1rem"
            $paddingRight="1rem"
            $paddingTop="0.5rem"
            $paddingBottom="0.5rem"
            $border={`0.125rem solid ${colors.primary500}`}
            $borderRadius="3.125rem"
            $cursor="pointer"
          >
            <StyledTextSpan
              $marginRight="0.5rem"
              $cursor="pointer"
              $color={colors.primary500}
            >
              Hello, Anh
            </StyledTextSpan>
            <img
              src="/imgs/avatarUser.svg"
              alt="avatar"
              width={30}
              height={30}
            />
          </CommonStyledFlex>
        </NavigationBar>
      )}

      {!authenticated && (
        <StyledTextP
          $color={colors.primary500}
          $cursor="pointer"
          $fontSize="1.2rem"
          $textAlign="center"
          $lineHeight="1.5"
        >
          <FontAwesomeIcon icon={faGlobe} />
          <StyledTextP $cursor="pointer">English</StyledTextP>
        </StyledTextP>
      )}
    </StyledHeader>
  );
};

export default Header;
