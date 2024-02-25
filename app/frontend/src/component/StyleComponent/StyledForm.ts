import styled from 'styled-components';
import { color } from '../../constant/styles';

import { Field, ErrorMessage as error } from 'formik';

export const Input = styled(Field)`
    width: 100%;
    font-size: smaller;
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
    margin-bottom: 2rem;
    font-family: 'Lato', sans-serif;
`
export const Label = styled.label`
    font-weight: 600;
    font-size: smaller;
`
export const LabelForCheckbox = styled(Label)`
    font-weight: 500;
`
export const ErrorMessage = styled(error)`
    margin-top: 0.3rem;
    margin-left: 0.3rem;
    color: ${color.primary500};
    font-size: small;
`
