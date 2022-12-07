import styled from "styled-components";

export const StockMenu = styled.div`
    display: flex;
    padding: 1em 1em 1em 0em;
    background-color: #2F2F2F;
    z-index: 3;

    a {
        text-decoration: none;
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
        width: 7em;
        text-align: center;

        &:hover{
            background-color: #04D939;
        }
    }

    p {
        text-decoration: none;
        background-color: #40403F;
        color:  #A69D98;
        border: 0.1em solid #40403F;
        font-size: 0.9em;
        font-weight: 200;
        cursor: pointer;
        padding: 0.2em 0.5em;
        border-radius: 0.2em;
        margin-right: 0.5em;
        transition: 0.2s ease-in;
        width: 7em;
        text-align: center;

        &:hover{
            background-color: #383836;
        }
    }
    @media (max-width: 768px) {
        position: sticky;
        top: 0;
        padding: 1em;
    }

`