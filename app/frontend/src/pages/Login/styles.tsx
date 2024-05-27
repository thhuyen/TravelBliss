import styled from "styled-components";
import {
  CommonStyledBackgroundImages,
  CommonStyledBox,
} from "../../component/StyleComponent";

export const CustomBackgroundImage = styled(CommonStyledBackgroundImages)`
  width: 100%;
  position: fixed;
  top: -6rem;
  left: 0;
  bottom: 0;
  z-index: -10;
`;

export const LoginBox = styled(CommonStyledBox)`
  width: 25rem;
  height: fit-content;
  background-color: white;
  padding: 1rem;
  position: absolute;
  top: 40%;
  right: 10%;
  border-radius: 0.5rem;
`;
