import { Tooltip } from '../Tooltip';
import styled, { css } from 'styled-components'

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean
}

export const Container= styled.div <ContainerProps> `

        background: #232323;
        border-radius: 10px;
       
        padding:16px;
        width: 100%;

        border: 2px solid #233129;
        color: #666360;

        display: flex;
        align-items: center;

        & + div {
            margin-top: 8px;
        }

  /* dessa forma ele só verifica se o props.isFocused é true, se for, executa o css
  Se  props.isFocused for true ele executa o css
  */        
  

  ${props => props.isErrored && css`
    border: 2px solid #c53030;
    `}

  ${props => props.isFocused && css`
        border: 2px solid #ff9000;
        color: #ff9000;
    `}

    ${props => props.isFilled && css`
        color: #ff9000;
    `}

input {
    flex: 1;
     background: transparent;
     border:0;
     color: #f4ede8;

        &::placeholder{
            color: #666360;
        }

     
    }
    svg {
        margin-right: 16px;
    }
 
  
`;

export const Error = styled(Tooltip) `
height: 20px;
margin-left: 16px;
svg {
margin: 0;
}

span {
    background-color: #c53030;
    color: #ffff;

    &::before {
        border-color: #c53030 transparent;
    }
}


`