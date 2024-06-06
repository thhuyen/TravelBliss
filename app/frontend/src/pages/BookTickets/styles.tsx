import styled from "styled-components";
import { colors } from "../../constant";

export const Button = styled.button`
  height: fit-content;
  background-color: white;
  border: 1px solid ${colors.primary500};
  border-radius: 0.5rem;
  outline: none;
  padding: 0.7rem 1.3rem;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary500};
    color: white;
  }
`;
