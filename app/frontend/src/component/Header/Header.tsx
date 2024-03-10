import React from "react";
import { StyledBox, StyledTextSpan } from "../StyleComponent";
import { color } from "../../constant/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { route } from "../../constant/route";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 0 5px #ccc;
`;

const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${color.primary500};
  text-decoration: none;
`;

const Header = () => {
  const NavItemPaths = [route.home, "/guide", "/contact", "/about"];

  const mapPathContent = (path: string) => {
    switch (path) {
      case route.home:
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
      <StyledBox id="logo" display="flex" alignItems="center">
        <img src="/imgs/logo.svg" alt="logo" width={50} height={50} />
        <StyledTextSpan
          color={color.primary600}
          fontSize="1.5rem"
          marginLeft="0.5rem"
        >
          TravelBliss
        </StyledTextSpan>
      </StyledBox>

      <NavigationBar>
        {NavItemPaths.map((path) => (
          <StyledTextSpan marginRight="1rem">
            <StyledLink to={path}>{mapPathContent(path)}</StyledLink>
          </StyledTextSpan>
        ))}

        <StyledTextSpan
          marginRight="1rem"
          color={color.primary500}
          cursor="pointer"
        >
          <FontAwesomeIcon icon={faGlobe} />
        </StyledTextSpan>

        {/* User Dialog */}
        <StyledBox
          display="flex"
          alignItems="center"
          paddingLeft="1.25rem"
          paddingRight="1.25rem"
          paddingTop="0.625rem"
          paddingBottom="0.625rem"
          border={`0.125rem solid ${color.primary500}`}
          borderRadius="3.125rem"
          cursor="pointer"
        >
          <StyledTextSpan
            marginRight="0.5rem"
            cursor="pointer"
            color={color.primary500}
          >
            Hello, Anh
          </StyledTextSpan>
          <img src="/imgs/avatarUser.svg" alt="avatar" width={50} height={50} />
        </StyledBox>
      </NavigationBar>
    </StyledHeader>
  );
};

export default Header;
