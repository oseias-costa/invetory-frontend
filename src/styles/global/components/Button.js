import styled from "styled-components";


export const Button = styled.button`
    background-color: #03A63C;
    color:  #1b1b1b;
    border: 0.1em solid #03A63C;
    font-size: 0.9em;
    font-weight: 200;
    cursor: pointer;
    padding: 0.2em 0.5em;
    border-radius: 0.2em;
    margin-right: 0.5em;
    transition: 0.2s ease-in;
    width: 6em;
    margin-top: 1em;

    &:hover{
        background-color: #04D939;
    }
`

export const CancelButton = styled(Button)`
    background-color: #40403F;
    color:  #A69D98;
    border: 0.1em solid #40403F;

    &:hover{
        background-color: #383836;
    }
`