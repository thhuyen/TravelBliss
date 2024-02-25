import styled, { createGlobalStyle } from 'styled-components';
import { Form } from 'formik';


export const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,100&family=Poppins:wght@200;500;600;700&display=swap');
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
export const FixedPosition = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row; 
`
export const LeftSide = styled.div<{ background: string }>`
  width: 40%;
  height: 100vh;
  background-image: url(${props => props.background});
  background-position: 30% 50%;
`
export const RightSide = styled.div`
  width: 60%;
  height: 90vh;
  text-align: center;
  margin-top: 3rem;
  overflow: scroll;
`
export const StyledAuthenForm = styled(Form)`
  width: 70%;
  text-align: left;
  display: inline-block;
`;

type BoxProps = {
  mr?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  display?: 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'block' | 'inline-block' | 'none';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-evenly' | 'space-around' | 'initial';
  gridGap?: string;
  sm?: string;
  xs?: string;
  md?: string;
  lg?: string;
  xl?: string;
  textAlign?: 'center' | 'left' | 'right';
  flexWrap?: 'no-wrap' | 'wrap';

}

const commonStyle = (style: BoxProps) => {
  const {
    mr,
    mt,
    mb,
    ml,
    display,
    justifyContent,
    gridGap,
    textAlign,
    flexWrap,
  } = style

  return `
    margin-left: ${ml};
    margin-right: ${mr};
    margin-top: ${mt};
    margin-bottom: ${mb};
    display: ${display ?? 'block'};
    justify-content: ${justifyContent ?? 'initial'};
    grid-gap: ${gridGap ?? 0};
    flex-wrap: ${flexWrap ?? 'initial'};
    textAlign: ${textAlign ?? 'left'}
  `
}
export const StyledBox = styled.div<BoxProps>`
  ${props => `
    ${commonStyle(props)}
  `}
`