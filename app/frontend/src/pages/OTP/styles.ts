import styled from "styled-components";
import { Button } from "../../component/StyleComponent/StyledForm";

export const ReSendButton = styled(Button) <{ disabled: boolean }>`
  margin-top: 0.3rem;
  margin-left: 0.5rem;
  text-transform: capitalize;
  cursor: ${({ disabled }) => (disabled ? "no-drop" : "pointer")};
`;