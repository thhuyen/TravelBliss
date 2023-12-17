import styled, { createGlobalStyle } from 'styled-components';
import { color } from '../../constant/styles';
import { Field } from 'formik'

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
export const FlexContainer = styled(FixedPosition)`
  display: flex;
  flex-direction: row;
   
`
export const LeftSide = styled.div<{ background: string }>`
  background-image: url(${props => props.background});
  background-position: 30% 50%;
  width: 40%;
`
export const RightSide = styled.div`
  width: 60%;
  text-align: center;
  padding-top: 5rem;
`
export const Input = styled(Field)`
  width: 100%;
  padding: 0.625rem;
  margin-top: 0.3rem;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid ${color.secondary300};
`
export const Button = styled.button<{ width?: string }>`
  width: ${props => props.width ?? '100%'};
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  background-color: ${color.primary500};
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
`

export const Title = styled.h2`
  font-family: 'Lato', sans-serif;
`

export const Label = styled.label`
  font-weight: 600;
`

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