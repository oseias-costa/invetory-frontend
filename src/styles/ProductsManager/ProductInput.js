import styled from "styled-components";

export const ProductInput = styled.input`
    background-color: #2F2F2F;
    border: 0.1em solid #025939;
    color: #ABABAB;
    border-radius: 0.2em;
    width: 14em;
    padding: 0.4em 2em 0.4em 0.8em;
    outline: none;
    margin-bottom: 1em;
`

export const ProductInputButton = styled.button`
    background-color: #2F2F2F;
    border-radius: 2em;
    
    svg{
        height: 18px;
        width: 18px;
        position: relative;
        top: 0.34em;
        right: 1.7em;
        fill: #ABABAB;
        cursor: pointer;
        transition: all 0.8s ease-in;

        & :hover{
            fill: #04D939;
        }
    }
    
`