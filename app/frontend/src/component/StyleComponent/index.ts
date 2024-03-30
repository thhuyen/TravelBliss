import styled, { createGlobalStyle } from "styled-components";
import { color } from "../../constant/styles";
import { Link } from "react-router-dom";

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

type StyleProps = {
  alignContent?:
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";
  $alignItems?:
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "start"
  | "end"
  | "baseline"
  | "initial"
  | "inherit";
  backgroundColor?: string;
  border?: string;
  $borderRadius?: string;
  boxShadow?: string;
  color?: string;
  cursor?: string;
  display?:
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "block"
  | "inline-block"
  | "none";
  flexDirection?: "row" | "column";
  flexWrap?: "no-wrap" | "wrap";
  float?: "left" | "right" | "none" | "inherit";
  $fontSize?: string;
  $fontWeight?: string;
  gridGap?: string;
  height?: string;
  $justifyContent?:
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "initial";
  $lineHeight?: string;
  $marginBottom?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $marginTop?: string;
  $paddingBottom?: string;
  $paddingLeft?: string;
  $paddingRight?: string;
  $paddingTop?: string;
  position?: "static" | "relative" | "fixed" | "absolute" | "sticky";
  sm?: string;
  xs?: string;
  md?: string;
  lg?: string;
  xl?: string;
  $textAlign?: "center" | "left" | "right";
  textTransform?: "capitalize" | "uppercase" | "lowercase";
  width?: string;
};

const commonStyle = (style: StyleProps) => {
  const {
    alignContent,
    $alignItems,
    backgroundColor,
    border,
    $borderRadius,
    boxShadow,
    color,
    cursor,
    display,
    flexDirection,
    flexWrap,
    float,
    $fontSize,
    $fontWeight,
    gridGap,
    height,
    $justifyContent,
    $lineHeight,
    $marginLeft,
    $marginBottom,
    $marginRight,
    $marginTop,
    $paddingBottom,
    $paddingLeft,
    $paddingRight,
    $paddingTop,
    position,
    $textAlign,
    textTransform,
    width,
  } = style;

  return `
    align-content: ${alignContent ?? "initial"};
    align-items: ${$alignItems ?? "initial"};
    background-color: ${backgroundColor};
    border: ${border};
    border-radius: ${$borderRadius};
    box-shadow: ${boxShadow ?? "none"};
    color: ${color};
    cursor: ${cursor ?? "auto"};
    display: ${display ?? "block"};
    flex-direction: ${flexDirection ?? "row"};
    flex-wrap: ${flexWrap ?? "initial"};
    float: ${float ?? "none"};
    font-size: ${$fontSize ?? "initial"};
    font-weight: ${$fontWeight ?? "500"};
    grid-gap: ${gridGap ?? 0};
    height: ${height};
    justify-content: ${$justifyContent ?? "initial"};
    line-height: ${$lineHeight ?? "initial"};
    margin-bottom: ${$marginBottom};
    margin-left: ${$marginLeft};
    margin-right: ${$marginRight};
    margin-top: ${$marginTop};
    padding-bottom: ${$paddingBottom};
    padding-left: ${$paddingLeft};
    padding-right: ${$paddingRight};
    padding-top: ${$paddingTop};
    position: ${position};
    text-align: ${$textAlign ?? "left"};
    text-transform: ${textTransform};
    width: ${width};
  `;
};

export const StyledBox = styled.div<StyleProps>`
  ${(props) => `
    ${commonStyle(props)}
  `}
`;

export const StyledTextSpan = styled.span<StyleProps>`
  ${(props) => `
    ${commonStyle(props)}
  `}
`;

export const StyledTextP = styled.p<StyleProps>`
  ${(props) => `
    ${commonStyle(props)}
  `}
`;

type $backgroundImageStyleProps = {
  $backgroundImage?: string | "none" | "inherit" | "initial";
  $backgroundPosition?: string;
  $backgroundSize?: string;
};
export const $backgroundImage = styled.div<$backgroundImageStyleProps>`
  ${(props) => {
    const { $backgroundImage, $backgroundPosition, $backgroundSize } = props;
    return `
      background-image: ${$backgroundImage ? `url("${$backgroundImage}")` : "none"
      };
      background-position: ${$backgroundPosition};
      background-size: ${$backgroundSize}
    `;
  }}
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

export const StyledLink = styled(Link) <{
  $fontSize?: string;
  color?: string;
  $textDecoration?: string;
}>`
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ color }) => color ?? "blue"};
  text-decoration: ${({ $textDecoration }) => $textDecoration ?? "underline"};
`;
