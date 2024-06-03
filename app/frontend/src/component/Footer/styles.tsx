import styled from "styled-components";
import { colors } from "../../constant";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 4rem;
  color: ${colors.primary500};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: 0 0 10px #ccc;
  background-color: white;
`;
