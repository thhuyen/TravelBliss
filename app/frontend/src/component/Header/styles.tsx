import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 0 5px #ccc;
  background: white;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const NavigationBar = styled.nav`
  display: flex;
  align-items: center;
`;
