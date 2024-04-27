import styled, { createGlobalStyle } from "styled-components";
import { color } from "../../constant/styles";
import { Link } from "react-router-dom";
import {
  BackGroundImagesProps,
  CommonStyleProps,
  FlexStyleProps,
} from "./types";

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

const commonStyle = (style: CommonStyleProps) => {
  const {
    $backgroundColor,
    $border,
    $borderRadius,
    $boxShadow,
    $color,
    $cursor,
    $float,
    $fontSize,
    $fontWeight,
    $fontStyle,
    $height,
    $lineHeight,
    $marginLeft,
    $marginBottom,
    $marginRight,
    $marginTop,
    $paddingBottom,
    $paddingLeft,
    $paddingRight,
    $paddingTop,
    $position,
    $textAlign,
    $textTransform,
    $width,
  } = style;

  return `
    background-color: ${$backgroundColor};
    border: ${$border};
    border-radius: ${$borderRadius};
    box-shadow: ${$boxShadow ?? "none"};
    color: ${$color};
    cursor: ${$cursor ?? "auto"};
    float: ${$float ?? "none"};
    font-size: ${$fontSize ?? "initial"};
    font-weight: ${$fontWeight ?? "500"};
    font-style: ${$fontStyle ?? "normal"};
    height: ${$height};
    line-height: ${$lineHeight ?? "initial"};
    margin-bottom: ${$marginBottom};
    margin-left: ${$marginLeft};
    margin-right: ${$marginRight};
    margin-top: ${$marginTop};
    padding-bottom: ${$paddingBottom};
    padding-left: ${$paddingLeft};
    padding-right: ${$paddingRight};
    padding-top: ${$paddingTop};
    position: ${$position};
    text-align: ${$textAlign ?? "left"};
    text-transform: ${$textTransform};
    width: ${$width};
  `;
};

export const CommonStyledBox = styled.div<CommonStyleProps>`
  ${(props) => `
    ${commonStyle(props)}
  `}
`;

export const StyledTextSpan = styled.span<CommonStyleProps>`
  ${(props) => `
    ${commonStyle(props)}
  `}
`;

export const StyledTextP = styled.p<CommonStyleProps>`
  ${(props) => `
    ${commonStyle(props)}
  `}
`;

export const CommonStyledBackgroundImages = styled.div<BackGroundImagesProps>`
  ${(props) => {
    const {
      $backgroundImage,
      $backgroundOrigin,
      $backgroundPosition,
      $backgroundPositionX,
      $backgroundPositionY,
      $backgroundRepeat,
      $backgroundSize,
    } = props;
    return `
      ${commonStyle(props)}
      background-image: ${$backgroundImage ? `url("${$backgroundImage}")` : "none"
      };
      background-position: ${$backgroundPosition};
      background-size: ${$backgroundSize};
      background-origin: ${$backgroundOrigin};
      background-position-x: ${$backgroundPositionX};
      background-position-y: ${$backgroundPositionY};
      background-repeat: ${$backgroundRepeat}
    `;
  }}
`;

export const CommonStyledFlex = styled.div<FlexStyleProps>`
  ${(props) => {
    const {
      $alignContent,
      $alignItems,
      $alignSelf,
      $flexDirection,
      $flexWrap,
      $flexGrow,
      $justifyContent,
      $justifySelf
    } = props;

    return `
      ${commonStyle(props)}
      display: flex;
      align-content: ${$alignContent ?? "stretch"};
      align-items: ${$alignItems ?? "normal"};
      align-self: ${$alignSelf ?? "auto"};
      flex-direction: ${$flexDirection ?? "row"};
      flex-wrap: ${$flexWrap ?? "initial"};
      flex-grow: ${$flexGrow ?? "initial"};
      justify-content: ${$justifyContent ?? "flex-start"};
      justify-self: ${$justifySelf ?? "auto"}
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

export const StyledLink = styled(Link) <CommonStyleProps>`
  ${(props) => {
    const { $color, $textDecoration, $cursor } = props

    return `
      ${commonStyle(props)}
      color: ${$color ?? "blue"};
      cursor: ${$cursor ?? "pointer"};
      text-decoration: ${$textDecoration ?? "underline"};
  ` }}
`;
