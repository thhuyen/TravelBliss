import styled from "styled-components";
import { colors } from "../../constant";

export const StyledButton = styled.button`
  background-color: ${colors.primary500};
  padding: 1rem 2rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${colors.primary400};
  }
`;
