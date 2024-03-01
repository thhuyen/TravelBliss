import styled, { createGlobalStyle } from "styled-components";
import { color } from "../../constant/styles";

export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,100&family=Poppins:wght@200;500;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LeftSide = styled.div<{ background: string }>`
  width: 40%;
  height: 100vh;
  background-image: url(${(props) => props.background});
  background-position: 30% 50%;
`;
export const RightSide = styled.div`
  width: 60%;
  height: 90vh;
  text-align: center;
  margin-top: 3rem;
  overflow-y: scroll;
`;

type BoxProps = {
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  display?:
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "block"
  | "inline-block"
  | "none";
  justifyContent?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "initial";
  gridGap?: string;
  sm?: string;
  xs?: string;
  md?: string;
  lg?: string;
  xl?: string;
  textAlign?: "center" | "left" | "right";
  flexWrap?: "no-wrap" | "wrap";
  color?: string;
  background?: string;
  border?: string;
  borderRadius?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  width?: string;
  height?: string;
  float?: "left" | "right" | "none" | "inherit";
  textTransform?: "capitalize" | "uppercase" | "lowercase",
  boxShadow?: string
};

const commonStyle = (style: BoxProps) => {
  const {
    marginRight,
    marginTop,
    marginBottom,
    marginLeft,
    display,
    justifyContent,
    gridGap,
    textAlign,
    flexWrap,
    color,
    background,
    borderRadius,
    border,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    width,
    height,
    float,
    textTransform,
    boxShadow
  } = style;

  return `
    width: ${width};
    height: ${height};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    padding-top: ${paddingTop};
    padding-bottom: ${paddingBottom};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    display: ${display ?? "block"};
    justify-content: ${justifyContent ?? "initial"};
    grid-gap: ${gridGap ?? 0};
    flex-wrap: ${flexWrap ?? "initial"};
    textAlign: ${textAlign ?? "left"};
    color: ${color};
    background-color: ${background};
    border-radius: ${borderRadius};
    border: ${border};
    float: ${float ?? "none"};
    text-transform: ${textTransform ?? "capitalize"};
    box-shadow: ${boxShadow ?? "none"}
  `;
};
export const StyledBox = styled.div<BoxProps>`
  ${(props) => `
    ${commonStyle(props)}
  `}
`;

export const GlobalMessage = styled.div`
  width: 70%;
  color: ${color.green600};
  text-align: left;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  background-color: ${color.green100};
  display: inline-block;
`;
